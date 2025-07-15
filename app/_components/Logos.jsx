import Image from "next/image";
import logo1 from "@/public/logos/logo1.png";
import logo2 from "@/public/logos/logo2.png";
import logo3 from "@/public/logos/logo3.png";
import logo4 from "@/public/logos/logo4.png";
import logo5 from "@/public/logos/logo5.png";

function Logos() {
  return (
    <section
      aria-label="Brands we work with"
      className="py-20 bg-white  relative"
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-8 max-lg:justify-center max-md:gap-6 max-sm:gap-4 max-sm:my-10">
        <Image
          src={logo1}
          alt="Louis Vuitton logo"
          className="w-36 max-md:w-28 max-sm:w-24"
        />
        <Image
          src={logo2}
          alt="Calvin Klein logo"
          className="w-36 max-md:w-28 max-sm:w-24"
        />
        <Image
          src={logo3}
          alt="Denim logo"
          className="w-36 max-md:w-28 max-sm:w-24"
        />
        <Image
          src={logo4}
          alt="Prada logo"
          className="w-36 max-md:w-28 max-sm:w-24"
        />
        <Image
          src={logo5}
          alt="Chanel logo"
          className="w-36 max-md:w-28 max-sm:w-24"
        />
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-6 pointer-events-none shadow-md" />
    </section>
  );
}

export default Logos;
