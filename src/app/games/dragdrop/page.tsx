"use client"

import React from "react"
import InfoPage from "@/app/(comps)/infoPage/InfoPage";

export default function DragDrop() {
  return (
    <>
      <InfoPage 
        title={"Drag Drop"} 
        description={`
          In this game, you will drag items into one of two boxes: <strong>Food</strong> or <strong>Things</strong>. 
          <br>The goal is to correctly categorize the items by dragging and dropping them into the right box. 
          Items like fruits, vegetables, and snacks should go into the <strong>Food</strong> box, while objects 
          like books, toys, and tools should go into the <strong>Things</strong> box.<br> Drag and drop each item 
          to its correct category to test your sorting skills!
        `} 
        route={"dragdrop/play"}
      />
    </>
  )
};
