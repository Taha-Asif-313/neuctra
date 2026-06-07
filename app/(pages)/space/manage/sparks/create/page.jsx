"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import {
  ArrowLeft,
  Save,
  Eye,
  Folder,
  Tag,
  ImagePlus,
  Package,
  Plus,
  MoreVertical,
} from "lucide-react";

import { Input, Select, Button, Switch, Dropdown } from "@neuctra/ui";

import { useAdmin } from "@/app/contexts/AdminContext";
import { createSpark } from "@/app/services/spark";
import { ReactSignedIn } from "@neuctra/authix";
import { createBlock } from "@/app/utils/blocks";
import { defaultBlogState } from "@/app/states/blog";
import { useRouter } from "next/navigation";

//  DYNAMIC IMPORTS

const SparkPreviewModal = dynamic(
  () => import("@/app/components/space/SparkPreviewModal"),
  {
    ssr: false,
  },
);

const CoverImageModal = dynamic(
  () => import("@/app/components/space/modals/CoverImageModal"),
  {
    ssr: false,
  },
);

const NeuctraEditor = dynamic(
  () => import("@neuctra/cms-core").then((mod) => mod.NeuctraEditor),
  {
    ssr: false,
  },
);

/* =========================================================
   PAGE
========================================================= */

const CreateSparkPage = () => {
  const router = useRouter();
  const { user } = useAdmin();
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showCoverModal, setShowCoverModal] = useState(false);

  const [formData, setFormData] = useState(() =>
    defaultBlogState({
      authorId: user?.id || "",
      author: {
        name: user?.name || "",
        username: user?.username || "",
        avatar: user?.avatar || "",
      },

      // override defaults that differ for this page
      tags: "",
      blocks: [createBlock("text")],
    }),
  );

  const [newCategory, setNewCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState([
    { label: "React", value: "React" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "CSS", value: "CSS" },
    { label: "Tutorial", value: "Tutorial" },
    { label: "Design", value: "Design" },
    { label: "Development", value: "Development" },
  ]);

  /* =========================================================
     WORD COUNT
  ========================================================= */

  const wordCount = useMemo(() => {
    return formData.blocks.reduce((acc, block) => {
      if (block.content) {
        return acc + block.content.split(" ").length;
      }

      if (block.items) {
        return acc + block.items.join(" ").split(" ").length;
      }

      return acc;
    }, 0);
  }, [formData.blocks]);

  /* =========================================================
     SET BLOCKS
  ========================================================= */

  const setBlocks = (value) => {
    if (typeof value === "function") {
      setFormData((prev) => ({
        ...prev,
        blocks: value(prev.blocks),
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      blocks: value,
    }));
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;

    const formatted = {
      label: newCategory,
      value: newCategory,
    };

    setCategoriesList((prev) => [...prev, formatted]);

    setFormData((p) => ({
      ...p,
      category: newCategory,
    }));

    setNewCategory("");
  };

  //  SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const sparkData = {
        title: formData.title,
        blocks: formData.blocks,
        coverImage: formData.coverImage,
        visibility: formData.visibility,
        category: formData.category,
        productName: formData.productName,
        tags: formData.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        views: 0,
        likes: [],
        comments: [],
        readTime: `${Math.ceil(wordCount / 200)} min read`,
        createdAt: new Date().toISOString(),
        authorId: user.id,
        author: {
          name: user.name,
          username: user.username,
        },
      };

      await createSpark(user.id, sparkData);

      router.push("/space/manage/sparks");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReactSignedIn fallback={() => router.push("/blog/admin/login")}>
      <div className="min-h-screen flex flex-col">
        {/* TOP BAR */}
        <div>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <Button
                iconBefore={<ArrowLeft size={18} />}
                variant="ghost"
                onClick={() => router.push("/space")}
                className="flex items-center gap-2 bg-zinc-950 hover:text-zinc-200 transition"
              >
                Back
              </Button>
            </div>

            {/* CENTER (DESKTOP ONLY TITLE) */}
            <div className="hidden md:block flex-1 max-w-2xl">
              <input
                value={formData.title}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, title: e.target.value }))
                }
                placeholder="Untitled Article..."
                className="w-full h-10 bg-transparent text-lg font-semibold border-b border-zinc-400 outline-none placeholder:text-zinc-400 focus:border-primary transition"
              />
            </div>

            {/* RIGHT ACTIONS (DESKTOP) */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                leftIcon={ImagePlus}
                variant="outline"
                className="rounded-xl"
                onClick={() => setShowCoverModal(true)}
              >
                Cover
              </Button>

              <Button
                variant="outline"
                leftIcon={Eye}
                className="rounded-xl bg-zinc-900"
                onClick={() => setShowPreview(true)}
              >
                Preview
              </Button>

              <Button
                leftIcon={Save}
                loading={loading}
                onClick={handleSubmit}
                className="rounded-xl"
              >
                Publish
              </Button>
            </div>

            {/* MOBILE DROPDOWN */}
            <div className="md:hidden">
              <Dropdown
                align="right"
                width={220}
                menuClassName="rounded-xl border border-zinc-800 bg-zinc-950 p-2"
                itemClassName="rounded-lg text-sm"
                trigger={
                  <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-900 bg-zinc-950">
                    <MoreVertical size={18} />
                  </button>
                }
                items={[
                  {
                    label: "Cover Image",
                    icon: <ImagePlus size={16} />,
                    onClick: () => setShowCoverModal(true),
                  },
                  {
                    label: "Preview",
                    icon: <Eye size={16} />,
                    onClick: () => setShowPreview(true),
                  },
                  {
                    label: "Publish",
                    icon: <Save size={16} />,
                    onClick: handleSubmit,
                  },
                ]}
              />
            </div>
          </div>

          {/* MOBILE TITLE */}
          <div className="md:hidden flex items-center justify-center pb-4">
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData((p) => ({ ...p, title: e.target.value }))
              }
              placeholder="Untitled Article..."
              className="w-[310px] h-10 bg-transparent text-sm font-semibold border-b border-zinc-400 outline-none placeholder:text-zinc-400 focus:border-primary transition"
            />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mx-auto grid lg:h-[calc(100vh-120px)] w-full max-w-7xl grid-cols-1 my-8 gap-3 lg:grid-cols-12">
          {/* LEFT: EDITOR (SCROLL ONLY HERE) */}
          <div className="lg:col-span-8 h-full overflow-hidden">
            <div className="h-full overflow-y-auto">
              <NeuctraEditor
                className="rounded-2xl! bg-transparent! py-0! px-1!"
                blocks={formData.blocks}
                setBlocks={setBlocks}
              />
            </div>
          </div>

          {/* RIGHT: SIDEBAR (FIXED PANEL) */}
          <div className="lg:col-span-4 h-full overflow-hidden">
            <div className="h-full overflow-y-auto space-y-6 pr-1">
              {/* PUBLISH SETTINGS */}
              <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
                <div className="mb-5 flex items-center gap-2">
                  <Folder size={16} className="text-primary" />
                  <h3 className="font-medium">Publish Settings</h3>
                </div>

                <div className="space-y-4">
                  <Switch
                    mode="single"
                    label="Public visibility"
                    textClassName="font-semibold! text-[13px]!"
                    checked={formData.visibility === "public"}
                    onCheckedChange={(checked) =>
                      setFormData((p) => ({
                        ...p,
                        visibility: checked ? "public" : "private",
                      }))
                    }
                  />

                  <Input
                    prefixIcon={Package}
                    value={formData.productName}
                    inputClassName="bg-zinc-950/50! border-border!"
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        productName: e.target.value,
                      }))
                    }
                    label="Product Name"
                    placeholder="Neuctra Authix"
                  />

                  <Input
                    prefixIcon={Tag}
                    value={formData.tags}
                    inputClassName="bg-zinc-950/50! border-border!"
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, tags: e.target.value }))
                    }
                    label="Tags"
                    placeholder="react, ui, saas"
                  />

                  <div>
                    <Select
                      label="Category"
                      triggerClassName="bg-zinc-950/50!"
                      options={categoriesList}
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData((p) => ({ ...p, category: value }))
                      }
                    />

                    <div className="mt-3 flex gap-2">
                      <Input
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New category..."
                        inputClassName="bg-zinc-950/50! border-border!"
                      />

                      <Button
                        onClick={handleAddCategory}
                        className="rounded-full! bg-primary hover:bg-primary/80"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      <SparkPreviewModal
        open={showPreview}
        onClose={() => setShowPreview(false)}
        formData={formData}
        wordCount={wordCount}
      />

      <CoverImageModal
        isOpen={showCoverModal}
        onClose={() => setShowCoverModal(false)}
        formData={formData}
        setFormData={setFormData}
      />
    </ReactSignedIn>
  );
};

export default CreateSparkPage;
