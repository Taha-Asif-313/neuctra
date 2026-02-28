export const metadata = {
  title: "Contact Us | Neuctra",
  description:
    "Get in touch with Neuctra for custom web development services or inquiries about our SaaS ecosystem including Authix, Neuctra UI, Notlix, Codinel, and Lyfsync.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contact Neuctra
          </h1>

          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Neuctra is a modern technology company delivering custom web
            development services and building scalable SaaS products that
            empower businesses, developers, and digital creators. Whether you
            need a custom solution or want to explore our SaaS ecosystem — we’d
            love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-5 sm:space-y-6">
                {/* Name + Email */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary w-full"
                  />
                </div>

                {/* Company */}
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />

                {/* Message */}
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-primary font-semibold py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Company Overview
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Neuctra operates under a hybrid model combining professional
                client services and proprietary SaaS platforms. We build secure,
                scalable, and performance-driven digital infrastructure for
                startups and growing businesses.
              </p>
            </div>

            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="text-zinc-400 text-sm space-y-2">
                <p className="break-all">support@neuctra.com</p>
                <p className="break-all">www.neuctra.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
