import { MidiMessage } from "../../lib/midi/MidiMessages";
import { MidiPortInput, MidiPortOutput } from "../../lib/midi/MidiPort";
import { MidiMapping, MidiOutMappings } from "./MidiMappings";

export type ControlType = "knob" | "button" | "fader";

export interface Control {

   id: string;
   type: ControlType;

   init(): void;
   cleanup(): void;
   update(): void;

}

export class ControlImpl implements Control {

   private _type: ControlType;
   public get type(): ControlType { return this._type; }

   protected _midiIn: MidiPortInput;
   protected _midiOut: MidiPortOutput | undefined;

   protected _id: string;
   public get id(): string { return this._id; }


   constructor(
      id: string,
      type: ControlType,
      midiIn: MidiPortInput,
      midiOut: MidiPortOutput | undefined,
   ) {
      this._id = id;
      this._type = type;
      this._midiIn = midiIn;
      this._midiOut = midiOut;
   }


   public init(): void {
   }


   public cleanup(): void {
   }


   public update(): void {
   }


   protected _remapMidiDataAndUpdate(mappings: MidiMapping, data: any): void {

      const remappedData = this._remapMidiData(mappings, data);
      if (!remappedData) return;

      if (this.id !== remappedData.id) return;

      delete remappedData.id;

      this._updateProperties(remappedData);

   }


   protected _remapMidiData(mappings: MidiMapping, data: any): any {

      let toReturn: any = {};

      for (const mapping of mappings.messageMappings) {

         let value = ((data || this as any) as any)[mapping.source];
         if (value === undefined) return;

         let transformed = mapping.transform ? (mapping.transform["_any_"] !== undefined ? mapping.transform["_any_"] : mapping.transform[value]) : value;
         if (transformed === undefined) return;

         (toReturn as any)[mapping.target] = transformed;

      }

      return toReturn;

   }


   protected _updateProperties(data: any): void {

      for (const key in data) {
         if ((this as any)[key] !== undefined) (this as any)[key] = data[key];
      }

   }


   protected _mapAndSendMidiMessage(mappings: MidiOutMappings, data?: any): void {

      if (!this._midiOut) return;

      let toSend: MidiMessage | undefined;

      for (const mapping of mappings.messageMappings) {

         toSend = { ...mappings.message };

         let value = ((data || this as any) as any)[mapping.source];
         if (value === undefined) return;

         let transformed = mapping.transform ? mapping.transform[value] : value;
         if (transformed === undefined) return;

         if (toSend) (toSend.args as any)[mapping.target] = transformed;

      }

      if (!toSend) return;

      this._midiOut.message(toSend);

   }

}