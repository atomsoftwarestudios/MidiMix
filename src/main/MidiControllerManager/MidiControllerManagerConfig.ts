import { MidiControllerProfile } from "./MidiControllers/MidiControllerProfile";

interface MidiControllerManagerConfigProfile {
   name: string;
   profile: MidiControllerProfile;
}

interface MidiControllerManagerConfigController {
   name: string;
   inputPort: string;
   outputPort: string;
   profile: string;
}

export interface MidiControllerManagerConfigData {

   midiControllerManager: {
      profiles: MidiControllerManagerConfigProfile[];
      controllers: MidiControllerManagerConfigController[];
   }

}

export interface MidiControllerManagerConfig {

   data: MidiControllerManagerConfigData;

   update(): void;

}