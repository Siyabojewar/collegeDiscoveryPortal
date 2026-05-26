import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-600">
          CollegeDiscover
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/colleges" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors">
            Colleges
          </Link>
          <Link href="/predictor" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors">
            Predictor
          </Link>
          <Link href="/compare" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors">
            Compare
          </Link>
        </div>
        <button className="md:hidden p-2 text-secondary">
          ☰
        </button>
      </div>
    </nav>
  );
}
