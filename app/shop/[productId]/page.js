import Benefits from "@/app/_components/Benefits";
import DealsOfTheMonth from "@/app/_components/DealsOfTheMonth";
import EyesIcon from "@/app/_components/EyesIcon";
import PeakyBlinders from "@/app/_components/PeakyBlinders";
import ProductCounter from "@/app/_components/ProductCounter";
import ShopTimer from "@/app/_components/ShopTimer";
import StarRating from "@/app/_components/StarRating";
import ScrollToTop from "@/app/_components/ScrollToTop ";
import { getProduct, getProducts } from "@/app/_lib/data-service";
import Image from "next/image";
import Header from "@/app/_components/Header";
import Subscribe from "@/app/_components/Subscribe";
import Footer from "@/app/_components/Footer";
import ShopForm from "@/app/_components/ShopForm";

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getProducts();
  const ids = products.map((product) => ({ productId: String(product.id) }));
  return ids;
}

async function page({params}) {
 const product = await getProduct(params.productId);

  

  const imageHeightClass = product.id >= 9 ? "aspect-[3/4] " : "aspect-[4/3]";

  return (
    <>
    <Header/>
    <ScrollToTop/>
      <section className="container mx-auto grid grid-cols-2  justify-center gap-16 items-center mt-[140px] mb-[100px] max-lg:gap-8 max-sm:grid-cols-1 ">
        <div
          className={`relative w-[491px] max-lg:w-[360px] max-md:w-[300px] max-sm:w-[280px]  ${imageHeightClass}  justify-self-end max-sm:justify-self-center`}
        >
          <Image
            src={product.img_url}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        
        </div>


        <ShopForm product={product}/>
      </section>
      <PeakyBlinders/>
      <Benefits/>
      <DealsOfTheMonth title="People Also Loved"/>
      <Subscribe/>
          <Footer/>
    </>
  );
}

export default page;
