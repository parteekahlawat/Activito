"use client"

import React, { useState } from "react"
import "./tictactoe.css"
import InfoPage from "@/app/(comps)/infoPage/InfoPage";

export default function QuizGame() {
  return (
    <>
      <InfoPage 
        title={"Tic Tac Toe"} 
        description={`
          <strong>Tic Tac Toe</strong> is a classic two-player game where the objective is to get three of your 
          marks (either <strong>X</strong> or <strong>O</strong>) in a row—either horizontally, vertically, or diagonally.<br> 
          Players take turns placing their mark in an empty square on the <strong>3x3 grid</strong>. The first player 
          to get three marks in a row wins the game! <br>If all squares are filled and no player has three in a row, 
          the game ends in a draw. Play against a friend and see who can outsmart the other in this timeless game!
        `} 
        route={"tictactoe/play"}
      />
    </>
  )
};
