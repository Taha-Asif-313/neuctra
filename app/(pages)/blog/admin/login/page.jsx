"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ReactUserLogin } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";

const LoginPage = () => {
  const { setUser } = useAdmin();
  const router = useRouter();

  return (
    <div className="relative bg-black text-white w-full overflow-hidden min-h-screen">
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

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <ReactUserLogin
          logoUrl="/logo.png"
          title="Sign in to Neuctra Admin"
          subtitle="Access your blog dashboard"
          onSuccess={(user) => {
            setUser(user);

            setTimeout(() => {
              if (user.isVerified) {
                router.push("/blog/admin");
              } else {
                router.push("/blog/verify-email");
              }
            }, 0);
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
