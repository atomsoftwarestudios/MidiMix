import React from "react";

import "./style.css"

interface Props {
   value: number;
   stereo?: boolean;
   levelLeft: number;
   levelRight: number;
}

export default function MixFader({
   value,
   stereo = false,
   levelLeft,
   levelRight,
}: Props): JSX.Element {

   return (
      <div className="MixFader">

         <div className="background"></div>

         <div className="level-left"></div>
         <div className="level-left-value" style={{ height: `${100 - levelRight}%` }}></div>
         <div className="level-left-mask1"></div>
         <div className="level-left-mask2"></div>

         {stereo && (
            <>
               <div className="level-right"></div>
               <div className="level-right-value" style={{ height: `${100 - levelRight}%` }}></div>
               <div className="level-right-mask1"></div>
               <div className="level-right-mask2"></div>
            </>
         )}

         <div className="handle" style={{ top: `${100 - value}%` }}></div>

      </div>
   )

}