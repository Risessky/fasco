import CartItem from "./CartItem";

function CartList({ cartItems }) {
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <div className="container mx-auto w-full max-md:w-[90%] overflow-x-auto">
      {isEmpty ? (
        <p className="text-center py-10 text-gray">Your cart is empty.</p>
      ) : (
        <>
          {/* Desktop version */}
          <table className="hidden md:table w-full text-left table-fixed">
            <thead className="border-b border-gray font-volkhov text-[22px]">
              <tr>
                <th className="pb-10 w-[42%]">Product</th>
                <th className="pb-10 w-[25%]">Price</th>
                <th className="pb-10 w-[25%]">Quantity</th>
                <th className="pb-10 w-[8%]">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.id} />
              ))}
            </tbody>
          </table>

          {/* Mobile version */}
          <div className="space-y-8 md:hidden">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="border-b border-gray pb-6">
                <CartItem cartItem={cartItem} isMobile />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;
