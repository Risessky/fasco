"use client";

import { useEffect, useState } from "react";

function CountdownTimer({ startTime }) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const deadline = new Date(startTime).getTime() +   10*60*60*1000; 

    const updateTimer = () => {
      const nowUTC = new Date().getTime();
      const diff = deadline - nowUTC;

      if (diff > 0) {
        setRemaining(Math.floor(diff / 1000));
      } else {
        setRemaining(0); // تایمر تمام شده
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return (
    <div className="text-gray text-sm">
      {remaining === 0
        ? "Your order has been delivered !"
        : `Time until delivery: ${hours}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
    </div>
  );
}

export default CountdownTimer;
