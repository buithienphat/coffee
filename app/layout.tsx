import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantUpright = Cormorant_Upright({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--CU",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--OS",
});

export const metadata: Metadata = {
  title: "Coffee New",
  description: "Discover the latest in coffee with 'Coffee New'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantUpright.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />

        <div id="modal"></div>
      </body>
    </html>
  );
}
