import React, { useMemo } from "react";

import "./style.css"

interface Props {
   label: string;
   minValue: number;
   maxValue: number;
   value: number;
   postfix?: string;
}

export default function MixKnob({
   label,
   minValue,
   maxValue,
   value,
   postfix = "",
}: Props) {

   const [_value, _setValue] = React.useState(value);

   const deg = -45 + (value - minValue) / (maxValue - minValue) * 270;

   return (

      <div className="MixKnob">

         <div className="label">
            {label}
         </div>

         <div className="knob" style={{transform: `rotateZ(${deg}deg)`}}>
            <div></div>
         </div>

         <div className="label">
            {`${value.toFixed(2)} ${postfix}`.trim()}
         </div>

      </div>

   )

}
