import { Suspense } from "react";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import ShippingList from "../_components/ShippingList";
import Spinner from "../_components/Spinner";


export const metadata = {
  title: "My Account | Fasco – Manage Your Profile & Orders",
  description:
    "Access your Fasco account to view order history, update personal details, manage addresses, and control your shopping preferences all in one place.",
  keywords: [
    "fasco account",
    "my account",
    "user profile",
    "order history",
    "manage orders",
    "account settings",
    "fasco login",
    "shopping profile",
    "account dashboard",
    "customer area",
  ],
  openGraph: {
    title: "My Account | Fasco – Manage Your Profile & Orders",
    description:
      "Log in to your Fasco account to manage orders, update personal info, and personalize your shopping experience.",
    url: "https://fasco-shops.vercel.app/account",
    siteName: "Fasco",
    locale: "en_US",
    type: "website",
  },
};


function page() {
  return (
    <>
      <Header />
      <section className="my-[140px]">
        <Suspense
          fallback={
            <div className="mt-32">
              <p className="text-[32px] text-grayDark mb-[50px] max-md:text-[22px] max-sm:text-[16px]">
                loading product data please wait ...
              </p>
              <Spinner />
            </div>
          }
        >
          <ShippingList />
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default page;
