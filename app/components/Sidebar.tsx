"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const colorSchemes = [
    { name: "Greyscale", colors: ["#FFFFFF", "#BCBCBC", "#797979", "#333333"] },
    { name: "Cold", colors: ["#C0FDFC", "#3FDBF0", "#78ACF1", "#10029A"] },
    { name: "Contrast", colors: ["#FF3992", "#FFD425", "#3F00FF", "#B000FF"] },
    { name: "Warm", colors: ["#F6E1E1", "#F88020", "#D1284C", "#3E0E1F"] },
    {
      name: "Gradient",
      colors: [
        "linear-gradient(2.81deg, #4268FD 12.37%, #08A400 103.68%)",
        "linear-gradient(2.76deg, #FD42A9 10.88%, #A40003 103.73%)",
        "linear-gradient(3.65deg, #93FD42 -5.41%, #17006A 109.9%)",
      ],
    },
  ];

  const layouts = [
    { name: "Solo", icon: "/solo.svg" },
    { name: "Side", icon: "/side.svg" },
    { name: "Stack", icon: "/stack.svg" },
  ];

  const logoStyles = [
    { name: "Flashy", icon: "/flashy.svg" },
    { name: "Tech", icon: "/tech.svg" },
    { name: "Modern", icon: "/modern.svg" },
    { name: "Playful", icon: "/playful.svg" },
    { name: "Abstract", icon: "/abstract.svg" },
    { name: "Minimal", icon: "/minimal.svg" },
  ];

  const handleToggleAdditionalOptions = () => {
    setShowAdditionalOptions((prev) => !prev);
  };

  return (
    <div
      className={`sidebar ${className} w-full md:w-[395px] h-screen bg-[#2C2C2C] text-[#F3F3F3] flex flex-col font-jura`}
    >
      <div className={`flex-grow overflow-y-auto`}>
        <div className="p-6 pb-0">
          {/* API Key Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#F3F3F3] mb-2 block">
              [OPTIONAL] ADD YOUR TOGETHER API KEY
            </label>
            <input
              className="w-full md:w-[315px] h-[45px] bg-[#343434] border border-[#2C2C2C] rounded px-[12.5px] text-sm text-[#F3F3F3]"
              placeholder="API Key"
              aria-label="API Key"
              tabIndex={0}
            />
          </div>
          {/* Divider Line */}
          <div className="h-[1px] bg-[#6A6A6A] mb-6"></div>
          {/* Company Name Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#6F6F6F] mb-2 block">
              Company Name
            </label>
            <input
              className="w-full md:w-[315px] h-[43.75px] bg-[#343434] rounded px-[15px] text-sm text-[#F3F3F3]"
              placeholder="Amazon"
              aria-label="Company Name"
              tabIndex={0}
            />
          </div>

          {/* Layout Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#6F6F6F] mb-2 block flex items-center">
              Layout
              <Info size={11} className="ml-2 text-[#6F6F6F]" />
            </label>
            <div className="grid grid-cols-3 gap-3">
              {layouts.map((layout) => (
                <div key={layout.name} className="flex flex-col items-center">
                  <div className="w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-2">
                    <Image
                      src={layout.icon}
                      alt={layout.name}
                      width={96}
                      height={96}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className="text-xs text-[#6F6F6F]">{layout.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Style Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#6F6F6F] mb-2 flex items-center">
              STYLE
              <Info size={11} className="ml-2 text-[#6F6F6F]" />
            </label>
            <div className="grid grid-cols-3 gap-3">
              {logoStyles.map((style) => (
                <div key={style.name} className="flex flex-col items-center">
                  <div className="w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-1">
                    <Image
                      src={style.icon}
                      alt={style.name}
                      width={96}
                      height={96}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className="text-xs text-[#6F6F6F]">{style.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color Picker Section */}
          <div className="flex flex-col md:flex-row md:space-x-3 mb-[25px]">
            <div className="flex-1 mb-4 md:mb-0">
              <label className="text-sm font-bold uppercase text-[#6F6F6F] mb-1 block">
                Primary
              </label>
              <div className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2">
                <div className="w-4 h-4 bg-[#0F6FFF] rounded-sm mr-2"></div>
                <span className="text-sm text-[#F3F3F3] flex-grow">Blue</span>
                <ChevronDown size={20} className="text-[#F3F3F3]" />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-bold uppercase text-[#6F6F6F] mb-1 block">
                Background
              </label>
              <div className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2">
                <div className="w-4 h-4 bg-[#6F6F6F] rounded-sm mr-2"></div>
                <span className="text-sm text-[#6F6F6F] flex-grow">Random</span>
                <ChevronDown size={20} className="text-[#F3F3F3]" />
              </div>
            </div>
          </div>

          {/* Additional Options Section */}
          <div className="mb-4">
            <button
              className="text-sm text-[#F3F3F3] flex items-center w-full"
              onClick={handleToggleAdditionalOptions}
              aria-label="Toggle additional options"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleToggleAdditionalOptions()
              }
            >
              {showAdditionalOptions ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
              ADDITIONAL OPTIONS
            </button>
            {showAdditionalOptions && (
              <div className="mt-4">
                {/* Color Scheme Section */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2">
                    Color Scheme
                    <Info size={14} className="ml-2 text-[#6F6F6F]" />
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-[14px]">
                    {colorSchemes.map((scheme) => (
                      <div
                        key={scheme.name}
                        className="flex flex-col items-center"
                      >
                        <div className="w-[95px] h-[95px] bg-[#2C2C2C] border border-[#6A6A6A] rounded-md overflow-hidden mb-1">
                          {scheme.name === "Gradient"
                            ? scheme.colors.map((color, index) => (
                                <div
                                  key={index}
                                  className="w-full h-1/3"
                                  style={{ background: color }}
                                ></div>
                              ))
                            : scheme.colors.map((color, index) => (
                                <div
                                  key={index}
                                  className="w-full h-1/4"
                                  style={{ backgroundColor: color }}
                                ></div>
                              ))}
                        </div>
                        <span className="text-sm text-[#6F6F6F]">
                          {scheme.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info Section */}
                <div className="mb-4">
                  <label className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2">
                    Additional Info
                    <Info size={14} className="ml-2 text-[#6F6F6F]" />
                  </label>
                  <div className="w-full md:w-[315px] h-[87.5px] bg-[#343434] rounded p-3">
                    <p className="text-sm text-[#6F6F6F]">
                      A SaaS that makes portfolios with AI
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generate Logo Button - Always visible */}
      <div className="px-4">
        <div className="py-2">
          <button
            className="w-full bg-[#F3F3F3] text-[#2C2C2C] py-[12.5px] rounded font-bold text-base flex items-center justify-center"
            aria-label="Generate Logo"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              {
                /* Add generate logo functionality here */
              }
            }
          >
            <Image
              src="/generate-icon.svg"
              alt="Generate Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            Generate Logo
          </button>
          <div className="text-center mt-1 text-xs text-[#F3F3F3]">
            Credits: 3 (renews in 14h)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
