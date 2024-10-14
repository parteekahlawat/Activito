import InfoPage from "@/app/(comps)/infoPage/InfoPage";
import ExploreUniverse from "./explore";

export default function game2() {
    const des = `
  <p>
    <strong>Explore the Universe</strong> is an immersive journey that takes you across the vastness of space, allowing you to interactively navigate through a stunning 3D model of our universe. Inspired by <a href="https://stars.chromeexperiments.com/" target="_blank" rel="noopener noreferrer">Chrome Experiments: Stars</a>, this game provides a visually captivating experience for players to explore stars, constellations, and galaxies like never before.
  </p>
  <p>
    With intuitive controls, players can zoom in and out, click on individual stars to learn more about them, and discover how they connect to form the familiar patterns in the night sky. The game is designed to educate and inspire curiosity about the mysteries of space while offering an engaging, relaxing way to explore the universe.
  </p>
  <br>
  <h2>Features:</h2>
  <ul>
    <li>1. Real-time 3D simulation of stars and galaxies.</li>
    <li>2. Interactive exploration with detailed information about celestial bodies.</li>
    <li>3. Stunning visuals with realistic effects to bring the cosmos to life.</li>
    <li>4. Learn about different constellations, their history, and significance.</li>
    <li>5. Seamless navigation that allows players to zoom from a galaxy view down to individual stars.</li>
  </ul>
  <br>
  <p>
    Whether you are a seasoned astronomer or just someone curious about the night sky, <strong>Explore the Universe</strong> offers a user-friendly way to experience the beauty and wonder of space from your own device.
  </p>`;
    return (
        <InfoPage title={"Explore Universe"} description={des} route={"https://stars.chromeexperiments.com/"} />
    )
}