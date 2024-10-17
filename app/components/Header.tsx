import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="flex justify-between items-center px-8 py-2 bg-[#343434]">
    <div className="flex items-center space-x-2">
      {/* <Image src="/logo.png" alt="LogoCreator" width={24} height={24} />
      <span className="text-2xl font-bold text-white">LogoCreator</span> */}
    </div>
    <div className="flex items-center space-x-4 ">
      <Link
        href="https://www.together.ai"
        className="flex items-center space-x-1 pr-[435px] mt-6"
      >
        <Image
          src="together-ai-logo1.svg"
          alt="together.ai"
          width={440}
          height={80}
        />
      </Link>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-300">Credits : </span>
        <span className="text-base font-jura text-gray-300 mr-2">3</span>
        <Image
          src="/insan.png"
          alt="Insan"
          width={34}
          height={34}
          className="w-8 h-8 bg-gray-600 rounded-full ml-1"
        />
      </div>
    </div>
  </div>
);

export default Header;
