"use client";
import React from "react";
import CopyButton from "../components/CopyButton";
import { Button } from "@neuctra/ui";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  return (
    <div className="relative z-10 min-h-screen bg-black text-white px-6 py-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred Gradient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[400px] animate-pulse h-[500px] bg-[#00BF3B] rounded-full opacity-20 blur-2xl top-0 left-[-300px]" />
        <div className="absolute w-[400px] animate-pulse h-[500px] bg-[#00BF3B] rounded-full opacity-20 blur-2xl bottom-0 right-[-300px]" />
      </div>

      {/* Main Hero Content */}
      <div className="z-20 max-w-7xl mx-auto px-2 grid h-full items-center lg:grid-cols-2 ">
        <div className="">
          <h1 className="text-5xl font-primary md:text-6xl font-bold tracking-tight pb-2">
            Craft <span className="text-primary">Stunning</span> Interfaces with
            Ease
          </h1>
          <p className="text-sm text-gray-100 mb-5">
            Unlock the power of a next-generation UI component library designed
            for React and Next.js. Lightning-fast, visually polished, and
            endlessly customizable — so your product not only works flawlessly
            but looks unforgettable.
          </p>

          {/* Installation Code Block */}
          <div className="relative mb-5 w-full max-w-lg rounded-md animate-rotateShadow">
            <code className="block w-full bg-zinc-950 text-white text-left px-5 py-4 rounded-md text-sm">
              npm install @neuctra/ui
            </code>
            <CopyButton code="npm install @neuctra/ui" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              backgroundColor="var(--primary)"
              textColor="white"
              onClick={() => router.push("/docs")}
              borderRadius={6}
              paddingHorizontal={30}
              paddingVertical={8}
              fontSize="14px"
              fontWeight={600}
              iconAfter={<ArrowRight className="h-5 w-5" />}
              hoverBgColor="transparent"
              hoverTextColor="white"
              hoverBorderColor="white"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center max-lg:hidden">
          <Image height={500} width={500} src="/logo.png" alt="Hero Pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
