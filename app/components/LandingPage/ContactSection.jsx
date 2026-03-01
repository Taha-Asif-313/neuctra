"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🚫 Prevent double submit

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const toastId = toast.loading("Sending message...");

      const payload = new FormData();
      payload.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("subject", formData.subject);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      toast.dismiss(toastId);

      if (data.success) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 text-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-3 tracking-tight">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-gray-200 max-w-md mx-auto">
          Whether you have a question about our products or need assistance —
          our team is ready to help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl mx-auto">
        {/* Contact Info Panel */}
        <motion.div
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center gap-1 font-bold text-white">
            <img src="/logo.png" alt="Neuctra" className="w-10 object-cover" />
            <p className="text-lg">Neuctra</p>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed">
            Reach out for collaborations, inquiries, or project discussions.
          </p>

          <div className="space-y-4 text-gray-300 text-sm">
            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Mail className="text-primary w-5 h-5" /> Email
              </h4>
              <p className="ml-7 text-gray-400">
                <a
                  href="mailto:support@neuctra.com"
                  className="hover:text-primary transition"
                >
                  support@neuctra.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Phone className="text-primary w-5 h-5" /> Phone
              </h4>
              <p className="ml-7 text-gray-400">
                <a
                  href="tel:+923084615794"
                  className="hover:text-primary transition"
                >
                  +92 308 4615794
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Globe className="text-primary w-5 h-5" /> Website
              </h4>
              <p className="ml-7 text-gray-400">www.neuctra.com</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 md:p-8 backdrop-blur-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              required
              disabled={loading}
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all disabled:opacity-50"
            />

            <input
              type="email"
              name="email"
              required
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all disabled:opacity-50"
            />

            <textarea
              name="message"
              rows="5"
              required
              disabled={loading}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all disabled:opacity-50"
            />

            <motion.button
              type="submit"
              disabled={loading}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-primary font-semibold rounded-lg px-6 py-3 shadow-[0_0_25px_var(--primary)]/40 hover:shadow-[0_0_40px_var(--primary)]/60 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={18} />}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}