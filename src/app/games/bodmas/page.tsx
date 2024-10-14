"use client"

import React from "react"
import InfoPage from "@/app/(comps)/infoPage/InfoPage";

export default function Sudoku() {
  return (
    <>
      <InfoPage 
        title={"Bodmas"} 
        description={`
          <strong>BODMAS</strong> stands for <strong>Brackets</strong>, <strong>Orders</strong> (powers and roots, etc.), 
          <strong>Division</strong>, <strong>Multiplication</strong>, <strong>Addition</strong>, and <strong>Subtraction</strong>. 
         <br> It is the order of operations used to solve expressions in mathematics. Following the <strong>BODMAS</strong> rule 
          ensures that mathematical expressions are solved in a standard way.<br>  For example, in the expression 
          3 + 2 * (8 / 4) - 1, you first solve inside the <strong>brackets</strong>, then handle <strong>division</strong>, 
          followed by <strong>multiplication</strong>, <strong>addition</strong>, and finally <strong>subtraction</strong>.
        `} 
        route={"bodmas/play"}
      />
    </>
  )
};
