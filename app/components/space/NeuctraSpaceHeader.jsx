"use client";

import React from "react";
import Link from "next/link";
import UserButton from "./user/UserButton";
import { Users, Sparkles, Plus } from "lucide-react";
import { Button } from "@neuctra/ui";
import { ReactSignedIn, ReactSignedOut } from "@neuctra/authix";

const NeuctraSpaceHeader = () => {
  return (
    <header className="sticky top-0 z-40">
      <div className="flex items-center justify-between gap-3 py-6">
        {/* LEFT - LOGO */}
        <Link
          href="/space"
          className="flex min-w-0 items-center gap-2 sm:gap-2.5"
        >
          {/* Logo Icon */}
          <img
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 object-contain"
            src="/logo.png"
            alt="Neuctra Logo"
          />

          {/* Brand Text */}
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0 select-none">
            <span className="text-base font-extrabold tracking-tight text-white">
              Neuctra
            </span>

            <span className="text-base font-bold tracking-tight text-primary drop-shadow-[0_0_14px_rgba(34,197,94,0.45)]">
              Space
            </span>
          </div>
        </Link>

        {/* ACTION BUTTONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ReactSignedOut>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/space/login">
                <Button
                  className="rounded-xl px-4 py-1 text-[13px]"
                  variant="outline"
                  textClassName="leading-none"
                >
                  Login
                </Button>
              </Link>

              <Link href="/space/signup">
                <Button textClassName="leading-none" className="rounded-xl bg-primary px-4 py-1 text-[13px]">
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Start</span>
                </Button>
              </Link>
            </div>
          </ReactSignedOut>

          <ReactSignedIn>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Spark Authors */}
              <Link href="/space/spark/authors">
                <Button
                  iconBefore={<Users size={16} />}
                  className="rounded-xl px-2 lg:px-4 text-[13px]"
                  textClassName="hidden lg:inline"
                  size="sm"
                  variant="outline"
                >
                  Spark Authors
                </Button>
              </Link>

              {/* CREATE SPARK (NEW) */}
              <Link href="/space/manage/sparks/create">
                <Button
                  iconBefore={<Plus size={16} />}
                  className="rounded-xl bg-primary px-2 lg:px-4 text-[13px] hover:bg-primary/90"
                  textClassName="hidden sm:inline"
                  size="sm"
                >
                  Create Spark
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
