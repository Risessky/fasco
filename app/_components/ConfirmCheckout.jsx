import Button from "./Button";

function ConfirmCheckout() {
  return (
    <div className="container mx-auto mt-8 flex justify-center lg:justify-end">
      <div className="w-full max-w-[613px] px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
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

        <Button styles="w-full">Checkout</Button>
      </div>
    </div>
  );
}

export default ConfirmCheckout;
