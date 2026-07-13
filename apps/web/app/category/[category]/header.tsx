import React from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  categoryName: string;
}

export function Header({ categoryName }: HeaderProps) {
  return (
    <header className=" bg-transparent">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        <div className="text-xl font-bold tracking-wider text-[#1A817F] capitalize">
          {categoryName.replace("-", " ")}
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Search className="h-5 w-5" />
        </nav>
      </div>
    </header>
  );
}