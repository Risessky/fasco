"use client";

import { useRouter, useSearchParams } from "next/navigation";

function ShopFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSize = searchParams.get("size");
  const selectedPrice = searchParams.get("price");

  const handleFilterClick = (type, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="max-md:flex max-md:justify-between max-sm:justify-evenly">
      <h2 className="font-volkhov text-[30px] max-sm:hidden">Filters</h2>

      {/* Size Filter */}
      <div>
        <h3 className="font-volkhov text-[18px] mt-7 mb-5">Size</h3>
        <div className="flex flex-wrap gap-3 max-w-[150px]">
          {["all","S", "M", "L", "XL"].map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                onClick={() => handleFilterClick("size", size)}
                className={`flex justify-center items-center w-[42px] h-[42px] border rounded-[5px] transition-colors duration-200 ${
                  isSelected
                    ? "bg-grayDark text-white border-grayDark"
                    : "text-gray border-gray"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-volkhov text-[18px] mt-7 mb-5">Prices</h3>
        <div className="flex flex-col gap-4 text-gray">
          {[
            { label: "all", value: "all" },
            { label: "$0 - $50", value: "0-50" },
            { label: "$51 - $100", value: "51-100" },
            { label: "$101 - $150", value: "101-150" },
            { label: "$151+", value: "151+" },
          ].map(({ label, value }) => {
            const isSelected = selectedPrice === value;
            return (
              <button
                key={value}
                onClick={() => handleFilterClick("price", value)}
                className={`text-left transition-colors duration-200 ${
                  isSelected ? "text-grayDark font-semibold underline" : ""
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopFilter;

