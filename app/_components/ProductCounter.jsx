"use client";

import { useState } from "react";

export default function ProductCounter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 3) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const buttonBaseClasses =
    "w-12 h-12 flex items-center justify-center border text-xl transition-colors";

  return (
    <div className="flex items-center">
      <button
      type="button"
        onClick={decrement}
        disabled={count <= 1}
        className={`${buttonBaseClasses} border-grayLight ${
          count <= 1
            ? "bg-graytext-grayDark text-grayDark cursor-not-allowed"
            : "hover:bg-grayLight cursor-pointer"
        }`}
      >
        -
      </button>

      <div className="w-12 h-12 flex items-center justify-center border border-grayLight text-xl">
        {count}
      </div>

      <button
      type="button"
        onClick={increment}
        disabled={count >= 3}
        className={`${buttonBaseClasses} border-grayLight ${
          count >= 3
            ? "bg-graytext-grayDark text-grayDark cursor-not-allowed"
            : "hover:bg-grayLight cursor-pointer"
        }`}
      >
        +
      </button>
      <input type="hidden" name="quantity" value={count} />
    </div>
  );
}
