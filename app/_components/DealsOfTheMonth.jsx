


import Button from "./Button";
import DealSlider from "./DealSlider";
import Timer from "./Timer";

function DealsOfTheMonth() {
  return (
    <section className="bg-white-to-lightgray flex flex-col lg:flex-row justify-between items-center gap-12 py-16 px-6 lg:px-32 mx-auto overflow-hidden">
      <div className="flex flex-col gap-6 max-w-xl max-md:justify-center max-md:items-center">
        <h2 className="font-volkhov text-grayDark text-3xl sm:text-4xl lg:text-[46px]">
          Deals Of The Month
        </h2>
        <p className="text-sm sm:text-base text-gray max-w-md mb-3 max-md:text-center ">
          Explore this month&apos;s exclusive deals featuring top-quality
          products at unbeatable prices. Take advantage of limited-time
          discounts and upgrade your collection today. Hurry, these offers
          won&apos;t last long!
        </p>
        <Button styles="w-[207px] h-[56px]">Buy Now</Button>
        <p className="text-xl sm:text-2xl font-medium text-grayDark mt-8">
          Hurry, Before It&apos;s Too Late!
        </p>
        <Timer />
      </div>

      <div className="w-full max-w-4xl">
        <DealSlider />
      </div>
    </section>
  );
}

export default DealsOfTheMonth;

// import Button from "./Button";
// import DealSlider from "./DealSlider";
// import Timer from "./Timer";

// function DealsOfTheMonth() {
//   return (
//     <>
//     <section className="bg-white-to-lightgray  flex justify-between py-32 mx-auto overflow-hidden">
//       <div className="ml-[180px]  flex flex-col gap-6 ">
//         <h2 className="font-volkhov text-grayDark text-[46px] max-w-[555px]">
//           Deals Of The Month
//         </h2>
//         <p className="text-[12px] text-gray max-w-[440px] mb-3">
//           Explore this month&apos;s exclusive deals featuring top-quality
//           products at unbeatable prices. Take advantage of limited-time
//           discounts and upgrade your collection today. Hurry, these offers
//           won&apos;t last long!
//         </p>
//         <Button styles="w-[207px] h-[56px]">Buy Now</Button>
//         <p className="text-[28px] font-medium text-grayDark mt-8">
//           Hurry, Before It&apos;s Too Late!
//         </p>
//         <Timer />
//       </div>



//       <DealSlider/> 
//     </section>
//     </>
//   );
// }

// export default DealsOfTheMonth;
