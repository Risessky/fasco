'use client'; 

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('An error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl font-bold text-grayDark mb-4">Something went wrong</h1>
      <p className="text-gray-700 text-lg mb-6">
        We’re sorry, an unexpected error has occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="bg-gray text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
