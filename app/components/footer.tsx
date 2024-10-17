import { GithubIcon, TwitterIcon } from "lucide-react";
import React from "react";

const Footer = () => (
  <div className="flex justify-between items-center px-8 py-4 bg-[#343434] font-jura">
    <div className="flex-grow text-center">
      {" "}
      {/* Centering the text */}
      <span className="text-xs  text-gray-500 ml-48">
        Powered by{" "}
        <a href="#" className="underline">
          Together.ai
        </a>{" "}
        &{" "}
        <a href="#" className="underline">
          Flux
        </a>
      </span>
    </div>
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-xs text-gray-500 px-2 py-1 border border-gray-700 rounded flex items-center"
      >
        <GithubIcon className="mr-2" />
        Github
      </a>
      <a
        href="#"
        className="text-xs text-gray-500 px-2 py-1 border border-gray-700 rounded flex items-center"
      >
        <TwitterIcon className="mr-2" />
        Twitter
      </a>
    </div>
  </div>
);

export default Footer;
