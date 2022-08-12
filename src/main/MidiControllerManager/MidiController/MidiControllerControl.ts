import { ControlType } from "./Control";
import { MidiInMappings, MidiOutMappings } from "./MidiMappings";

export interface MidiControllerControl {
   type: ControlType;
   id: string;
   options?: { [key: string]: any };
   mappings: { [argIndex: number]: (MidiInMappings | MidiOutMappings) };
}
