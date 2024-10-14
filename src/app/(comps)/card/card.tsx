import React from "react";
import "./card.css"
interface CardProps {
  title: string;
  description: string;
  link: string;
}
const styles = {
  // background: "linear-gradient(135deg, #1e1e24 10%, #050505 60%)",
  animation: "gradient-shift 1s ease-in-out infinite", 
  backgroundSize: "200% 200%",
  // border: "1px solid white",
  borderRadius: "1rem",
  // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  // overflow: "hidden",
// padding: "2rem",
margin: "1.5rem",
minHeight: "25vh",
minWidth: "20vw"
};

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div
      className="m2 "
      style={styles} 
    >
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-gray-300">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-300 transition-colors duration-300">
          {description}
        </p>
        <a
          href={link}
          className="
            inline-flex 
            items-center 
            px-3 
            py-2 
            text-sm 
            font-medium 
            text-center 
            text-black 
            bg-white 
            rounded-lg 
            transition 
            duration-300 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            focus:ring-blue-300
          "
        >

          Open
          <svg
            className="ml-2 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

          </div>
      </div>
  );
};

export default Card;
