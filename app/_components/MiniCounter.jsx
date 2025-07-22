"use client";

import { useState } from "react";

export default function MiniCounter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 3) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex items-center border border-gray text-2xl rounded w-fit overflow-hidden max-sm:text-lg">
      <button
        onClick={decrement}
        disabled={count === 1}
        className={`px-2 py-1 text-[25px] max-sm:px-1 max-sm:text-[18px] ${
          count === 1
            ? "cursor-not-allowed text-gray-300"
            : "hover:bg-gray-100 cursor-pointer"
        }`}
      >
        –
      </button>
      <div className="px-3 py-1 font-medium text-[25px] text-gray max-sm:text-[18px] max-sm:px-2">
        0{count}
      </div>
      <button
        onClick={increment}
        disabled={count === 3}
        className={`px-2 py-1 text-[25px] max-sm:px-1 max-sm:text-[18px] ${
          count === 3
            ? "cursor-not-allowed text-gray-300"
            : "hover:bg-gray-100 cursor-pointer"
        }`}
      >
        +
      </button>
    </div>
  );
}
