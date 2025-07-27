"use client";

import { useTransition } from "react";
import  { deleteOrder} from "@/app/_lib/actions";

function DeleteOrderButton({ orderId }) {
  const [isPending, startTransition] = useTransition();



  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this reservation?"))
        startTransition(() => {
        deleteOrder(orderId);
      });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`px-3 py-1 rounded-md text-white text-[14px] 
        ${
          isPending ? "bg-gray cursor-not-allowed" : "bg-red hover:bg-[#dc2626]"
        }`}
    >
      {isPending ? "Deleting..." : "Delete Order"}
    </button>
  );
}

export default DeleteOrderButton;
