import Link from "next/link"

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-6 border-t-[1px] border-grayLight pb-6">
            <div className="container mx-auto flex  justify-between pt-8 max-sm:flex-col max-sm:items-center max-sm:gap-3 ">
                <span className="font-volkhov text-[32px] text-grayDark">FASCO</span>
                <div className="flex justify-between items-center gap-4 flex-wrap max-sm:justify-center">
                    <Link className="text-grayDark" href="#">Support Center</Link>
                    <Link className="text-grayDark" href="#">Invoicing</Link>
                    <Link className="text-grayDark" href="#">Contract</Link>
                    <Link className="text-grayDark" href="#">Careers</Link>
                    <Link className="text-grayDark" href="#">Blog</Link>
                    <Link className="text-grayDark" href="#">FAQs</Link>
                </div>
            </div>
            <div className="text-grayDark text-[12px]">Copyright © 2022 Xpro . All Rights Reseved.</div>
        </footer>
    )
}

export default Footer
