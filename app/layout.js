import "@/app/_styles/globals.css";
import { Poppins, Volkhov } from "next/font/google";
import { AuthProvider } from "./_components/AuthProvider";
import ToasterProvider from "./_components/ToasterProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
});

export const metadata = {
  title: "Fasco | Modern Fashion & Lifestyle Shop",
  description:
    "Discover the latest trends in fashion, clothing, and accessories at Fasco. Enjoy exclusive discounts, fast delivery, and premium quality products — all in one place.",
  keywords: [
    "fasco",
    "online shop",
    "ecommerce",
    "fashion store",
    "clothing",
    "trendy outfits",
    "lifestyle products",
    "discount fashion",
    "buy clothes online",
    "modern style",
  ],
  openGraph: {
    title: "Fasco | Modern Fashion & Lifestyle Shop",
    description:
      "Shop trendy clothes and lifestyle items at Fasco. Great prices, fast shipping, and stylish options for everyone.",
    url: "https://fasco-shops.vercel.app/",
    siteName: "Fasco",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${volkhov.variable}`}>
      <body className="font-sans bg-white text-gray-900">
       <AuthProvider>
        
        {children}
         <ToasterProvider />
        </AuthProvider> 
        
        </body>
    </html>
  );
}
