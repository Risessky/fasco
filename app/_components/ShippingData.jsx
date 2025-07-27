import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import DeleteOrderButton from "./DeleteOrder";

function ShippingData({ shipingData }) {
  const {
    id,
    name,
    size,
    img_url,
    created_at,
    payed,
    quantity,
    total_price,
    checked,
    orderId,
  } = shipingData;

  const imageHeightClass = id >= 9 ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className="grid grid-cols-[120px_1fr] max-md:grid-cols-1 max-md:gap-y-4 gap-4 items-center bg-white shadow-lg rounded-xl p-4 mb-6 w-[80%] max-w-[700px] mx-auto">
      {/* Image */}
      <div className={`relative w-[120px] max-md:w-full max-md:aspect-square ${imageHeightClass}`}>
        <Image
          src={img_url}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex flex-wrap gap-6 max-md:flex-col max-md:gap-4 text-sm sm:text-base text-gray">
        {/* Name & Price */}
        <div className="flex flex-col justify-between min-w-[100px]">
          <p className="font-semibold">{name}</p>
          <p className="text-black">${total_price.toFixed(2)}</p>
        </div>

        {/* Quantity & Timer */}
        <div className="flex flex-col justify-between min-w-[130px]">
          <p>{`Quantity: ${quantity}`}</p>
          {payed ? (
            <CountdownTimer startTime={created_at} />
          ) : checked ? (
            <p>Waiting for payment...</p>
          ) : (
            <p>Waiting for check...</p>
          )}
        </div>

        {/* Status & Delete */}
        <div className="flex flex-col justify-between items-start gap-2 min-w-[140px]">
          <div className="flex items-center gap-2">
            <p>Status:</p>
            <p
              className={`text-black rounded-lg px-3 
    ${payed ? "bg-green-400" : checked ? "bg-blue-400" : "bg-gray"}`}
            >
              {payed ? "paid" : checked ? "unpaid" : "unchecked"}
            </p>
            {/* <p
              className={`text-white text-xs font-medium py-1 px-2 rounded-md ${
                payed
                  ? "bg-green-500"
                  : checked
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            >
              {payed ? "paid" : checked ? "unpaid" : "unchecked"}
            </p> */}
          </div>
          <DeleteOrderButton orderId={orderId} />
        </div>
      </div>
    </div>
  );
}

export default ShippingData;










// import Image from "next/image";
// import CountdownTimer from "./CountdownTimer";
// import DeleteOrderButton from "./DeleteOrder";

// function ShippingData({ shipingData }) {
//   const {
//     id,
//     name,
//     size,
//     img_url,
//     created_at,
//     payed,
//     quantity,
//     total_price,
//     checked,
//     orderId,
//   } = shipingData;

//   const imageHeightClass = id >= 9 ? "aspect-[3/4]" : "aspect-[4/3]";

//   return (
//     <div className="grid grid-cols-[120px_1fr] max-md:mx-auto max-sm:grid-cols-1 items-center gap-4 shadow-[0_20px_20px_rgba(0,0,0,0.5)] max-w-[700px]">
//       <div className={`relative w-[120px] ${imageHeightClass}`}>
//         <Image src={img_url} alt={name} fill className="object-cover rounded" />
//       </div>
//       <div className="flex flex-wrap  h-20 gap-6 text-gray text-[18px] ">
//         <div className="flex items-center flex-col justify-between">
//           <p>{name}</p>
//           <p className="text-black">${total_price.toFixed(2)}</p>
//         </div>
//         <div className="flex items-center flex-col justify-between text-gray text-[18px] ">
//           <p>{`Quantity : ${quantity}`}</p>
//         {payed ? <CountdownTimer startTime={created_at} /> : checked ? "wainting for pay.." : "wainting for check.."}

//         </div>
//         <div className="flex items-center flex-col justify-between">
//           <div className="flex items-center gap-3 text-gray text-[18px] ">
//             <p>status </p>
//             <p
//               className={`text-black rounded-lg px-3 
//     ${payed ? "bg-green-400" : checked ? "bg-blue-400" : "bg-gray"}`}
//             >
//               {payed ? "paid" : checked ? "unpaid" : "unchecked"}
//             </p>

//           </div>
//           {/* <p>till receive</p> */}
//           <DeleteOrderButton orderId={orderId} />

//           {/* <p className="text-black">{`Size : ${size.toUpperCase()}`}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShippingData;

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
