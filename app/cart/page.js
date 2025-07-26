import PageHeader from "../_components/PageHeader";
import CartList from "../_components/CartList";
import { getOrders, getProduct } from "../_lib/data-service";
import ConfirmCheckout from "../_components/ConfirmCheckout";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Subscribe from "../_components/Subscribe";

async function page() {
  const orders= await getOrders()
 const cartItems = orders.map(({ id, checked,product, quantity }) => ({
  ...product,
  checked,
  quantity,
  orderId: id,
}));
// console.log(cartItems)


const orderId=cartItems[0]?.orderId
const totalPrice = (cartItems[0]?.price * (100 - cartItems[0]?.discount)) / 100 * cartItems[0]?.quantity;

  // const cartItems = orders.map((order) => order.product);
  // const quantity=orders.map(order=>order.quantity)
  // console.log(quantity)
  // console.log(orderId)
  // console.log(orders)
  // console.log(cartItems)
  // console.log(totalPrice)
  // console.log(isChecked)
 
  const isEmpty = !cartItems || cartItems.length === 0;
  const isChecked = cartItems?.[0]?.checked === true;

  return (
    <>
      <Header />
      <section className="my-[140px]">
        <PageHeader title="Shopping Cart" pagePara="Your Shopping Cart" />
        <CartList cartItems={cartItems} />
       {!isEmpty && !isChecked &&<ConfirmCheckout orderId={orderId} totalPrice={totalPrice}/>}
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

export default page;
