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
    <section
      id="contact"
      className="relative overflow-hidden border-y border-border bg-card/20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium capitalize text-secondary">
              Get in touch
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Have a challenge?
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
              Let's solve it together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-secondary sm:text-lg">
            Tell us about your idea, business challenge, or project. We'll help
            you explore the right technology and find a practical way forward.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-border to-transparent opacity-60" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

              <div className="relative">
                <Link
                  href="/"
                  className="mb-8 inline-flex items-center gap-1.5 text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl">
                    <img
                      src="/logo.png"
                      alt="Neuctra Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="block text-lg leading-none font-semibold text-foreground">
                      Neuctra
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Software & Technology
                    </span>
                  </div>
                </Link>

                <h3 className="max-w-sm text-2xl font-semibold text-foreground sm:text-3xl">
                  Let's turn your next idea into something useful.
                </h3>

                <p className="mt-4 max-w-md text-sm text-secondary">
                  We work with founders, businesses, and teams to build software
                  products, modern digital experiences, and technology systems
                  designed around real needs.
                </p>
              </div>

              <div className="relative my-8 h-px bg-gradient-to-r from-primary/40 via-border to-transparent" />

              <div className="relative space-y-6">
                <a
                  href="mailto:support@neuctra.com"
                  className="group/item flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover/item:border-primary/40 group-hover/item:bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <p className="mb-1 text-sm font-medium text-foreground">
                      Email us
                    </p>
                    <p className="break-all text-sm text-secondary transition-colors group-hover/item:text-primary">
                      support@neuctra.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+923084615794"
                  className="group/item flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover/item:border-primary/40 group-hover/item:bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>

                  <div className="pt-0.5">
                    <p className="mb-1 text-sm font-medium text-foreground">
                      Call us
                    </p>
                    <p className="text-sm text-secondary transition-colors group-hover/item:text-primary">
                      +92 308 4615794
                    </p>
                  </div>
                </a>

                <a
                  href="https://neuctra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card transition-colors group-hover/item:border-primary/40 group-hover/item:bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>

                  <div className="pt-0.5">
                    <p className="mb-1 text-sm font-medium text-foreground">
                      Website
                    </p>
                    <p className="text-sm text-secondary transition-colors group-hover/item:text-primary">
                      www.neuctra.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative mt-auto pt-9">
                <div className="rounded-2xl border border-border bg-card/70 p-4">
                  <p className="text-sm font-medium text-foreground">
                    Have a project in mind?
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Share the problem you're trying to solve. We'll take it from
                    there.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/5 blur-[90px]" />

            <div className="relative mb-8">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Fill in the details below and tell us how we can help.
              </p>
            </div>

            <div className="relative flex flex-col gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Full name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  disabled={loading}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  disabled={loading}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  disabled={loading}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea, project, or challenge..."
                  className="w-full resize-y rounded-xl border border-border bg-card/50 px-4 py-3.5 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                {loading ? "Sending..." : "Send message"}
                {!loading && <Send size={17} />}
              </motion.button>

              <p className="text-center text-xs leading-5 text-muted-foreground">
                By submitting this form, you're contacting Neuctra about your
                inquiry.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
