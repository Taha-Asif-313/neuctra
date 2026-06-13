"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ReactEmailVerification } from "@neuctra/authix";
import { useAdmin } from "@/app/contexts/AdminContext";

const VerifyEmailPage = () => {
  const router = useRouter();
  const { user } = useAdmin();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ReactEmailVerification
        onVerify={() => router.push("/space")}
        user={user}
      />
    </div>
  );
};

export default VerifyEmailPage;
