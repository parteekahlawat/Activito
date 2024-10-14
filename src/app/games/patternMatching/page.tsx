import InfoPage from "@/app/(comps)/infoPage/InfoPage";
// import ExploreUniverse from "./explore";

export default function game4() {
    const des = `
  <p>
    <strong>Scale of the Universe</strong> offers a fascinating interactive experience that allows you to explore the size of objects in the universe, from the smallest particles to the largest cosmic structures. This educational tool helps you understand the vast differences in scale, bringing a sense of awe as you compare the size of atoms, planets, stars, galaxies, and beyond.
  </p>
  <p>
    Through an intuitive interface, you can zoom in and out to explore objects at different scales, from the quantum level to the observable universe. Discover the relative size of familiar objects like humans, animals, and landmarks, then zoom out to explore planets, stars, and galaxies, seeing how they fit into the grand cosmic scale.
  </p>
  <br>
  <h2>Features:</h2>
  <ul>
    <li>1. Explore a vast range of objects, from subatomic particles to entire galaxies.</li>
    <li>2. Learn about the size and scale of objects in relation to each other.</li>
    <li>3. Interactive zooming for a seamless experience of moving through different scales.</li>
    <li>4. Engaging visuals to help visualize objects that are hard to imagine in real life.</li>
    <li>5. Educational insights about various celestial and terrestrial objects.</li>
  </ul>
  <br>
  <p>
    Whether you're curious about the smallest particles or the largest galaxies, the <strong>Scale of the Universe</strong> offers a captivating way to explore and learn about the incredible diversity of objects in our universe.
  </p>`;
    
    return (
        <InfoPage title={"Pattern Matching"} description={des} route={"https://scaleofuniverse.com/en"} />
    )
}
