import { checkout } from "../_lib/actions";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

function ConfirmCheckout({orderId,totalPrice}) {



  return (
    <form action={checkout} className="container mx-auto mt-8 flex justify-center lg:justify-end">
      <div className="w-full max-w-[613px] px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="wraped"
            className="w-6 h-6 accent-gray rounded-sm border border-gray"
          />
          <label className="text-[22px] max-md:text-base max-sm:text-sm text-gray cursor-pointer">
            for <span className="text-black">$10.00</span> please wrap the product
          </label>
        </div>

        <div className="bg-gray h-[1px] w-full mt-6"></div>

        <div className="flex justify-between items-center mt-10 mb-8">
          <p className="text-[22px] max-md:text-base max-sm:text-sm font-volkhov">
            Total
          </p>
          <p className="text-[22px] max-md:text-base max-sm:text-sm font-volkhov">
            $100.00
          </p>
        </div>
        <input type="hidden" name="orderId" value={orderId}/>
        <input type="hidden" name="totalPrice" value={totalPrice}/>
        <SubmitButton pendingLabel="checking ... " styles="text-[15px] text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black w-full">Checkout</SubmitButton>

      </div>
    </form>
  );
}

export default ConfirmCheckout;
