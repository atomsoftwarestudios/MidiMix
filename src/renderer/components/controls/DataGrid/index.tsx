import React, { useCallback, useState } from "react";

import "./style.css";

export interface DataGridHeaderCell {
   id: string | number;
   title: (string | React.ReactElement);
}

export interface DataGridDataRow {
   id: string | number;
   cells: (string | React.ReactElement)[];
}

interface DataGridProps {
   headers: DataGridHeaderCell[];
   data: DataGridDataRow[];
   multiselect?: boolean;
   selectedItems?: string[];
   onSelectedItemsChanged?: (selectedItems: (string | number)[]) => void;
   onItemDblClick?: (item: (string | number)) => void;
}

export default function DatGrid({
   headers = [],
   data = [],
   multiselect = false,
   selectedItems = [],
   onSelectedItemsChanged,
   onItemDblClick
}: DataGridProps) {

   const [currentSelectedItems, setCurrentSelectedItems] = useState<(string | number)[]>(selectedItems);

   const itemMouseDown = useCallback(

      (e: React.MouseEvent, itemId: string | number) => {

         if (onItemDblClick && e.detail > 1) e.preventDefault();

         let items: (string | number)[] = [];

         if (e.ctrlKey && multiselect) {

            if (currentSelectedItems.includes(itemId)) {
               items = (currentSelectedItems.filter(id => id !== itemId));
            } else {
               items = ([...currentSelectedItems, itemId]);
            }

         } else {
            items = ([itemId]);
         }

         setCurrentSelectedItems(items);
         onSelectedItemsChanged && onSelectedItemsChanged(items);

      },
      [currentSelectedItems]

   );


   return (

      <div className="DataGrid-container">

         <table>

            <thead>

               <tr>
                  {headers.map(
                     (header) => (
                        <th key={header.id}>{header.title}</th>
                     )
                  )}
               </tr>

            </thead>

            <tbody>

               {data.map(midiController => (

                  <tr
                     key={midiController.id}
                     onMouseDown={(e) => itemMouseDown(e, midiController.id)}
                     onDoubleClick={() => onItemDblClick && onItemDblClick(midiController.id)}
                     data-selected={currentSelectedItems.includes(midiController.id)}
                  >

                     {midiController.cells.map(
                        (cell, index) => (
                           <td key={index}>{cell}</td>
                        )
                     )}

                  </tr>

               ))}

            </tbody>

         </table>

      </div>

   );


}