import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarScrollHandler from "@/components/NavBarScrollHandler";

export const metadata: Metadata = {
  title: "Hector S. Lazcano",
  description: "Hector S. Lazcano's personal portfolio fullstack developer javascript python nextjs react nodejs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen relative overflow-x-hidden bg-black">
        {/* Background wrapper */}
        <Navbar />
        <NavbarScrollHandler />
        {/* Decorative "waves" at the top*/}
        {/* <div className="relative h-50 overflow-hidden w-[140%] -left-[10%]">
        </div> */}
        <div className="relative z-0 pt-20 text-white">
          {/*The content*/}
          {children}
        </div>
        {/* Decorative "waves" at the bottom*/}
        <div className="relative h-110 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0  h-full w-[120%] -left-[10%] wave-animation-l"
          >
            <path
              d="M0,30 C150,80 350,20 500,70 C650,110 800,30 1200,70 L1200,120 L0,120 Z"
              className="fill-sky-800"
            ></path>
          </svg>
          <Footer />
        </div>
      </body>
    </html>
  );
}