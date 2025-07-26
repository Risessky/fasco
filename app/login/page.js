import Image from "next/image";
import login from "@/public/images/login.jpg";
import Button from "../_components/Button";
import SigninButton from "../_components/SigninButton";



export default function Page({ searchParams }) {
  const callbackUrl = searchParams?.callbackUrl;

  let pathname = "";
  if (callbackUrl) {
    try {
      const url = new URL(callbackUrl);
      pathname = url.pathname.replace("/", ""); 
    } catch (err) {
      pathname = "";
    }
  }

  // console.log(pathname); 


  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <section className="max-md:hidden grid grid-cols-1 md:grid-cols-2 w-[80%] h-[90vh] border  border-[#DBDBDB] rounded-e-xl">
        <div className="relative w-full h-full">
          <Image src={login} alt="login" fill className="object-cover" placeholder="blur" />
        </div>

        <div className="relative flex items-center justify-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-volkhov text-[66px] mb-20 max-lg:text-[40px]">
              FASCO
            </h1>
            <p className="font-volkhov text-[30px] max-lg:text-[20px]">
              Sign Up or Sign In To FASCO
            </p>
            <SigninButton pathname={pathname}/>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-[30px] h-[5px] bg-gray max-lg:h-[3px]"></div>
              <span className="text-[30px] font-bold text-gray my-10 max-lg:text-[20px]">
                or
              </span>
              <div className="w-[30px] h-[5px] bg-gray max-lg:h-[3px]"></div>
            </div>
            <Button styles="w-full h-[36px]">Go Home</Button>

            <p className="absolute right-[5%] bottom-6 max-lg:text-[12px]">
              FASCO Terms & Codnitions
            </p>
          </div>
        </div>
      </section>

      {/* mobile version */}
      <div className="md:hidden overflow-hidden">
        <div className="relative w-[90vw] h-[80vh]">
          <Image src={login} alt="login" fill className="object-cover" />

          <div className="absolute rounded-lg bg-white backdrop-blur-[5px] shadow-[0_5px_20px_rgba(0,0,0,0.4)] bg-opacity-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 px-6 py-10">
            <h1 className="font-volkhov text-[66px] mb-10  max-md:text-[30px]">
              FASCO
            </h1>
            <p className="font-volkhov text-[30px] mb-3 max-md:text-[16px]">
              Sign Up or Sign In To FASCO
            </p>
            <SigninButton />
            <div className="flex items-center gap-3 justify-center">
              <div className="w-[30px] h-[5px] bg-gray max-md:h-[3px]"></div>
              <span className="text-[30px] font-bold text-gray my-5 max-md:text-[16px]">
                or
              </span>
              <div className="w-[30px] h-[5px] bg-gray max-md:h-[3px]"></div>
            </div>
            <Button styles="w-full h-[36px] max-md:text-[12px]">Go Home</Button>
          </div>
          <p className="absolute right-[2%] bottom-2 font-bold text-[14px]">
            FASCO Terms & Codnitions
          </p>
        </div>
      </div>
    </div>
  );
}
