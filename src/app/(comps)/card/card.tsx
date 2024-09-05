import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div
      className="
      w-80
        bg-black 
        border 
        border-white 
        rounded-lg 
        shadow-lg 
        transform 
        transition 
        duration-300 
        hover:scale-105 
        hover:shadow-2xl
        overflow-hidden
      "
    >
      {/* <a href="#">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          src="/your-image-source.jpg"
          alt={title}
        />
      </a> */}
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
            text-white 
            bg-blue-600 
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
