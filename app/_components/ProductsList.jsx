import ProductItem from "./ProductItem";

function ProductsList() {
  const products = [
    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 20,
      starRating: 1.5,
      describtion: "jasem bifaz zashkjis dsjikjds hi bye best clothes",
    },
    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 0,
      starRating: "",
      describtion: "hi hi hi hi",
    },
    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 20,
      starRating: 4,
      describtion: "hi hi hi",
    },
    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 20,
      starRating: 3.5,
      describtion: "hi hi",
    },

    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 20,
      starRating: 5,
      describtion: "",
    },

    {
      id: 1,
      category: "women",
      name: "Shiny Dress",
      views: "4.1k",
      price: 95.5,
      discount: 20,
      starRating: 3.5,
      describtion: "",
    },
  ];

  return (
    <section className="flex flex-wrap justify-between items-center pt-10 gap-6 max-md:justify-center w-full bg-[rgb(250,250,250)]">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default ProductsList;

