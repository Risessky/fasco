import Link from "next/link"

function Button({children,href="/",styles=""}) {
    return (
        <Link href={href} className={`text-[15px] text-white bg-black w-[152px] h-[56px] flex justify-center items-center rounded-[10px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${styles}`}>
            {children}
        </Link>
    )
}

export default Button
