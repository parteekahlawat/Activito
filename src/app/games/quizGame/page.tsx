"use client"
import Navbar from "@/app/(comps)/header/page"
import React, { useState } from "react"
// import Quiz from "./play/page"
import Link from 'next/link';
// import "./quizgame.css";
import { Button } from "@/components/ui/button";
import InfoPage from "@/app/(comps)/infoPage/InfoPage";

export default function QuizGame (){
  // const [play, setPlay] = useState(false)
  // const router = useRouter();
  const handlePlay = ()=>{
    // router.push('/play');
  }
const description = `
How It Works:<br/>
- <strong>Engage with Questions:</strong> Test your general awareness and knowledge with a diverse range of questions across various categories.<br/>
- <strong>Interactive Experience:</strong> Answer questions to earn points and see how you stack up against others.<br/>
- <strong>Instant Feedback:</strong> Get immediate feedback on your answers to understand what you know and where you can improve.<br/>
- <strong>Re-attempt Feature:</strong> Not sure about your previous answers? No problem! You can re-attempt questions anytime to boost your score and enhance your knowledge.<br/><br/>
Features:<br/>
- <strong>Dynamic Questions:</strong> Enjoy a variety of questions designed to challenge and expand your knowledge base.<br/>
- <strong>User-Friendly Interface:</strong> Navigate the quiz easily with our intuitive and clean design.<br/>
- <strong>Progress Tracking:</strong> Keep track of your progress and revisit questions you've attempted.<br/>
- <strong>Retry Option:</strong> Revisit any question and improve your answers to achieve a higher score.
`;
  return(
    <>
    {/* <div className="quizgame ">
    <Navbar/>
    <div className="game-info ">
      <div className="game-title">Quiz Game</div>
      <div className="game-description">Description added here</div>
      <Button>
      <Link href="quizGame/play">
        Play
      </Link>
      </Button>
    </div>
    </div> */}
    <InfoPage title={"Quiz Game"} description={description} route={"quizGame/play"}/>
    </>
  )
};