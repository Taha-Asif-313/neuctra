"use client";

import React, { useEffect, useMemo, useState } from "react";

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
import { getSingleSpark, updateSpark } from "@/app/services/spark";
import { ReactSignedIn } from "@neuctra/authix";
import { createBlock } from "@/app/utils/blocks";
import { defaultBlogState } from "@/app/states/blog";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/app/components/utils/LoadingSpinner";
import ScrollToTopButton from "@/app/components/utils/ScrollToTopButton";

/* =========================================================
   DYNAMIC IMPORTS
========================================================= */

const BlogPreviewModal = dynamic(
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

const EditBlogPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const { user } = useAdmin();
  console.log(user);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [blog, setBlog] = useState();
  const [showPreview, setShowPreview] = useState(false);
  const [showCoverModal, setShowCoverModal] = useState(false);

  const [formData, setFormData] = useState(() =>
    defaultBlogState({
      id: "",
      slug: "",
      title: "",
      coverImage: "",
      authorId: "",
      author: { name: "", username: "", avatar: "" },
      productName: "",
      category: "React",
      tags: "",
      blocks: [createBlock("text")],
      visibility: "public",
      readTime: 0,
      views: 0,
      likes: [],
      comments: [],
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      seoTitle: "",
      seoDescription: "",
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
     FETCH BLOG
  ========================================================= */

  useEffect(() => {
    if (!id || !user?.id) return; // ✅ IMPORTANT GUARD

    let isMounted = true;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const response = await getSingleSpark(user.id, id);

        if (!isMounted) return;

        if (response?.success && response?.data) {
          const blogData = response.data;

          setBlog(blogData);

          setFormData(
            defaultBlogState({
              id: blogData.id || "",
              slug: blogData.slug || "",
              title: blogData.title || "",
              coverImage: blogData.coverImage || "",
              authorId: blogData.authorId || user.id,
              author: {
                name: blogData.author?.name || user?.name || "",
                username: blogData.author?.username || user?.username || "",
                avatar: blogData.author?.avatar || user?.avatar || "",
              },
              productName: blogData.productName || "",
              category: blogData.category || "React",
              tags: Array.isArray(blogData.tags)
                ? blogData.tags.join(", ")
                : blogData.tags || "",
              blocks: blogData.blocks?.length
                ? blogData.blocks
                : [createBlock("text")],
              visibility: blogData.visibility || "public",
              readTime: blogData.readTime || 0,
              views: blogData.views || 0,
              likes: blogData.likes || [],
              comments: blogData.comments || [],
              createdAt: blogData.createdAt || "",
              updatedAt: blogData.updatedAt || "",
              publishedAt: blogData.publishedAt || "",
              seoTitle: blogData.seoTitle || "",
              seoDescription: blogData.seoDescription || "",
            }),
          );
        }
      } catch (error) {
        console.error("Fetch Blog Error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBlog();

    return () => {
      isMounted = false; // ✅ prevent race condition
    };
  }, [id, user?.id]);

  //  WORD COUNT
  const wordCount = useMemo(() => {
    if (!formData?.blocks) return 0;

    return formData.blocks.reduce((acc, block) => {
      if (block.content) {
        return acc + block.content.split(" ").length;
      }

      if (block.items) {
        return acc + block.items.join(" ").split(" ").length;
      }

      return acc;
    }, 0);
  }, [formData?.blocks]);

  //  SET BLOCKS
  const setBlocks = (value) => {
    setFormData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        blocks: typeof value === "function" ? value(prev.blocks) : value,
      };
    });
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
    if (!user?.id || !blog) return;

    try {
      setSaving(true);

      const blogData = {
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

        readTime: `${Math.ceil(wordCount / 200)} min read`,
        updatedAt: new Date().toISOString(),

        // ✅ FIXED AUTHOR (safe merge)
        author: {
          name: user.name,
          username: user.username,

          // IMPORTANT:
          // keep old avatar if user has none OR no change
          avatarUrl: user.avatarUrl ?? blog?.author?.avatarUrl ?? "",
        },

        seoTitle: formData.seoTitle,
        seoDescription: formData.seoDescription,
      };

      const response = await updateSpark({
        userId: user.id,
        dataId: id,
        updatedSpark: blogData,
      });

      if (response.success) {
        router.push("/space/manage/sparks");
      }
    } catch (error) {
      console.error("Update Blog Error:", error);
    } finally {
      setSaving(false);
    }
  };

  //  LOADING STATE
  if (loading) {
    return <LoadingSpinner message="Loading spark..." />;
  }

  //  NOT FOUND STATE
  if (!blog || !formData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-white/50">Blog not found</p>
      </div>
    );
  }

  return (
    <ReactSignedIn fallback={() => router.push("/space/login")}>
      <ScrollToTopButton />
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* TOP BAR */}
        <div className="sticky top-0 z-50">
          <div>
            <div className="flex h-16 items-center justify-between gap-4">
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  iconBefore={<ArrowLeft size={18} />}
                  onClick={() => router.push("/space")}
                  className="flex items-center gap-2 bg-zinc-950 hover:text-white transition"
                >
                  Back
                </Button>
              </div>

              {/* CENTER TITLE (DESKTOP ONLY) */}
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
                  variant="outline"
                  leftIcon={ImagePlus}
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
                  loading={saving}
                  onClick={handleSubmit}
                  className="rounded-xl"
                >
                  {saving ? "Updating..." : "Update"}
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
                      label: saving ? "Updating..." : "Update",
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
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-7xl mx-auto w-full py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: EDITOR */}
          <div className="lg:col-span-8">
            <NeuctraEditor
              className="py-0! px-0!"
              blocks={formData.blocks}
              setBlocks={setBlocks}
            />
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:col-span-4 space-y-2">
            {/* PUBLISH SETTINGS */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
              <div className="flex items-center gap-2 mb-5">
                <Folder size={16} className="text-primary" />
                <h3 className="font-medium">Publish Settings</h3>
              </div>

              <div className="space-y-4">
                {/* VISIBILITY SWITCH */}
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
                  inputClassName="bg-zinc-950/50!"
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
                  inputClassName="bg-zinc-950/50!"
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

            {/* SEO SETTINGS */}
            <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-5">
              {/* HEADER */}
              <div className="mb-5 flex items-center gap-2">
                <Tag size={16} className="text-primary" />
                <h3 className="font-medium">SEO Settings</h3>
              </div>

              {/* FIELDS */}
              <div className="space-y-4">
                {/* SEO TITLE */}
                <Input
                  label="SEO Title"
                  value={formData.seoTitle}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      seoTitle: e.target.value,
                    }))
                  }
                  placeholder="Best React UI Components Guide"
                  inputClassName="bg-zinc-950/50! border-border!"
                />

                {/* SEO DESCRIPTION */}
                <div>
                  <Input
                    label="SEO Description"
                    type="textarea"
                    value={formData.seoDescription}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        seoDescription: e.target.value,
                      }))
                    }
                    placeholder="Write a short SEO description for search engines..."
                    textareaClassName="w-full h-24 bg-zinc-950/50!"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      <BlogPreviewModal
        open={showPreview}
        onClose={() => setShowPreview(false)}
        formData={formData}
        wordCount={wordCount}
      />

      {/* COVER IMAGE MODAL */}
      <CoverImageModal
        isOpen={showCoverModal}
        onClose={() => setShowCoverModal(false)}
        formData={formData}
        setFormData={setFormData}
      />
    </ReactSignedIn>
  );
};

export default EditBlogPage;
