import midi from "midi";

import { MidiPortInput, MidiPortOutput } from "./MidiPort";
import { MidiPortIn } from "./MidiPortIn";
import { MidiPortOut } from "./MidiPortOut";


export class Midi {


   private _inputs: MidiPortInput[] = [];
   public get inputs(): MidiPortInput[] { return this._inputs; };

   private _outputs: MidiPortOutput[] = [];
   public get outputs(): MidiPortOutput[] { return this._outputs; };

   private _eventListeners: { [event: string]: ((...args: any[]) => any)[] } = {};

   constructor() {

      this._enumInputPorts();
      this._enumOutputPorts();

   }


   public addEventListener(event: "portschanged", listener: () => void): void;
   public addEventListener(event: string, listener: (...args: any[]) => any): void {

      const h = this._eventListeners[event]?.find(h => h === listener);
      if (h) return;

      if (!this._eventListeners[event]) this._eventListeners[event] = [];
      this._eventListeners[event].push(listener);

   }


   public removeEventListener(event: "portschanged", listener: () => void): void;
   public removeEventListener(event: string, listener: () => void): void {

      const hindex = this._eventListeners[event]?.findIndex(h => h === listener);
      if (hindex === undefined || hindex === -1) return;

      this._eventListeners[event].splice(hindex, 1);

   }


   public checkPortChanges(): void {

      const input = new midi.Input();

      let inputsChanged = input.getPortCount() !== this._inputs.length;

      if (!inputsChanged) {

         for (let i = 0; i < input.getPortCount(); i++) {

            const portName = input.getPortName(i);
            if (portName !== this._inputs[i].name) inputsChanged = true;

         }

      }

      if (inputsChanged) {

         this._inputs = [];
         this._enumInputPorts();

      }


      const output = new midi.Output();

      let outputsChanged = output.getPortCount() !== this._outputs.length;

      if (!outputsChanged) {

         for (let i = 0; i < output.getPortCount(); i++) {

            const portName = output.getPortName(i);
            if (portName !== this._outputs[i].name) outputsChanged = true;

         }

      }


      if (outputsChanged) {

         this._outputs = [];
         this._enumOutputPorts();

      }


      if (inputsChanged || outputsChanged) {

         this._eventListeners["portschanged"]?.forEach(l => l());

      }

   }


   private _enumInputPorts(): void {

      const input = new midi.Input();

      for (let i = 0; i < input.getPortCount(); i++) {
         this._inputs.push(new MidiPortIn(i, input.getPortName(i)))
      }

   }


   private _enumOutputPorts(): void {

      const output = new midi.Output();

      for (let i = 0; i < output.getPortCount(); i++) {
         this._outputs.push(new MidiPortOut(i, output.getPortName(i)));
      }

   }


}