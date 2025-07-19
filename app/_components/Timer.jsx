"use client";
import { useState, useEffect } from "react";

function Timer() {
  const initialTime = 194730;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return initialTime; 
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-nowrap gap-3 text-3xl">
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-[76px] h-[76px] border-2 border-grayLight rounded-[10px] shadow-2xl flex justify-center items-center font-digital">
          {String(days).padStart(2, "0")}
        </div>
        <span className="text-[32px]">Days</span>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-[76px] h-[76px] border-2 border-grayLight rounded-[10px] shadow-2xl flex justify-center items-center font-digital">
          {String(hours).padStart(2, "0")}
        </div>
        <span className="text-[32px]">Hr</span>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-[76px] h-[76px] border-2 border-grayLight rounded-[10px] shadow-2xl flex justify-center items-center font-digital">
          {String(minutes).padStart(2, "0")}
        </div>
        <span className="text-[32px]">Mins</span>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-[76px] h-[76px] border-2 border-grayLight rounded-[10px] shadow-2xl flex justify-center items-center font-digital">
          {String(seconds).padStart(2, "0")}
        </div>
        <span className="text-[32px]">Sec</span>
      </div>
    </div>
  );
}

export default Timer;
