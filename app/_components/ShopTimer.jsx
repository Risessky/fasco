"use client";
import { useEffect, useState } from "react";

function ShopTimer() {
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60-1223);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="flex justify-between items-center bg-lightPink max-w-[585px] p-4 mt-9 max-lg:mt-2 max-lg:max-w-[500px]">
      <p className="font-volkhov text-[18px] text-darkPink max-lg:text-[16px] max-md:text-[14px]">
        Hurry up! Sale ends in:
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[20px] max-lg:text-[16px] font-semibold text-darkPink">
          00
        </span>
        <span>:</span>
        <span className="text-[20px] max-lg:text-[16px] font-semibold text-darkPink">
          {h}
        </span>
        <span>:</span>
        <span className="text-[20px] max-lg:text-[16px] font-semibold text-darkPink">
          {m}
        </span>
        <span>:</span>
        <span className="text-[20px] max-lg:text-[16px] font-semibold text-darkPink">
          {s}
        </span>
      </div>
    </div>
  );
}

export default ShopTimer;
