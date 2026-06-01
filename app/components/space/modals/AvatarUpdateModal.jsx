"use client";

import React, { useState } from "react";
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
import { ImageIcon } from "lucide-react";

const AvatarUpdateModal = ({ isOpen, onClose, user, onSuccess }) => {
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!avatarUrl) return;

    try {
      setLoading(true);

      const res = await updateUserAvatar(user.id, avatarUrl);

      if (res?.success !== false) {
        onSuccess?.(avatarUrl); // update parent UI
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
        className="bg-[#0b0b0b] border border-white/10"
      >
        {/* HEADER */}
        <ModalHeader title="Update Avatar" onClose={onClose} />

        {/* BODY */}
        <ModalBody>
          <p className="text-sm text-zinc-400 mb-3">
            Enter image URL to update your avatar
          </p>

                    {/* Preview */}
          {avatarUrl && (
            <div className="mt-4 flex justify-center">
              <img
                src={avatarUrl}
                alt="avatar preview"
                className="h-20 w-20 rounded-full border border-white/10 object-cover"
              />
            </div>
          )}

          <Input
          prefixIcon={ImageIcon}
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            placeholder="https://your-image-url.com/avatar.png"
          />


        </ModalBody>

        {/* FOOTER */}
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>

          <ModalButton
            loading={loading}
            closeOnClick={false}
            action={handleUpdate}
          >
            Save Avatar
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AvatarUpdateModal;
