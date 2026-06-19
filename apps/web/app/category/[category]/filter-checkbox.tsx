import React from "react";

// The structural blueprint for our checkbox inputs
interface FilterCheckboxProps {
  label: string;
  count: number;
  checked?: boolean; // Optional parameter
}

export function FilterCheckbox({ label, count, checked = false }: FilterCheckboxProps) {
  return (
    <label className="flex items-center justify-between text-[8px] text-[#156b6a] cursor-pointer hover:text-slate-900 py-0.5">
      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          defaultChecked={checked}
          className="rounded border-slate-300 text-[#156b6a] focus:ring-[#156b6a]-500 w-4 h-4" 
        />
        <span className={checked ? "font-medium text-slate-950" : ""}>{label}</span>
      </div>
      <span className="text-[8px] text-slate-400 font-normal">{count}</span>
    </label>
  );
}