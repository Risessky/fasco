'use client';
import React from 'react';

const Loader = () => {
  return (
    <div className="relative w-[50px] h-[50px] -translate-x-[25px] mt-96 mx-auto">
      <div className="absolute w-full h-full rounded-full mix-blend-multiply bg-[#fc3f9e] animate-rotate9" />
      <div className="absolute w-full h-full rounded-full mix-blend-multiply bg-[#50e8f3] animate-rotate9-delay" />

      <style jsx>{`
        @keyframes rotate9 {
          0%, 100% {
            left: 50px;
          }
          25% {
            transform: scale(0.3);
          }
          50% {
            left: 0;
          }
          75% {
            transform: scale(1);
          }
        }

        .animate-rotate9 {
          animation: rotate9 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
        }

        .animate-rotate9-delay {
          animation: rotate9 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
