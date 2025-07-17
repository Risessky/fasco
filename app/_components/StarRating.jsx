"use client";
import React from "react";

function StarRating({ rating = 0 }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="flex space-x-1">
      {stars.map((type, index) => (
        <Star key={index} type={type} id={`star-${index}`} />
      ))}
    </div>
  );
}

function Star({ type, id }) {
  const pathData =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444 1.287 3.946c.3.922-.755 1.688-1.54 1.117L10 13.347l-3.371 2.847c-.784.57-1.838-.195-1.538-1.117l1.287-3.946-3.36-2.444c-.784-.57-.38-1.81.588-1.81h4.15l1.286-3.947z";

  if (type === "half") {
    return (
      <svg className="w-6 h-6" viewBox="0 0 20 20">
        <defs>
          <linearGradient id={`half-${id}`}>
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path fill={`url(#half-${id})`} d={pathData} />
      </svg>
    );
  }

  if (type === "full") {
    return (
      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d={pathData} />
      </svg>
    );
  }

  return (
    <svg className="w-6 h-6 text-gray-300" viewBox="0 0 20 20" fill="#d1d5db">
      <path d={pathData} />
    </svg>
  );
}

export default StarRating;
