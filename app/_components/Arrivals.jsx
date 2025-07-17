import ArrivalsFilter from "./ArrivalsFilter";
import ProductsList from "./ProductsList";

function Arrivals() {
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
        <ArrivalsFilter />
        <ProductsList />
      </div>
    </section>
  );
}

export default Arrivals;
