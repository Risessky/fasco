'use client';
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-8 w-5 h-5 rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] shadow-lg animate-pulse1" />
        <div className="absolute top-8 left-16 w-5 h-5 rounded-full bg-gradient-to-br from-[#0093E9] to-[#80D0C7] shadow-lg animate-pulse2" />
        <div className="absolute top-16 left-8 w-5 h-5 rounded-full bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] shadow-lg animate-pulse3" />
        <div className="absolute top-8 left-0 w-5 h-5 rounded-full bg-gradient-to-tr from-[#3EECAC] to-[#EE74E1] shadow-lg animate-pulse4" />
      </div>

      <style jsx>{`
        @keyframes pulseCustom {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.2);
            opacity: 0.5;
          }
        }

        .animate-pulse1 {
          animation: pulseCustom 1.2s ease-in-out infinite;
        }

        .animate-pulse2 {
          animation: pulseCustom 1.2s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .animate-pulse3 {
          animation: pulseCustom 1.2s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        .animate-pulse4 {
          animation: pulseCustom 1.2s ease-in-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
