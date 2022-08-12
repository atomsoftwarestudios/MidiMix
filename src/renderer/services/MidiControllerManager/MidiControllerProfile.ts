import { MidiControllerControl } from "./MidiControllerControl";

export interface MidiControllerProfile {
   name: string;
   hasFeedback: boolean;
   controls: MidiControllerControl[];
}