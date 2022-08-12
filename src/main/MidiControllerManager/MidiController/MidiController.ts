import { MidiPortInput, MidiPortOutput } from "../../lib/midi/MidiPort";

import { Logger } from "../../lib/log/Logger";

import { MidiInMappings, MidiOutMappings } from "./MidiMappings";
import { MidiControllerControl } from "./MidiControllerControl";
import { Control, ControlType } from "./Control";

import { Knob } from "./Knob";
import { Button } from "./Button";
import { Fader } from "./Fader";

export class MidiController {

   private _name: string;
   public get name(): string { return this._name; }

   private _profileName: string;
   public get profileName(): string { return this._profileName; }

   private _input: MidiPortInput;
   public get input(): MidiPortInput { return this._input; }

   private _output: MidiPortOutput | undefined;
   public get output(): MidiPortOutput | undefined { return this._output; }

   private _controlsSpecs: MidiControllerControl[];
   private _controls: Control[] = [];
   public get controls(): Control[] { return this._controls; }


   constructor(
      name: string,
      profileName: string,
      controls: MidiControllerControl[],
      input: MidiPortInput,
      output?: MidiPortOutput,
   ) {
      this._name = name;
      this._profileName = profileName;
      this._input = input;
      this._output = output;
      this._controlsSpecs = controls;
   }


   public init() {

      this._input.open();
      if (this._output) this._output.open();

      this._createControls();

   }

   public createControl(type: "knob", id: string, valueChangedMidi: MidiInMappings, modeSetMidi?: MidiOutMappings, valueSetMidi?: MidiOutMappings): Knob | undefined;
   public createControl(type: "button", id: string, pushChangedMidi: MidiInMappings, backlightTypeSetMidi?: MidiOutMappings, backlightValueSetMidi?: MidiOutMappings): Button | undefined;
   public createControl(type: "fader", id: string, valueChangedMidi: MidiInMappings, valueSetMidi?: MidiOutMappings): Button | undefined;
   public createControl(type: ControlType, id: string, ...args: any[]): Control | undefined {

      if (this.controls.find(c => c.id === id)) {
         Logger.warn(`Control with id '${id}' already exists`);
         return undefined;
      }

      let control: Control | undefined = undefined;

      switch (type) {

         case "button":
            control = new Button(id, this._input, this._output, args[0], args[1], args[2]);
            break;

         case "knob":
            control = new Knob(id, this._input, this._output, args[0], args[1], args[2]);
            break;

         case "fader":
            control = new Fader(id, this._input, this._output, args[0], args[1]);
            break;

      }

      if (!control) return undefined;

      control.init();

      this._controls.push(control);
      return control;

   }


   public cleanup() {

      this._input.close();
      if (this._output) this._output.close();

   }


   public update() {

      for (const control of this._controls) control.update();

   }


   private _createControls() {

      for (const controlSpec of this._controlsSpecs) {

         let control: Control | undefined = undefined;

         switch (controlSpec.type) {

            case "knob":

               const knobValueChangedMidi = controlSpec.mappings[0] as MidiInMappings;
               const knobModeSetMidi = controlSpec.mappings[1] as MidiOutMappings;
               const knobValueSetMidi = controlSpec.mappings[2] as MidiOutMappings;

               if (!knobValueChangedMidi) {
                  Logger.warn(`Knob id '${controlSpec.id}' has no valueChangedMidi mapping specified`);
                  break;
               }

               control = this.createControl("knob", controlSpec.id, knobValueChangedMidi, knobModeSetMidi, knobValueSetMidi);

               break;


            case "button":

               const buttonPushChangedMidi = controlSpec.mappings[0] as MidiInMappings;
               const buttonBacklightTypeSetMidi = controlSpec.mappings[1] as MidiOutMappings;
               const buttonBacklightValueSetMidi = controlSpec.mappings[2] as MidiOutMappings;

               if (!buttonPushChangedMidi) {
                  Logger.warn(`Button id '${controlSpec.id}' has no pushChangedMidi mapping specified`);
                  break;
               }

               control = this.createControl("button", controlSpec.id, buttonPushChangedMidi, buttonBacklightTypeSetMidi, buttonBacklightValueSetMidi);

               break;


            case "fader":

               const faderValueChangedMidi = controlSpec.mappings[0] as MidiInMappings;
               const faderValueSetMidi = controlSpec.mappings[1] as MidiOutMappings;

               if (!faderValueChangedMidi) {
                  Logger.warn(`Fader id '${controlSpec.id}' has no valueChangedMidi mapping specified`);
                  break;
               }

               control = this.createControl("fader", controlSpec.id, faderValueChangedMidi, faderValueSetMidi);

               break;

         }

         if (!control) continue;

         for (const option in controlSpec.options) {
            if ((control as any)[option]) (control as any)[option] = controlSpec.options[option];
         }


      }

   }


}