import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LogoPlaceholder from "./components/LogoPlaceholder";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="flex h-screen bg-[#343434] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-grow flex justify-center items-center overflow-hidden">
          <LogoPlaceholder />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
