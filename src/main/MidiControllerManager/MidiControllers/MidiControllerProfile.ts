import { MidiControllerControl } from "../MidiController/MidiControllerControl";

export interface MidiControllerProfile {
   name: string;
   hasFeedback: boolean;
   controls: MidiControllerControl[];
}