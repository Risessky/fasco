"use client";

import { useRouter } from "next/navigation";

function NoResults() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full text-center px-4 text-grayDark mt-[240px]">
      <div className="text-5xl mb-4">😕</div>
      <h2 className="text-2xl font-semibold mb-2">No products found</h2>
      <p className="text-base text-gray mb-6">
        We couldn’t find any results matching your product.
      </p>
      <button
        onClick={handleBack}
        className="bg-grayDark text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
      >
        ← Back to previous page
      </button>
    </div>
  );
}

export default NoResults;
