import { getOrders } from "../_lib/data-service";
import ShippingData from "./ShippingData";

async function ShippingList() {
  const orders = await getOrders();
  const cartItems = orders.map(
    ({ id,created_at, total_price, payed, product, quantity }) => ({
      ...product,
      created_at,
      payed,
      quantity,
      total_price,
      orderId: id,
    })
  );

  console.log(cartItems)


    return (
        <div className="container mx-auto">
            {cartItems.map(shipingData=><ShippingData key={shipingData.orderId} shipingData={shipingData} />)}
        </div>
    )
}

export default ShippingList
