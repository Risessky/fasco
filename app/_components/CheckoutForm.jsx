import Button from "./Button"

function CheckoutForm() {
    return (
        <form className="flex flex-col gap-4 w-full px-5 max-sm:order-2">
            <h2 className="text-[46px] font-volkhov max-sm:text-[32px]">Delivery</h2>
            <select
              name="country"
              id="country"
              className="w-full border text-gray border-gray h-[71px] pl-5"
            >
              <option value="hi" disabled>hi</option>
              <option value="usa">usa</option>
              <option value="iran">iran</option>
            </select>
            <div className="flex gap-3 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray w-full h-[71px] pl-5"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray w-full h-[71px] pl-5"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Address"
              className="border border-gray w-full h-[71px] pl-5"
            ></input>
          <div className="flex gap-3 w-full">
              <input
                type="text"
                placeholder="City"
                className="border border-gray w-full h-[71px] pl-5"
              ></input>
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray w-full h-[71px] pl-5"
              ></input>
            </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              className="w-6 h-6 accent-gray rounded-sm border border-gray"
            />
            <label className=" max-md:text-base max-sm:text-sm text-gray cursor-pointer">
              Save This Info For Future
            </label>
                </div>

            <h3 className="text-[46px] font-volkhov max-sm:text-[32px]">Payment</h3>
                <Button styles="w-full">Pay Now</Button>

                <p className="text-[12px] text-grayDark text-center mt-6">Copyright © 2022 FASCO . All Rights Reseved.</p>
          </form>
    )
}

export default CheckoutForm
