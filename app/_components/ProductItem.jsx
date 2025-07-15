import Image from "next/image";
import Link from "next/link";


// "incomplete"
function ProductItem({product}) {
const {id,category,name,views,price,discount,starRating,imgUrl} =product


  return (
    <Link href="#">
      <div className="relative w-[336px] h-[244px] max-w-full">
        <Image
          src={imgUrl}
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {name} 
بی  
    </Link>
  );
}

export default ProductItem;
