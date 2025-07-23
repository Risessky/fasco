import Image from "next/image"

function CheckItem({itemData}) {
    const{id,name,size,price,discount,img_url}=itemData

  const totalPrice = (price * (100 - discount)) / 100;

    return (
        <li className="flex justify-evenly items-center mt-4">

<div className="flex items-center gap-4">

        <div className={`relative w-[137px] h-[137px]`}>
            <Image src={img_url} fill alt={name} className="object-cover object-top"/>
        </div>
        <div className="flex flex-col items-start">
        <p className="text-black font-volkhov text-[18px]">{name}</p>
        <span className="text-grayDark text-[16px]">{`size : ${size?.toUpperCase()}`}</span>
        </div>

</div>


        <p className="text-grayDark">${totalPrice.toFixed(2)}</p>
        </li>
    )
}

export default CheckItem
