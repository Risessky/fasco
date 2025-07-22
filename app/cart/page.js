import PageHeader from "../_components/PageHeader";
import CartList from "../_components/CartList";
import { getProduct } from "../_lib/data-service";
import ConfirmCheckout from "../_components/ConfirmCheckout";

async function page() {
  const x = await getProduct(13);
  const y = await getProduct(5);
  const cartItems = [x, y];
  console.log(cartItems);

  return (
    <section className="my-[140px]">
      <PageHeader title="Shopping Cart" pagePara="Your Shopping Cart" />
      <CartList cartItems={cartItems} />
      <ConfirmCheckout />
    </section>
  );
}

export default page;
