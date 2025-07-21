function ShopHeader() {
    return (
        <div className="mb-[80px]">
        <h1 className="font-volkhov text-[42px] text-center text-black font-semibold">
          Fashion
        </h1>

        <nav className="text-[15px] text-black mt-4" aria-label="Breadcrumb">
          <ol className="list-reset justify-center flex items-center space-x-2">
            <li>
              <a href="/" className="hover:underline text-gray-600">
                Home
              </a>
            </li>
            <li>
              <span className="mx-1">{">"}</span>
            </li>
            <li className="text-gray-900 font-medium">Fashion</li>
          </ol>
        </nav>
      </div>
    )
}

export default ShopHeader
