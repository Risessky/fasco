import Image from "next/image";
import image from "@/public/images/peaky-blinders.png";
import Button from "./Button";

function PeakyBlinders() {
  return (
    <section className="flex max-md:flex-col">
      <div className="relative bg-[#DADADA] max-md:bg-[#F8F8F8] max-md:order-2">
        <Image src={image} className="object-cover " alt="" />
      </div>
      <div className="flex flex-grow flex-col justify-center gap-3 bg-[#DADADA] max-lg:gap-1 max-md:text-center max-md:py-10 max-md:gap-3 max-md:bg-[linear-gradient(to_bottom,_#ffffff_0%,_#DADADA_40%,_#DADADA_60%,_#F8F8F8_100%)]">
        <h3 className="text-gray2 max-xl:text-sm">Women Collection</h3>
        <h2 className="font-volkhov font-semibold text-grayDark text-[46px] max-xl:text-[28px]">
          Peaky Blinders
        </h2>
        <p className="text-gray2 max-w-[515px] max-xl:text-sm max-md:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nisi
          provident perferendis, eligendi tempore rerum voluptatem velit, quas
          
          quaerat porro.
        </p>
        <div className="flex gap-2 items-center max-md:mx-auto">
          <span className="text-gray2 max-xl:text-sm">size :</span>
          <span className="text-white bg-black px-4 py-1 rounded-[10px] max-xl:px-3 max-xl:py-1">
            M
          </span>
        </div>
        <span className="mb-3 max-lg:mb-0">$100.00</span>
        <Button styles="w-[152px] h-[56px] max-xl:w-[100px] max-xl:h-[30px] max-xl:text-sm max-md:mx-auto">Buy Now</Button>
      </div>
    </section>
  );
}

export default PeakyBlinders;
