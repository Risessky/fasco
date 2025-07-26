import { Suspense } from "react";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import ShippingList from "../_components/ShippingList";
import Spinner from "../_components/Spinner";

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
