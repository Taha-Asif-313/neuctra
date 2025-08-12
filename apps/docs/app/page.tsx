import React from "react";
import Home from "./(pages)/Home";
import Navbar from "./components/Navbar";

const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
    </div>
  );
};

export default Page;
