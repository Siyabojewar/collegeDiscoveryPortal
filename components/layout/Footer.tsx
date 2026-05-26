import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-12 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center text-sm text-gray-500 mb-6">
          &copy; {new Date().getFullYear()} CollegeDiscover. All rights reserved.
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-xs text-gray-500 leading-relaxed text-center shadow-sm">
          <p className="font-bold text-gray-700 mb-2">Disclaimer:</p>
          <ul className="space-y-1 inline-block text-left">
            <li>• This platform is a frontend MVP created for demonstration purposes.</li>
            <li>• Ratings and rankings are AI-generated approximations.</li>
            <li>• The platform currently contains data for 50 colleges only.</li>
            <li>• College images are sourced via publicly available URLs and may belong to their respective owners.</li>
            <li>• Users are advised to verify official college websites for accurate and updated information.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
