export const metadata = {
  title: "Pricing | Neuctra",
  description: "Explore Neuctra pricing plans for startups, teams, and enterprises.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          💳 Neuctra Pricing
        </h1>
        <p className="text-zinc-400 text-center mb-12">
          Flexible pricing built for modern creators and enterprises.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Starter</h2>
            <p className="text-4xl font-bold mb-4">$0<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 text-zinc-400">
              <li>✔ Basic Authix</li>
              <li>✔ Limited UI Components</li>
              <li>✔ Limited AI Notes</li>
              <li>✔ Community Support</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-primary/10 p-8 rounded-2xl border border-primary">
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-4">$29<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 text-zinc-400">
              <li>✔ OAuth2, 2FA, SSO</li>
              <li>✔ 100+ UI Components</li>
              <li>✔ AI Summaries & Sync</li>
              <li>✔ Email Support</li>
              <li>✔ Cloud Integrations</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <ul className="space-y-2 text-zinc-400">
              <li>✔ Zero-Trust Security</li>
              <li>✔ Dedicated Infrastructure</li>
              <li>✔ SLA & Priority Support</li>
              <li>✔ Custom Integrations</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              Contact: support@neuctra.com
            </p>
          </div>
        </div>

        <div className="mt-12 text-zinc-500 text-sm text-center">
          Payments securely processed by Paddle. Subscriptions renew automatically unless canceled.
        </div>
      </div>
    </div>
  );
}
