"use client";

import { AdminProvider } from "@/app/contexts/AdminContext";
import { authix } from "@/app/utils/neuctraAuthix";
import { AuthixProvider } from "@neuctra/authix";
import { ToastProvider } from "@neuctra/ui";
import React from "react";

const BlogsLayout = ({ children }) => {
  return (
    <AuthixProvider authix={authix}>
      <AdminProvider>
        <ToastProvider>
          <div className="relative bg-black text-white w-full overflow-hidden min-h-screen">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* BODY */}
            <div className="relative max-w-7xl z-10 mx-auto px-4 lg:px-6">
              {children}
            </div>
          </div>
        </ToastProvider>
      </AdminProvider>
    </AuthixProvider>
  );
};

export default BlogsLayout;
