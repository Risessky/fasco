import CartItem from "./CartItem";
function CartList({ cartItems }) {
  return (
    <div className="container mx-auto w-full max-md:w-[90%] overflow-x-auto">
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
    </div>
  );
}


export default CartList;





// import CartItem from "./CartItem";

// function CartList({ cartItems }) {
//   return (
//     <table className="container mx-auto w-full text-left table-fixed">
//       <thead className="border-b border-gray font-volkhov text-[22px] ">
//         <tr>
//           <th className="pb-10 w-[45%] ">Product</th>
//           <th className="pb-10 w-[25%]">Price</th>
//           <th className="pb-10 w-[25%]">Quantity</th>
//           <th className="pb-10 w-[5%]">Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cartItems.map((cartItem) => (
//           <CartItem cartItem={cartItem} key={cartItem.id} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default CartList;
