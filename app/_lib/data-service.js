import { auth } from "./auth";
import { supabase } from "./supabase";

export const getProducts = async function () {
  const { data, error } = await supabase.from("products").select("*").eq("shop", false);
  // For testing
  // await new Promise((res) => setTimeout(res, 10000));

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
};



export const getShop = async function () {
  const { data, error } = await supabase.from("products").select("id,name,price,discount,describtion,img_url,size").eq("shop", true);
  // For testing
  // await new Promise((res) => setTimeout(res, 10000));

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
};


export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,views,price,discount,star_rating,describtion,size,img_url")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getGuest(email) {
  // const session = await auth();
  // if (!session) throw new Error("You must be logged in");


  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

// موثت
// if (error) {
//   console.error("Error fetching guest:", error);
// }


  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

  export async function createGuest(newGuest) {
    // const session = await auth();
    // if (!session) throw new Error("You must be logged in");

    const { data, error } = await supabase.from("guests").insert([newGuest]);

    if (error) {
      console.error(error);
      throw new Error("Guest could not be created");
    }

    return data;
  }


  export  async function getOrders() {
    const session =await auth()
    if (!session) throw new Error("You must be logged in");


     const { data, error } = await supabase
    .from("orders")
    .select("*, product:product_id(*)")
    .eq("guest_id",session.user.guestId)


    if (error) {
    console.error(error);
    throw new Error("cart items could not be loaded");
  }

  return data;
  }



