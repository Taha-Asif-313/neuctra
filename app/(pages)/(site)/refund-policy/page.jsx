export const metadata = {
  title: "Refund Policy",
  description:
    "Review Neuctra's official refund and subscription policy covering SaaS products, client services, and billing terms.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Top Banner */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund Policy
          </h1>
          <p className="text-secondary text-sm">
            Last Updated: January 2026
          </p>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            This Refund Policy outlines the conditions under which refunds
            may be granted for Neuctra’s SaaS subscriptions and custom
            development services.
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
                1. SaaS Subscription Refunds
              </h2>
              <p className="mb-4 leading-relaxed text-secondary">
                Neuctra SaaS products (including authentication systems,
                UI frameworks, productivity platforms, and developer tools)
                operate on recurring subscription models.
              </p>
              <ul className="space-y-3 leading-relaxed text-secondary">
                <li>
                  • <span className="font-medium text-foreground">Monthly Plans:</span>
                  Non-refundable once billed.
                </li>
                <li>
                  • <span className="font-medium text-foreground">Annual Plans:</span>
                  Eligible for partial refund within 14 days of initial purchase.
                </li>
                <li>
                  • Subscription cancellations stop future billing but do not
                  retroactively refund prior charges.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Eligibility for Refund
              </h2>
              <p className="mb-4 leading-relaxed text-secondary">
                Refunds may be granted under exceptional circumstances,
                including but not limited to:
              </p>
              <ul className="space-y-3 leading-relaxed text-secondary">
                <li>• Verified billing errors</li>
                <li>• Duplicate charges</li>
                <li>• Extended service-wide downtime</li>
                <li>• Technical failures preventing product access</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                All refund requests are reviewed individually.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Custom Development Services
              </h2>
              <p className="text-secondary leading-relaxed">
                Payments made for custom web development, SaaS architecture,
                enterprise integrations, or consulting services are governed
                by signed contracts. Milestone payments and completed work
                are generally non-refundable unless otherwise specified
                in a written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Refund Request Process
              </h2>
              <p className="mb-4 leading-relaxed text-secondary">
                To request a refund, please provide:
              </p>
              <ul className="space-y-3 leading-relaxed text-secondary">
                <li>• Full name and account email</li>
                <li>• Invoice or transaction ID</li>
                <li>• Detailed reason for request</li>
              </ul>
              <p className="mt-4 leading-relaxed text-secondary">
                Requests must be submitted within 14 days of the billing date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Processing Time
              </h2>
              <p className="text-secondary leading-relaxed">
                Approved refunds are processed within 7 to 14 business days
                depending on your payment provider or financial institution.
              </p>
            </section>

          </div>

          {/* Right Column (Sticky Info Panel) */}
          <div className="md:col-span-4">
            <div className="sticky top-28 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                Billing Support
              </h3>
              <div className="space-y-2 text-sm text-secondary">
                <p>support@neuctra.com</p>
                <p>www.neuctra.com</p>
              </div>

              <div className="mt-6 border-t border-border pt-6 text-sm text-muted-foreground">
                This policy applies to all Neuctra SaaS products
                and client service engagements.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
