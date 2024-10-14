"use client";

import React from 'react';
import Image from 'next/image';
import './cardcss.css';  // Ensure to include your styles

const developers = [
  {
    name: "Parteek",
    role: "Frontend Developer",
    image: "/images/alice.jpg",  // Path to developer's image
    description: ""
  },
  {
    name: "Yamini",
    role: "Frontend Developer",
    image: "/images/bob.jpg",  // Path to developer's image
    description: ""
  }
];

const Developers = () => {
  return (
    <div className="developers">
      {developers.map((dev, index) => (
        <div key={index} className="card">
          <Image src={dev.image} alt={dev.name} width={150} height={150} className="card-image" />
          <div className="card-content">
            <h2 className="card-name">{dev.name}</h2>
            <h3 className="card-role">{dev.role}</h3>
            <p className="card-description">{dev.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Developers;
