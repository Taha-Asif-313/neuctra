"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  Button,
  Input,
} from "@neuctra/ui";

import { updateUserAvatar } from "@/app/services/user";
import { ImageIcon, Globe, Upload } from "lucide-react";

/* =========================================================
   GOOGLE DRIVE → THUMBNAIL
========================================================= */
const convertGoogleDriveUrl = (url) => {
  if (!url) return "";

  const match =
    url.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
    url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  return url;
};

const AvatarUpdateModal = ({
  isOpen,
  onClose,
  user,
  onSuccess,
}) => {
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || "");
  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState("direct");
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    setAvatarUrl(user?.avatarUrl || "");
  }, [user, isOpen]);

  /* =========================================================
     CONVERT DRIVE URL
  ========================================================= */
  const handleConvert = () => {
    if (!avatarUrl) return;

    setIsConverting(true);

    setTimeout(() => {
      setAvatarUrl(convertGoogleDriveUrl(avatarUrl));
      setIsConverting(false);
    }, 300);
  };

  /* =========================================================
     SAVE AVATAR
  ========================================================= */
  const handleUpdate = async () => {
    if (!avatarUrl) return;

    try {
      setLoading(true);

      const res = await updateUserAvatar(
        user.id,
        avatarUrl
      );

      if (res?.success !== false) {
        onSuccess?.(avatarUrl);
        onClose();
      }
    } catch (err) {
      console.error("Avatar update error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        onClose={onClose}
        className="max-w-xl w-full max-h-[85vh] flex flex-col bg-zinc-950 border border-zinc-800"
      >
        {/* HEADER */}
        <ModalHeader
          icon={
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
              <ImageIcon size={18} />
            </div>
          }
          title="Update Avatar"
          subtitle="Recommended: square image (500×500)"
          onClose={onClose}
        />

        {/* BODY */}
        <ModalBody className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
          {/* MODE SWITCH */}
          <div className="flex gap-2 p-1 rounded-xl bg-zinc-900 border border-zinc-800 w-fit">
            <button
              onClick={() => setMode("direct")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition ${
                mode === "direct"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Globe size={14} />
              Direct
            </button>

            <button
              onClick={() => setMode("drive")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition ${
                mode === "drive"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Upload size={14} />
              Drive
            </button>
          </div>

          {/* INPUT */}
          <div className="flex items-center gap-2">
            <Input
              prefixIcon={ImageIcon}
              value={avatarUrl}
              onChange={(e) =>
                setAvatarUrl(e.target.value)
              }
              placeholder={
                mode === "drive"
                  ? "Google Drive image link"
                  : "Direct image URL"
              }
              inputClassName="text-xs"
            />

            {mode === "drive" && avatarUrl && (
              <Button
                onClick={handleConvert}
                disabled={isConverting}
                className="w-36 rounded-lg text-xs bg-primary/80 hover:bg-primary"
              >
                {isConverting
                  ? "Converting..."
                  : "Convert"}
              </Button>
            )}
          </div>

          {/* PREVIEW */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            {avatarUrl ? (
              <div className="flex justify-center">
                <img
                  src={avatarUrl}
                  alt="Avatar Preview"
                  className="h-40 w-40 rounded-full object-cover border border-zinc-700"
                />
              </div>
            ) : (
              <div className="h-40 flex flex-col items-center justify-center text-zinc-500">
                <ImageIcon
                  size={32}
                  className="mb-2 opacity-40"
                />
                <p className="text-sm">
                  No avatar selected
                </p>
              </div>
            )}
          </div>

          {/* INFO */}
          <div className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
            Recommended avatar size:{" "}
            <b>500 × 500</b> or higher.
            Square images work best.
          </div>

          {/* DRIVE HELP */}
          {mode === "drive" && (
            <div className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
              Make sure the Google Drive file is
              shared as{" "}
              <b>"Anyone with the link"</b>.
            </div>
          )}
        </ModalBody>

        {/* FOOTER */}
        <ModalFooter className="border-t border-zinc-800">
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            Cancel
          </Button>

          <ModalButton
            loading={loading}
            closeOnClick={false}
            action={handleUpdate}
            className="rounded-xl bg-primary hover:opacity-90"
          >
            Save Avatar
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AvatarUpdateModal;