import React from "react";

import { ChannelModel } from "../../../models/ChannelModel";

import MixButton from "../../controls/MidiMix/MixButton";
import Tabs from "../../controls/Tabs";
import InputChannel from ".././InputChannel";

import "./style.css";

interface Props {
   modeName: string;
   master?: ChannelModel;
   channels: ChannelModel[];
}

export function MixMode({
   modeName,
   master,
   channels
}: Props): JSX.Element {

   return (
      <div className="MixMode">

         <h1>{modeName}</h1>

         <div className="channel-settings">
         </div>

         <div className="input-channels">

            <Tabs
               selectedTab={1}
               tabs={["01 - 08", "09 - 16", "17 - 24", "24 - 32", "33-40", "41-48"]}
            >

               <div className="input-channels-container">

                  {[0, 1, 2, 3, 4, 5, 6, 7].map(
                     (channel) => (
                        channels[channel] ? (
                           <InputChannel key={channels[channel].channelName + channels[channel].channelNumber} {...channels[channel]} />
                        ) : (
                           <div className="noChannel"></div>
                        )
                     )
                  )}

                  {master ? (<InputChannel {...master} />) : null}


               </div>

            </Tabs>

         </div>

         <div className="output-channels">

            <MixButton color="yellow" active={true} down={false} label="AUX 1 | 2" />
            <MixButton color="yellow" active={false} down={false} label="AUX 3" />
            <MixButton color="yellow" active={false} down={false} label="AUX 4" />
            <MixButton color="yellow" active={false} down={false} label="AUX 5" />
            <MixButton color="yellow" active={false} down={false} label="AUX 6" />
            <MixButton color="yellow" active={false} down={false} label="AUX 7" />
            <MixButton color="yellow" active={false} down={false} label="AUX 8" />
            <MixButton color="yellow" active={false} down={false} label="AUX 9" />
            <MixButton color="yellow" active={false} down={false} label="HOME" />

         </div>

      </div>
   );

}