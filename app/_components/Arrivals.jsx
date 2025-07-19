import { Suspense } from "react";
import ArrivalsFilter from "./ArrivalsFilter";
import ProductsList from "./ProductsList";
import Spinner from "./Spinner";

function Arrivals({ filter }) {
  return (
    <section className=" bg-[rgb(250,250,250)]">
      <div className="container mx-auto flex flex-col items-center  mt-10 pb-56">
        <h2 className="font-volkhov text-[46px] text-grayDark text-center ">
          New Arrivals
        </h2>
        <p className="text-gray mt-4 max-w-[614px] text-center">
          Discover trendy new arrivals — fresh styles, quality materials, unique
          designs. Update your wardrobe, home, and lifestyle. Shop now & stand
          out!
        </p>
        <p className="text-gray mt-4 max-w-[614px] text-center">
          this api is fetched from supabase backednd
        </p>

        <ArrivalsFilter />

        <Suspense fallback={ <div className="mt-32">
              <p className="text-[32px] text-grayDark mb-[50px]">loading product data please wait ...</p>
              <Spinner />
            </div>} key={filter}>
          <ProductsList filter={filter} />
        </Suspense>
      </div>
    </section>
  );
}

export default Arrivals;

