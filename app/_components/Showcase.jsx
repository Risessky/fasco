import Image from "next/image";
import image1 from "@/public/images/man-header1.png";
import image2 from "@/public/images/man-header2.png";
import image3 from "@/public/images/women-header1.png";
import image4 from "@/public/images/women-header2.png";
import Link from "next/link";
import Button from "./Button";

function Showcase() {
  return (
    <section
      className="container mx-auto mt-[140px] mb-10 grid grid-cols-[1fr_35%_1fr] gap-[35px] max-xl:gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-0 max-sm:mt-24"
      aria-label="Showcase of latest fashion sale"
    >
      {/* ستون اول */}
      <div className="relative h-[756px] bg-grayLight max-lg:h-[640px]  rounded-[10px] max-sm:rounded-none max-sm:order-2">
        <Image
          src={image1}
          alt="Man in fashion suit - new collection"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ستون وسط */}
      <div className="grid grid-rows-[150px_auto_150px] h-[756px] gap-4 max-lg:h-[640px] ">



        <div className=" bg-grayLight relative rounded-[10px] max-sm:rounded-none">
          <Image
            src={image3}
            alt="Woman in elegant dress - new collection"
            fill
            className="object-contain object-bottom absolute bottom-0 "
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 px-4 max-2xl:px-0">
          <h2 className="text-center text-[91px] text-grayDark tracking-tighter leading-none mt-2 max-xl:text-6xl">
            ULTIMATE
          </h2>
          <h1
            style={{
              color: "#fff",
              WebkitTextStroke: "1px #484848",
              textStroke: "1px #484848",
              fontWeight: "bold",
            }}
            className="text-[187px] tracking-tighter text-center leading-none max-xl:text-8xl"
          >
            SALE
          </h1>
          <p className="text-grayDark text-[20px] text-center">
            NEW COLLECTION
          </p>
          <Button href="" styles="mt-4 mb-3">SHOP NOW</Button>
        </div>

        <div className="relative bg-[#B5786E] rounded-[10px]">
          <Image
            src={image4}
            alt="Woman with stylish outfit - limited offer"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* ستون سوم */}
      <div className="relative h-[756px] bg-grayLight max-lg:h-[640px] max-md:hidden rounded-[10px] ">
        <Image
          src={image2}
          alt="Man casual wear - discover the look"
          fill
          className="object-contain rounded-[10px]"
        />
      </div>
    </section>
  );
}

export default Showcase;


