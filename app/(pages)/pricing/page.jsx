export const metadata = {
  title: "Pricing | Neuctra",
  description: "Explore Neuctra pricing plans and SaaS products for startups, teams, and enterprises.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero Banner */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            💳 Neuctra Pricing
          </h1>
          <p className="text-zinc-500 mt-4 max-w-3xl mx-auto leading-relaxed">
            Flexible SaaS subscription plans designed for startups, teams, and enterprises. Scale with our products including Authix, Neuctra UI, Notlix, Codinel, and Lyfsync.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Left Column */}
          <div className="md:col-span-8 space-y-16">

            {/* Products Showcase */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">🚀 Neuctra Products</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "Authix", desc: "Authentication & authorization platform with 2FA, OAuth2, SSO." },
                  { name: "Neuctra UI", desc: "UI components & design system for fast development." },
                  { name: "Notlix", desc: "Workflow & productivity management tool." },
                  { name: "Codinel", desc: "Developer utilities and deployment helpers." },
                  { name: "Lyfsync", desc: "Personal productivity & life management SaaS." },
                ].map((product, idx) => (
                  <div key={idx} className="bg-[#111] p-6 rounded-xl border border-zinc-800 hover:border-primary transition-all">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-zinc-400 text-sm">{product.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Tiers */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">💵 Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">

                {/* Starter */}
                <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                    <p className="text-4xl font-bold mb-4">$0<span className="text-lg">/mo</span></p>
                    <ul className="space-y-2 text-zinc-400">
                      <li>✔ Basic Authix</li>
                      <li>✔ Limited UI Components</li>
                      <li>✔ Limited AI Notes</li>
                      <li>✔ Community Support</li>
                    </ul>
                  </div>
                  <a href="/signup" className="mt-6 px-6 py-3 bg-primary rounded-lg font-semibold text-center hover:shadow-[0_0_15px_#00ff88]/40 transition-all">
                    Get Started
                  </a>
                </div>

                {/* Pro */}
                <div className="bg-primary/10 p-8 rounded-2xl border border-primary flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                    <p className="text-4xl font-bold mb-4">$29<span className="text-lg">/mo</span></p>
                    <ul className="space-y-2 text-zinc-400">
                      <li>✔ OAuth2, 2FA, SSO</li>
                      <li>✔ 100+ UI Components</li>
                      <li>✔ AI Summaries & Sync</li>
                      <li>✔ Email Support</li>
                      <li>✔ Cloud Integrations</li>
                    </ul>
                  </div>
                  <a href="/signup" className="mt-6 px-6 py-3 bg-primary rounded-lg font-semibold text-center hover:shadow-[0_0_20px_#00ff88]/40 transition-all">
                    Start Pro
                  </a>
                </div>

                {/* Enterprise */}
                <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                    <p className="text-4xl font-bold mb-4">Custom</p>
                    <ul className="space-y-2 text-zinc-400">
                      <li>✔ Zero-Trust Security</li>
                      <li>✔ Dedicated Infrastructure</li>
                      <li>✔ SLA & Priority Support</li>
                      <li>✔ Custom Integrations</li>
                    </ul>
                  </div>
                  <a href="/contact" className="mt-6 px-6 py-3 bg-primary rounded-lg font-semibold text-center hover:shadow-[0_0_20px_#00ff88]/40 transition-all">
                    Contact Sales
                  </a>
                </div>

              </div>
            </section>

            {/* Notes */}
            <section>
              <p className="text-zinc-500 text-sm text-center mt-6">
                Payments are securely processed via Paddle. Subscriptions automatically renew unless canceled.
              </p>
            </section>

          </div>

          {/* Right Column (Sticky Info Panel) */}
          <div className="md:col-span-4">
            <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 sticky top-28">
              <h3 className="font-semibold mb-4 text-white">Need Help?</h3>
              <div className="text-zinc-400 space-y-2 text-sm">
                <p>Email: support@neuctra.com</p>
                <p>Website: www.neuctra.com</p>
              </div>

              <div className="mt-6 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
                Choose a plan that fits your team. Upgrade anytime as your business grows.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}