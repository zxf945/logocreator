import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LogoPlaceholder from "./components/LogoPlaceholder";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#343434] overflow-y-auto overflow-x-hidden">
      <Header className="block md:hidden" />{" "}
      {/* Show header on small screens */}
      <div className="flex md:flex-row flex-col w-full">
        <Sidebar className="h-full w-full md:w-auto" />
        <div className="flex flex-col w-full">
          <Header className="hidden md:block" />{" "}
          {/* Show header on larger screens */}
          <div className="flex-grow flex justify-center items-center overflow-hidden">
            <LogoPlaceholder />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
