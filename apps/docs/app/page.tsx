import React from "react";
import CodeBlockServer from "./components/CodeBlockServer";

const Page = () => {
  return (
    <div className="relative z-10 min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred Gradient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[400px] h-[500px] bg-[#00BF3B] rounded-full opacity-20 blur-2xl top-0 left-[-200px]" />
        <div className="absolute w-[400px] h-[500px] bg-[#00BF3B] rounded-full opacity-20 blur-2xl bottom-0 right-[-200px]" />
      </div>

      {/* Main Hero Content */}
      <div className="z-20 text-center max-w-2xl">
        <h1 className="text-5xl font-primary md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Build Interfaces That{" "}
          <span className="text-primary font-primary">Shine</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          A modern UI component library for React and Next.js — fast, elegant,
          and customizable.
        </p>

        {/* Installation Code Block */}
        <div className="mb-10">
          <CodeBlockServer className="text-sm" lang="bash">
            {`npm install @neuctra/ui`}
          </CodeBlockServer>
         
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
            Get Started
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
