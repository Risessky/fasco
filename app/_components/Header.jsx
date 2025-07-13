"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="container mx-auto flex items-center justify-between mt-[70px] px-4 relative max-sm:px-10 max-md:mt-10">
      <Link href="/" className="text-[52px] max-sm:text-3xl text-grayDark font-volkhov">
        FASCO
      </Link>

      {/* Burger menu button */}
     <button
  ref={buttonRef}
  className="hidden max-md:block relative z-50"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle Menu"
>

        <svg
          className="w-8 h-8 text-grayDark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      

      {/* Navigation Links */}
      <nav
        ref={navRef}
        className={`flex items-center gap-[58px] 
          max-md:flex-col max-md:bg-white 
          max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:py-10 
          transition-transform duration-300 ease-in-out
          max-md:z-40 
          ${isOpen ? "max-md:translate-y-0 max-md:shadow-lg" : "max-md:-translate-y-full"}
        `}
      >
        <Link href="/" className="text-grayDark" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/" className="text-grayDark" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link href="/" className="text-grayDark" onClick={() => setIsOpen(false)}>Cart</Link>
        <Link
          href="/"
          className="text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)]"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
