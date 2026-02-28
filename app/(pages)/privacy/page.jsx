export const metadata = {
  title: "Privacy Policy | Neuctra",
  description:
    "Learn how Neuctra collects, uses, and protects your data across our SaaS products and digital services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Top Banner */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm">
            Last Updated: January 2026
          </p>
          <p className="text-zinc-500 mt-6 max-w-3xl leading-relaxed">
            At Neuctra, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, store, and safeguard
            personal information across our SaaS platforms, client services,
            and digital infrastructure.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column (Main Content) */}
          <div className="md:col-span-8 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. About Neuctra
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Neuctra is a technology company providing custom web
                development services and operating scalable SaaS products
                including authentication systems, UI frameworks,
                productivity platforms, and developer tools.
                We design secure, cloud-based digital infrastructure
                for businesses and startups worldwide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>• Account details (name, email, company)</li>
                <li>• Subscription and billing information</li>
                <li>• Product usage and analytics data</li>
                <li>• Device, browser, and IP information</li>
                <li>• Communication and support inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Information
              </h2>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>• Deliver and maintain SaaS services</li>
                <li>• Process payments and subscriptions</li>
                <li>• Improve platform performance</li>
                <li>• Strengthen security and prevent fraud</li>
                <li>• Provide customer support and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Data Sharing
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We do not sell personal data. Information may be shared with
                trusted third-party service providers for hosting,
                payment processing, analytics, or security monitoring.
                All partners are contractually obligated to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Security Measures
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Neuctra applies encryption, role-based access control,
                secure authentication mechanisms, and modern cloud
                infrastructure standards to protect your data.
                We continuously enhance our security posture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Data Retention
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Personal data is retained only as long as necessary
                to provide services, comply with legal requirements,
                and enforce agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Your Rights
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Depending on your jurisdiction, you may request access,
                correction, deletion, or portability of your personal data.
                To exercise your rights, contact support@neuctra.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this Privacy Policy periodically.
                Continued use of our services constitutes acceptance
                of the revised policy.
              </p>
            </section>

          </div>

          {/* Right Column (Info Panel like LinkedIn) */}
          <div className="md:col-span-4">
            <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 sticky top-28">
              <h3 className="font-semibold mb-4 text-white">
                Contact Information
              </h3>
              <div className="text-zinc-400 space-y-2 text-sm">
                <p>support@neuctra.com</p>
                <p>www.neuctra.com</p>
              </div>

              <div className="mt-6 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
                Neuctra operates under a hybrid model:
                custom client services and proprietary SaaS platforms.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}