import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`w-full ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-[#343434] mt-2">
        {/* Centered Logo */}
        <div className="flex-grow flex justify-start md:justify-center">
          <Link href="https://www.together.ai" className="flex items-center">
            <Image
              src="together-ai-logo1.svg"
              alt="together.ai"
              width={340}
              height={80}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto pl-0 md:pl-0 lg:pl-28"
            />
          </Link>
        </div>
        {/* Credits Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-300 hidden md:block">
            Credits:
          </span>
          <span className="text-sm font-jura text-gray-300 hidden md:block">
            3
          </span>
          <Image
            src="/insan.png"
            alt="Insan"
            width={34}
            height={34}
            className="w-8 h-8 bg-gray-600 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
