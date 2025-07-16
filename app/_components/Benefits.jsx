import benefit1 from "@/public/logos/benefit1.png";
import benefit2 from "@/public/logos/benefit2.png";
import benefit3 from "@/public/logos/benefit3.png";
import benefit4 from "@/public/logos/benefit4.png";
import Image from "next/image";

function Benefits() {
  return (
    <div className="container mx-auto py-16 flex flex-wrap items-center justify-between gap-y-5 max-sm:px-6 max-[534px]:flex-col max-[534px]:items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image src={benefit1} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] text-grayDark">High Quality</p>
          <p className="text-grayDark">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image src={benefit2} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] text-grayDark">Warrany Protection</p>
          <p className="text-grayDark">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image src={benefit3} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] text-grayDark">Free Shipping</p>
          <p className="text-grayDark">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image src={benefit4} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] text-grayDark">24 / 7 Support</p>
          <p className="text-grayDark"> Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
