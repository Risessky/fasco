import { pay } from "../_lib/actions";
import { auth } from "../_lib/auth";
import SelectCountry from "./SelectCountry";
import SubmitButton from "./SubmitButton";

async function CheckoutForm({orderId,totalPrice}) {
const session =await auth()
const firstName=session?.user?.name.split(" ").at(0)
const lastName=session?.user?.name.split(" ").at(1)

  return (
    <form action={pay} className="flex flex-col gap-4 w-full px-5 max-sm:order-2">
      <h2 className="text-[46px] font-volkhov max-sm:text-[32px]">Delivery</h2>

     <SelectCountry/>

      <div className="flex gap-3 w-full">
        <input
          type="text"
          defaultValue={firstName}
          name="firstName"
          placeholder="First Name"
          required
          maxLength={12}
          className="border border-gray w-full h-[71px] pl-5"
        />
        <input
          type="text"
           defaultValue={lastName}
          name="lastName"
          placeholder="Last Name"
          required
          maxLength={12}
          className="border border-gray w-full h-[71px] pl-5"
        />
      </div>

      <input
        type="text"
        name="address"
        placeholder="Address"
        required
        maxLength={20}
        title="Address must be 8 characters or less"
        className="border border-gray w-full h-[71px] pl-5"
      />

      <div className="flex gap-3 w-full">
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          className="border border-gray w-full h-[71px] pl-5"
        />
        <input
          type="number"
          name="postalCode"
          placeholder="Postal Code"
          required
          maxLength={6}
          pattern="\d{1,6}"
          title="Postal code must be a number with up to 6 digits"
          className="border border-gray w-full h-[71px] pl-5"
        />
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          name="saveInfo"
          className="w-6 h-6 accent-gray rounded-sm border border-gray"
        />
        <label className="max-md:text-base max-sm:text-sm text-gray cursor-pointer">
          Save This Info For Future
        </label>
      </div>

      <h3 className="text-[46px] font-volkhov max-sm:text-[32px]">Payment</h3>
      <input type="hidden" name="orderId" value={orderId}/>
      <input type="hidden" name="totalPrice" value={totalPrice}/>

      <SubmitButton pendingLabel="loading ... " styles="text-[15px] text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black w-full">Pay Now</SubmitButton>

      <p className="text-[12px] text-grayDark text-center mt-6">
        Copyright © 2022 FASCO . All Rights Reserved.
      </p>
    </form>
  );
}

export default CheckoutForm;
