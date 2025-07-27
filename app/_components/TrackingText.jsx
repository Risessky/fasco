"use client"
import { useEffect } from 'react';

export default function TrackingText({ children }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const style = {
    animation: 'tracking-in-expand 2s cubic-bezier(.215,.61,.355,1.000) both',
    display: 'inline-block', // مهم برای اینکه انیمیشن درست بشه روی inline elements
    fontWeight: 'bold',
    color: '#1f2937', // text-gray-800
  };

  return <span style={style}>{children}</span>;
}
