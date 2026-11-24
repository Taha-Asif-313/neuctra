import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import products from "@/app/data/products";

export const metadata = {
  title: "Product Pricing and Project Estimates",
  description:
    "Find current product pricing on each Neuctra product site or contact Neuctra to discuss a custom software project estimate.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">Current pricing, from the right source</h1>
        <p className="mt-6 text-lg leading-8 text-secondary">Neuctra products have their own plans and terms, which can change over time. For custom software and business solutions, pricing depends on the agreed project scope.</p>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Neuctra products</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">Open the official product site for current plans, feature availability, and terms. This main site does not publish product prices that may become outdated.</p>
          <div className="mt-6 space-y-3">
            {products.map((product) => <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl border border-border p-4 text-sm font-medium hover:border-primary/40">
              <span>{product.name}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
            </a>)}
          </div>
        </article>

        <article className="rounded-3xl border border-border bg-card/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Custom projects</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">Website, SaaS, CRM, POS, e-commerce, and automation projects are scoped around your requirements. Share your goals, must-have workflows, timeline, and constraints to discuss an estimate.</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-secondary">
            <li>Project scope and required workflows</li>
            <li>Integrations, hosting, and third-party services</li>
            <li>Delivery milestones and review process</li>
            <li>Ongoing support and maintenance, if required</li>
          </ul>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            <MessageCircle className="h-4 w-4" /> Request a project discussion
          </Link>
        </article>
      </section>
    </main>
  );
}
