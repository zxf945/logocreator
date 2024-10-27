"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Info } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [showAdditionalOptions] = useState(true);
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
  // const [selectedColorScheme, setSelectedColorScheme] = useState<string | null>(
  //   null
  // );
  const [additionalInfo, setAdditionalInfo] = useState("");

  // Added missing state variables
  const [showPrimaryDropdown, setShowPrimaryDropdown] =
    useState<boolean>(false);
  const [showBackgroundDropdown, setShowBackgroundDropdown] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Added loading state

  const primaryDropdownRef = useRef<HTMLDivElement>(null); // Added ref for primary dropdown
  const backgroundDropdownRef = useRef<HTMLDivElement>(null); // Added ref for background dropdown

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Added click outside handler
      if (
        primaryDropdownRef.current &&
        !primaryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowPrimaryDropdown(false);
      }
      if (
        backgroundDropdownRef.current &&
        !backgroundDropdownRef.current.contains(event.target as Node)
      ) {
        setShowBackgroundDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [primaryDropdownRef, backgroundDropdownRef]);

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

  // const colorSchemes = [
  //   {
  //     name: "Greyscale",
  //     colors: ["#FFFFFF", "#BCBCBC", "#797979", "#333333"],
  //   },
  //   {
  //     name: "Cold",
  //     colors: ["#C0FDFC", "#3FDBF0", "#78ACF1", "#10029A"],
  //   },
  //   {
  //     name: "Contrast",
  //     colors: ["#FF3992", "#FFD425", "#3F00FF", "#B000FF"],
  //   },
  //   {
  //     name: "Warm",
  //     colors: ["#F6E1E1", "#F88020", "#D1284C", "#3E0E1F"],
  //   },
  //   {
  //     name: "Gradient",
  //     colors: [
  //       "linear-gradient(2.81deg, #4268FD 12.37%, #08A400 103.68%)",
  //       "linear-gradient(2.76deg, #FD42A9 10.88%, #A40003 103.73%)",
  //       "linear-gradient(3.65deg, #93FD42 -5.41%, #17006A 109.9%)",
  //     ],
  //   },
  // ];

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

  // const handleToggleAdditionalOptions = () => {
  //   setShowAdditionalOptions((prev) => !prev);
  // };

  const handleGenerateLogo = async () => {
    setIsLoading(true); // Set loading state to true
    // Simulate logo generation logic
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
    console.log({
      apiKey,
      companyName,
      selectedLayout,
      selectedLogoStyle,
      selectedPrimaryColor,
      selectedBackgroundColor,
      // selectedColorScheme,
      additionalInfo,
    });
    setIsLoading(false); // Reset loading state
  };

  const handleToggleLayout = (layoutName: string) => {
    setSelectedLayout((prev) => (prev === layoutName ? null : layoutName));
  };

  const handleToggleLogoStyle = (styleName: string) => {
    setSelectedLogoStyle((prev) => (prev === styleName ? null : styleName));
  };

  // const handleToggleColorScheme = (schemeName: string) => {
  //   setSelectedColorScheme((prev) => (prev === schemeName ? null : schemeName));
  // };

  // Helper component for consistent tooltip usage
  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info size={11} className="ml-2 text-[#6F6F6F] cursor-default" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div
      className={`sidebar ${className} w-full md:w-[395px] h-screen bg-[#2C2C2C] text-[#F3F3F3] flex flex-col font-jura`}
    >
      <div className={`flex-grow overflow-y-auto `}>
        <div className="px-8 md:px-6 pb-0 pt-4 md:pt-6">
          {/* API Key Section */}
          <div className="mb-6">
            <label
              htmlFor="api-key"
              className="text-xs uppercase font-bold text-[#F3F3F3] mb-2 block"
            >
              TOGETHER API KEY
              <span className="text-xs uppercase text-[#6F6F6F] ml-2">
                [OPTIONAL]
              </span>
            </label>
            <input
              id="api-key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full md:w-[315px] h-[45px] bg-[#343434] border border-[#2C2C2C] rounded px-[12.5px] text-sm text-[#F3F3F3]"
              placeholder="API Key"
              aria-label="API Key"
              tabIndex={0}
            />
          </div>
          {/* Divider Line */}
          <div className="h-px w-[calc(100%+48px)] bg-[#343434] -mx-6 mb-6"></div>
          {/* Company Name Section */}
          <div className="mb-6">
            <label
              htmlFor="company-name"
              className="text-xs uppercase font-bold text-[#6F6F6F] mb-2 block"
            >
              Company Name
            </label>
            <input
              id="company-name"
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
            <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-2 flex items-center">
              Layout
              <InfoTooltip content="Select a layout for your logo" />
            </label>
            <div className="grid grid-cols-3 gap-3" role="radiogroup">
              {layouts.map((layout) => (
                <div key={layout.name} className="flex flex-col items-center">
                  <button
                    className={`w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-2 cursor-pointer focus:outline-none ${
                      selectedLayout === layout.name
                        ? "border-2 border-[#F3F3F3]"
                        : ""
                    }`}
                    onClick={() => handleToggleLayout(layout.name)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleToggleLayout(layout.name);
                    }}
                    aria-checked={selectedLayout === layout.name}
                    role="radio"
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
            <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-2 flex items-center">
              STYLE
              <InfoTooltip content="Choose a style for your logo" />
            </label>
            <div className="grid grid-cols-3 gap-3" role="radiogroup">
              {logoStyles.map((style) => (
                <div key={style.name} className="flex flex-col items-center">
                  <div
                    className={`w-[96px] h-[96px] bg-[#343434] rounded flex items-center justify-center mb-1 cursor-pointer ${
                      selectedLogoStyle === style.name
                        ? "border-2 border-[#F3F3F3]"
                        : ""
                    }`}
                    onClick={() => handleToggleLogoStyle(style.name)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleToggleLogoStyle(style.name);
                    }}
                    aria-checked={selectedLogoStyle === style.name}
                    role="radio"
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
              <label
                htmlFor="primary-color"
                className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block"
              >
                Primary
                {/* <InfoTooltip content="Select a primary color" /> */}
              </label>
              <div className="relative" ref={primaryDropdownRef}>
                <div
                  id="primary-color"
                  className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2 cursor-pointer"
                  onClick={() =>
                    setShowPrimaryDropdown((prev: boolean) => !prev)
                  }
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    setShowPrimaryDropdown((prev: boolean) => !prev)
                  }
                  aria-expanded={showPrimaryDropdown}
                  aria-controls="primary-color-dropdown"
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
                  <div
                    id="primary-color-dropdown"
                    className="absolute mt-1 w-full bg-[#343434] rounded shadow-lg z-10"
                  >
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
              <label className="text-xs font-bold uppercase text-[#6F6F6F] mb-1 block  items-center">
                Background
                {/* <InfoTooltip content="Select a background color" /> */}
              </label>
              <div className="relative" ref={backgroundDropdownRef}>
                <div
                  id="background-color"
                  className="w-full md:w-[150px] h-[43.75px] bg-[#343434] rounded flex items-center px-2 cursor-pointer"
                  onClick={() =>
                    setShowBackgroundDropdown((prev: boolean) => !prev)
                  }
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    setShowBackgroundDropdown((prev: boolean) => !prev)
                  }
                  aria-expanded={showBackgroundDropdown}
                  aria-controls="background-color-dropdown"
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
                  <div
                    id="background-color-dropdown"
                    className="absolute mt-1 w-full bg-[#343434] rounded shadow-lg z-10"
                  >
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
          <div className="mb-1">
            {/* <button
              className="text-sm text-[#F3F3F3] flex items-center w-full"
              onClick={handleToggleAdditionalOptions}
              aria-label="Toggle additional options"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && handleToggleAdditionalOptions()
              }
              aria-expanded={showAdditionalOptions}
            >
              {showAdditionalOptions ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
              ADDITIONAL OPTIONS
            </button> */}
            {showAdditionalOptions && (
              <div className="mt-1">
                {/* Color Scheme Section */}
                {/* <div className="mb-4">
                  <label className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2">
                    Color Scheme
                    <InfoTooltip content="Choose a color scheme for your logo" />
                  </label>
                  <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-[14px]"
                    role="radiogroup"
                  >
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
                          onClick={() => handleToggleColorScheme(scheme.name)}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              handleToggleColorScheme(scheme.name);
                          }}
                          aria-checked={selectedColorScheme === scheme.name}
                          role="radio"
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
                          className={`text-xs ${
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
                </div> */}

                {/* Additional Info Section */}
                <div className="mb-1">
                  <label
                    htmlFor="additional-info"
                    className="text-xs font-bold uppercase text-[#6F6F6F] flex items-center mb-2"
                  >
                    Additional Info
                    <InfoTooltip content="Provide any additional information about your logo" />
                  </label>
                  <textarea
                    id="additional-info"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    className="w-full md:w-[315px] h-[67.5px] bg-[#343434] rounded p-3 text-sm text-[#F3F3F3]"
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
      <div className="px-8 md:px-4">
        <div className="py-2">
          <button
            className="w-full bg-[#F3F3F3] text-[#2C2C2C] py-[12.5px] rounded font-bold text-base flex items-center justify-center"
            aria-label="Generate Logo"
            tabIndex={0}
            onClick={handleGenerateLogo}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateLogo()}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? ( // Conditional rendering for loading state
              <div className="loader mr-2"></div> // Spinner element
            ) : (
              <Image
                src="/generate-icon.svg"
                alt="Generate Icon"
                width={16}
                height={16}
                className="mr-2"
              />
            )}
            {isLoading ? "Loading..." : "Generate Logo"}{" "}
            {/* Change button text */}
          </button>
          {/* <div className="text-center mt-1 text-xs text-[#F3F3F3]">
            Credits: 3
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

<style jsx>{`
  .loader {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>;
