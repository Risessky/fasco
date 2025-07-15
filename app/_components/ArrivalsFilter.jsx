"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ArrivalsFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("category") ?? "women";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-between items-center mt-8 px-[62.5px] w-full">
      <Button
        filter="men"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Men&apos;s Fashion
      </Button>
      <Button
        filter="women"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        women&apos;s Fashion
      </Button>
      <Button
        filter="discounts"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Discount Deals
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`text-[15px] text-gray bg-grayLight w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black  ${
        filter === activeFilter ? "text-white !bg-black" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default ArrivalsFilter;
