"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && "style" in contentRef.current) {
      (contentRef.current as HTMLElement).style.overflowY =
        showAdditionalOptions ? "auto" : "hidden";
    }
  }, [showAdditionalOptions]);

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

  const logoOptions = [
    { name: "Flashy", icon: "/flashy.svg" },
    { name: "Tech", icon: "/tech.svg" },
    { name: "Modern", icon: "/modern.svg" },
    { name: "Playful", icon: "/playful.svg" },
    { name: "Abstract", icon: "/abstract.svg" },
    { name: "Minimal", icon: "/minimal.svg" },
  ];

  return (
    <div className="w-[316px] h-[full] bg-[#2C2C2C] text-[#F3F3F3] flex flex-col font-jura">
      <div className="flex-grow overflow-y-auto p-6">
        {/* API Key Section */}
        <div className="mb-6">
          <label className="text-xs font-jura uppercase text-[#F3F3F3] mb-1 block">
            [Optional] Add Your Together API Key
          </label>
          <div className="w-[252px] h-[36px] bg-[#343434] border border-[#2C2C2C] rounded">
            <input
              className="w-full h-full px-[10px] bg-transparent text-xs text-[#6F6F6F]"
              placeholder="API Key"
            />
          </div>
        </div>

        {/* Company Name Section */}
        <div className="mb-[20px]">
          <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block">
            Company Name
          </label>
          <div className="w-[252px] h-[35px] bg-[#343434] rounded">
            <input
              className="w-full h-full px-[12px] bg-transparent text-xs text-[#6F6F6F]"
              placeholder="Amazon"
            />
          </div>
        </div>

        {/* Layout Section */}
        <div className="mb-[20px]">
          <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block flex items-center">
            Layout
            <Info size={11} className="ml-2 text-[#6F6F6F]" />
          </label>
          <div className="flex space-x-[11px]">
            {layouts.map((layout, index) => (
              <div key={layout.name} className="flex flex-col items-center">
                <div
                  className={`w-[77px] h-[77px] bg-[#343434] rounded flex items-center justify-center mb-2 relative ${
                    index === 2 ? "border border-[#F3F3F3]" : ""
                  }`}
                >
                  <Image
                    src={layout.icon}
                    alt={layout.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  className={`text-xs ${
                    index === 2 ? "text-[#F3F3F3]" : "text-[#6F6F6F]"
                  }`}
                >
                  {layout.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Style Section */}
        <div className="mb-[20px]">
          <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block flex items-center">
            Logo Option
            <Info size={11} className="ml-2 text-[#6F6F6F]" />
          </label>
          <div className="grid grid-cols-3 gap-x-[11px] gap-y-[27px]">
            {logoOptions.map((option, index) => (
              <div key={option.name} className="flex flex-col items-center">
                <div
                  className={`w-[77px] h-[77px] bg-[#343434] rounded flex items-center justify-center mb-2 relative ${
                    index === 5 ? "border border-[#F3F3F3]" : ""
                  }`}
                >
                  <Image
                    src={option.icon}
                    alt={option.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  className={`text-xs ${
                    index === 5 ? "text-[#F3F3F3]" : "text-[#6F6F6F]"
                  }`}
                >
                  {option.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Color Picker Section */}
        <div className="flex space-x-3 mb-[20px]">
          <div className="flex-1">
            <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block">
              Primary
            </label>
            <div className="w-[120px] h-[35px] bg-[#343434] rounded flex items-center px-2">
              <div className="w-3 h-3 bg-[#0F6FFF] rounded-sm mr-2"></div>
              <span className="text-xs text-[#F3F3F3] flex-grow">Blue</span>
              <ChevronDown size={16} className="text-[#F3F3F3]" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block">
              Background
            </label>
            <div className="w-[120px] h-[35px] bg-[#343434] rounded flex items-center px-2">
              <div className="w-3 h-3 bg-[#6F6F6F] rounded-sm mr-2"></div>
              <span className="text-xs text-[#6F6F6F] flex-grow">Random</span>
              <ChevronDown size={16} className="text-[#F3F3F3]" />
            </div>
          </div>
        </div>

        {/* Additional Options Section */}
        <div className="mb-[166px]">
          <button
            className="text-xs text-[#F3F3F3] flex items-center mt-4"
            onClick={() => setShowAdditionalOptions(!showAdditionalOptions)}
          >
            {showAdditionalOptions ? (
              <ChevronUp size={16} className="mr-1" />
            ) : (
              <ChevronDown size={16} className="mr-1" />
            )}
            Additional Options
          </button>

          {showAdditionalOptions && (
            <div className="mt-4">
              <div className="mb-4">
                <label className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2">
                  Color Scheme
                  <Info size={11} className="ml-2 text-[#6F6F6F]" />
                </label>
                <div className="grid grid-cols-3 gap-[11px]">
                  {colorSchemes.map((scheme) => (
                    <div
                      key={scheme.name}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[76px] h-[76px] bg-[#2C2C2C] border border-[#6A6A6A] rounded-md overflow-hidden mb-1">
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
                      <span className="text-xs text-[#6F6F6F]">
                        {scheme.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2">
                  Additional Info
                  <Info size={11} className="ml-2 text-[#6F6F6F]" />
                </label>
                <div className="w-[252px] h-[70px] bg-[#343434] rounded p-3">
                  <p className="text-xs text-[#6F6F6F]">
                    A SaaS that makes portfolios with AI
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Generate Logo Button */}
        <div className="py-2">
          <button className="w-full bg-[#F3F3F3] text-[#2C2C2C] py-[10px] rounded font-bold text-sm flex items-center justify-center">
            Generate Logo
          </button>
          <div className="text-center mt-2 text-xs text-[#F3F3F3]">
            Credits: 3 (renews in 14h)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
