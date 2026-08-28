import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KMD Sweet House | Traditional Handmade Sweets, Hanwella",
  description:
    "KMD Sweet House — homemade Sri Lankan sweets crafted with love since 2014. Visit our store in Thunnana, Hanwella, or order via WhatsApp.",
  keywords: [
    "KMD Sweet House",
    "Hanwella sweets",
    "Sri Lankan sweets",
    "traditional sweets",
    "mithai",
    "kokis",
    "aluwa",
  ],
  openGraph: {
    title: "KMD Sweet House",
    description: "Homemade Sri Lankan sweets, crafted with love since 2014.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
