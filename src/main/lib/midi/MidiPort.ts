import { MidiMessage } from "./MidiMessages";

export type MidiEventType = "message" | "noteon" | "noteoff" | "aftertouch" | "controller" | "patch" | "pressure" | "pitchbend" | "nonmusical";
export type MidiEventCb = MidiEventMessage | MidiEventNoteOn | MidiEventNoteOff | MidiEventAftertouch | MidiEventController | MidiEventPatch | MidiEventPressure | MidiEventPitchBend | MidiEventNonMusical;


export type MidiEventMessage = (channel: number, command: number, data: number[]) => void;
export type MidiEventNoteOff = (channel: number, key: number, velocity: number) => void;
export type MidiEventNoteOn = (channel: number, key: number, velocity: number) => void;
export type MidiEventAftertouch = (channel: number, key: number, touch: number) => void;
export type MidiEventController = (channel: number, controller: number, value: number) => void;
export type MidiEventPatch = (channel: number, instrument: number) => void;
export type MidiEventPressure = (channel: number, pressure: number) => void;
export type MidiEventPitchBend = (channel: number, value: number) => void;
export type MidiEventNonMusical = (channel: number, data: number[]) => void;


export interface MidiPort {
   id: number;
   name: string;
   type: "input" | "output";
}


export interface MidiPortInput extends MidiPort {

   open: () => void;
   close: () => void;
   status: "open" | "closed";

   addEventListener(event: "message", listener: MidiEventMessage): void;
   addEventListener(event: "noteon", listener: MidiEventNoteOn): void;
   addEventListener(event: "noteoff", listener: MidiEventNoteOff): void;
   addEventListener(event: "aftertouch", listener: MidiEventAftertouch): void;
   addEventListener(event: "controller", listener: MidiEventController): void;
   addEventListener(event: "patch", listener: MidiEventPatch): void;
   addEventListener(event: "pressure", listener: MidiEventPressure): void;
   addEventListener(event: "pitchbend", listener: MidiEventPitchBend): void;
   addEventListener(event: "nonmusical", listener: MidiEventNonMusical): void;
   addEventListener(event: MidiEventType, listener: MidiEventCb): void;

   removeEventListener(event: "message", listener: MidiEventMessage): void;
   removeEventListener(event: "noteon", listener: MidiEventNoteOn): void;
   removeEventListener(event: "noteoff", listener: MidiEventNoteOff): void;
   removeEventListener(event: "aftertouch", listener: MidiEventAftertouch): void;
   removeEventListener(event: "controller", listener: MidiEventController): void;
   removeEventListener(event: "patch", listener: MidiEventPatch): void;
   removeEventListener(event: "pressure", listener: MidiEventPressure): void;
   removeEventListener(event: "pitchbend", listener: MidiEventPitchBend): void;
   removeEventListener(event: "nonmusical", listener: MidiEventNonMusical): void;
   removeEventListener(event: MidiEventType, listener: MidiEventCb): void;

}


export interface MidiPortOutput extends MidiPort {

   open: () => void
   close: () => void;
   status: "open" | "closed";

   message: (message: MidiMessage) => void;

   noteOn: (channel: number, key: number, velocity: number) => void;
   noteOff: (channel: number, key: number, velocity: number) => void;
   aftertouch: (channel: number, key: number, touch: number) => void;
   controller: (channel: number, controller: number, value: number) => void;
   patch: (channel: number, instrument: number) => void;
   pressure: (channel: number, pressure: number) => void;
   pitchBend: (channel: number, value: number) => void;
   nonMusicalData: (channel: number, data?: number[]) => void;

}