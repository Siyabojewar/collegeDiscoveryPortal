import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CollegeDiscover. All rights reserved.
      </div>
    </footer>
  );
}
