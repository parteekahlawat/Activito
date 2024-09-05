"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <Link href="/">Activito</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}
        >
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300 p-4">
            Home
          </Link>
          <Link href="pages/about" className="text-gray-300 hover:text-white transition duration-300 p-4">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition duration-300 p-4">
            Services
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300 p-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
