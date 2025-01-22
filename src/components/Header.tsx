import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">Jendie IDS</h1>
          <span className="px-2 py-1 text-xs font-semibold bg-success/10 text-success rounded-full">
            System Active
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;