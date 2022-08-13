import React from "react";

import "./style.css";

export interface Props extends React.PropsWithChildren {
   id?: string;
   pre?: string | JSX.Element;
   post?: string | JSX.Element;
   selectedTab: number;
   tabs: string[];
   onTabChanged?: (tab: number) => void;
}

export default function Tabs({
   id,
   pre,
   post,
   selectedTab,
   tabs,
   onTabChanged,
   children,
}: Props) {

   return (

      <div id="id" className="Tabs">

         <div className="content">
            {children}
         </div>


         <div className="header">

            {pre && <div className="pre">{pre}</div>}

            <div className="tabs-container">

               {tabs.map(

                  (tab, index) => (
                     <div
                        key={tab}
                        data-selected={index === selectedTab}
                        onMouseDown={() => onTabChanged && onTabChanged(index)}
                        className="tab"
                     >
                        {tab}
                     </div>
                  )
               )}

            </div>

            {post && <div className="post">{post}</div>}

         </div>

      </div >


   )

}