import { getOrders } from "../_lib/data-service";
import ShippingData from "./ShippingData";
import SignOutButton from "./SignOutButton";

async function ShippingList() {
  const orders = await getOrders();
  const cartItems = orders.map(
    ({ id, created_at, total_price, payed, product,checked, quantity }) => ({
      ...product,
      checked,
      created_at,
      payed,
      quantity,
      total_price,
      orderId: id,
    })
  );

  console.log(cartItems)

  if (!cartItems || cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-gray gap-4 py-52 max-md:py-36 relative">
        <div className="text-5xl">📦</div>
        <p className="text-lg">
          You don’t have any active shipping orders yet.
        </p>
        <div className="absolute right-36 bottom-0">
          <SignOutButton />
        </div>
      </div>
    );

  return (
    <div className="container mx-auto relative pb-52">
      {cartItems.map((shipingData) => (
        <ShippingData key={shipingData.orderId} shipingData={shipingData} />
      ))}
      <div className="absolute right-36 bottom-0">
        <SignOutButton />
      </div>
    </div>
  );
}

export default ShippingList;
