"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [selectedLogoStyle, setSelectedLogoStyle] = useState<string | null>(
    null
  );
  const [selectedPrimaryColor, setSelectedPrimaryColor] =
    useState<string>("Blue");
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState<string>("Random");
  const [selectedColorScheme, setSelectedColorScheme] = useState<string | null>(
    null
  );
  const [additionalInfo, setAdditionalInfo] = useState("");

  // Added missing state variables
  const [showPrimaryDropdown, setShowPrimaryDropdown] =
    useState<boolean>(false);
  const [showBackgroundDropdown, setShowBackgroundDropdown] =
    useState<boolean>(false);

  const primaryColors = [
    { name: "Blue", color: "#0F6FFF" },
    { name: "Red", color: "#FF0000" },
    { name: "Green", color: "#00FF00" },
    { name: "Yellow", color: "#FFFF00" },
  ];

  const backgroundColors = [
    { name: "Random", color: "#6F6F6F" },
    { name: "Gray", color: "#CCCCCC" },
    { name: "Black", color: "#000000" },
    { name: "White", color: "#FFFFFF" },
  ];

  const colorSchemes = [
    {
      name: "Greyscale",
      colors: ["#FFFFFF", "#BCBCBC", "#797979", "#333333"],
    },
    {
      name: "Cold",
      colors: ["#C0FDFC", "#3FDBF0", "#78ACF1", "#10029A"],
    },
    {
      name: "Contrast",
      colors: ["#FF3992", "#FFD425", "#3F00FF", "#B000FF"],
    },
    {
      name: "Warm",
      colors: ["#F6E1E1", "#F88020", "#D1284C", "#3E0E1F"],
    },
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

  const handleGenerateLogo = () => {
    // Add your logo generation logic here
    console.log({
      apiKey,
      companyName,
      selectedLayout,
      selectedLogoStyle,
      selectedPrimaryColor,
      selectedBackgroundColor,
      selectedColorScheme,
      additionalInfo,
    });
  };

  return (
    <div
      className={`sidebar ${className} w-full md:w-[395px] h-screen bg-[#2C2C2C] text-[#F3F3F3] flex flex-col font-jura`}
    >
      <div className={`flex-grow overflow-y-auto `}>
        <div className="p-6 pb-0">
          {/* API Key Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#F3F3F3] mb-2 block">
              [OPTIONAL] ADD YOUR TOGETHER API KEY
            </label>
            <input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full md:w-[315px] h-[43.75px] bg-[#343434] rounded px-[15px] text-sm text-[#F3F3F3]"
              placeholder="Amazon"
              aria-label="Company Name"
              tabIndex={0}
            />
          </div>

          {/* Layout Section */}
          <div className="mb-6">
            <label className="text-xs uppercase text-[#6F6F6F] mb-2 flex items-center">
              Layout
              <Info size={11} className="ml-2 text-[#6F6F6F]" />
            </label>
            <div className="grid grid-cols-3 gap-3">
              {layouts.map((layout) => (
                <div key={layout.name} className="flex flex-col items-center">
                  <button
                    className={`w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-2 cursor-pointer focus:outline-none ${
                      selectedLayout === layout.name
                        ? "border-2 border-[#F3F3F3]"
                        : ""
                    }`}
                    onClick={() => setSelectedLayout(layout.name)}
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setSelectedLayout(layout.name)
                    }
                  >
                    <Image
                      src={layout.icon}
                      alt={layout.name}
                      width={96}
                      height={96}
                      style={{ objectFit: "contain" }}
                    />
                  </button>
                  <span
                    className={`text-xs ${
                      selectedLayout === layout.name
                        ? "text-white"
                        : "text-[#6F6F6F]"
                    }`}
                  >
                    {layout.name}
                  </span>
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
                  <div
                    className={`w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-1 cursor-pointer ${
                      selectedLogoStyle === style.name
                        ? "border-2 border-[#F3F3F3]"
                        : ""
                    }`}
                    onClick={() => setSelectedLogoStyle(style.name)}
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setSelectedLogoStyle(style.name)
                    }
                  >
                    <Image
                      src={style.icon}
                      alt={style.name}
                      width={96}
                      height={96}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span
                    className={`text-xs ${
                      selectedLogoStyle === style.name
                        ? "text-white"
                        : "text-[#6F6F6F]"
                    }`}
                  >
                    {style.name}
                  </span>
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
              <div className="relative">
                <div
                  className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2 cursor-pointer"
                  onClick={() =>
                    setShowPrimaryDropdown((prev: boolean) => !prev)
                  }
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    setShowPrimaryDropdown((prev: boolean) => !prev)
                  }
                >
                  <div
                    className="w-4 h-4 rounded-sm mr-2"
                    style={{
                      backgroundColor: primaryColors.find(
                        (color) => color.name === selectedPrimaryColor
                      )?.color,
                    }}
                  ></div>
                  <span className="text-sm text-[#F3F3F3] flex-grow">
                    {selectedPrimaryColor}
                  </span>
                  <ChevronDown size={20} className="text-[#F3F3F3]" />
                </div>
                {showPrimaryDropdown && (
                  <div className="absolute mt-1 w-full bg-[#343434] rounded shadow-lg z-10">
                    {primaryColors.map((color) => (
                      <div
                        key={color.name}
                        className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2C2C2C]"
                        onClick={() => {
                          setSelectedPrimaryColor(color.name);
                          setShowPrimaryDropdown(false);
                        }}
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setSelectedPrimaryColor(color.name)
                        }
                      >
                        <div
                          className="w-4 h-4 rounded-sm mr-2"
                          style={{ backgroundColor: color.color }}
                        ></div>
                        <span className="text-sm text-[#F3F3F3]">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-bold uppercase text-[#6F6F6F] mb-1 block">
                Background
              </label>
              <div className="relative">
                <div
                  className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2 cursor-pointer"
                  onClick={() =>
                    setShowBackgroundDropdown((prev: boolean) => !prev)
                  }
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    setShowBackgroundDropdown((prev: boolean) => !prev)
                  }
                >
                  <div
                    className="w-4 h-4 rounded-sm mr-2"
                    style={{
                      backgroundColor: backgroundColors.find(
                        (color) => color.name === selectedBackgroundColor
                      )?.color,
                    }}
                  ></div>
                  <span className="text-sm text-[#F3F3F3] flex-grow">
                    {selectedBackgroundColor}
                  </span>
                  <ChevronDown size={20} className="text-[#F3F3F3]" />
                </div>
                {showBackgroundDropdown && (
                  <div className="absolute mt-1 w-full bg-[#343434] rounded shadow-lg z-10">
                    {backgroundColors.map((color) => (
                      <div
                        key={color.name}
                        className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2C2C2C]"
                        onClick={() => {
                          setSelectedBackgroundColor(color.name);
                          setShowBackgroundDropdown(false);
                        }}
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setSelectedBackgroundColor(color.name)
                        }
                      >
                        <div
                          className="w-4 h-4 rounded-sm mr-2"
                          style={{ backgroundColor: color.color }}
                        ></div>
                        <span className="text-sm text-[#F3F3F3]">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
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
                        <div
                          className={`w-[95px] h-[95px] bg-[#2C2C2C] border border-[#6A6A6A] rounded-md overflow-hidden mb-1 cursor-pointer ${
                            selectedColorScheme === scheme.name
                              ? "border-2 border-[#F3F3F3]"
                              : ""
                          }`}
                          onClick={() => setSelectedColorScheme(scheme.name)}
                          tabIndex={0}
                          onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setSelectedColorScheme(scheme.name)
                          }
                        >
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
                        <span
                          className={`text-sm ${
                            selectedColorScheme === scheme.name
                              ? "text-white"
                              : "text-[#6F6F6F]"
                          }`}
                        >
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
                  <textarea
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    className="w-full md:w-[315px] h-[87.5px] bg-[#343434] rounded p-3 text-sm text-[#F3F3F3]"
                    placeholder="Enter additional information"
                    aria-label="Additional Info"
                    tabIndex={0}
                  />
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
            onClick={handleGenerateLogo}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateLogo()}
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
