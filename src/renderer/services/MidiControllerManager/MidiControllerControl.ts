export type ControlType = "knob" | "button" | "fader";

export interface MidiControllerControl {

   id: string;
   type: ControlType;

   init(): void;
   cleanup(): void;
   update(): void;

}