
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Staff", to: "/staff" },
  { name: "Applications", to: "/applications" },
  { name: "Rules", to: "/rules" },
  { name: "Premium Plans", to: "/premium-plans" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90 backdrop-blur-md border-b border-[#05dac0]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-[#05dac0]">
          Unity Verse
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className={cn(
                  "text-gray-300 hover:text-[#05dac0] transition-colors duration-300",
                  location.pathname === item.to && "font-semibold text-[#05dac0]"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
