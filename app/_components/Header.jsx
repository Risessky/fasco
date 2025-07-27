"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import TrackingText from "./TrackingText";

function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const firstName = session?.user?.name.split(" ")[0] ?? "guest";

  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsOpen(false);

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0  left-0 w-full z-50 bg-white transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-4 max-sm:px-10">
        <TrackingText>
          <Link
            href="/"
            className="text-[52px] max-sm:text-3xl text-grayDark font-volkhov"
          >
            FASCO
          </Link>
        </TrackingText>

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          ref={navRef}
          className={`flex items-center gap-[58px] 
            max-md:flex-col max-md:bg-white 
            max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:py-10 
            transition-transform duration-300 ease-in-out
            max-md:z-40
            ${
              isOpen
                ? "max-md:translate-y-0 max-md:shadow-lg"
                : "max-md:-translate-y-full"
            }
          `}
        >
          <Link
            href="/"
            className={`text-grayDark ${
              pathname === "/" ? "text-black font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-grayDark ${
              pathname === "/shop" ? "text-black font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className={`text-grayDark ${
              pathname === "/cart" ? "text-black font-semibold" : ""
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cart
          </Link>

          {session?.user?.image && session.user.name ? (
            <Link
              href="/account"
              className="flex items-center gap-3 bg-grayLight px-4 py-2 rounded-[50px]"
            >
              <div className="relative rounded-full w-10 h-10">
                <Image
                  src={session.user.image}
                  fill
                  className="object-cover rounded-full"
                  alt={session.user.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-semibold text-[18px] text-grayDark">
                {firstName}
              </span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)]"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;



// "use client";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import TrackingText from "./TrackingText";

// function Header() {
//   const { data: session } = useSession();
//   // console.log(session);
//   const firstName = session?.user?.name.split(" ")[0] ?? "guest";

//   const [isOpen, setIsOpen] = useState(false);
//   const [showHeader, setShowHeader] = useState(true);
//   const navRef = useRef(null);
//   const buttonRef = useRef(null);
//   const lastScrollY = useRef(0);




//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         isOpen &&
//         navRef.current &&
//         !navRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     function handleScroll() {
//       const currentScrollY = window.scrollY;

//       setIsOpen(false);

//       if (currentScrollY > lastScrollY.current) {
//         setShowHeader(false);
//       } else {
//         setShowHeader(true);
//       }
//       lastScrollY.current = currentScrollY;
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0  left-0 w-full z-50 bg-white transition-transform duration-300
//         ${showHeader ? "translate-y-0" : "-translate-y-full"}
//       `}
//     >
//       <div className="container mx-auto flex items-center justify-between py-6 px-4 max-sm:px-10">
//         <TrackingText>
        
//         <Link
//           href="/"
//           className="text-[52px] max-sm:text-3xl text-grayDark font-volkhov"
//           >
//           FASCO
//         </Link>
//             </TrackingText>

//         <button
//           ref={buttonRef}
//           className="hidden max-md:block relative z-50"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           <svg
//             className="w-8 h-8 text-grayDark"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         <nav
//           ref={navRef}
//           className={`flex items-center gap-[58px] 
//             max-md:flex-col max-md:bg-white 
//             max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:py-10 
//             transition-transform duration-300 ease-in-out
//             max-md:z-40
//             ${
//               isOpen
//                 ? "max-md:translate-y-0 max-md:shadow-lg"
//                 : "max-md:-translate-y-full"
//             }
//           `}
//         >
//           <Link
//             href="/"
//             className="text-grayDark"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/shop"
//             className="text-grayDark"
//             onClick={() => setIsOpen(false)}
//           >
//             Shop
//           </Link>
//           <Link
//             href="/cart"
//             className="text-grayDark"
//             onClick={() => {
//               setIsOpen(false);
//             }}
//           >
//             Cart
//           </Link>

//           {session?.user?.image && session.user.name ? (
//             <Link
//               href="/account"
//               className="flex items-center gap-3 bg-grayLight px-4 py-2 rounded-[50px]"
//             >
//               <div className="relative rounded-full w-10 h-10">
//                 <Image
//                   src={session.user.image}
//                   fill
//                   className="object-cover rounded-full"
//                   alt={session.user.image}
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//               <span className="font-semibold text-[18px] text-grayDark">
//                 {firstName}
//               </span>
//             </Link>
//           ) : (
//             <Link
//               href="/login"
//               className="text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)]"
//               onClick={() => setIsOpen(false)}
//             >
//               Sign Up
//             </Link>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
