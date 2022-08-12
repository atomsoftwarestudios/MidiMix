import React, { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "../../controls/Modal";

import * as services from "../../../services";

import { IpcMidiControllerManagerController, IpcMidiControllerManagerPorts } from "../../../services/MidiControllerManager/MidiControllerManagerIpc";

import "./style.css";
import InfoDialog from "../../controls/InfoDialog";

interface Props {
   onHide: () => void;
   data?: IpcMidiControllerManagerController;
}

export default function ControllerModal({
   data,
   onHide
}: Props) {

   const [errorMessage, setErrorMessage] = useState<string>("");

   const [midiPorts, setMidiPorts] = useState<IpcMidiControllerManagerPorts>();
   const [midiControllerProfileNames, setMidiControllerProfileNames] = useState<string[]>([]);

   const [selectedMidiControllerProfile, setSelectedMidiControllerProfile] = useState<string>();
   const [selectedInputPort, setSelectedInputPort] = useState<string>();
   const [selectedOutputPort, setSelectedOutputPort] = useState<string>();
   const [controllerName, setControllerName] = useState<string>("");

   const onPortsChanged = useCallback(

      () => {
         const midiPorts = services.midiControllerManager.getMidiPorts();
         setMidiPorts(midiPorts);
      },
      []

   );

   const onSaveClick = useCallback(

      () => {

         let result: string | number | void;

         if (data) {

            result = services.midiControllerManager.updateMidiController(
               data.controllerName,
               controllerName,
               selectedMidiControllerProfile!,
               selectedInputPort!,
               selectedOutputPort!
            );

         } else {

            result = services.midiControllerManager.addMidiController(
               controllerName,
               selectedMidiControllerProfile!,
               selectedInputPort!,
               selectedOutputPort!
            );

         }

         if (typeof result === "string") {
            setErrorMessage(result);
         } else {
            onHide();
         }

      },
      [controllerName, selectedMidiControllerProfile, selectedInputPort, selectedOutputPort]

   );


   const onCancelClick = useCallback(

      () => {
         onHide();
      },
      []

   );


   const addDisabled = useMemo(

      () => {
         return !controllerName || !selectedInputPort || !selectedMidiControllerProfile;
      },
      [controllerName, selectedInputPort, selectedOutputPort, selectedMidiControllerProfile]

   );

   useEffect(

      () => {

         const midiPorts = services.midiControllerManager.getMidiPorts();
         const midiControllerProfileNames = services.midiControllerManager.getProfileNames();

         setMidiPorts(midiPorts);
         setMidiControllerProfileNames(midiControllerProfileNames);

         if (data) {
            setSelectedMidiControllerProfile(data.profileName);
            setSelectedInputPort(data.inputPort);
            setSelectedOutputPort(data.outputPort);
            setControllerName(data.controllerName);
         }

         services.midiControllerManager.addEventListener("portschanged", onPortsChanged);

         return (
            () => {
               services.midiControllerManager.removeEventListener("portschanged", onPortsChanged);
            }
         )

      },
      []

   )


   return (

      <Modal title={data ? "Create new controller" : "Update new controller"} onHide={onHide}>

         <div className="controller-modal">

            <div className="form-group">
               <label htmlFor="ControllerName">Controller name:</label>
               <input type="text" id="ControllerName" value={controllerName} onChange={(e) => setControllerName(e.target.value)} />
            </div>

            <div>

               <div className="form-group">

                  <label htmlFor="MidiInputs">MIDI Inputs:</label>
                  <select id="MidiInputs" value={selectedInputPort} onChange={(e) =>
                     setSelectedInputPort(e.target.value)}>
                     <option value=""></option>
                     {
                        midiPorts?.inputPorts.map(port => (
                           <option key={port} value={port}>{port}</option>
                        ))
                     }
                  </select>

               </div>

               <div className="form-group">

                  <label htmlFor="MidiOutputs">MIDI Outputs:</label>
                  <select id="MidiOutputs" value={selectedOutputPort} onChange={(e) => setSelectedOutputPort(e.target.value)}>
                     <option value=""></option>
                     {
                        midiPorts?.outputPorts.map(port => (
                           <option key={port} value={port}>{port}</option>
                        ))
                     }
                  </select>

               </div>

               <div className="form-group">

                  <label htmlFor="AvailableMidiControllerProfiles">Available Midi Controller Profiles:</label>
                  <select id="AvailableMidiControllerProfiles" value={selectedMidiControllerProfile} onChange={(e) => setSelectedMidiControllerProfile(e.target.value)}>
                     <optgroup>
                        <option value=""></option>
                        {
                           midiControllerProfileNames?.map(midiControllerProfileName => (
                              <option key={midiControllerProfileName} value={midiControllerProfileName}>{midiControllerProfileName}</option>
                           ))
                        }
                     </optgroup>
                  </select>

               </div>

            </div>

            <br />

            <div className="button-group">
               <input type="button" value="Save" data-type="primary" disabled={addDisabled} onClick={(e) => onSaveClick()} />
               <input type="button" value="Cancel" data-type="secondary" onClick={(e) => onCancelClick()} />
            </div>

         </div>

         {errorMessage && (

            <InfoDialog
               title="Error"
               type="error"
               message={errorMessage}
               onHide={() => setErrorMessage("")}
            />

         )}


      </Modal>

   );

}