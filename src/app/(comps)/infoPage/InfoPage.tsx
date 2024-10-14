"use client"
import Navbar from "@/app/(comps)/header/page"
import React, { useState } from "react"
import Link from 'next/link';
import "./styles.css"
import { Button } from "@/components/ui/button";
interface InfoPage {
    title:any;
    description:any;
    route:any;
}
const InfoPage: React.FC<InfoPage> = ({title, description, route})=>{
  // const [play, setPlay] = useState(false)
  // const router = useRouter();
  const handlePlay = ()=>{
    // router.push('/play');
  }
  return(
    <>
    <div className="quizgame ">
    <Navbar/>
    <div className="game-info">
      <div className="game-title">{title}</div>
      <div className="game-description" dangerouslySetInnerHTML={{ __html: description }} />
      <Button className="play">
      <Link href={route} className="play-button">
        Play
      </Link>
      </Button>
    </div>
    </div>
    </>
  )
};

export default InfoPage;