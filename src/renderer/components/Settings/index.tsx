import React from "react";
import { MidiControllerManager } from "./MidiControllerManager";

import "./style.css";

interface Props {
   onHide: () => void;
}

export function Settings({
   onHide,
}: Props): JSX.Element {

   return (
      <div className="Settings">

         <MidiControllerManager />

         <br/>

         <div className="button-group">
            <input type="button" onClick={onHide} value="Close" />
         </div>

      </div>
   );

}