export const metadata = {
  title: "Refund Policy | Neuctra",
  description: "Neuctra subscription and refund terms.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Refund Policy</h1>
        <p className="text-zinc-400">Last Updated: 2026</p>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Subscription Refunds</h2>
          <p className="text-zinc-400 mt-2">
            Monthly subscriptions are non-refundable after billing.
            Annual subscriptions may qualify for partial refunds within 14 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Eligibility</h2>
          <ul className="text-zinc-400 mt-2 space-y-2">
            <li>• Billing errors</li>
            <li>• Extended service downtime</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Request a Refund</h2>
          <p className="text-zinc-400 mt-2">
            Email support@neuctra.com with your invoice ID and reason.
          </p>
        </section>
      </div>
    </div>
  );
}
