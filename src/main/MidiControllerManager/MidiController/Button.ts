import { MidiPortInput, MidiPortOutput } from "../../lib/midi/MidiPort";
import { MidiInMappings, MidiOutMappings } from "./MidiMappings";

import { ControlImpl } from "./Control";


export type ButtonBacklightMode = "unsupported" | "on/off" | "blink" | "pulsing" | "midiblink";


export class Button extends ControlImpl {

   private _pushChangedMidi: MidiInMappings;
   public get pushChangedMidi(): MidiInMappings { return this._pushChangedMidi; }

   private _backlightTypeSetMidi: MidiOutMappings | undefined;
   public get backlightTypeSetMidi(): MidiOutMappings | undefined { return this._backlightTypeSetMidi; }

   private _backlightValueSetMidi: MidiOutMappings | undefined;
   public get backlightValueSetMidi(): MidiOutMappings | undefined { return this._backlightValueSetMidi; }

   private _currentBacklightMode: ButtonBacklightMode = "unsupported";
   public get currentBacklightMode(): ButtonBacklightMode { return this._currentBacklightMode; }
   public set currentBacklightMode(value: ButtonBacklightMode) { this._setButtonBacklightMode(value); }

   private _currentBacklightState: boolean = false;
   public get currentBacklightState(): boolean { return this._currentBacklightState; }
   public set currentBacklightState(value: boolean) { this._setButtonBacklightState(value); }

   private _currentBacklightValue: number = 0;

   private _backlightOffValue: number = 0;
   public get backlightOffValue(): number { return this._backlightOffValue; }
   public set backlightOffValue(value: number) { this._backlightOffValue = value; }

   private _backlightOnValue: number = 127;
   public get backlightOnValue(): number { return this._backlightOnValue; }
   public set backlightOnValue(value: number) { this._backlightOnValue = value; }

   private _midiBlinks: number = 1;
   public get midiBlinks(): number { return this._midiBlinks; }
   public set midiBlinks(value: number) { this._midiBlinks = value; }

   private _currentPushState: boolean = false;;
   public get currentPushState(): boolean { return this._currentPushState; }
   private set currentPushState(value: boolean) { this._setCurrentPushState(value); }

   private _eventListeners: { [event: string]: ((...args: any[]) => any )[] } = {};

   constructor(
      id: string,
      midiIn: MidiPortInput,
      midiOut: MidiPortOutput | undefined,
      pushChangedMidi: MidiInMappings,
      backlightTypeSetMidi: MidiOutMappings,
      backlightValueSetMidi?: MidiOutMappings,
   ) {

      super(id, "button", midiIn, midiOut);

      this._pushChangedMidi = pushChangedMidi;
      this._backlightTypeSetMidi = backlightTypeSetMidi;
      this._backlightValueSetMidi = backlightValueSetMidi;

   }


   public init() {

      this._backlightOff(true);

      this._midiIn.addEventListener(
         "message",
         this._onMidiMessage
      );

   }


   public update(): void {

      const blinkLength = 175;

      if (this._currentBacklightMode !== "midiblink") return;

      const date = new Date();
      const time = ((date.getSeconds() % 2) * 1000) + date.getMilliseconds();

      let status = false;
      for (let i = 0; i < this.midiBlinks; i++) {
         if (time > blinkLength * i * 2 && time < blinkLength * (i * 2 + 1)) status = true;
      }

      if (status) {
         this._backlightOn();
      } else {
         this._backlightOff();
      }

   }


   public addEventListener(event: "backlightModeChanged", listener: (id: string, mode: ButtonBacklightMode) => void): void;
   public addEventListener(event: "backlightStateChanged", listener: (id: string, state: boolean) => void): void;
   public addEventListener(event: "pushStateChanged", listener: (id: string, pushed: boolean) => void): void;
   public addEventListener(event: string, listener: (...args: any[]) => any): void {

      const h = this._eventListeners[event]?.find(h => h === listener);
      if (h) return;

      if (!this._eventListeners[event]) this._eventListeners[event] = [];
      this._eventListeners[event].push(listener);

   }


   public removeEventListener(event: "backlightModeChanged", listener: (id: string, mode: ButtonBacklightMode) => void): void;
   public removeEventListener(event: "backlightStateChanged", listener: (id: string, state: boolean) => void): void;
   public removeEventListener(event: "pushStateChanged", listener: (id: string, pushed: boolean) => void): void;
   public removeEventListener(event: string, listener: (...args: any[]) => any): void {

      const hindex = this._eventListeners[event]?.findIndex(h => h === listener);
      if (hindex === undefined || hindex === -1) return;

      this._eventListeners[event].splice(hindex, 1);

   }


   private _onMidiMessage = (channel: number, command: number, data: number[]) => {

      if (Array.isArray(this._pushChangedMidi)) {

         for (const mapping of this._pushChangedMidi) {
            if (channel !== mapping.message.channel || command !== mapping.message.command) continue;
            this._remapMidiDataAndUpdate(mapping, data);
         }

      } else {

         if (channel !== this._pushChangedMidi.message.channel || command !== this._pushChangedMidi.message.command) return;
         this._remapMidiDataAndUpdate(this._pushChangedMidi, data);

      }

   }


   private _setButtonBacklightMode(value: ButtonBacklightMode): void {

      if (!this._backlightTypeSetMidi) {

         if (this._currentBacklightMode === "unsupported") return;

         this._currentBacklightMode = "unsupported";
         for (const h of this._eventListeners["backlightModeChanged"] || []) h(this._id, this._currentBacklightMode);

         if (this._currentBacklightValue) this._backlightOn(); else this._backlightOff();

         return;

      }

      if (this._currentBacklightMode !== value) {

         this._currentBacklightMode = value;
         for (const h of this._eventListeners["backlightModeChanged"] || []) h(this._id, this._currentBacklightMode);

         this._mapAndSendMidiMessage(this._backlightTypeSetMidi);

      }

   }


   private _setButtonBacklightState(value: boolean): void {

      this.currentBacklightMode = "on/off";

      if (value) this._backlightOn(); else this._backlightOff();

      if (this._currentBacklightState === value) return;

      this._currentBacklightState = value;

      for (const h of this._eventListeners["backlightStateChanged"] || []) h(this._id, this._currentBacklightState);

   }


   private _setCurrentPushState(value: boolean): void {

      if (value === this._currentPushState) return;

      this._currentPushState = value;

      for (const h of this._eventListeners["pushStateChanged"] || []) h(this._id, this._currentPushState);

   }


   private _backlightOn(): void {

      if (!this._backlightValueSetMidi) return;

      if (this._currentBacklightValue === this._backlightOnValue) return;
      this._currentBacklightValue = this._backlightOnValue;

      this._mapAndSendMidiMessage(
         this._backlightValueSetMidi,
         {
            backlightValue: this._backlightOnValue
         }
      );

   }


   private _backlightOff(force?: boolean): void {

      if (!this._backlightValueSetMidi) return;

      if (this._currentBacklightValue === this._backlightOffValue && !force) return;
      this._currentBacklightValue = this._backlightOffValue;

      this._mapAndSendMidiMessage(
         this._backlightValueSetMidi,
         {
            backlightValue: this._backlightOffValue
         }
      );

   }


}