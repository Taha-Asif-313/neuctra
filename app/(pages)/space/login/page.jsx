"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ReactUserLogin } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";

const LoginPage = () => {
  const { setUser } = useAdmin();
  const router = useRouter();

  return (
    <div className="relative  text-white w-full overflow-hidden min-h-screen">

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <ReactUserLogin
          logoUrl="/favicon.png"
          title="Sign in to Neuctra Admin"
          subtitle="Access your blog dashboard"
          onSuccess={(user) => {
            setUser(user);

            setTimeout(() => {
              if (user.isVerified) {
                router.push("/space/admin");
              } else {
                router.push("/space/verify-email");
              }
            }, 0);
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
