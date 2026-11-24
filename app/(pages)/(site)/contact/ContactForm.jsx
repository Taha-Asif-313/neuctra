"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const controlClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const form = event.target;
    const formData = new FormData(form);
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      const toastId = toast.loading("Sending...");
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      toast.dismiss(toastId);
      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 w-full">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">Name
          <input type="text" name="name" required autoComplete="name" placeholder="Your name" disabled={loading} className={controlClass} />
        </label>
        <label className="space-y-2 text-sm font-medium">Work email
          <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" disabled={loading} className={controlClass} />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium">What do you need help with?
        <select name="project_type" defaultValue="" disabled={loading} className={controlClass}>
          <option value="">Select a project type (optional)</option>
          <option>Custom SaaS or web application</option>
          <option>Business website or CMS</option>
          <option>CRM or sales workflow</option>
          <option>POS or e-commerce</option>
          <option>Frontend or product UX</option>
          <option>AI or workflow automation</option>
          <option>Other / not sure yet</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm font-medium">Project details
        <textarea name="message" rows={6} required placeholder="Describe the problem, who it affects, and what a useful solution would do." disabled={loading} className={`${controlClass} resize-y`} />
      </label>
      <p className="text-xs leading-5 text-muted-foreground">Please do not include passwords, payment details, or other sensitive information.</p>
      <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base">
        {loading ? "Sending..." : "Send project inquiry"}
      </button>
    </form>
  );
}
