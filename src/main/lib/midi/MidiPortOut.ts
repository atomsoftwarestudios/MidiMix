import midi from "midi";
import { decimalToHex } from "../decToHex";
import { Logger } from "../log/Logger";
import { MidiAfterTouchArgs, MidiChannelPressureArgs, MidiCommand, MidiControllerArgs, MidiMessage, MidiNonMusicalCommandArgs, MidiNoteOnOffArgs, MidiPatchChangeArgs } from "./MidiMessages";

import { MidiPortOutput } from "./MidiPort";

export class MidiPortOut implements MidiPortOutput {

   private _id: number;
   public get id(): number { return this._id; }

   private _type: "input" = "input";
   public get type(): "input" | "output" { return this._type; }

   private _name: string;
   public get name(): string { return this._name; }

   public get status(): "open" | "closed" { return this._port ? "open" : "closed"; }

   private _port: midi.Output | undefined;


   constructor(id: number, name: string) {
      this._id = id;
      this._name = name;
      this._port = undefined;
   }


   public open() {

      if (this._port) return;

      try {
         this._port = new midi.Output();
         this._port.openPort(this._id);
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


   public message(message: MidiMessage): void {

      switch (message.command) {

         case MidiCommand.NoteOn:
            const args1 = message.args as MidiNoteOnOffArgs;
            this.noteOn(message.channel, args1.key, args1.velocity);
            break;

         case MidiCommand.NoteOff:
            const args2 = message.args as MidiNoteOnOffArgs;
            this.noteOff(message.channel, args2.key, args2.velocity);
            break;

         case MidiCommand.Aftertouch:
            const args3 = message.args as MidiAfterTouchArgs;
            this.aftertouch(message.channel, args3.key, args3.touch);
            break;

         case MidiCommand.Controller:
            const args4 = message.args as MidiControllerArgs;
            this.controller(message.channel, args4.controller, args4.value);
            break;

         case MidiCommand.Patch:
            const args5 = message.args as MidiPatchChangeArgs;
            this.patch(message.channel, args5.instrument);
            break;

         case MidiCommand.Pressure:
            const args6 = message.args as MidiChannelPressureArgs;
            this.pressure(message.channel, args6.pressure);
            break;

         case MidiCommand.PitchBend:
            const args7 = message.args as MidiControllerArgs;
            this.pitchBend(message.channel, args7.value);
            break;

         case MidiCommand.NonMusical:
            const args8 = message.args as MidiNonMusicalCommandArgs;
            this.nonMusicalData(message.channel, args8.data);
            break;
      }

   }


   public noteOn(channel: number, key: number, velocity: number): void {
      this._sendMessage(channel, MidiCommand.NoteOn, [key, velocity]);
   }


   public noteOff(channel: number, key: number, velocity: number): void {
      this._sendMessage(channel, MidiCommand.NoteOff, [key, velocity]);
   }


   public aftertouch(channel: number, key: number, touch: number): void {
      this._sendMessage(channel, MidiCommand.Aftertouch, [key, touch]);
   }


   public controller(channel: number, controller: number, value: number): void {
      this._sendMessage(channel, MidiCommand.Controller, [controller, value]);
   }


   public patch(channel: number, instrument: number): void {
      this._sendMessage(channel, MidiCommand.Patch, [instrument]);
   }


   public pressure(channel: number, pressure: number): void {
      this._sendMessage(channel, MidiCommand.Pressure, [pressure]);
   }


   public pitchBend(channel: number, value: number): void {
      const msb = Math.floor(value / 127);
      const lsb = value % msb;
      this._sendMessage(channel, MidiCommand.PitchBend, [lsb, msb])
   }


   public nonMusicalData(channel: number, data: number[] = []): void {
      this._sendMessage(channel, MidiCommand.NonMusical, data);
   }


   private _sendMessage(channel: number, command: number, data: number[]): void {

      if (!this._port) throw "Port not open";
      if (channel < 0 || channel > 15) throw `Invalid channel number ${channel}`;

      const header = command | channel;
      const d = data.map(d => d & 127);
      const msg: number[] = [header, ...d];

      (this._port!.send as any)(msg);

   }

}