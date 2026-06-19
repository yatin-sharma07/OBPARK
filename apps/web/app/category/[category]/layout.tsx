import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Michroma } from "next/font/google";

// 1. Initializing your custom Google Font configuration
export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
  preload: true,
});

interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ category: string }>; 
}

export default async function CategoryLayout({ children, params }: CategoryLayoutProps) {
  const resolvedParams = await params; 
  
  return (
    /* 2. CRUCIAL CHANGE HERE:
      We append `michroma.className` right into the string list of your container classes. 
      This injects Next.js font rendering directly across this whole tree wrapper block!
    */
    <div className={`${michroma.className} min-h-screen bg-transparent`}>
      
      {/* Passing the parameter into our header prop */}
      <Header categoryName={resolvedParams.category} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}