import { Suspense } from "react";
import ShopFilter from "../_components/ShopFilter";
import ShopList from "../_components/ShopList";
import Spinner from "../_components/Spinner";
import PageHeader from "../_components/PageHeader";
import FollowUS from "../_components/FollowUS";
import Benefits from "../_components/Benefits";
import PeakyBlinders from "../_components/PeakyBlinders";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Subscribe from "../_components/Subscribe";


export const metadata = {
  title: "Shop | Fasco – Discover the Latest Fashion & Lifestyle Products",
  description:
    "Browse Fasco’s curated collection of modern fashion, clothing, and lifestyle products. Enjoy great deals, stylish picks, and fast shipping – all in one place.",
  keywords: [
    "fasco shop",
    "fashion products",
    "clothing store",
    "online fashion",
    "lifestyle products",
    "trendy outfits",
    "buy clothes online",
    "modern fashion",
    "shop fasco",
    "fashion deals",
  ],
  openGraph: {
    title: "Shop | Fasco – Discover the Latest Fashion & Lifestyle Products",
    description:
      "Explore Fasco’s shop for stylish clothing and lifestyle items. Great prices, fresh trends, and fast delivery await.",
    url: "https://fasco-shops.vercel.app/shop",
    siteName: "Fasco",
    locale: "en_US",
    type: "website",
  },
};



function page({ searchParams }) {
  const size = searchParams?.size ?? "all";
  const price = searchParams?.price ?? "all";
  // console.log(price)

  return (
    <>
    <Header/>
      <section className="mt-[140px]">
        <PageHeader title="Fashion" pagePara="Fashion"/>

        <Suspense
           key={JSON.stringify({ size, price })}
          fallback={
            <div className="my-32">
              <p className="text-[32px] text-center text-grayDark mb-[50px] max-md:text-[22px] max-sm:text-[16px]">
                loading shop data please wait ...
              </p>
              <Spinner />
            </div>
          }
        >
          <div className="container mx-auto grid grid-cols-[322px_1fr] max-xl:grid-cols-[250px_1fr] max-lg:grid-cols-[200px_1fr] max-md:grid-cols-1">
            <ShopFilter />
            <ShopList size={size} price={price} />
          </div>
        </Suspense>
      </section>
      <PeakyBlinders />

      <Benefits />
      <FollowUS />
      <Subscribe/>
          <Footer/>
    </>
  );
}

export default page;
