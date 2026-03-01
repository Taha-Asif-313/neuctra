"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return; // Prevent multiple submissions

    const form = event.target;
    const formData = new FormData(form);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      const toastId = toast.loading("Sending...");

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

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
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Hero Section */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contact Neuctra
          </h1>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed mx-auto md:mx-0">
            Neuctra is a modern technology company delivering custom web
            development services and building scalable SaaS products. Let’s
            build something powerful together.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex-1">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={onSubmit} className="space-y-6 w-full">
              <div className="grid gap-6 sm:grid-cols-2 w-full">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  disabled={loading}
                  className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary w-full disabled:opacity-50"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  disabled={loading}
                  className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary w-full disabled:opacity-50"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project or inquiry..."
                disabled={loading}
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary font-semibold py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 w-full">
            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Company Overview
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Neuctra operates under a hybrid model combining professional
                client services and proprietary SaaS platforms. We build secure,
                scalable digital infrastructure for modern businesses.
              </p>
            </div>

            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="text-zinc-400 text-sm space-y-2 break-words">
                <p>support@neuctra.com</p>
                <p>www.neuctra.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}