import Image from "next/image";
import subscribe1 from "@/public/images/subscribe1.png";
import subscribe2 from "@/public/images/subscribe2.png";
import SubscribeForm from "./SubscribeForm";
import FadeInDiv from "./FadeInDiv";

function Subscribe() {
  return (
    <section className="container mx-auto pb-16 flex justify-around items-center max-md:px-3">
      <FadeInDiv delay="0.5">
        {" "}
        <div className="relative">
          <Image
            src={subscribe1}
            alt=""
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </FadeInDiv>
      <div className="flex flex-col items-center gap-6 max-sm:gap-2">
        <h2 className="font-volkhov text-[46px] max-w-[631px] text-center text-grayDark font-bold max-md:text-[22px]">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-gray max-w-[614px] text-center max-md:text-[14px]">
          Subscribe to our newsletter for the latest updates, special offers,
          new arrivals, and exclusive style tips delivered weekly.
        </p>
        <SubscribeForm />
      </div>
      <FadeInDiv delay="0.8">
        <div className="relative max-md:hidden">
          <Image src={subscribe2} alt="" className="object-cover" />
        </div>
      </FadeInDiv>
    </section>
  );
}

export default Subscribe;
