import React, { useCallback, useEffect, useState } from "react";
import MixButton from "../../controls/MidiMix/MixButton";
import MixFader from "../../controls/MidiMix/MixFader";
import MixKnob from "../../controls/MidiMix/MixKnob";

import "./style.css";

interface Props {
   channelNumber: number;
   channelName: string;
   hasGain?: boolean;
   hasPan?: boolean;
   hasSolo?: boolean;
   hasMute?: boolean;
   soloDown?: boolean;
   soloActive?: boolean;
   muteDown?: boolean;
   muteActive?: boolean;
   gainMin?: number;
   gainMax?: number;
   gainValue?: number;
   panValue?: number;
   faderValue?: number;
   faderStereo?: boolean;
   faderLevelLeft?: number;
   faderLevelRight?: number;
}

export default function InputChannel({
   channelNumber,
   channelName,
   hasGain = true,
   hasPan = true,
   hasSolo = true,
   hasMute = true,
   soloDown = false,
   soloActive = false,
   muteDown = false,
   muteActive = false,
   gainMin = 0,
   gainMax = 6,
   gainValue = 0,
   panValue = 0,
   faderValue = 0,
   faderStereo = false,
   faderLevelLeft = 0,
   faderLevelRight = 0,
}: Props) {

   return (

      <div className="InputChannel">

         <div className="gain">

            {hasGain && (
               <MixKnob
                  label="Gain"
                  minValue={gainMin}
                  maxValue={gainMax}
                  value={gainValue}
                  postfix="dB"
               />
            ) || (
                  <div className="nogain"></div>
               )
            }

         </div>

         <div className="pan">

            {hasPan && (
               <MixKnob
                  label="Pan"
                  minValue={0}
                  maxValue={100}
                  value={panValue}
               />
            ) || (
                  <div className="nopan"></div>
               )
            }

         </div>

         <div className="buttons">

            <div className="solo">

               {hasSolo && (
                  <MixButton
                     label="SOLO"
                     color="yellow"
                     active={soloActive}
                     down={soloDown}
                  />
               ) || (
                     <div className="nosolo"></div>
                  )
               }

            </div>

            <div className="mute">

               {hasMute && (
                  <MixButton
                     label="MUTE"
                     color="red"
                     active={muteActive}
                     down={muteDown}
                  />
               ) || (
                     <div className="nomute"></div>
                  )
               }

            </div>

         </div>

         <div className="fader">

            <MixFader
               value={faderValue}
               stereo={faderStereo}
               levelLeft={faderLevelLeft}
               levelRight={faderLevelRight}
            />

         </div>

         <div className="label">
            {channelNumber > 0 ? channelNumber : ""}
            <br />
            {channelName}
         </div>

      </div>

   );

}