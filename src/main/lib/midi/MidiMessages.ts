import { MidiEventType } from "./MidiPort";

export const MidiCommandType: { [index: number]: MidiEventType } = {
   0x80: "noteoff",
   0x90: "noteon",
   0xA0: "aftertouch",
   0xB0: "controller",
   0xC0: "patch",
   0xD0: "pressure",
   0xE0: "pitchbend",
   0xF0: "nonmusical"
}

export enum MidiCommand {

   /* Note off */
   NoteOff = 0x80,
   /* Note on */
   NoteOn = 0x90,
   /* Aftertouch */
   Aftertouch = 0xA0,
   /* Continuous controller */
   Controller = 0xB0,
   /* Patch change */
   Patch = 0xC0,
   /* Channel Pressure */
   Pressure = 0xD0,
   /* Pitch Band */
   PitchBend = 0xE0,
   /* Non-musical commands */
   NonMusical = 0xF0

}


export interface MidiNoteOnOffArgs {
   key: number;
   velocity: number;
}


export interface MidiAfterTouchArgs {
   key: number;
   touch: number;
}


export interface MidiControllerArgs {
   controller: number;
   value: number;
}


export interface MidiPatchChangeArgs {
   instrument: number;
}


export interface MidiChannelPressureArgs {
   pressure: number;
}


export interface MidiPitchBendArgs {
   value: number; // has MSB and LSB 0 - 16129
}


export interface MidiNonMusicalCommandArgs {
   data: number[];
}


export type MidiCommandArgs = MidiNoteOnOffArgs | MidiAfterTouchArgs | MidiControllerArgs | MidiPatchChangeArgs | MidiChannelPressureArgs | MidiPitchBendArgs | MidiNonMusicalCommandArgs;


export interface MidiMessage {
   channel: number;
   command: MidiCommand;
   args: MidiCommandArgs;
}
