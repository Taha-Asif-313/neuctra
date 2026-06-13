import { useState } from "react";
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

import { ImagePlus, Upload, Globe } from "lucide-react";

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

const CoverImageModal = ({ isOpen, onClose, formData, setFormData }) => {
  const [mode, setMode] = useState("direct");
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = () => {
    const url = formData.coverImage;
    if (!url) return;

    setIsConverting(true);

    setTimeout(() => {
      const finalUrl =
        mode === "drive" ? convertGoogleDriveUrl(url) : url;

      setFormData((p) => ({
        ...p,
        coverImage: finalUrl,
      }));

      setIsConverting(false);
    }, 300);
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
              <ImagePlus size={18} />
            </div>
          }
          title="Add Cover Image"
          subtitle="Recommended: 1600 × 1000 (16:10)"
          onClose={onClose}
        />

        {/* BODY */}
        <ModalBody className="flex-1 overflow-y-auto px-4 py-5 space-y-5">

          {/* MODE SWITCH */}
          <div className="flex gap-2 p-1 rounded-xl bg-zinc-900 border border-zinc-800 w-fit">
            <button
              onClick={() => setMode("direct")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition ${mode === "direct"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
            >
              <Globe size={14} />
              Direct
            </button>

            <button
              onClick={() => setMode("drive")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition ${mode === "drive"
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
              inputClassName="text-xs"
              placeholder={
                mode === "drive"
                  ? "Google Drive link"
                  : "Direct image URL"
              }
              value={formData.coverImage || ""}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  coverImage: e.target.value,
                }))
              }
            />

            {/* CONVERT */}
            {mode === "drive" && formData.coverImage && (
              <Button
                onClick={handleConvert}
                className="rounded-lg w-36 text-xs bg-primary/80 hover:bg-primary transition"
                disabled={isConverting}
              >
                {isConverting ? "Converting..." : "Convert"}
              </Button>
            )}
          </div>

          {/* PREVIEW (FIXED PROPERLY) */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/4]">
            {formData.coverImage ? (
              <img
                src={formData.coverImage}
                alt="cover"
                className="
                  w-full h-full
                  
                  object-cover object-center
                "
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-500">
                <ImagePlus size={28} className="mb-2 opacity-40" />
                <p className="text-sm">No image selected</p>
              </div>
            )}
          </div>

          <div className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
            Recommended resolution: <b>1200 × 1200 (1:1 ratio)</b> for best Spark Card display.
          </div>

          {/* DRIVE HELP */}
          {mode === "drive" && (
            <div className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 p-3 rounded-lg">
              Make sure Drive file is set to <b>“Anyone with the link”</b>
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
            onClick={onClose}
            className="rounded-xl bg-primary hover:opacity-90"
          >
            Save Cover
          </ModalButton>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );
};

export default CoverImageModal;