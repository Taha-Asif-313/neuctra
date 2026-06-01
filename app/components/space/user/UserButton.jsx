"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, LayoutDashboard } from "lucide-react";

import { Dropdown, Avatar } from "@neuctra/ui";
import { useAdmin } from "@/app/contexts/AdminContext";
import { authix } from "@/app/utils/neuctraAuthix";

const UserButton = () => {
  const router = useRouter();
  const { user } = useAdmin();

  const userName = user?.name || "Admin User";
  const userEmail = user?.email || "admin@example.com";
  const username = user?.username || "auther";
  const userAvatar = user?.avatarUrl;

  const handleLogoutClick = async () => {
    await authix.logoutUser();
    router.push("/space");
  };

  const items = [
    {
      label: (
        <div className="flex flex-col px-2 py-1 min-w-0">
          <span className="text-sm font-semibold text-white truncate">
            {userName}
          </span>

          <div className="flex mt-1 items-center gap-2 text-xs text-white/60">
            <span className="truncate">@{username}</span>
            <span className="text-white/30">|</span>
            <span className="truncate">{userEmail}</span>
          </div>
        </div>
      ),
          onClick: () => router.push(`/space/spark/authors/profile/${user?.id}`),
    },

    { separator: true },

    {
      label: "Manage Sparks",
      icon: <LayoutDashboard size={16} />,
      onClick: () => router.push("/space/manage/sparks"),
    },

    {
      label: "Manage Profile",
      icon: <User size={16} />,
      onClick: () => router.push("/space/manage/profile"),
    },

    { separator: true },

    {
      label: "Logout",
      icon: <LogOut size={16} />,
      danger: true,
      onClick: handleLogoutClick,
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
          isOnline={user?.isVerified === true}
          isOffline={user?.isVerified === false}
          fallback={userName?.charAt(0)?.toUpperCase()}
          className="h-9 w-9 cursor-pointer border-2 border-primary"
        />
      }
    />
  );
};

export default UserButton;
