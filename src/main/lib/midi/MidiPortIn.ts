import midi from "midi";

import { MidiEventAftertouch, MidiEventCb, MidiEventController, MidiEventMessage, MidiEventNonMusical, MidiEventNoteOff, MidiEventNoteOn, MidiEventPatch, MidiEventPitchBend, MidiEventPressure, MidiEventType, MidiPortInput } from "./MidiPort";

export class MidiPortIn implements MidiPortInput {

   private _id: number;
   public get id(): number { return this._id; }

   private _type: "input" = "input";
   public get type(): "input" | "output" { return this._type; }

   private _name: string;
   public get name(): string { return this._name; }

   public get status(): "open" | "closed" { return this._port ? "open" : "closed"; }

   private _port: midi.Input | undefined;

   private _eventListeners: { [event: string]: ((...args: any[]) => any )[] } = {};

   constructor(id: number, name: string) {
      this._id = id;
      this._name = name;
      this._port = undefined;
   }


   public open() {

      if (this._port) return;

      try {
         this._port = new midi.Input();
         this._port.openPort(this._id);
         this._port.on("message", (delta: number, data: number[]) => this._onMidiData(delta, data))
      } catch (e) {
         this._port = undefined;
         throw (e);
      }

   }


   public close() {

      if (!this._port) return;

      this._port.closePort();
      this._port = undefined;

   }


   public addEventListener(event: "message", listener: MidiEventMessage): void;
   public addEventListener(event: "noteon", listener: MidiEventNoteOn): void;
   public addEventListener(event: "noteoff", listener: MidiEventNoteOff): void;
   public addEventListener(event: "aftertouch", listener: MidiEventAftertouch): void;
   public addEventListener(event: "controller", listener: MidiEventController): void;
   public addEventListener(event: "patch", listener: MidiEventPatch): void;
   public addEventListener(event: "pressure", listener: MidiEventPressure): void;
   public addEventListener(event: "pitchbend", listener: MidiEventPitchBend): void;
   public addEventListener(event: "nonmusical", listener: MidiEventNonMusical): void;
   public addEventListener(event: string, listener: (...args: any[]) => any): void {

      const h = this._eventListeners[event]?.find(h => h === listener);
      if (h) return;

      if (!this._eventListeners[event]) this._eventListeners[event] = [];
      this._eventListeners[event].push(listener);

   }


   public removeEventListener(event: "message", listener: MidiEventMessage): void;
   public removeEventListener(event: "noteon", listener: MidiEventNoteOn): void;
   public removeEventListener(event: "noteoff", listener: MidiEventNoteOff): void;
   public removeEventListener(event: "aftertouch", listener: MidiEventAftertouch): void;
   public removeEventListener(event: "controller", listener: MidiEventController): void;
   public removeEventListener(event: "patch", listener: MidiEventPatch): void;
   public removeEventListener(event: "pressure", listener: MidiEventPressure): void;
   public removeEventListener(event: "pitchbend", listener: MidiEventPitchBend): void;
   public removeEventListener(event: "nonmusical", listener: MidiEventNonMusical): void;
   public removeEventListener(event: string, listener: (...args: any[]) => any): void {

      const hindex = this._eventListeners[event]?.findIndex(h => h === listener);
      if (hindex === undefined || hindex === -1) return;

      this._eventListeners[event].splice(hindex, 1);

   }


   private _onMidiData(delta: number, data: number[]): void {

      const command = data[0] & 0xF0;
      const channel = data[0] & 0x0F;
      const dataOnly = data.slice(1);

      switch (command) {

         case 0x80: (dataOnly as any)["key"] = dataOnly[0]; (dataOnly as any)["velocity"] = dataOnly[1]; break;
         case 0x90: (dataOnly as any)["key"] = dataOnly[0]; (dataOnly as any)["velocity"] = dataOnly[1]; break;
         case 0xA0: (dataOnly as any)["key"] = dataOnly[0]; (dataOnly as any)["touch"] = dataOnly[1]; break;
         case 0xB0: (dataOnly as any)["controller"] = dataOnly[0]; (dataOnly as any)["value"] = dataOnly[1]; break;
         case 0xC0: (dataOnly as any)["instrument"] = dataOnly[0]; break;
         case 0xD0: (dataOnly as any)["pressure"] = dataOnly[0]; break;
         case 0xE0: (dataOnly as any)["value"] = dataOnly[0]; break;

      }

      for (const m of this._eventListeners["message"] || []) m(channel, command, dataOnly);

      switch (command) {

         case 0x80: for (const m of this._eventListeners["noteoff"] || []) m(channel, dataOnly[0], dataOnly[1]); break;
         case 0x90: for (const m of this._eventListeners["noteon"] || []) m(channel, dataOnly[0], dataOnly[1]); break;
         case 0xA0: for (const m of this._eventListeners["aftertouch"] || []) m(channel, dataOnly[0], dataOnly[1]); break;
         case 0xB0: for (const m of this._eventListeners["controller"] || []) m(channel, dataOnly[0], dataOnly[1]); break;
         case 0xC0: for (const m of this._eventListeners["patch"] || []) m(channel, dataOnly[0]); break;
         case 0xD0: for (const m of this._eventListeners["pressure"] || []) m(channel, dataOnly[0]); break;
         case 0xE0: for (const m of this._eventListeners["pitchbend"] || []) m(channel, dataOnly[0]); break;
         case 0xF0: for (const m of this._eventListeners["nonmusical"] || []) m(channel, dataOnly); break;

      }

   }



}