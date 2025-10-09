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
      <body className="grid-col-1 min-h-svh relative overflow-x-hidden bg-gradient-to-b from-gray-950 via-95% via-gray-900 to-gray-950">
        {/* Background wrapper */}
        <div className="w-full max-w-[110rem] mx-auto">
          <Navbar />
        <NavbarScrollHandler />
        </div>
        {/* Decorative "waves" at the top*/}
        {/* <div className="relative h-50 overflow-hidden w-[140%] -left-[10%]">
        </div> */}
        <div className="z-0 pt-22 min-h-screen text-white">
          {/*The content*/}
          {children}
        </div>
        {/* Decorative "waves" at the bottom*/}
        {/* <div className="bg-red-300 overflow-hidden"> */}
          <div className="relative h-75 overflow-hidden">
          <svg
            viewBox="0 45 1200 65"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-full w-[120%] -left-[10%] wave-animation-l"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="90%" y2="0%">
                <stop offset="0%" stopColor="#0c4a6e" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 C150,80 350,20 500,70 C650,110 800,30 1200,70 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
            ></path>
          </svg>
          <Footer />            
        </div>
      </body>
    </html>
  );
}