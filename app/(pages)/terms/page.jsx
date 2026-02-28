export const metadata = {
  title: "Terms of Service | Neuctra",
  description:
    "Read the official Terms of Service for Neuctra — covering client services, SaaS products, subscriptions, and usage policies.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Top Banner */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-sm">
            Last Updated: January 2026
          </p>
          <p className="text-zinc-500 mt-6 max-w-3xl leading-relaxed">
            These Terms govern your access to and use of Neuctra’s
            SaaS products, custom development services, and digital platforms.
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
                Neuctra is a technology company delivering custom web
                development services and operating a portfolio of
                Software-as-a-Service (SaaS) products including authentication
                systems, UI frameworks, productivity platforms, and developer
                tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Services & SaaS Products
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Neuctra operates under a hybrid business model that includes:
              </p>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>
                  • <span className="text-white font-medium">Client Services:</span>
                  Custom web applications, SaaS architecture,
                  dashboards, e-commerce platforms, and cloud integrations.
                </li>
                <li>
                  • <span className="text-white font-medium">SaaS Platforms:</span>
                  Including Authix, Neuctra UI, Notlix, Codinel,
                  Lyfsync, and future Neuctra products.
                </li>
              </ul>
              <p className="text-zinc-500 mt-4 text-sm">
                Features may evolve as part of ongoing product improvement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Accounts & Responsibilities
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                You are responsible for maintaining the confidentiality
                of your account credentials and all activity conducted
                under your account. Unauthorized access attempts are
                strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Subscriptions & Payments
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                SaaS subscriptions may be billed monthly or annually.
                Payments are processed via authorized third-party providers
                and renew automatically unless canceled before renewal.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Enterprise licensing, integrations, and custom development
                services may be governed by separate contractual agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Acceptable Use
              </h2>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li>• No unlawful or fraudulent activity</li>
                <li>• No exploitation of security vulnerabilities</li>
                <li>• No reverse engineering of proprietary systems</li>
                <li>• No abuse of APIs or infrastructure resources</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                All software, branding, systems, architecture, and
                proprietary frameworks remain the intellectual property
                of Neuctra unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Services are provided “as is.” Neuctra shall not be liable
                for indirect, incidental, or consequential damages arising
                from use or inability to use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Modifications to Terms
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update these Terms periodically. Continued use
                of Neuctra services after updates constitutes acceptance
                of the revised Terms.
              </p>
            </section>

          </div>

          {/* Right Column (Sticky Info Panel) */}
          <div className="md:col-span-4">
            <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 sticky top-28">
              <h3 className="font-semibold mb-4 text-white">
                Legal Contact
              </h3>
              <div className="text-zinc-400 space-y-2 text-sm">
                <p>support@neuctra.com</p>
                <p>www.neuctra.com</p>
              </div>

              <div className="mt-6 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
                These Terms apply to all Neuctra SaaS products,
                digital platforms, and custom client services.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}