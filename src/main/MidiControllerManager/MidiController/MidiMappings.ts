import { MidiMessage } from "../../lib/midi/MidiMessages";

export type MidiDataMappingTarget = "velocity" | "pitch" | "note";

interface MidiDataMapping {
   source: string;
   target: string;
   transform?: { [key: string | number]: string | number | boolean };
}

export interface MidiMapping {
   message: MidiMessage;
   messageMappings: MidiDataMapping[];
}


export type MidiInMappings = MidiMapping | MidiMapping[]

export type MidiOutMappings = MidiMapping;
