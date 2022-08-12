import { Logger } from "../../lib/log/Logger";

import { MidiPortInput, MidiPortOutput } from "../../lib/midi/MidiPort";
import { MidiInMappings, MidiOutMappings } from "./MidiMappings";

import { ControlImpl } from "./Control";


export type KnobModeName = "single" | "gain" | "pan";

export class Knob extends ControlImpl {


   private _valueChangedMidi: MidiInMappings;
   public get valueChangedMidi(): MidiInMappings { return this._valueChangedMidi; }

   private _modeSetMidi: MidiOutMappings;
   public get modeSetMidi(): MidiOutMappings { return this._modeSetMidi; }

   private _valueSetMidi: MidiOutMappings;
   public get valueSetMidi(): MidiOutMappings { return this._valueSetMidi; }

   private _currentMode: KnobModeName = "single";
   public get currentMode(): KnobModeName { return this._currentMode; }
   public set currentMode(value: KnobModeName) { this._setKnobMode(value); }

   private _currentValue: number = 0;
   public get currentValue(): number { return this._currentValue; }
   public set currentValue(value: number) { this._setKnobValue(value); }

   private _eventListeners: { [event: string]: ((...args: any[]) => any )[] } = {};


   constructor(
      id: string,
      midiIn: MidiPortInput,
      midiOut: MidiPortOutput | undefined,
      valueChangedMidi: MidiInMappings,
      modeSetMidi: MidiOutMappings,
      valueSetMidi: MidiOutMappings,
   ) {

      super(id, "knob", midiIn, midiOut);

      this._valueChangedMidi = valueChangedMidi;
      this._modeSetMidi = modeSetMidi;
      this._valueSetMidi = valueSetMidi;
      this._midiIn = midiIn;
      this._midiOut = midiOut;

   }

   public init() {

      this._setKnobMode(this._currentMode, true);
      this._setKnobValue(this._currentValue, true);

      this._midiIn.addEventListener(
         "message",
         this._onMidiMessage
      );

   }


   public cleanup(): void {

      this._midiIn.removeEventListener("message", this._onMidiMessage);

   }


   public addEventListener(event: "modeChanged", listener: (id: string, mode: KnobModeName) => void): void;
   public addEventListener(event: "valueChanged", listener: (id: string, value: number) => void): void;
   public addEventListener(event: string, listener: (...args: any[]) => any): void {

      const h = this._eventListeners[event]?.find(h => h === listener);
      if (h) return;

      if (!this._eventListeners[event]) this._eventListeners[event] = [];
      this._eventListeners[event].push(listener);

   }


   public removeEventListener(event: "modeChanged", listener: (id: string, mode: KnobModeName) => void): void;
   public removeEventListener(event: "valueChanged", listener: (id: string, value: number) => void): void;
   public removeEventListener(event: string, listener: (...args: any[]) => any): void {

      const hindex = this._eventListeners[event]?.findIndex(h => h === listener);
      if (hindex === undefined || hindex === -1) return;

      this._eventListeners[event].splice(hindex, 1);

   }


   private _onMidiMessage = (channel: number, command: number, data: number[]) => {

      if (Array.isArray(this._valueChangedMidi)) {

         Logger.warn("Multiple mappings are not supported for the knob");

      } else {

         if (channel !== this._valueChangedMidi.message.channel || command !== this._valueChangedMidi.message.command) return;
         this._remapMidiDataAndUpdate(this._valueChangedMidi, data);

      }

   }


   private _setKnobMode(mode: KnobModeName, force?: boolean): void {

      if (this._currentMode === mode && !force) return;

      this._currentMode = mode;
      for (const h of this._eventListeners["modeChanged"] || []) h(this._id, this._currentMode);

      if (!this._modeSetMidi) return;
      this._mapAndSendMidiMessage(this._modeSetMidi);

   }


   private _setKnobValue(value: number, force?: boolean): void {

      if (this._currentValue === value && !force) return;

      this._currentValue = value;
      for (const h of this._eventListeners["valueChanged"] || []) h(this._id, this._currentValue);

      if (!this._valueSetMidi) return;
      this._mapAndSendMidiMessage(this._valueSetMidi);

   }

}