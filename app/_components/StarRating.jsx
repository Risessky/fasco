"use client";
import React from "react";

function StarRating({ rating }) {
  // می‌خوایم یک آرایه ۵تایی بسازیم که هر عضو نشون بده ستاره پر، نیم یا خالیه
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // کامل پر
      stars.push("full");
    } else if (rating >= i - 0.5) {
      // نیمه
      stars.push("half");
    } else {
      // خالی
      stars.push("empty");
    }
  }

  return (
    <div className="flex space-x-1">
      {stars.map((type, index) => (
        <Star key={index} type={type} />
      ))}
    </div>
  );
}

function Star({ type }) {
  if (type === "full") {
    return (
      <svg
        className="w-6 h-6 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947..."/>
      </svg>
    );
  }

  if (type === "half") {
    return (
      <svg
        className="w-6 h-6 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947..."
        />
      </svg>
    );
  }

  return (
    <svg
      className="w-6 h-6 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947..."/>
    </svg>
  );
}

export default StarRating;
