import { supabase } from "./supabase";

export const getProducts = async function () {
  const { data, error } = await supabase.from("products").select("*");
  // For testing
  // await new Promise((res) => setTimeout(res, 5000));

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
};



