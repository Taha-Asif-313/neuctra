"use client";

import { useAdmin } from "@/app/contexts/AdminContext";
import { authix } from "@/app/utils/neuctraAuthix";
import { ReactUserProfile } from "@neuctra/authix";
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const { user } = useAdmin();
  const router = useRouter();
  console.log(user);

  const handleLogoutClick = async () => {
    await authix.logoutUser();
    router.push("/space");
  };

  return (
    <div className="flex items-center justify-center h-screen" >
      <ReactUserProfile homeUrl="/space" onLogout={handleLogoutClick} />
    </div>
  );
};

export default ProfilePage;
