import { AddToCart } from "../_lib/actions";
import EyesIcon from "./EyesIcon";
import ProductCounter from "./ProductCounter";
import ShopTimer from "./ShopTimer";
import StarRating from "./StarRating";
import SubmitButton from "./SubmitButton";

function ShopForm({product}) {
 const {
    id,
    name,
    views,
    price,
    discount,
    star_rating,
    describtion,
    size,
    img_url,
  } =product

  const totalPrice = (price * (100 - discount)) / 100;


  return (
    <form action={AddToCart} className="max-sm:justify-self-center">
      <span className="text-gray3 font-volkhov text-[14px] block mb-1 max-lg:mb-0">
        Fasco
      </span>
      <h1 className="font-volkhov text-[30px] text-black mb-3 max-lg:mb-0 max-lg:text-[24px] max-md:text-[20px]">
        {name}
      </h1>
      <div className="flex items-center gap-2 ">
        <StarRating rating={star_rating} />
        <p>({star_rating})</p>
      </div>
      <div className="flex justify-start items-center gap-3 mt-4 max-lg:mt-1">
        <p className="font-volkhov text-black text-[24px] max-lg:text-[18px] max-md:text-[16px]">
          ${totalPrice.toFixed(2)}
        </p>
        {discount !== 0 && (
          <p className="text-gray3 line-through max-lg:text-[16px] max-md:text-[14px]">
            ${price.toFixed(2)}
          </p>
        )}
        {discount !== 0 && (
          <div className="flex items-center justify-center gap-1 bg-red w-[73.3px] h-[21px] rounded-[11px]">
            <p className="text-white text-[11px] ">save</p>
            <p className="text-white text-[11px] ">{discount}%</p>
          </div>
        )}
      </div>
      <div className="flex justify-start items-center gap-3 mt-7 max-lg:mt-2 ">
        <EyesIcon />
        <p className="text-gray max-md:text-[14px]">{`${views}k people are viewing this right now`}</p>
      </div>
      <p className="text-gray max-md:text-[14px] mt-2">{describtion}</p>
      <ShopTimer />

      <p className="text-gray3 mt-8 max-md:text-[14px]">
        only {id} items left in stock
      </p>
      <div className="flex justify-start items-center gap-2 mt-10 mb-4 max-md:mt-5 max-md:mb-2">
        <p className="font-volkhov text-black font-bold ">size :</p>
        <p className="font-volkhov text-black font-bold">
          {size?.toUpperCase()}
        </p>
      </div>

      <div className="flex gap-2">
        {["S", "M", "L", "XL"].map((sizeValue) => (
          <div
            key={sizeValue}
            className={`flex items-center justify-center w-12 h-12 text-black border rounded-[5px] border-grayLight ${
              sizeValue === size?.toUpperCase() && "bg-black text-white"
            }`}
          >
            <p className="">{sizeValue}</p>
          </div>
        ))}
      </div>

      <p className="text-black font-volkhov mt-3">Quantity</p>
      <div className="flex justify-between items-center mt-3">
        <ProductCounter />
        <SubmitButton pendingLabel="adding to your cart..." styles="border max-w-[442px] w-full p-[10px] font-volkhov max-xl:max-w-[300px]">Add to Cart </SubmitButton>

        <input type="hidden" name="product_id" value={id}></input>
      </div>
    </form>
  );
}

export default ShopForm;
