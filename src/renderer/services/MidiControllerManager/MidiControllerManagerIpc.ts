export enum IpcMidiControllerManagerCommands {

   getMidiPorts = "getMidiPorts",
   getProfileNames = "getProfileNames",
   getConfiguredProfileNames = "getConfiguredProfileNames",
   getProfile = "getProfile",
   addProfile = "addProfile",
   addProfileFromFile = "addProfileFromFile",
   removeProfile = "removeProfile",
   getMidiControllers = "listMidiControllers",
   addMidiController = "addMidiController",
   updateMidiController = "updateMidiController",
   removeMidiController = "removeMidiController",

   midiPortsChanged = "midiPortsChanged",
   profileAdded = "profileAdded",
   profileRemoved = "profileRemoved",
   profileUpdated = "profileUpdated",
   controllerAdded = "controllerAdded",
   controllerUpdated = "controllerUpdated",
   controllerRemoved = "controllerRemoved",

}

export interface IpcMidiControllerManagerPorts {
   inputPorts: string[];
   outputPorts: string[];
}

export interface IpcMidiControllerManagerController {
   controllerName: string;
   profileName: string;
   inputPort: string;
   outputPort?: string;
}
