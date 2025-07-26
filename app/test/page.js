import { auth } from "../_lib/auth";
import { createGuest, getGuest } from "../_lib/data-service";

async function page() {
const existingGuest = await getGuest("bb");

        if (!existingGuest)
          await createGuest({ email: "bb", name: "a" });





// await createGuest({ email: "hggggi@test.com", name: "ho" });
// const guest =await getGuest("asghar@test.com")
// console.log(guest)




// const session =await auth()
// console.log(session)









    return (
        <h1 className="flex w-full h-screen justify-center items-center">
           Test page 
        </h1>
    )
}

export default page
