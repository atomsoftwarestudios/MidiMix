import { ipcRenderer, IpcRendererEvent } from "electron";
import { IpcMidiControllerManagerCommands, IpcMidiControllerManagerPorts, IpcMidiControllerManagerController } from "./MidiControllerManagerIpc";
import { MidiControllerProfile } from "./MidiControllerProfile";

const channelName: string = "MidiControllerManager";

export class MidiControllerManager {

   private _eventListeners: { [event: string]: ((...args: any[]) => void)[] } = {};


   constructor() {

      ipcRenderer.on(channelName, this._ipcMessageHandler);

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


   public getMidiPorts(): IpcMidiControllerManagerPorts {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.getMidiPorts);
   }


   public getProfileNames(): string[] {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.getProfileNames);
   }


   public getConfiguredProfileNames(): string[] {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.getConfiguredProfileNames);
   }


   public getProfile(name: string): MidiControllerProfile | string {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.getProfile, name);
   }


   public setProfile(name: string, profile: MidiControllerProfile): string | void {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.addProfile, name, profile);
   }


   public addProfileFromFile(name: string, fileName: string): string | void {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.addProfileFromFile, name, fileName);
   }


   public removeProfile(name: string): string | void {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.removeProfile, name);
   }


   public getMidiControllers(): IpcMidiControllerManagerController[] {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.getMidiControllers);
   }


   public addMidiController(controllerName: string, profileName: string, midiInName: string, midiOutName?: string): number | void {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.addMidiController, controllerName, profileName, midiInName, midiOutName);
   }


   public updateMidiController(prevName: string, controllerName: string, profileName: string, midiInName: string, midiOutName: string): string | void {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.updateMidiController, prevName, controllerName, profileName, midiInName, midiOutName);
   }


   public removeMidiController(controllerName: string): number {
      return ipcRenderer.sendSync(channelName, IpcMidiControllerManagerCommands.removeMidiController, controllerName);
   }

   private _ipcMessageHandler = (event: IpcRendererEvent, ...args: any[]): void => {

      switch (args[0]) {


         case IpcMidiControllerManagerCommands.midiPortsChanged:
            this._eventListeners["portschanged"]?.forEach(h => h());
            break;

         case IpcMidiControllerManagerCommands.controllerAdded:
            this._eventListeners["controlleradded"]?.forEach(h => h(args[1]));
            break

         case IpcMidiControllerManagerCommands.controllerRemoved:
            this._eventListeners["controllerremoved"]?.forEach(h => h(args[1]));
            break;

         case IpcMidiControllerManagerCommands.controllerUpdated:
            this._eventListeners["controllerupdated"]?.forEach(h => h(args[1]));
            break;

         case IpcMidiControllerManagerCommands.profileAdded:
            this._eventListeners["profileadded"]?.forEach(h => h(args[1]));
            break;

         case IpcMidiControllerManagerCommands.profileRemoved:
            this._eventListeners["profileremoved"]?.forEach(h => h(args[1]));
            break;

         case IpcMidiControllerManagerCommands.profileUpdated:
            this._eventListeners["profileupdated"]?.forEach(h => h(args[1]));
            break;

      }

   }



}