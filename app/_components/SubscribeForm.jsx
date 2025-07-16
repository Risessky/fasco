"use client"

function SubscribeForm() {
    return (
        <form className="flex flex-col items-center w-full">
            <input className="w-full max-w-[631px] shadow-[0_20px_35px_0_rgba(0,0,0,0.5)] mb-9 max-sm:mb-4  border-grayLight rounded-sm px-6 py-3" type="text" placeholder="micheal@gamil.com"></input>
            <button className="text-[15px] max-md:text-[13px] text-white bg-black  w-[207px] max-md:w-[150px] h-[56px] max-md:h-[40px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Subscribe Now</button>
        </form>
    )
}

export default SubscribeForm
