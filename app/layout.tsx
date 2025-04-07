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
      <body className="min-h-screen relative overflow-x-hidden">
        {/* Background wrapper */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-sky-800 via-sky-900 to-slate-800">
          {/* fixed gradient */}
        </div>
        <Navbar/>
        <NavbarScrollHandler/>
        {/* Decorative "waves" at the top*/}
        <div className="relative h-50 overflow-hidden w-[140%] -left-[10%]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 rotate-180 w-full h-full wave-animation-l"
          >
            <path
              d="M0,30 C150,80 350,20 500,70 C650,110 800,30 1200,70 L1200,120 L0,120 Z"
              className="fill-black/40"
            ></path>
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 rotate-180 w-full h-full wave-animation-r"
          >
            <path
              d="M0,70 C250,40 350,110 600,80 C750,60 850,100 1200,80 L1200,120 L0,120 Z"
              className="bg-slate-400"
            ></path>
          </svg>
        </div>
        <div className="relative z-0 p-2 text-white mt-[-60]">
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
              className="fill-slate-700/40"
            ></path>
          </svg>
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 w-[120%] -left-[10%] h-full wave-animation-r"
          >
            <path 
              d="M0,70 C250,40 350,110 600,80 C750,60 850,100 1200,80 L1200,120 L0,120 Z" 
              className="fill-slate-900/30"
            ></path>
          </svg>
          <Footer/>
        </div>
      </body>
    </html>
  );
}