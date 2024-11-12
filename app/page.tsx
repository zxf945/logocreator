"use client";

import { ChevronDown, Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Header from "./components/Header";
import LogoPlaceholder from "./components/LogoPlaceholder";
import Footer from "./components/footer";

export default function Page() {
  const [apiKey, setApiKey] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [selectedLogoStyle, setSelectedLogoStyle] = useState<string | null>(
    null,
  );
  const [selectedPrimaryColor, setSelectedPrimaryColor] =
    useState<string>("Blue");
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState<string>("Random");
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
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation

    const res = await fetch("/api/generate-logo", {
      method: "POST",
      body: JSON.stringify({
        apiKey,
        companyName,
        selectedLayout,
        selectedLogoStyle,
        selectedPrimaryColor,
        selectedBackgroundColor,
        // selectedColorScheme,
        additionalInfo,
      }),
    });

    const json = await res.json();

    setIsLoading(false); // Reset loading state
  };

  const handleToggleLayout = (layoutName: string) => {
    setSelectedLayout((prev) => (prev === layoutName ? null : layoutName));
  };

  const handleToggleLogoStyle = (styleName: string) => {
    setSelectedLogoStyle((prev) => (prev === styleName ? null : styleName));
  };

  // Helper component for consistent tooltip usage
  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info size={11} className="ml-2 cursor-default text-[#6F6F6F]" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="flex h-screen flex-col overflow-y-auto overflow-x-hidden bg-[#343434] md:flex-row">
      <Header className="block md:hidden" />{" "}
      {/* Show header on small screens */}
      <div className="flex w-full flex-col md:flex-row">
        <div className="sidebar flex h-full w-full flex-col bg-[#2C2C2C] font-jura text-[#F3F3F3] md:w-auto">
          <div className={`flex-grow overflow-y-auto`}>
            <div className="px-8 pb-0 pt-4 md:px-6 md:pt-6">
              {/* API Key Section */}
              <div className="mb-6">
                <label
                  htmlFor="api-key"
                  className="mb-2 block text-xs font-bold uppercase text-[#F3F3F3]"
                >
                  TOGETHER API KEY
                  <span className="ml-2 text-xs uppercase text-[#6F6F6F]">
                    [OPTIONAL]
                  </span>
                </label>
                <input
                  id="api-key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="h-[45px] w-full rounded border border-[#2C2C2C] bg-[#343434] px-[12.5px] text-sm text-[#F3F3F3] md:w-[315px]"
                  placeholder="API Key"
                  aria-label="API Key"
                  tabIndex={0}
                />
              </div>
              {/* Divider Line */}
              <div className="-mx-6 mb-6 h-px w-[calc(100%+48px)] bg-[#343434]"></div>
              {/* Company Name Section */}
              <div className="mb-6">
                <label
                  htmlFor="company-name"
                  className="mb-2 block text-xs font-bold uppercase text-[#6F6F6F]"
                >
                  Company Name
                </label>
                <input
                  id="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-[43.75px] w-full rounded bg-[#343434] px-[15px] text-sm text-[#F3F3F3] md:w-[315px]"
                  placeholder="Amazon"
                  aria-label="Company Name"
                  tabIndex={0}
                />
              </div>
              {/* Layout Section */}
              <div className="mb-6">
                <label className="mb-2 flex items-center text-xs font-bold uppercase text-[#6F6F6F]">
                  Layout
                  <InfoTooltip content="Select a layout for your logo" />
                </label>
                <div className="grid grid-cols-3 gap-3" role="radiogroup">
                  {layouts.map((layout) => (
                    <div
                      key={layout.name}
                      className="flex flex-col items-center"
                    >
                      <button
                        className={`mb-2 flex h-[96px] w-[96px] cursor-pointer items-center justify-center rounded bg-[#343434] focus:outline-none ${
                          selectedLayout === layout.name
                            ? "border-2 border-[#F3F3F3]"
                            : ""
                        }`}
                        onClick={() => handleToggleLayout(layout.name)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            handleToggleLayout(layout.name);
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
                <label className="mb-2 flex items-center text-xs font-bold uppercase text-[#6F6F6F]">
                  STYLE
                  <InfoTooltip content="Choose a style for your logo" />
                </label>
                <div className="grid grid-cols-3 gap-3" role="radiogroup">
                  {logoStyles.map((style) => (
                    <div
                      key={style.name}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`mb-1 flex h-[96px] w-[96px] cursor-pointer items-center justify-center rounded bg-[#343434] ${
                          selectedLogoStyle === style.name
                            ? "border-2 border-[#F3F3F3]"
                            : ""
                        }`}
                        onClick={() => handleToggleLogoStyle(style.name)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            handleToggleLogoStyle(style.name);
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
              <div className="mb-[25px] flex flex-col md:flex-row md:space-x-3">
                <div className="mb-4 flex-1 md:mb-0">
                  <label
                    htmlFor="primary-color"
                    className="mb-1 block text-xs font-bold uppercase text-[#6F6F6F]"
                  >
                    Primary
                    {/* <InfoTooltip content="Select a primary color" /> */}
                  </label>
                  <div className="relative" ref={primaryDropdownRef}>
                    <div
                      id="primary-color"
                      className="flex h-[43.75px] w-full cursor-pointer items-center rounded bg-[#343434] px-2 md:w-[150px]"
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
                        className="mr-2 h-4 w-4 rounded-sm"
                        style={{
                          backgroundColor: primaryColors.find(
                            (color) => color.name === selectedPrimaryColor,
                          )?.color,
                        }}
                      ></div>
                      <span className="flex-grow text-sm text-[#F3F3F3]">
                        {selectedPrimaryColor}
                      </span>
                      <ChevronDown size={20} className="text-[#F3F3F3]" />
                    </div>
                    {showPrimaryDropdown && (
                      <div
                        id="primary-color-dropdown"
                        className="absolute z-10 mt-1 w-full rounded bg-[#343434] shadow-lg"
                      >
                        {primaryColors.map((color) => (
                          <div
                            key={color.name}
                            className="flex cursor-pointer items-center px-2 py-1 hover:bg-[#2C2C2C]"
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
                              className="mr-2 h-4 w-4 rounded-sm"
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
                  <label className="mb-1 block items-center text-xs font-bold uppercase text-[#6F6F6F]">
                    Background
                    {/* <InfoTooltip content="Select a background color" /> */}
                  </label>
                  <div className="relative" ref={backgroundDropdownRef}>
                    <div
                      id="background-color"
                      className="flex h-[43.75px] w-full cursor-pointer items-center rounded bg-[#343434] px-2 md:w-[150px]"
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
                        className="mr-2 h-4 w-4 rounded-sm"
                        style={{
                          backgroundColor: backgroundColors.find(
                            (color) => color.name === selectedBackgroundColor,
                          )?.color,
                        }}
                      ></div>
                      <span className="flex-grow text-sm text-[#F3F3F3]">
                        {selectedBackgroundColor}
                      </span>
                      <ChevronDown size={20} className="text-[#F3F3F3]" />
                    </div>
                    {showBackgroundDropdown && (
                      <div
                        id="background-color-dropdown"
                        className="absolute z-10 mt-1 w-full rounded bg-[#343434] shadow-lg"
                      >
                        {backgroundColors.map((color) => (
                          <div
                            key={color.name}
                            className="flex cursor-pointer items-center px-2 py-1 hover:bg-[#2C2C2C]"
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
                              className="mr-2 h-4 w-4 rounded-sm"
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
                <div className="mt-1">
                  {/* Additional Info Section */}
                  <div className="mb-1">
                    <label
                      htmlFor="additional-info"
                      className="mb-2 flex items-center text-xs font-bold uppercase text-[#6F6F6F]"
                    >
                      Additional Info
                      <InfoTooltip content="Provide any additional information about your logo" />
                    </label>
                    <textarea
                      id="additional-info"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="h-[67.5px] w-full rounded bg-[#343434] p-3 text-sm text-[#F3F3F3] md:w-[315px]"
                      placeholder="Enter additional information"
                      aria-label="Additional Info"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Logo Button - Always visible */}
          <div className="px-8 md:px-4">
            <div className="py-2">
              <button
                className="flex w-full items-center justify-center rounded bg-[#F3F3F3] py-[12.5px] text-base font-bold text-[#2C2C2C]"
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

        <div className="flex w-full flex-col">
          <Header className="hidden md:block" />{" "}
          {/* Show header on larger screens */}
          <div className="flex flex-grow items-center justify-center overflow-hidden">
            <LogoPlaceholder />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
