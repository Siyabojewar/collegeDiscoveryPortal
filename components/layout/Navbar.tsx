import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          CollegeDiscover
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/colleges" className="text-sm font-medium hover:text-primary transition-colors">
            Colleges
          </Link>
          <Link href="/compare" className="text-sm font-medium hover:text-primary transition-colors">
            Compare
          </Link>
          <Link href="/predictor" className="text-sm font-medium hover:text-primary transition-colors">
            Predictor
          </Link>
        </div>
        <button className="md:hidden p-2 text-secondary">
          ☰
        </button>
      </div>
    </nav>
  );
}
