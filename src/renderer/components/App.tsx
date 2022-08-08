import { ipcRenderer } from "electron";
import React, { useEffect } from "react";

import "./app.css";

export default function App(): JSX.Element {

   useEffect(
      () => {
         ipcRenderer.send("test", "Hello World You Sucker Bitch Shit!!!");
         console.log("Message sent.");
      },
      []
   );

   return (
      <main>
         <h1>Hello World!!!</h1>
      </main>
   );

}
