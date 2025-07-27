"use server";

import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getUserOrders } from "./data-service";

export async function deleteOrder(orderId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

const userOrders =await getUserOrders()
const userOrderIds = userOrders.map((order) => order.id);
// console.log(userOrderIds)
// console.log(orderId)

 if (!userOrderIds.includes(orderId)) {
    throw new Error("You are not allowed to delete this order.");
  }

   const { error } = await supabase
    .from("orders")
    .delete()
    .eq("id", orderId);

  if (error) {
    throw new Error("Order could not be deleted.");
  }

  revalidatePath("/account");   

}

export async function pay(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const country = formData.get("country");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const address = formData.get("address");
  const city = formData.get("city");
  const postalCode = formData.get("postalCode");
  const orderId = formData.get("orderId");
  const totalPrice = formData.get("totalPrice");
  const saveInfo = formData.get("saveInfo") === "on";

  const name = `${firstName} ${lastName}`.trim();

  // console.log(country,firstName,lastName,address,city,postalCode,saveInfo,orderId)

  const updates = {
    country,
    address,
    city,
    postal_code: postalCode,
    show_data: saveInfo,
    name,
  };

  const { error } = await supabase
    .from("guests")
    .update(updates)
    .eq("id", session.user.guestId);

  if (error) throw new Error("could not be payed");

  const { error: orderError } = await supabase
    .from("orders")
    .update({
      payed: true,
      checked: false,
      total_price: Number(totalPrice) + 40,
    })
    .eq("id", orderId);

  if (orderError) throw new Error("order could not be updated");

  revalidatePath("/cart");
  revalidatePath("/checkout");
  revalidatePath("/accout");

  redirect("/account");
}

export async function checkout(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const wraped = formData.get("wraped") === "on";
  const orderId = formData.get("orderId");
  const totalPrice = Number(formData.get("totalPrice"));

  const updates = { checked: true };

  if (wraped) {
    updates.total_price = totalPrice + 10;
  }

  const { error } = await supabase
    .from("orders")
    .update(updates)
    .eq("id", orderId);

  if (error) throw new Error(" could not be updated");

  revalidatePath("/checkout");
  revalidatePath("/cart");
  redirect("/checkout");
}

export async function AddToCart(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const quantity = Number(formData.get("quantity") ?? 1);
  const product_id = Number(formData.get("product_id"));

  const { data: existingOrder, error: checkError } = await supabase
    .from("orders")
    .select("id")
    .eq("guest_id", session.user.guestId)
    .maybeSingle();

  if (checkError) {
    console.error(checkError);
    throw new Error("Failed to check for existing order");
  }

  if (existingOrder) {
    throw new Error(" sorry! You can just order one item");
    // or  redirect("/cart")
  }

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("price, discount")
    .eq("id", product_id)
    .single();

  if (productError || !product) {
    throw new Error("Product not found");
  }

  const total_price =
    ((product.price * (100 - (product.discount ?? 0))) / 100) * quantity;

  // 🆕 4. ساخت سفارش جدید
  const newOrder = {
    guest_id: session.user.guestId,
    quantity,
    product_id,
    total_price,
  };

  const { error } = await supabase.from("orders").insert([newOrder]);

  if (error) throw new Error("Order could not be inserted");

  revalidatePath("/cart");
  redirect("/cart");
}

export async function signInAction(formData) {
  const pathname = formData.get("pathname");
  const redirectPath = pathname ? `/${pathname}` : "/";
  await signIn("google", { redirectTo: redirectPath });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
