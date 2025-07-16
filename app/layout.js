
  import "@/app/_styles/globals.css";
  import { Poppins, Volkhov } from 'next/font/google'
  import Header from "./_components/Header";
import Footer from "./_components/Footer";

  const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins'
  })

  const volkhov = Volkhov({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-volkhov'
  })

  export const metadata = {
    title: 'My Shop',
    description: 'A sample e-commerce site built with Next.js and Tailwind CSS',
  }

  export default function RootLayout({ children }) {

    return (
      <html lang="en" className={`${poppins.variable} ${volkhov.variable}`}>
        <body className="font-sans bg-white text-gray-900">
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    )
  }
