import CheckItem from "./CheckItem";

async function CheckoutList({cartItems}) {
 const totalPrice=cartItems[0].total_price
 console.log(totalPrice)


  return (
    <section className="bg-grayLight w-full ">
      <ul className="mt-10 max-h-[600px] overflow-y-auto overflow-x-hidden">
        {cartItems.map(itemData=><CheckItem key={itemData.id} itemData={itemData}/>)}
      </ul>
      <div className="w-[60%] mx-auto mt-7">
      <div className="flex justify-between items-center text-grayDark text-[16px]">
        <p>Subtotal</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 items-center text-grayDark text-[16px]">
        <p>Shipping</p>
        <p>$40.00</p>
      </div>
      <div className="flex justify-between mt-2 items-center text-grayDark text-[16px]">
        <p>Total</p>
        <p className="text-black font-semibold">${(Number(totalPrice)+40).toFixed(2)}</p>
      </div></div>
    </section>
  );
}

export default CheckoutList;
