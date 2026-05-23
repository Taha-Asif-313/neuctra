"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ReactUserSignUp } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";

const SignupPage = () => {
  const { setUser } = useAdmin();
  const router = useRouter();

  return (
    <div className="relative  text-white w-full overflow-hidden min-h-screen">

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <ReactUserSignUp
          logoUrl="/favicon.png"
          title="Sign up for Neuctra Admin"
          subtitle="Create your blog account"
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

export default SignupPage;
