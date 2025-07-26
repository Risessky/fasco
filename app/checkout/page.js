import CheckoutForm from "../_components/CheckoutForm";
import CheckoutList from "../_components/CheckoutList";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Subscribe from "../_components/Subscribe";
import { getProduct } from "../_lib/data-service";

async function page() {
  const x = await getProduct(13);
  const y = await getProduct(5);
  const cartItems = [x, y];

  return (
    <>
      <Header />


      <section className="border-b border-gray pb-10 mb-24">
        <h1 className="text-[42px] font-volkhov text-center mt-[160px] mb-6 max-md:text-[30px]">
          Fasco Checkout
        </h1>

        <div className="container mx-auto grid grid-cols-2 max-sm:grid-cols-1">
          <CheckoutForm />
          <CheckoutList/>



        </div>
      </section>



      <Subscribe/>
      <Footer/>
    </>
  );
}

export default page;
