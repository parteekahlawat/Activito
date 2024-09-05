"use client"
import Banner from "@/app/(comps)/banner";
import Card from "@/app/(comps)/card/card";
import Navbar from "@/app/(comps)/header/page";
import "./home.css"
export default function Dashboard() {
  return (
    <>
    <div>
    <Navbar/>
    <div className="banner">
        <Banner/>
    </div>
    <div className="cards container mx-auto px-4 py-8 flex flex-wrap gap-4 justify-start">
  <Card title={"Quiz Game"} description={"Description1"} link={"/games/quizGame"} />
  <Card title={"Explore Universe"} description={"Description2"} link={"/games/exploreUniverse"} />
  <Card title={"Tic Tac Toe"} description={"Description3"} link={"/games/tictactoe"} />
  <Card title={"Game4"} description={"Description4"} link={""} />
  <Card title={"Game5"} description={"Description5"} link={"Link to page"} />
  <Card title={"Game6"} description={"Description6"} link={"Link to page"} />
  <Card title={"Game7"} description={"Description7"} link={"Link to page"} />
  <Card title={"Game8"} description={"Description8"} link={"Link to page"} />
  <Card title={"Game9"} description={"Description9"} link={"Link to page"} />
  <Card title={"Game10"} description={"Description10"} link={"Link to page"} />
</div>

    
    </div>
    
    </>
  );
}