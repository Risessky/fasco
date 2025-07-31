import PageHeader from "../_components/PageHeader";
import CartList from "../_components/CartList";
import { getOrders, getProduct } from "../_lib/data-service";
import ConfirmCheckout from "../_components/ConfirmCheckout";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Subscribe from "../_components/Subscribe";


export const metadata = {
  title: "Your Cart | Fasco",
  description:
    "Review the items in your cart and proceed to checkout. Get the best deals on fashion and lifestyle products at Fasco.",
  keywords: [
    "fasco cart",
    "shopping cart",
    "checkout",
    "order review",
    "buy clothes online",
    "ecommerce cart",
    "online fashion store",
    "fashion checkout",
    "cart page",
    "Fasco shop",
  ],
  openGraph: {
    title: "Your Cart | Fasco",
    description:
      "Check what's in your cart before completing your purchase. Stylish fashion products just a click away.",
    url: "https://fasco-shops.vercel.app/cart",
    siteName: "Fasco",
    locale: "en_US",
    type: "website",
  },
};


async function page() {
  const orders = await getOrders();
  const cartItems = orders.map(({ id, checked, product, quantity, payed }) => ({
    ...product,
    payed,
    checked,
    quantity,
    orderId: id,
  }));
  // console.log(cartItems)
  // console.log(orders)

  const orderId = cartItems[0]?.orderId;
  const totalPrice =
    ((cartItems[0]?.price * (100 - cartItems[0]?.discount)) / 100) *
    cartItems[0]?.quantity;

  const isEmpty = !cartItems || cartItems.length === 0;
  const isChecked = cartItems?.[0]?.checked === true;
  const isPayed = cartItems?.[0]?.payed === true;

  return (
    <>
      <Header />
      <section className="my-[140px]">
        <PageHeader title="Shopping Cart" pagePara="Your Shopping Cart" />

        <CartList cartItems={cartItems} />

        {!isEmpty && !isChecked && !isPayed && (
          <ConfirmCheckout orderId={orderId} totalPrice={totalPrice} />
        )}
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

export default page;
