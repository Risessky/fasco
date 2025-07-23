import Image from "next/image";
import { getProduct } from "../_lib/data-service";
import CheckItem from "./CheckItem";

async function CheckoutList() {
  const x = await getProduct(13);
  const checkList = [x, x, x, x, x, x, x];
  console.log(x);

  return (
    <section className="bg-grayLight w-full ">
      <ul className="mt-10 max-h-[600px] overflow-scroll overflow-x-hidden">
        {checkList.map(itemData=><CheckItem key={itemData.id} itemData={itemData}/>)}
      </ul>
      <div className="w-[60%] mx-auto mt-7">
      <div className="flex justify-between items-center text-grayDark text-[16px]">
        <p>Subtotal</p>
        <p>$100.00</p>
      </div>
      <div className="flex justify-between mt-2 items-center text-grayDark text-[16px]">
        <p>Shipping</p>
        <p>$40.00</p>
      </div>
      <div className="flex justify-between mt-2 items-center text-grayDark text-[16px]">
        <p>Total</p>
        <p className="text-black font-semibold">$140.00</p>
      </div></div>
    </section>
  );
}

export default CheckoutList;
