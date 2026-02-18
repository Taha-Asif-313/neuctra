export const metadata = {
  title: "Terms of Service | Neuctra",
  description: "Read the Neuctra Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-zinc-400">Last Updated: 2026</p>

        <section>
          <h2 className="text-2xl font-semibold mt-8">1. Services</h2>
          <p className="text-zinc-400 mt-2">
            Neuctra provides SaaS products including authentication systems,
            UI libraries, AI collaboration tools, and productivity platforms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">2. Payments</h2>
          <p className="text-zinc-400 mt-2">
            Subscriptions are billed via Paddle. Fees are charged in advance
            and renew automatically unless canceled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">3. Acceptable Use</h2>
          <ul className="text-zinc-400 mt-2 space-y-2">
            <li>• No illegal usage</li>
            <li>• No security exploitation</li>
            <li>• No reverse engineering</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">4. Intellectual Property</h2>
          <p className="text-zinc-400 mt-2">
            All Neuctra software and branding remain the intellectual property of Neuctra.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">5. Contact</h2>
          <p className="text-zinc-400 mt-2">
            support@neuctra.com <br />
            www.neuctra.com
          </p>
        </section>
      </div>
    </div>
  );
}
