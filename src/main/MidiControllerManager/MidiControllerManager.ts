import * as fs from "fs";

import { Logger } from "../lib/log/Logger";

import { Midi } from "../lib/midi/Midi";
import { MidiPortInput, MidiPortOutput } from "../lib/midi/MidiPort";
import { MidiController } from "./MidiController/MidiController";
import { MidiControllerProfile } from "./MidiControllers/MidiControllerProfile";

import { MidiControllerManagerConfig } from "./MidiControllerManagerConfig";

import builtInControllers from "./MidiControllers";

import { ipcMain, IpcMainEvent, WebContents } from "electron";
import { IpcMidiControllerManagerCommands, IpcMidiControllerManagerController, IpcMidiControllerManagerPorts } from "./MidiControllerManagerIpc";
import { AppContext } from "../AppContext";


const ipcChannel = "MidiControllerManager";


export class MidiControllerManager {

   private _config: MidiControllerManagerConfig;

   private _appContext: AppContext;

   private _controllers: MidiController[] = [];

   private _stop = false;

   private _midi: Midi;

   private _eventListeners: { [event: string]: ((...args: any[]) => any)[] } = {};


   constructor(config: MidiControllerManagerConfig, appContext: AppContext) {

      this._config = config;
      this._config.data.midiControllerManager = this._config.data.midiControllerManager || {};
      this._config.data.midiControllerManager.profiles = this._config.data.midiControllerManager.profiles || [];
      this._config.data.midiControllerManager.controllers = this._config.data.midiControllerManager.controllers || [];

      this._appContext = appContext;

      this._midi = new Midi();

   }


   public init() {

      this._createConfiguredControllers();

      ipcMain.on(ipcChannel, (event, ...args: any[]) => this._processIpcMessage(event, ...args));
      this._midi.addEventListener("portschanged", this._onPortsChanged);

   }


   public run() {

      this._loop();

   }


   public stop(): void {

      this._stop = true;

   }


   public getMidiInputs(): MidiPortInput[] {

      return this._midi.inputs;
   }


   public getMidiOutputs(): MidiPortOutput[] {

      return this._midi.outputs;

   }


   /**
    * Gets names of all available built-in & configured controller profiles
    * @returns List of profile names
    */
   public getProfileNames(): string[] {

      const builtIn = builtInControllers.map(p => p.name);
      const configured = this._config.data.midiControllerManager.profiles.map(p => p.name);

      return [...new Set([...builtIn, ...configured])];

   }


   /**
    * Gets names of profiles stored in the configuration file
    */
   public getConfiguredProfileNames(): string[] {

      const configured = this._config.data.midiControllerManager.profiles.map(c => c.name);
      return configured;

   }


   /**
    * Returns profile (built-in or configured)
    */
   public getProfile(name: string): MidiControllerProfile | string {

      let profile = builtInControllers.find(p => p.name === name);
      if (profile) return profile;

      const cfgProfile = this._config.data.midiControllerManager.profiles.find(p => p.name === name);
      if (cfgProfile) return cfgProfile.profile;

      return `Profile ${name} not found`;

   }


   /**
    * Adds or updates existing profile. Built-in profiles cannot be updated.
    * @param profile Profile to add or update
    */
   public setProfile(name: string, profile: MidiControllerProfile): string | void {

      const builtInProfile = builtInControllers.find(p => p.name === name);
      if (builtInProfile) return "Built-in profiles cannot be updated";

      const cfgProfileIndex = this._config.data.midiControllerManager.profiles.findIndex(p => p.name === name);

      if (cfgProfileIndex) {
         this._config.data.midiControllerManager.profiles[cfgProfileIndex].profile = profile;
         this._config.update();

         this._eventListeners["profilechanged"]?.forEach(l => l(name));
         this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.profileUpdated, name);

         return;
      }

      this._config.data.midiControllerManager.profiles.push({
         name,
         profile
      });

      this._eventListeners["profileadded"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.profileAdded, name);

   }


   /**
    * Adds or updates a profile to the configuration
    */
   public setProfileFromFile(name: string, fileName: string): string | void {

      const profile = this._loadProfile(fileName);
      if (typeof profile === "string") return profile;

      const cfgProfileIndex = this._config.data.midiControllerManager.profiles.findIndex(p => p.name === name);

      if (cfgProfileIndex) {
         this._config.data.midiControllerManager.profiles[cfgProfileIndex].profile = profile;
         this._config.update();

         this._eventListeners["profilechanged"]?.forEach(l => l(name));
         this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.profileUpdated, name);

         return;
      }

      this._config.data.midiControllerManager.profiles.push({
         name,
         profile
      });

      this._config.update();

      this._eventListeners["profileadded"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.profileAdded, name);

   }


   /**
    * Removes a profile from the configuration
    */
   public removeProfile(name: string): string | void {

      const profileIndex = this._config.data.midiControllerManager.profiles.findIndex(p => p.name === name);
      if (profileIndex === -1) return "Profile not found in configuration";

      this._config.data.midiControllerManager.profiles.splice(profileIndex, 1);
      this._config.update();

      this._eventListeners["profileremoved"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.profileAdded, name);


   }


   /**
    * Creates a controller from the controller profile and assigns midi ports to it
    * @param name Name of the controller
    * @param profileName Name of the controller profile to be used
    * @param inputPort Input port to use for the controller
    * @param outputPort Output port to use for the controller
    * @returns
    */
   public addController(name: string, profileName: string, midiIn: MidiPortInput, midiOut?: MidiPortOutput): number | string {

      if (this._controllers.find(c => c.name === name)) return "Controller with this name already exists";

      let profile = builtInControllers.find(p => p.name === profileName);
      if (!profile) this._loadProfile(profileName);

      if (!profile) {
         Logger.error(`Profile '${name}' not found`);
         return `Profile '${name}' not found`;
      }

      const controller = new MidiController(name, profile.name, profile.controls, midiIn, midiOut);
      controller.init();

      this._controllers.push(controller);

      this._eventListeners["controlleradded"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.controllerAdded, name);


      this._config.data.midiControllerManager.controllers.push({
         name,
         inputPort: `${midiIn.name} (${midiIn.id})`,
         outputPort: midiOut ? `${midiOut?.name || ""} (${midiOut?.id || ""})`.trim() : "",
         profile: profileName
      });
      this._config.update();

      return this._controllers.length - 1;

   }


   /**
    * Updates the midi controller
    * @param name Name of the controller to be updated
    * @param profileName Name of the controller profile to be used
    * @param midiIn Input port to use for the controller
    * @param midiOut Output port to use for the controller
    */
   public updateController(prevName: string, name: string, profileName: string, midiIn: MidiPortInput, midiOut?: MidiPortOutput): string | void {

      const controllerIndex = this._controllers.findIndex(c => c.name === prevName);
      if (controllerIndex === -1) return `Controller ${prevName} not found`;

      if (this._controllers.find((c, i) => c.name === name && i !== controllerIndex)) return `Another controller with name ${name} already exists`;

      const profile = builtInControllers.find(p => p.name === profileName);
      if (!profile) return `Profile '${profileName}' not found`;

      this._controllers[controllerIndex].cleanup();

      const controller = new MidiController(name, profile.name, profile.controls, midiIn, midiOut);
      controller.init();

      this._controllers[controllerIndex] = controller;

      this._eventListeners["controllerupdated"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.controllerUpdated, name);


      const configIndex = this._config.data.midiControllerManager.controllers.findIndex(c => c.name === prevName);

      if (configIndex === -1) {

         this._config.data.midiControllerManager.controllers.push({
            name,
            inputPort: `${midiIn.name} (${midiIn.id})`,
            outputPort: midiOut ? `${midiOut?.name || ""} (${midiOut?.id || ""})`.trim() : "",
            profile: profileName
         });

      } else {

         this._config.data.midiControllerManager.controllers[configIndex] = {
            name,
            inputPort: `${midiIn.name} (${midiIn.id})`,
            outputPort: midiOut ? `${midiOut?.name || ""} (${midiOut?.id || ""})`.trim() : "",
            profile: profileName
         };

      }

      this._config.update();

   }


   /**
    * Removes a controller
    * @param index Index of the controller to remove
    **/
   public removeController(name: string): string | void {

      const controllerIndex = this._controllers.findIndex(c => c.name === name);
      if (controllerIndex === -1) return `Controller '${name}' not found`;

      this._controllers[controllerIndex].cleanup();
      this._controllers.splice(controllerIndex, 1);

      this._eventListeners["controllerremoved"]?.forEach(l => l(name));
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.controllerRemoved, name);


      const configIndex = this._config.data.midiControllerManager.controllers.findIndex(c => c.name === name);
      if (configIndex === -1) return;

      this._config.data.midiControllerManager.controllers.splice(configIndex, 1);
      this._config.update();

   }


   public addEventListener(event: "portschanged", listener: () => void): void;
   public addEventListener(event: "profileadded", listener: (name: string) => void): void;
   public addEventListener(event: "profileremoved", listener: (name: string) => void): void;
   public addEventListener(event: "profileupdated", listener: (name: string) => void): void;
   public addEventListener(event: "controlleradded", listener: (name: string) => void): void;
   public addEventListener(event: "controllerremoved", listener: (name: string) => void): void;
   public addEventListener(event: "controllerupdated", listener: (name: string) => void): void;
   public addEventListener(event: string, listener: (...args: any[]) => void): void {

      const h = this._eventListeners[event]?.find(h => h === listener);
      if (h) return;

      if (!this._eventListeners[event]) this._eventListeners[event] = [];
      this._eventListeners[event].push(listener);

   }


   public removeEventListener(event: "portschanged", listener: () => void): void;
   public removeEventListener(event: "profileadded", listener: (name: string) => void): void;
   public removeEventListener(event: "profileremoved", listener: (name: string) => void): void;
   public removeEventListener(event: "profileupdated", listener: (name: string) => void): void;
   public removeEventListener(event: "controlleradded", listener: (name: string) => void): void;
   public removeEventListener(event: "controllerremoved", listener: (name: string) => void): void;
   public removeEventListener(event: "controllerupdated", listener: (name: string) => void): void;
   public removeEventListener(event: string, listener: (...args: any[]) => void): void {

      const hindex = this._eventListeners[event]?.findIndex(h => h === listener);
      if (hindex === undefined || hindex === -1) return;

      this._eventListeners[event].splice(hindex, 1);

   }


   private _createConfiguredControllers() {

      for (const controllerConfig of this._config.data.midiControllerManager.controllers) {

         const inputPortName = controllerConfig.inputPort.substring(0, controllerConfig.inputPort.indexOf(" ("));
         const outputPortName = controllerConfig.outputPort.substring(0, controllerConfig.outputPort.indexOf(" ("));

         const inputPort = this._midi.inputs.find(p => p.name === inputPortName);
         const outputPort = this._midi.outputs.find(p => p.name === outputPortName);

         if (!inputPort) continue;

         const profile = this.getProfile(controllerConfig.profile);
         if (!profile || typeof profile === "string") continue;

         const controller = new MidiController(
            controllerConfig.name,
            profile.name,
            profile.controls,
            inputPort,
            outputPort,
         );

         controller.init();

         this._controllers.push(controller);

      }

   }


   private _update(): void {

      for (const controller of this._controllers) controller.update();
      this._midi.checkPortChanges();

   }


   private _cleanup(): void {

      for (const controller of this._controllers) controller.cleanup();
      this._midi.removeEventListener("portschanged", this._onPortsChanged);

   }


   private _loop = (): void => {

      if (this._stop) {
         this._cleanup();
         return;
      }

      this._update();
      setTimeout(this._loop, 25);

   }


   private _onPortsChanged = (): void => {

      this._eventListeners["portschanged"]?.forEach(h => h());
      this._appContext.mainWindow?.webContents.send(ipcChannel, IpcMidiControllerManagerCommands.midiPortsChanged);

   }


   private _loadProfile(fileName: string): MidiControllerProfile | string {

      if (!fs.existsSync(fileName)) return "File not found";

      try {

         const fileData = fs.readFileSync(fileName, "utf8");
         const profile = JSON.parse(fileData);

         return profile;

      } catch (e) {

         Logger.error(`Error loading profile ${fileName}`);
         return typeof e === "string" ? e : e instanceof Error ? e.message : "Error loading profile";

      }

   }


   private _processIpcMessage(event: IpcMainEvent, ...args: any[]) {

      switch (args[0]) {

         case IpcMidiControllerManagerCommands.getMidiPorts:
            event.returnValue = this._ipcGetMidiPorts.apply(this);
            break;

         case IpcMidiControllerManagerCommands.getProfileNames:
            event.returnValue = this._ipcGetProfileNames.apply(this);
            break;

         case IpcMidiControllerManagerCommands.getConfiguredProfileNames:
            event.returnValue = this._ipcGetConfiguredProfileNames.apply(this);
            break;

         case IpcMidiControllerManagerCommands.getProfile:
            event.returnValue = (this._ipcGetProfile as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.addProfile:
            event.returnValue = (this._ipcAddProfile as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.addProfileFromFile:
            event.returnValue = (this._ipcAddProfileFromFile as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.removeProfile:
            event.returnValue = (this._ipcRemoveProfile as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.getConfiguredProfileNames:
            event.returnValue = this._ipcGetConfiguredProfileNames.apply(this);
            break;

         case IpcMidiControllerManagerCommands.getMidiControllers:
            event.returnValue = this._ipcGetMidiControllers.apply(this);
            break;

         case IpcMidiControllerManagerCommands.addMidiController:
            event.returnValue = (this._ipcAddMidiController as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.updateMidiController:
            event.returnValue = (this._ipcUpdateMidiController as any).apply(this, args.slice(1));
            break;

         case IpcMidiControllerManagerCommands.removeMidiController:
            event.returnValue = (this._ipcRemoveMidiController as any).apply(this, args.slice(1));
            break;

      }

   }


   private _ipcGetMidiPorts(): IpcMidiControllerManagerPorts {

      return {
         inputPorts: this.getMidiInputs().map(p => `${p.name} (${p.id})`),
         outputPorts: this.getMidiOutputs().map(p => `${p.name} (${p.id})`)
      }

   }


   private _ipcGetProfileNames(): string[] {

      return this.getProfileNames();

   }


   private _ipcGetConfiguredProfileNames(): string[] {

      return this.getConfiguredProfileNames();

   }


   private _ipcGetProfile(name: string): MidiControllerProfile | string {

      return this.getProfile(name);

   }


   private _ipcAddProfile(name: string, profile: MidiControllerProfile): string | void {

      return this.setProfile(name, profile);

   }


   private _ipcAddProfileFromFile(name: string, fileName: string): string | void {

      return this.setProfileFromFile(name, fileName);

   }


   private _ipcRemoveProfile(name: string): string | void {

      return this.removeProfile(name);

   }


   private _ipcGetMidiControllers(): IpcMidiControllerManagerController[] {

      return this._controllers.map(
         c => ({
            controllerName: c.name,
            profileName: c.profileName,
            inputPort: `${c.input.name} (${c.input.id})`,
            outputPort: c.output ? `${c.output.name} (${c.output.id})` : undefined,
         })
      );

   }


   private _ipcAddMidiController(name: string, profileName: string, midiIn: string, midiOut?: string): number | string {

      const midiInIndex = parseInt(midiIn.substring(midiIn.indexOf("(") + 1, midiIn.indexOf(")")));
      const midiOutIndex = midiOut ? parseInt(midiOut.substring(midiOut.indexOf("(") + 1, midiOut.indexOf(")"))) : undefined;

      const midiPortIn = this._midi.inputs[midiInIndex];
      const midiPortOut = midiOutIndex !== undefined ? this._midi.outputs[midiOutIndex] : undefined;

      return this.addController(name, profileName, midiPortIn, midiPortOut);

   }


   private _ipcUpdateMidiController(prevName: string, name: string, profileName: string, midiIn: string, midiOut?: string): string | void {

      const midiInIndex = parseInt(midiIn.substring(midiIn.indexOf("(") + 1, midiIn.indexOf(")")));
      const midiOutIndex = midiOut ? parseInt(midiOut.substring(midiOut.indexOf("(") + 1, midiOut.indexOf(")"))) : undefined;

      const midiPortIn = this._midi.inputs[midiInIndex];
      const midiPortOut = midiOutIndex !== undefined ? this._midi.outputs[midiOutIndex] : undefined;

      return this.updateController(prevName, name, profileName, midiPortIn, midiPortOut);

   }


   private _ipcRemoveMidiController(name: string): string | void {

      return this.removeController(name);

   }



}