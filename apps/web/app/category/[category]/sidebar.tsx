"use client"; // Required for interactivity, hooks, and state tracking

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { FilterCheckbox } from "./filter-checkbox";

export function Sidebar() {
  // 1. State Tracking for Collapsible Dropdowns (True = Open, False = Closed)
  const [isOpen, setIsOpen] = useState({
    price: true,
    brand: true,
    memory: true,
    protection: false,
    screenDiagonal: false,
    screenType: false,
    battery: false,
  });

  // Helper function to toggle individual sections open/closed
  const toggleSection = (section: keyof typeof isOpen) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // 2. State Tracking for the Dual Price Sliders
  const [minPrice, setMinPrice] = useState(1299);
  const [maxPrice, setMaxPrice] = useState(8000); // Set a higher ceiling for flexibility

  // Handle slider alterations ensuring inputs don't cross over each other
  const handleMinSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 80);
    setMinPrice(value);
  };

  const handleMaxSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 80);
    setMaxPrice(value);
  };

  return (
    <aside className="w-64 shrink-0 hidden md:block space-y-5 select-none">
      
      {/* ================= PRICE SECTION ================= */}
      <div className="border-b border-slate-80 pb-5">
        <button 
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none"
        >
          <span>Price</span>
          {isOpen.price ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>

        {isOpen.price && (
          <div className="mt-4 space-y-5 animate-fadeIn">
            {/* Numeric Input Boxes */}
            <div className="flex items-center gap-2">
              <div>
                <label className="text-[8px] text-slate-400 block mb-1">From</label>
                <input 
                  type="number" 
                  value={minPrice} 
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1.5 text-[8px] font-medium outline-none" 
                />
              </div>
              <div className="text-slate-300 mt-4 text-[8px]">—</div>
              <div>
                <label className="text-[8px] text-slate-400 block mb-1">To</label>
                <input 
                  type="number" 
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded px-2 py-1.5 text-[8px] font-medium outline-none" 
                />
              </div>
            </div>

            {/* Custom Dual Slider Control Track */}
            <div className="relative w-full h-1 bg-slate-200 rounded">
              {/* Highlighted active area between pointers */}
              <div 
                className="absolute h-1 bg-slate-900 rounded"
                style={{
                  left: `${(minPrice / 8000) * 80}%`,
                  right: `${80 - (maxPrice / 8000) * 80}%`
                }}
              />
              {/* Invisible native range sliders layered over layout */}
              <input 
                type="range" 
                min="0" 
                max="8000" 
                value={minPrice}
                onChange={handleMinSlider}
                className="absolute w-full h-1 top-0 left-0 appearance-none bg-transparent pointer-events-none dynamic-slider-thumb"
              />
              <input 
                type="range" 
                min="0" 
                max="8000" 
                value={maxPrice}
                onChange={handleMaxSlider}
                className="absolute w-full h-1 top-0 left-0 appearance-none bg-transparent pointer-events-none dynamic-slider-thumb"
              />
            </div>
          </div>
        )}
      </div>

      {/* ================= BRAND SECTION ================= */}
      <div className="border-b border-slate-80 pb-5">
        <button onClick={() => toggleSection("brand")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Brand</span>
          {isOpen.brand ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>

        {isOpen.brand && (
          <div className="mt-3">
            <div className="relative flex items-center mb-3">
              <Search className="absolute left-2.5 h-3.5 w-3.5 text-slate-400" />
              <input type="text" placeholder="Search" className="w-full bg-slate-50 border border-transparent rounded pl-8 pr-3 py-1.5 text-[8px] outline-none focus:bg-white focus:border-slate-200" />
            </div>
            <div className="space-y-2 max-h-40  text-[8px] overflow-y-auto pr-1">
              <FilterCheckbox label="Apple" count={18} checked={true} />
              <FilterCheckbox label="Samsung" count={125} />
              <FilterCheckbox label="Xiaomi" count={68} />
              <FilterCheckbox label="Poco" count={44} />
              <FilterCheckbox label="OPPO" count={36} />
            </div>
          </div>
        )}
      </div>

      {/* ================= MEMORY SECTION ================= */}
      <div className="border-b border-slate-80 pb-5">
        <button onClick={() => toggleSection("memory")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Built-in memory</span>
          {isOpen.memory ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>

        {isOpen.memory && (
          <div className="mt-3 space-y-2 text-[8px]">
            <FilterCheckbox label="16GB" count={65} />
            <FilterCheckbox label="32GB" count={123} />
            <FilterCheckbox label="64GB" count={48} />
            <FilterCheckbox label="128GB" count={50} />
          </div>
        )}
      </div>

      {/* ================= PASSTHROUGH COLLAPSED DROPDOWNS ================= */}
      {/* Protection Class */}
      <div className="border-b border-slate-80 pb-5">
        <button onClick={() => toggleSection("protection")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Protection class</span>
          {isOpen.protection ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>
        {isOpen.protection && <div className="mt-3 text-[8px] text-slate-400 pl-1">No options loaded.</div>}
      </div>

      {/* Screen Diagonal */}
      <div className="border-b border-slate-80 pb-5">
        <button onClick={() => toggleSection("screenDiagonal")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Screen diagonal</span>
          {isOpen.screenDiagonal ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>
        {isOpen.screenDiagonal && <div className="mt-3 text-[8px] text-slate-400 pl-1">No options loaded.</div>}
      </div>

      {/* Screen Type */}
      <div className="border-b border-slate-80 pb-5">
        <button onClick={() => toggleSection("screenType")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Screen type</span>
          {isOpen.screenType ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>
        {isOpen.screenType && <div className="mt-3 text-[8px] text-slate-400 pl-1">No options loaded.</div>}
      </div>

      {/* Battery Capacity */}
      <div className="pb-5">
        <button onClick={() => toggleSection("battery")} className="flex items-center justify-between w-full font-semibold text-slate-800 text-[8px] outline-none">
          <span>Battery capacity</span>
          {isOpen.battery ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </button>
        {isOpen.battery && <div className="mt-3 text-[8px] text-slate-400 pl-1">No options loaded.</div>}
      </div>

    </aside>
  );
}