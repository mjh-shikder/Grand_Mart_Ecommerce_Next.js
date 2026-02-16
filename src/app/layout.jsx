import { Geist, Geist_Mono, Lexend } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import MyContainer from "@/components/MyContainer";


const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
});

// Using Local Bangla Fonts
export const fontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
  //  weight: 
})

export const metadata = {
  metadataBase: new URL("https://grand-mart-gray.vercel.app"),

  title: {
    default: "Grand Mart | Premium Online Shopping Store",
    template: "%s | Grand Mart",
  },

  description:
    "Grand Mart is your trusted online marketplace for premium products at unbeatable prices. Shop electronics, fashion, and home essentials with secure checkout and fast delivery.",

  keywords: [
    "Grand Mart",
    "online shopping",
    "ecommerce store",
    "buy electronics",
    "fashion store",
    "secure checkout",
  ],

  authors: [{ name: "Grand Mart" }],
  creator: "Grand Mart",

  openGraph: {
    type: "website",
    url: "/",
    title: "Grand Mart | Premium Online Shopping Store",
    description:
      "Discover top-quality products at Grand Mart. Fast delivery and secure payments.",
    siteName: "Grand Mart",
    images: [
      {
        url: "https://i.ibb.co.com/ZR9wwnQh/home-preview.png",
        width: 1200,
        height: 630,
        alt: "Grand Mart Home Page Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grand Mart | Premium Online Shopping Store",
    description:
      "Shop premium products with secure checkout and fast delivery.",
    images: ["https://i.ibb.co.com/ZR9wwnQh/home-preview.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/5hrhdzs2/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <header>
          <MyContainer>
            <Navbar></Navbar>
          </MyContainer>
        </header>

        <main className="min-h-[calc(100vh-324px)]">
          <MyContainer>{children}</MyContainer>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
