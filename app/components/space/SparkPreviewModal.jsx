"use client";

import React from "react";
import { Button } from "@neuctra/ui";
import { NeuctraEditorPreview } from "@neuctra/cms-core";

const SparkPreviewModal = ({ open, onClose, formData }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/80 backdrop-blur-xl overflow-y-auto">
      {/* TOP BAR */}
      <div className="sticky top-0 border-b border-white/10 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Spark Preview</h2>
            <p className="text-sm text-white/40">Live blocks rendering</p>
          </div>

          <Button variant="outline" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* CONTENT PREVIEW */}
        <NeuctraEditorPreview
          className="px-0! py-0!"
          blocks={formData.blocks}
        />
      </div>
    </div>
  );
};

export default SparkPreviewModal;
