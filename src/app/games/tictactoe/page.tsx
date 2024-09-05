"use client"
import Navbar from "@/app/(comps)/header/page"
import React, { useState } from "react"
// import Quiz from "./play/page"
import Link from 'next/link';
// import "./quizgame.css";
import "./tictactoe.css"
import { Button } from "@/components/ui/button";
import InfoPage from "@/app/(comps)/infoPage/InfoPage";

export default function QuizGame (){
  // const [play, setPlay] = useState(false)
  // const router = useRouter();
  const handlePlay = ()=>{
    // router.push('/play');
  }
  return(
    <>
    {/* <div className="quizgame">
    <Navbar/>
    <div className="game-info">
      <div className="game-title">Tic Tac Toe</div>
      <div className="game-description">Description added here</div>
      <Button>
      <Link href="tictactoe/play">
        play
      </Link>
      </Button>
    </div>
    </div> */}
    <InfoPage title={"Tic Tac Toe"} description={"Add Description Here"} route={"tictactoe/play"}/>
    </>
  )
};