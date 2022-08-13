import React, { useCallback, useEffect, useMemo, useState } from "react";

import * as services from "../../../services";
import { IpcMidiControllerManagerController, IpcMidiControllerManagerPorts } from "../../../services/MidiControllerManager/MidiControllerManagerIpc";

import DataGrid, { DataGridDataRow, DataGridHeaderCell } from "../../controls/DataGrid";
import InfoDialog from "../../controls/InfoDialog";
import Modal from "../../controls/Modal";
import ControllerModal from "./ControllerModal";

export function MidiControllerManager() {

   const [errorMessage, setErrorMessage] = useState<string>("");

   const [controllerModalMode, setControlleModalMode] = useState<"hidden" | "add" | "edit">("hidden");
   const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

   const [midiControllers, setMidiControllers] = useState<IpcMidiControllerManagerController[]>([]);

   const [selectedMidiControllers, setSelectedMidiControllers] = useState<(string | number)[]>([]);


   const onSelectedMidiControllersChanged = useCallback(

      (selectedMidiControllers: (string | number)[]) => {
         setSelectedMidiControllers(selectedMidiControllers);
      },
      []

   );


   const onMidiControllerItemDblClick = useCallback(

      (itemId: string | number) => {
         setTimeout(() => onEditControllerClick(), 0);
      },
      [selectedMidiControllers]

   );


   const onControllersChanged = useCallback(

      () => {
         const midiControllers = services.midiControllerManager.getMidiControllers();
         setMidiControllers(midiControllers.sort(
            (a, b) => a.controllerName.localeCompare(b.controllerName)
         ));
      },
      []

   );


   const onNewControllerClick = useCallback(

      () => {
         setControlleModalMode("add");
      },
      []

   );


   const onEditControllerClick = useCallback(

      () => {
         if (selectedMidiControllers.length === 0) return;
         setControlleModalMode("edit");
      },
      [selectedMidiControllers]

   );


   const onDeleteControllerClick = useCallback(

      () => {
         if (selectedMidiControllers.length === 0) return;

         const result = services.midiControllerManager.removeMidiController(selectedMidiControllers[0] as string);
         if (typeof result === "string") setErrorMessage(result);

      },
      [selectedMidiControllers]

   );


   useEffect(

      () => {

         services.midiControllerManager.addEventListener("controlleradded", onControllersChanged);
         services.midiControllerManager.addEventListener("controllerremoved", onControllersChanged);
         services.midiControllerManager.addEventListener("controllerupdated", onControllersChanged);

         onControllersChanged();

         return () => {
            services.midiControllerManager.removeEventListener("controlleradded", onControllersChanged);
            services.midiControllerManager.removeEventListener("controllerremoved", onControllersChanged);
            services.midiControllerManager.removeEventListener("controllerupdated", onControllersChanged);
         }

      },
      []

   );


   const dataGridHeaders: DataGridHeaderCell[] = useMemo(

      () => [
         { id: 1, title: "Controller Name" },
         { id: 2, title: "Profile Name" },
         { id: 3, title: "Input Port" },
         { id: 4, title: "Output Port" },
      ],
      []

   );


   const dataGridData: DataGridDataRow[] = useMemo(

      () => midiControllers.map(
         (midiController) => ({
            id: midiController.controllerName,
            cells: [
               midiController.controllerName,
               midiController.profileName,
               midiController.inputPort,
               midiController.outputPort || ""
            ]
         })
      ),
      [midiControllers]

   );


   return (

      <>

         <div className="form-container">

            <div className="form-group">
               <label htmlFor="ControllerName">MIDI Controllers:</label>
               <DataGrid
                  headers={dataGridHeaders}
                  data={dataGridData}
                  onSelectedItemsChanged={onSelectedMidiControllersChanged}
                  onItemDblClick={onMidiControllerItemDblClick}
               />
            </div>

            <div className="button-group">
               <input type="button" value="New" onClick={(e) => onNewControllerClick()} />
               <input type="button" value="Edit" disabled={selectedMidiControllers.length === 0} onClick={(e) => onEditControllerClick()} />
               <input type="button" value="Delete" disabled={selectedMidiControllers.length === 0} onClick={(e) => setShowDeleteConfirm(true)} />
               <input type="button" value="Edit Profile" disabled={true} />
            </div>

         </div>

         {controllerModalMode === "add" && (
            <ControllerModal onHide={() => setControlleModalMode("hidden")} />
         )}

         {controllerModalMode === "edit" && (
            <ControllerModal onHide={() => setControlleModalMode("hidden")} data={midiControllers.find(c => c.controllerName === selectedMidiControllers[0])} />
         )}

         {showDeleteConfirm && (

            <Modal title="Confirm" type="warning" onHide={() => setShowDeleteConfirm(false)}>

               <br />

               <div className="form-group">
                  Are you sure you want to delete the <strong>{selectedMidiControllers[0]}</strong> MIDI controller?
               </div>

               <br />

               <div className="button-group">
                  <input type="button" value="Yes" data-type="danger" onClick={(e) => { onDeleteControllerClick(); setShowDeleteConfirm(false); }} />
                  <input type="button" value="No" onClick={(e) => setShowDeleteConfirm(false)} />
               </div>

            </Modal>

         )}


         {errorMessage && (

            <InfoDialog
               title="Error"
               type="error"
               message={errorMessage}
               onHide={() => setErrorMessage("")}
            />

         )}

      </>

   )

}