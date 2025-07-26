import { useTransition } from "react";

function DeleteOrder() {
 const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }



    return (
        <button onClick={handleDelete}>

        </button>
            
       
    )
}

export default DeleteOrder
