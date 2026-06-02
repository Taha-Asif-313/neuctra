"use client";

import React from "react";
import MeteorBackground from "@/app/components/space/Meteorbackground";
import { AdminProvider } from "@/app/contexts/AdminContext";
import { authix } from "@/app/utils/neuctraAuthix";
import { AuthixProvider } from "@neuctra/authix";
import { ToastProvider } from "@neuctra/ui";

const NeuctraSpaceProviders = ({ children }) => {
  return (
    <AuthixProvider authix={authix}>
      <AdminProvider>
        <ToastProvider>
          <MeteorBackground>
            <div className="relative text-white w-full overflow-hidden min-h-screen">
              <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
                {children}
              </div>
            </div>
          </MeteorBackground>
        </ToastProvider>
      </AdminProvider>
    </AuthixProvider>
  );
};

export default NeuctraSpaceProviders;