import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/images/arrival1.png";
import StarRating from "./StarRating";



function ProductItem({ product }) {
  if (!product) return null; 

  const {
    name = "Unnamed Product",
    views = "0",
    price = 0,
    discount = 0,
    star_rating = "3",
    describtion = "",
    img_url="",
    size = "m",
  } = product;

  const totalPrice = (price * (100 - discount)) / 100;

  const descriptionPreview = describtion
    ? describtion.split(" ").slice(0, 3).join(" ") +
      (describtion.split(" ").length > 3 ? "..." : "")
    : "";

  return (
    <Link
      href="#"
      className="rounded-[10px] p-4 bg-white shadow-[0_20px_35px_0_rgba(0,0,0,0.1)]"
    >
      <div className="relative w-[336px] h-[244px] max-w-full rounded-[10px] overflow-hidden">
        <Image src={img_url} alt={name} fill className="object-cover object-top" />
        {discount > 0 && (
          <span className="absolute bottom-8 left-0 text-2xl font-semibold text-red-700 transform rotate-[-45deg]">
            %{discount} OFF
          </span>
        )}
      </div>

      <div className="flex justify-between items-center pt-3">
        <h3 className="text-[20px] text-grayDark">{name}</h3>
        <StarRating rating={star_rating} />
      </div>

      {descriptionPreview && (
        <p className="text-[12px] text-gray pb-3">{descriptionPreview}</p>
      )}

      <p className="text-[12px] text-grayDark">
        ({views})k customer Reviews
      </p>

      <div className="flex justify-between items-center pt-4">
        <span className="text-[24px] text-grayDark">${totalPrice.toFixed(2)}</span>
        {discount > 0 && (
          <span className="line-through text-[24px] text-grayDark">
            ${price.toFixed(2)}
          </span>
        )}
      </div>
    </Link>
  );
}

export default ProductItem