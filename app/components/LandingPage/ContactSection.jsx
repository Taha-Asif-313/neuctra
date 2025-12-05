"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-[#080808] text-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you have a question about our products, need assistance, or
          just want to say hi — our team is ready to help.
        </p>
      </motion.div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl mx-auto">
        {/* Contact Info Panel */}
        <motion.div
          className="flex flex-col justify-start space-y-3 rounded-2xl transition-all backdrop-blur-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 font-bold text-white"
          >
            <img
              src="/logo.png"
              alt="Neuctra"
              className="w-20 object-cover"
            />
            <p className="text-xl" >Neuctra</p>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed">
            Reach out to our support team or visit our office for
            collaborations, inquiries, or project discussions.
          </p>

          <div className="space-y-4 text-gray-300 text-sm">
            {/* Get in Touch */}
            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Mail className="text-primary w-5 h-5" /> Get in Touch
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

            {/* Call Us */}
            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Phone className="text-primary w-5 h-5" /> Call Us
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

            {/* Visit Us */}
            {/* <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" /> Visit Us
              </h4>
              <p className="ml-7 text-gray-400">San Francisco, CA</p>
            </div> */}

            {/* Website */}
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
          className="rounded-2xl shadow-lg hover:border-primary/50 transition-all backdrop-blur-lg p-6 md:p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full bg-[#0f0f0f] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary transition-all"
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-primary font-semibold rounded-lg px-6 py-3 shadow-[0_0_25px_var(--primary)]/40 hover:shadow-[0_0_40px_var(--primary)]/60 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
