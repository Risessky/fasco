// app/login/layout.jsx

export const metadata = {
  title: "Sign Up | Fasco – Join the Fashion Revolution",
  description:
    "Create your Fasco account to unlock exclusive discounts, track orders, and enjoy a personalized shopping experience. Fast and easy signup process.",
  keywords: [
    "fasco signup",
    "create account",
    "register",
    "join fasco",
    "fasco registration",
    "new user",
    "online shopping account",
    "exclusive discounts",
    "ecommerce signup",
  ],
  openGraph: {
    title: "Sign Up | Fasco – Join the Fashion Revolution",
    description:
      "Sign up at Fasco and start enjoying exclusive offers, order tracking, and a personalized shopping journey.",
    url: "https://fasco-shops.vercel.app/login",
    siteName: "Fasco",
    locale: "en_US",
    type: "website",
  },
};


export default function LoginLayout({ children }) {
  return (
    <main className="scroll-y">{children}</main>
  );
}
