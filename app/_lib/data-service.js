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

