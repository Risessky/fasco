import { getProducts } from "../_lib/data-service";
import ProductItem from "./ProductItem";

// export const dynamic = "force-dynamic";
// export const revalidate = 1;

async function ProductsList({ filter }) {
  const products = await getProducts();
  // console.log(products)
  // console.log(filter)

  if (!products.length) return null;

  let displayedProducts;
  if (filter === "women") displayedProducts=products.filter((product) => product.category === "women");
  if (filter === "men") displayedProducts=products.filter((product) => product.category === "men");
  if (filter === "discounts")displayedProducts=products.filter((product) => product.discount);

  return (
    <section className="flex flex-wrap justify-between items-center pt-10 gap-6 max-md:justify-center w-full bg-[rgb(250,250,250)]">
      {displayedProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default ProductsList;
