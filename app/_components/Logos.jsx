import Image from "next/image";
import logo1 from "@/public/logos/logo1.png";
import logo2 from "@/public/logos/logo2.png";
import logo3 from "@/public/logos/logo3.png";
import logo4 from "@/public/logos/logo4.png";
import logo5 from "@/public/logos/logo5.png";

function Logos() {
  return (
    <section className="container mx-auto flex flex-wrap justify-between items-center gap-8 max-lg:justify-center max-md:gap-6 max-sm:gap-4 my-20 max-sm:my-10">
      <Image
        src={logo1}
        alt="Logo 1"
        className="w-36 max-md:w-28 max-sm:w-24"
      />
      <Image
        src={logo2}
        alt="Logo 2"
        className="w-36 max-md:w-28 max-sm:w-24"
      />
      <Image
        src={logo3}
        alt="Logo 3"
        className="w-36 max-md:w-28 max-sm:w-24"
      />
      <Image
        src={logo4}
        alt="Logo 4"
        className="w-36 max-md:w-28 max-sm:w-24"
      />
      <Image
        src={logo5}
        alt="Logo 5"
        className="w-36 max-md:w-28 max-sm:w-24"
      />
    </section>
  );
}

export default Logos;
