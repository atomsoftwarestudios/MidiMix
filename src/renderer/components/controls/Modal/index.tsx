import React, { useCallback, useEffect } from "react";

import "./style.css";

interface Props extends React.PropsWithChildren {
   title: string;
   onHide?: () => void;
   type?: "info" | "warning" | "error";
}

export default function Modal({
   title = "",
   type,
   onHide,
   children
}: Props): JSX.Element {

   const onKeyDown = useCallback(

      (e: KeyboardEvent) => {

         if (e.key === "Escape") onHide && onHide();

      },
      []
   );

   useEffect(

      () => {

         document.addEventListener("keydown", onKeyDown);

         document.body.style.overflow = "hidden";
         document.body.style.top = `-${window.scrollY}px`;

         return () => {

            const scrollY = document.body.style.top;
            document.body.style.overflow = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || '0') * -1);

            document.removeEventListener("keydown", onKeyDown);

         }

      },
      []

   );

   return (

      <div className="Modal" role="dialog" aria-modal="true">

         <div className="background" />

         <div className="body">

            <div className="container">

               <div className="title" data-type={type}>
                  <h4>{title}</h4>
               </div>

               <div className="content">
                  {children}
               </div>

            </div>

         </div>

      </div>

   );

}