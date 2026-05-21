"use client";

import MeteorBackground from "@/app/components/space/Meteorbackground";
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
          <MeteorBackground>
            <div className="relative text-white w-full overflow-hidden min-h-screen">
              <div className="relative max-w-7xl z-10 mx-auto px-4 lg:px-6">
                {children}
              </div>
            </div>
          </MeteorBackground>
        </ToastProvider>
      </AdminProvider>
    </AuthixProvider>
  );
};

export default BlogsLayout;
