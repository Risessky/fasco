"use client";
import { useState } from "react";
import Image from "next/image";
import deal1 from "@/public/images/deal.png";
import deal2 from "@/public/images/deal2.png";
import deal3 from "@/public/images/deal3.png";
import deal4 from "@/public/images/deal4.png";
import deal5 from "@/public/images/deal5.png";
import Pagination from "./Pagination";

const images = [deal1, deal2, deal3, deal4, deal5];

function DealSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  function prev() {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  }

  function next() {
    setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  }

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative transform translate-x-[162px] max-md:translate-x-0">
      <div className="flex gap-4">
        <div className="relative w-[404px] h-[582px] bg-gray-200 max-md:w-[372px] max-md:h-[486px] max-md:translate-x-[-70px] max-md:grayscale-[90%]">
          <Image
            src={visibleImages[0]}
            fill
            alt="Deal1"
            className="object-cover"
          />
        </div>

        <div className="relative w-[372px] h-[486px] grayscale-[90%] bg-gray-200 max-md:w-[700px] max-md:h-[582px] max-md:grayscale-0">
          <Image
            src={visibleImages[1]}
            fill
            alt="Deal2"
            className="object-cover"
          />
        </div>
        <div className="relative w-[372px] h-[486px] bg-gray-200 max-md:translate-x-[70px] grayscale-[90%]">
          <Image
            src={visibleImages[2]}
            fill
            alt="Deal3"
            className="object-cover"
          />
        </div>
      </div>

      <Pagination
        onPrev={prev}
        onNext={next}
        disablePrev={startIndex === 0}
        disableNext={startIndex + visibleCount >= images.length}
      />
    </div>
  );
}

export default DealSlider;






// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import deal1 from "@/public/images/deal.png";
// import deal2 from "@/public/images/deal2.png";
// import deal3 from "@/public/images/deal3.png";
// import deal4 from "@/public/images/deal4.png";
// import deal5 from "@/public/images/deal5.png";
// import Pagination from "./Pagination";

// const images = [deal1, deal2, deal3, deal4, deal5];

// function DealSlider() {
//   const [startIndex, setStartIndex] = useState(0);
//   const visibleCount = 3;

//   function prev() {
//     setStartIndex((prev) => Math.max(prev - 1, 0));
//   }

//   function next() {
//     setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
//   }

//   const visibleImages = images.slice(startIndex, startIndex + visibleCount);

//   return (
//     <div className="relative transform translate-x-[162px]">
//       <div className="flex gap-4">
//         <div className="relative w-[404px] h-[582px] bg-gray-200">
//           <Image
//             src={visibleImages[0]}
//             fill
//             alt="Deal1"
//             className="object-cover"
//           />
//         </div>

//         <div className="relative w-[372px] h-[486px] bg-gray-200">
//           <Image
//             src={visibleImages[1]}
//             fill
//             alt="Deal2"
//             className="object-cover"
//           />
//         </div>
//         <div className="relative w-[372px] h-[486px] bg-gray-200">
//           <Image
//             src={visibleImages[2]}
//             fill
//             alt="Deal3"
//             className="object-cover"
//           />
//         </div>
//       </div>

//       <Pagination
//         onPrev={prev}
//         onNext={next}
//         disablePrev={startIndex === 0}
//         disableNext={startIndex + visibleCount >= images.length}
//       />
//     </div>
//   );
// }

// export default DealSlider;
