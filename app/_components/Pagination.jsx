function Pagination({ onPrev, onNext, disablePrev, disableNext }) {
  return (
    <div className="absolute left-[-130px] bottom-0 max-md:left-0 max-sm:left-[-17px]">
      <div className="flex gap-4">
        <button
          onClick={onPrev}
          disabled={disablePrev}
          className={`w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
            disablePrev ? "opacity-50 cursor-not-allowed hover:bg-gray-300" : ""
          }`}
          aria-label="Previous page"
        >
          &#8249;
        </button>
        <button
          onClick={onNext}
          disabled={disableNext}
          className={`w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
            disableNext ? "opacity-50 cursor-not-allowed hover:bg-gray-300" : ""
          }`}
          aria-label="Next page"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
