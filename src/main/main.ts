import { app, BrowserWindow } from "electron";

import * as path from "path";
import * as url from "url";
import { AppContext } from "./AppContext";
import { Config } from "./lib/Config";

import { Logger } from "./lib/log/Logger";
import { MidiControllerManager } from "./MidiControllerManager/MidiControllerManager";
import { MidiControllerManagerConfigData } from "./MidiControllerManager/MidiControllerManagerConfig";

const appContext: AppContext = {} as any;

appContext.mainWindow = null;

function run(): void {

   Logger.level = 9;

   if (!appContext.mainWindow) {
      setTimeout(() => { run(); }, 0);
      return;
   }

   const config = new Config<MidiControllerManagerConfigData>(app.getPath("userData"));
   config.init();

   const midiControllerManager = new MidiControllerManager(config, appContext);
   midiControllerManager.init();
   midiControllerManager.run();

}


function cleanup(): void {
}


function darwinQuit(): void {

   if (process.platform !== "darwin") app.quit();

}


function createWindow() {

   appContext.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      backgroundColor: "#1e1e1e",
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
         devTools: process.env.NODE_ENV !== "production",
      },
   });


   if (process.env.NODE_ENV === "development") {
      appContext.mainWindow.loadURL("http://localhost:4000");
   } else {
      appContext.mainWindow.loadURL(
         url.format({
            pathname: path.join(__dirname, "renderer/index.html"),
            protocol: "file:",
            slashes: true,
         })
      );
   }

   appContext.mainWindow.on("closed", () => {
      cleanup();
      appContext.mainWindow = null;
      app.exit(0);
   });

}


app.on("ready", createWindow);


app.on("activate", () => {
   if (appContext.mainWindow === null) createWindow();
});

app.on("window-all-closed", darwinQuit);


run();
