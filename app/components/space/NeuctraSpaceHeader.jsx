"use client";

import React from "react";
import Link from "next/link";
import UserButton from "./user/UserButton";
import { Users } from "lucide-react";
import { Button } from "@neuctra/ui";
import { ReactSignedIn, ReactSignedOut } from "@neuctra/authix";

const NeuctraSpaceHeader = () => {
  return (
    <header className="sticky top-0 z-40">
      {/* ---------------- Top Header ---------------- */}
      <div className="flex items-center justify-between gap-3 py-6">
        {/* ---------------- Left - Logo ---------------- */}
        <div className="flex min-w-0 items-center gap-2.5">
          {/* Logo */}
          <img
            className="h-6 w-6 object-contain"
            src="/logo.png"
            alt="Neuctra Logo"
          />

          {/* Logo Text */}
          <div className="flex items-center gap-1.5 min-w-0 select-none">
            <span className="text-lg font-extrabold tracking-tight text-white">
              Neuctra
            </span>

            <span className=" text-lg font-bold tracking-tight text-primary drop-shadow-[0_0_14px_rgba(34,197,94,0.45)]">
              Space
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ReactSignedOut>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/space/login">
                <Button
                  className="rounded-xl text-[13px] px-4 py-1"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>

              <Link href="/space/signup">
                <Button className="rounded-xl text-[13px] bg-primary px-4 py-1">
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Start</span>
                </Button>
              </Link>
            </div>
          </ReactSignedOut>

          <ReactSignedIn>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Spark Authors Link (ONLY AFTER LOGIN) */}
              <Link href="/space/spark/authors">
                <Button
                  iconBefore={<Users size={16} />}
                  className="text-[13px] bg-primary rounded-xl lg:px-4 px-2"
                  textClassName="hidden! lg:inline!"
                  size="sm"
                  variant="outline"
                >
                  Spark Authors
                </Button>
              </Link>

              <UserButton />
            </div>
          </ReactSignedIn>
        </div>
      </div>
    </header>
  );
};

export default NeuctraSpaceHeader;
