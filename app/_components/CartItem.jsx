

import Image from "next/image"

function CartItem({ cartItem, isMobile = false }) {
  const { id, name, price, discount, size, img_url ,quantity} = cartItem;
  const imageHeightClass = id >= 9 ? "aspect-[3/4]" : "aspect-[4/3]";
  const totalPrice = (price * (100 - discount)) / 100 * quantity;
  const finalPrice =(price * (100 - discount)) / 100 

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className={`relative w-[120px] ${imageHeightClass}`}>
            <Image src={img_url} alt={name} fill className="object-cover rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-volkhov text-lg">{name}</p>
            <div className="text-gray text-sm flex gap-1">
              <span>Size:</span>
              <span>{size.toUpperCase()}</span>
            </div>
            <button className="text-gray self-start underline text-sm hover:text-grayDark">Remove</button>
          </div>
        </div>

        <div className="flex justify-between text-sm font-medium text-gray">
          <div>
            <p>Price</p>
            <p>${finalPrice.toFixed(2)}</p>
          </div>
          <div>
            <p >Quantity</p>
            <p className="text-center">{quantity}</p>
          </div>
          <div>
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  }

  // دسکتاپ
  return (
    <tr key={id} className="border-b border-gray">


      <td className="py-8 align-top">
        <div className="flex gap-5">
          <div className={`relative w-[168px] ${imageHeightClass}`}>
            <Image src={img_url} alt={name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <p className="font-volkhov text-[22px]">{name}</p>
            <div className="flex gap-2 text-gray text-[22px]">
              <p>Size :</p>
              <p>{size.toUpperCase()}</p>
            </div>
            <button className="text-gray text-[22px] underline inline hover:text-grayDark">Remove</button>
          </div>
        </div>
      </td>


      
      <td className="py-8 font-volkhov text-[22px] align-top">${finalPrice.toFixed(2)}</td>
      <td className="py-8 align-top">
        <p className="pl-5 text-[20px]">{quantity}</p>
      </td>
      <td className="py-8 font-volkhov text-[22px] align-top">${totalPrice.toFixed(2)}</td>
    </tr>
  );
}


export default CartItem

