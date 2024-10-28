import React from "react";
import TwitterSVG from "../../public/twitter.svg";
import GithubSVG from "../../public/Github.svg";
import Image from "next/image";
const Footer = () => (
  <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-[#343434] font-Jura">
    <div className="flex-grow text-center mb-2 md:mb-0 pl-0 md:pl-0 lg:pl-48">
      <span className="text-sm text-[#6F6F6F]">
        Powered by{" "}
        <a href="https://www.together.ai/" className="underline">
          Together.ai
        </a>{" "}
        &{" "}
        <a
          href="https://api.together.ai/signin?redirectUrl=/playground/image/black-forest-labs/FLUX.1.1-pro"
          className="underline"
        >
          Flux
        </a>
      </span>
    </div>
    <div className="flex space-x-3 mb-2 md:mb-0">
      <a
        href="https://github.com/Nutlope"
        className="text-sm text-[#6F6F6F] px-2 py-1 border border-[#6F6F6F] rounded flex items-center"
      >
        <Image src={GithubSVG} alt="Twitter" className="mr-1 h-5 w-5" />
        Github
      </a>
      <a
        href="https://x.com/nutlope"
        className="text-sm text-[#6F6F6F] px-2 py-1 border border-[#6F6F6F] rounded flex items-center"
      >
        <Image src={TwitterSVG} alt="github" className="mr-1 h-4 w-4" />
        Twitter
      </a>
    </div>
  </div>
);

export default Footer;
