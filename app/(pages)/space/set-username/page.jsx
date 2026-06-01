"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react";

import { useAdmin } from "@/app/contexts/AdminContext";
import { getUserByUsername, updateUserName } from "@/app/services/user";
import { useRouter } from "next/navigation";

const UsernameSettingsPage = () => {
  const { user } = useAdmin();
  const router = useRouter();

  const [username, setUsername] = useState(user?.username || "");
  const [checking, setChecking] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const validateUsername = (value) => {
    return /^[a-zA-Z0-9_]{3,30}$/.test(value);
  };

  const handleSave = async () => {
    const cleanUsername = username.trim().toLowerCase();

    setMessage(null);

    if (!cleanUsername) {
      return setMessage({
        type: "error",
        text: "Username is required",
      });
    }

    if (!validateUsername(cleanUsername)) {
      return setMessage({
        type: "error",
        text: "Username must be 3-30 characters and contain only letters, numbers, and underscores",
      });
    }

    try {
      setChecking(true);

      const existingUser = await getUserByUsername(cleanUsername);
      console.log(existingUser);

      // Username exists and belongs to another user
      if (
        existingUser?.success &&
        existingUser?.data &&
        existingUser.data.id !== user.id
      ) {
        setMessage({
          type: "error",
          text: "Username is already taken",
        });

        return;
      }

      setChecking(false);
      setSaving(true);

      const response = await updateUserName(user.id, cleanUsername);
      console.log(response);

      if (response?.success) {
        setMessage({
          type: "success",
          text: "Username updated successfully",
        });

        router.push("/space");
      } else {
        setMessage({
          type: "error",
          text: response?.message || "Failed to update username",
        });
      }
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: "Something went wrong",
      });
    } finally {
      setChecking(false);
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* CARD */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white">
              Choose your username
            </h1>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              This is your unique identity on Neuctra Space.
            </p>
          </div>

          {/* INPUT */}
          <div className="mt-5">
            <label className="mb-2 block text-sm text-zinc-300">Username</label>

            <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 focus-within:border-primary/40 transition">
              <span className="text-zinc-500">@</span>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. neuctra_dev"
                className="h-12 w-full bg-transparent px-2 text-white outline-none"
              />
            </div>

            {/* HELP TEXT */}

            {/* HELP TEXT */}
            <div className="mt-3 space-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-500" />
                <span>Only letters, numbers, and underscores</span>
              </div>

              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-500" />
                <span>3–30 characters recommended</span>
              </div>

              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-500" />
                <span>No spaces or special symbols</span>
              </div>
            </div>
          </div>

          {/* STATUS MESSAGE */}
          {message && (
            <div
              className={`mt-5 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                message.type === "success"
                  ? "border border-green-500/20 bg-green-500/10 text-green-400"
                  : "border border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 size={16} />
              ) : (
                <AlertCircle size={16} />
              )}

              {message.text}
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSave}
            disabled={checking || saving}
            className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {(checking || saving) && (
              <Loader2 size={16} className="animate-spin" />
            )}

            {checking
              ? "Checking availability..."
              : saving
                ? "Saving username..."
                : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsernameSettingsPage;
