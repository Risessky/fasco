import { supabase } from "@/app/_lib/supabase";


export async function GET() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}



// import { supabase } from "@/app/_lib/supabase";


// export async function GET() {
//   const { data, error } = await supabase.from("products").select("*");
//   if (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       "Cache-Control": "no-store, max-age=0",
//       "Content-Type": "application/json"
//     },
//   });
// }



