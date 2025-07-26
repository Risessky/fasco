import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

function ShippingData({ shipingData }) {
  const { id, name, size, img_url, created_at, payed, quantity, total_price } =
    shipingData;

  const imageHeightClass = id >= 9 ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className="grid grid-cols-[120px_1fr] max-md:mx-auto max-sm:grid-cols-1 items-center gap-4 shadow-[0_20px_20px_rgba(0,0,0,0.5)] max-w-[700px]">
      <div className={`relative w-[120px] ${imageHeightClass}`}>
        <Image src={img_url} alt={name} fill className="object-cover rounded" />
      </div>
      <div className="flex flex-wrap  h-20 gap-6 text-gray text-[18px] ">
        <div className="flex items-center flex-col justify-between">
          <p>{name}</p>
          <p className="text-black">${total_price.toFixed(2)}</p>
        </div>
        <div className="flex items-center flex-col justify-between text-gray text-[18px] ">
          <p>{`Quantity : ${quantity}`}</p>
<CountdownTimer startTime={created_at} />

          
        </div>
        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center gap-3 text-gray text-[18px] ">
            <p>status </p>
            <p
              className={`text-black rounded-lg px-3  ${
                payed ? "bg-green-400" : "bg-grayLight"
              }`}
            >
              {payed ? "paid" : "Shipping in progress"}
            </p>
          </div>
             <p>till receive</p>


          {/* <p className="text-black">{`Size : ${size.toUpperCase()}`}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ShippingData;

// [
//   {
//     id: 15,
//     name: 'Oversized T-shirt',
//     shop: true,
//     size: 'xl',
//     price: 90,
//     views: 4.2,
//     img_url: 'https://fisvigzolbhlpwsbzwnl.supabase.co/storage/v1/object/public/product-images/shop6.png',
//     category: 'women',
//     discount: 10,
//     describtion: 'A comfy oversized tee, perfect for laid-back vibes and effortless style.',
//     star_rating: 4,
//     created_at: '2025-07-26T13:58:56.498473+00:00',
//     payed: true,
//     quantity: 3,
//     total_price: 293,
//     orderId: 28
//   }
// ]
