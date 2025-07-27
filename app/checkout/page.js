import Button from "../_components/Button";
import CheckoutForm from "../_components/CheckoutForm";
import CheckoutList from "../_components/CheckoutList";
import DeleteOrderButton from "../_components/DeleteOrder";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Subscribe from "../_components/Subscribe";
import { getOrders, getProduct } from "../_lib/data-service";

async function page() {
  const orders = await getOrders();
  const cartItems = orders.map(
    ({ id, total_price, checked, product, quantity }) => ({
      ...product,
      checked,
      quantity,
      total_price,
      orderId: id,
    })
  );

  const orderId =cartItems[0]?.orderId
  const totalPrice =cartItems[0]?.total_price
  // console.log(cartItems)
  // console.log(orderId)

  const isEmpty = !cartItems || cartItems.length === 0;
  const isChecked = cartItems?.[0]?.checked === true;

  return (
    <>
      <Header />

      <section className="border-b border-gray pb-10 mb-24">
        <h1 className="text-[42px] font-volkhov text-center mt-[160px] mb-6 max-md:text-[30px]">
          Fasco Checkout
        </h1>

        {isEmpty ? (
          <p className="text-center py-10 text-gray text-[22px] my-32">your cart is empty ! </p>
        ) : !isChecked ? 
        (
          <div className="flex flex-col items-center my-32">
          <p className="text-center py-10 text-gray text-[22px]">
            you did not check out yet !
          </p>
          <Button href="/cart">go to cart</Button>
        </div>
      ) 
        : (
          <>
            <div className="container mx-auto grid grid-cols-2 max-sm:grid-cols-1">
              <CheckoutForm orderId={orderId} totalPrice={totalPrice}/>
              <CheckoutList cartItems={cartItems} />
              <div className="my-6"><DeleteOrderButton orderId={orderId}/></div>
            </div>
          </>
        )}
      </section>

      <Subscribe />
      <Footer />
    </>
  );
}

export default page;
