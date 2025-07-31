import Image from "next/image";
import Link from "next/link";

function ShopItem({ shopItem }) {
  const { id, name="Unnamed Product", price=0, discount=0, describtion="", img_url="" } = shopItem;

  const descriptionPreview = describtion
    ? describtion.split(" ").slice(0, 3).join(" ") +
      (describtion.split(" ").length > 3 ? "..." : "")
    : "";

  const totalPrice = (price * (100 - discount)) / 100;

  return (
    <Link
      href={`/shop/${id}`}
      className="p-[12px] bg-white shadow-[0_20px_35px_0_rgba(0,0,0,0.05)] max-sm:w-[90%] max-sm:flex max-sm:justify-between"
    >
      <div className="relative w-[302px] h-[403px] max-lg:w-[250px] max-lg:h-[340px] max-sm:order-2 max-sm:w-[130px] max-sm:h-[170px]">
        <Image
          src={img_url}
          alt={descriptionPreview}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="max-sm:flex max-sm:flex-col max-sm:justify-around px-4">
        <div>
          <p className="text-black font-volkhov mt-5">{name}</p>
          <p className="text-grayDark">{descriptionPreview}</p>
        </div>

        <div className="flex justify-between items-start mt-3">
          <p className="text-black">${totalPrice.toFixed(2)}</p>
          {discount > 0 && (
            <p className="text-black line-through mb-4 max-sm:mb-0 max-sm:pr-2">
              ${price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;


