"use client"
import { useState, useEffect } from 'react';
import styles from './Puzzle.module.css';

const CarGame = () => {
  const [light, setLight] = useState("green"); // Initial light is green
  const [carPosition, setCarPosition] = useState(0); // Initial car position

  useEffect(() => {
    let interval:any;

    // If the light is green, move the car
    if (light === "green") {
      interval = setInterval(() => {
        setCarPosition((prevPosition) => prevPosition + 5); // Move car by 5px every interval
      }, 100); // Move every 100ms
    } else {
      clearInterval(interval); // Stop car if light is red
    }

    // Clean up interval when component is unmounted or light changes
    return () => clearInterval(interval);
  }, [light]);

  // Toggle traffic light between red and green
  const toggleLight = () => {
    setLight((prevLight) => (prevLight === "green" ? "red" : "green"));
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.trafficLight}>
        <div className={light === "red" ? styles.redLightOn : styles.redLightOff}></div>
        <div className={light === "green" ? styles.greenLightOn : styles.greenLightOff}></div>
      </div>

      <div className={styles.road}>
        <div className={styles.car} style={{ left: `${carPosition}px` }}>
          🚗
        </div>
      </div>

      <button onClick={toggleLight} className={styles.button}>
        Toggle Light
      </button>
    </div>
  );
};

export default CarGame;
