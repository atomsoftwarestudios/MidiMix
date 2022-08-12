import React, { useCallback, useEffect } from "react";
import Modal from "../Modal";

interface Props {
   title: string;
   message: string;
   type?: "info" | "warning" | "error";
   onHide: () => void;
}

export default function InfoDialog({
   title,
   message,
   type,
   onHide
}: Props): JSX.Element {

   return (

      <Modal title={title} type={type} onHide={onHide}>
         <br />
         <div className="error-message">{message}</div>
         <br />
         <div className="button-group-center">
            <input type="button" value="Close" data-type="secondary" onClick={(e) => { onHide() }}/>
         </div>
      </Modal>

   );

};