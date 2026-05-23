"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, LayoutDashboard } from "lucide-react";

import { Dropdown, Avatar } from "@neuctra/ui";
import { useAdmin } from "@/app/contexts/AdminContext";
import { authix } from "@/app/utils/neuctraAuthix";



const UserButton = () => {
  const router = useRouter();
  const { user, logout } = useAdmin();

  const userName = user?.name || "Admin User";
  const userEmail = user?.email || "admin@example.com";
  const userAvatar = user?.avatarUrl;

    const handleLogoutClick = async () => {
    await authix.logoutUser();
    router.push("/space");
  };


  const items = [
    {
      label: (
        <div className="flex flex-col px-1 py-1">
          <span className="text-sm font-semibold text-white">{userName}</span>
          <span className="text-xs text-white/60">{userEmail}</span>
        </div>
      ),
      disabled: false,
    },

    { separator: true },

    {
      label: "Profile",
      icon: <User size={16} />,
      onClick: () => router.push("/profile"),
    },

    {
      label: "Dashboard",
      icon: <LayoutDashboard size={16} />,
      onClick: () => router.push("/dashboard"),
    },

    {
      label: "Settings",
      icon: <Settings size={16} />,
      onClick: () => router.push("/settings"),
    },

    { separator: true },

    {
      label: "Logout",
      icon: <LogOut size={16} />,
      danger: true,
      onClick: handleLogoutClick
    },
  ];

  return (
    <Dropdown
      align="right"
      width={280}
      items={items}
      className="shrink-0"
      menuClassName="border border-white/10 bg-neutral-950 shadow-2xl"
      itemClassName="rounded-lg text-white transition-colors hover:bg-white/5"
      trigger={
        <Avatar
          src={userAvatar}
          alt={userName}
          fallback={userName?.charAt(0)?.toUpperCase()}
          className="h-9 w-9 cursor-pointer border-2 border-primary"
        />
      }
    />
  );
};

export default UserButton;
