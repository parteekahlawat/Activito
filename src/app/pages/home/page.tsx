"use client"
import Banner from "@/app/(comps)/banner";
import Card from "@/app/(comps)/card/card";
import Navbar from "@/app/(comps)/header/page";
import "./home.css"
import Footer from "@/app/(comps)/footer";
export default function Dashboard() {
  return (
    <>
    <div>
    <Navbar/>
    <div className="banner">
        <Banner/>
    </div>
    <div className="cards container mx-auto px-4 py-8 flex flex-wrap gap-4 justify-start">
  <Card title={"Quiz Game"} description={"Gk Quiz"} link={"/games/quizGame"} />
  <Card title={"Explore Universe"} description={"Astronomy"} link={"/games/exploreUniverse"} />
  <Card title={"Tic Tac Toe"} description={"Mind Game"} link={"/games/tictactoe"} />
  <Card title={"Bodmas"} description={"Math Game"} link={"/games/bodmas"} />
  <Card title={"Drag Drop"} description={"Selective Game"} link={"/games/dragdrop"} />
  <Card title={"Scale of the Universe"} description={"Astronomy"} link={"/games/scaleOfTheUniverse"} />
  <Card title={"Pattern Matching"} description={"Mind Game"} link={"/games/patternMatching"} />
</div>

    
    </div>
    <Footer/>
    </>
  );
}