import React from "react";

import "./style.css"

interface Props {
   label: string;
   color: "none" | "red" | "green" | "yellow";
   down: boolean;
   active: boolean;
}

export default function MixButton({
   label,
   color,
   down,
   active
}: Props) {

   const [_down, _setDown] = React.useState(down);

   return (
      <div
         className="MixButton"
         data-color={color}
         data-down={_down}
         data-active={active}
      >
         {label}
      </div>
   )

}