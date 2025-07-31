
import Button from "./Button";
import DealSlider from "./DealSlider";
import Timer from "./Timer";
import TrackingText from "./TrackingText";

function DealsOfTheMonth({title="Deals Of The Month"}) {
  return (
    <section className="bg-white-to-lightgray flex flex-col lg:flex-row justify-between items-center gap-12 py-16 px-6 lg:px-32 mx-auto overflow-hidden">
      <div className="flex flex-col gap-6 max-w-xl max-md:justify-center max-md:items-center ">
        <TrackingText>
        <h1 className="font-volkhov text-grayDark text-4xl sm:text-4xl lg:text-[46px] uppercase mb-3">
          fasco
        </h1>
        <h2 className="font-volkhov text-grayDark text-3xl sm:text-4xl lg:text-[46px]">
          {title}
        </h2>
        </TrackingText>
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



