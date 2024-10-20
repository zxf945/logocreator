import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`w-full ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-[#343434] mt-4">
        {/* Centered Logo */}
        <div className="flex-grow flex justify-start md:justify-center">
          <Link
            href="https://www.together.ai"
            className="flex items-center mr-4 md:mr-0"
          >
            <Image
              src="together-ai-logo1.svg"
              alt="together.ai"
              width={500} // Increased width
              height={120} // Increased height
              className="pl-0 md:pl-0 lg:pl-28"
            />
          </Link>
        </div>
        {/* Credits Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-300 hidden lg:block">
            Credits :
          </span>
          <span className="text-sm font-jura text-gray-300 hidden lg:block">
            3
          </span>
          <Image
            src="/insan.png"
            alt="Insan"
            width={36} // Original width
            height={36} // Original height
            className="w-10 h-auto bg-gray-600 rounded-full md:w-9" // Increased width for small screens
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
