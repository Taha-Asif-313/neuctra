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

    if (loading) return;

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
        setFormData({ name: "", email: "", subject: "", message: "" });
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
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <motion.div
        className="mx-auto mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let’s build something useful together.
        </h2>
        <p className="mt-4 text-base text-secondary sm:text-lg">
          Share your idea, challenge, or project requirement and we’ll help map the best path forward.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          className="rounded-3xl border border-border bg-card p-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="mb-6 flex items-center gap-2">
            <img src="/logo.png" alt="Neuctra Logo" className="h-6 w-6 object-contain" />
            <span className="text-lg font-semibold text-foreground">Neuctra</span>
          </Link>

          <p className="mb-8 max-w-md text-sm leading-7 text-secondary">
            We help founders, businesses, and teams turn ideas into software products, digital experiences, and technology systems that solve real problems.
          </p>

          <div className="space-y-5 text-sm">
            <div>
              <h4 className="mb-1 flex items-center gap-2 text-base font-semibold text-foreground">
                <Mail className="h-4 w-4 text-primary" /> Email
              </h4>
              <a href="mailto:support@neuctra.com" className="ml-6 text-secondary transition-colors hover:text-foreground">
                support@neuctra.com
              </a>
            </div>

            <div>
              <h4 className="mb-1 flex items-center gap-2 text-base font-semibold text-foreground">
                <Phone className="h-4 w-4 text-primary" /> Phone
              </h4>
              <a href="tel:+923084615794" className="ml-6 text-secondary transition-colors hover:text-foreground">
                +92 308 4615794
              </a>
            </div>

            <div>
              <h4 className="mb-1 flex items-center gap-2 text-base font-semibold text-foreground">
                <Globe className="h-4 w-4 text-primary" /> Website
              </h4>
              <p className="ml-6 text-secondary">www.neuctra.com</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-8"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              required
              disabled={loading}
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-60"
            />

            <input
              type="email"
              name="email"
              required
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-60"
            />

            <input
              type="text"
              name="subject"
              disabled={loading}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (optional)"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-60"
            />

            <textarea
              name="message"
              rows="5"
              required
              disabled={loading}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-60"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
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
