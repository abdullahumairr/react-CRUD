import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto py-7">
      <img className="w-44 h-6" src="/nav/logo.png" alt="logo" />
      <button className="flex items-center gap-3 pl-3 py-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
        <Search className="text-[#6A7282]" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-[#6A7282] "
        />
      </button>
    </nav>
  );
};

export default Navbar;
