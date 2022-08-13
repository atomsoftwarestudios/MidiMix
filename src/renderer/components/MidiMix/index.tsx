import React, { useMemo, useState } from "react";
import Tabs from "../controls/Tabs";
import { MixMode } from "./MixMode";

import "./style.css";

import SettingsIcon from "../icons/settings";
import { Settings } from "../Settings";
import { ChannelModel } from "../../models/ChannelModel";

export interface Props {
   selectedMode?: number;
}

export interface MixModeModel {
   label: string;
   channels: ChannelModel[];
   master?: ChannelModel;
}

type MixModes = "home" | "main" | "masters" | "aux" | "fx" | "dca";

const modes: { [modeName in MixModes]: MixModeModel } = {
   home: {

      label: "Home",
      master: {
         channelNumber: 0,
         channelName: "Master",
         hasGain: false,
         hasSolo: false,
         hasMute: false,
         faderStereo: true,
         faderLevelLeft: 0,
         faderLevelRight: 0,
         faderValue: 0,
      },

      channels: [
         {
            channelNumber: 1,
            channelName: "Drums",
            faderLevelLeft: 0,
            faderValue: 0,
         },
         {
            channelNumber: 2,
            channelName: "Bass Guitar",
            hasGain: false,
            hasPan: false,
            hasSolo: false,
            faderLevelLeft: 0,
            faderValue: 0,
         },
         {
            channelNumber: 3,
            channelName: "Electric Guitars",
            hasGain: false,
            hasSolo: false,
            faderLevelLeft: 0,
            faderValue: 0,
         },
         {
            channelNumber: 2,
            channelName: "DI Boxes",
            hasGain: false,
            hasSolo: false,
            faderLevelLeft: 0,
            faderValue: 0,
         },
      ]
   },

   main: {
      label: "Main",
      master: {
         channelNumber: 0,
         channelName: "Master",
         hasGain: false,
         hasSolo: false,
         faderLevelLeft: 0,
         faderValue: 0,
      },
      channels: []
   },

   masters: {
      label: "Masters",
      master: {
         channelNumber: 0,
         channelName: "Master",
         hasGain: false,
         hasSolo: false,
         faderLevelLeft: 0,
         faderValue: 0,
      },
      channels: []
   },

   aux: {
      label: "Aux",
      master: {
         channelNumber: 0,
         channelName: "AUX Master",
         hasGain: false,
         hasSolo: false,
         faderLevelLeft: 0,
         faderValue: 0,
      },
      channels: []
   },

   fx: {
      label: "FX",
      master: {
         channelNumber: 0,
         channelName: "FX Master",
         hasGain: false,
         hasSolo: false,
         faderLevelLeft: 0,
         faderValue: 0,
      },
      channels: []
   },

   dca: {
      label: "DCA",
      master: {
         channelNumber: 0,
         channelName: "DCA Master",
         hasGain: false,
         hasSolo: false,
         faderLevelLeft: 0,
         faderValue: 0,
      },
      channels: []
   }
}

export default function MidiMix({
   selectedMode = 0
}: Props) {

   const [selMode, setSelMode] = useState<number>(selectedMode);
   const [showSettings, setShowSettings] = useState<boolean>(false);

   const mixModes = useMemo(
      () => [
         (<MixMode modeName="Home" channels={modes["home"].channels} master={modes["home"].master} />),
         (<MixMode modeName="Main" channels={modes["main"].channels} master={modes["main"].master}  />),
         (<MixMode modeName="Masters" channels={modes["masters"].channels} master={modes["masters"].master}  />),
         (<MixMode modeName="AUX" channels={modes["aux"].channels} master={modes["aux"].master}  />),
         (<MixMode modeName="FX" channels={modes["aux"].channels} master={modes["fx"].master}  />),
         (<MixMode modeName="DCA" channels={modes["dca"].channels} master={modes["dca"].master}  />)
      ],
      []
   )

   const settings = useMemo(
      () => (
         <div className="settingsIconContainer" onMouseDown={() => setShowSettings(true)}><SettingsIcon /></div>
      ),
      []
   )

   return (

      <div className="MidiMix">

         {showSettings && (<Settings onHide={() => setShowSettings(false)} />)}

         {!showSettings && (

            <Tabs
               id="midi-mix-tabs"
               post={settings}
               selectedTab={selMode}
               tabs={["Home", "Main", "Masters", "AUX", "FX", "DCA"]}
               onTabChanged={(tab) => { setSelMode(tab); }}
            >
               {mixModes[selMode]}
            </Tabs>

         )}

      </div>

   )

}