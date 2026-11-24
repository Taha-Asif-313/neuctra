import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import insights from "@/app/data/insights";

export const metadata = {
  title: "Business Software Guides and Answers",
  description: "Practical guides to custom software, CRM, POS, e-commerce, and choosing technology for business workflows.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Neuctra Insights</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">Practical answers for business technology decisions</h1>
        <p className="mt-6 text-lg leading-8 text-secondary">Clear starting points for choosing software, planning a project, and improving business workflows. Each guide links to the relevant Neuctra service when a custom solution may be useful.</p>
      </header>
      <section className="mt-12 grid gap-5 md:grid-cols-2" aria-label="Guides">
        {insights.map((article) => <article key={article.slug} className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold"><Link href={`/insights/${article.slug}`} className="hover:text-primary">{article.title}</Link></h2>
          <p className="mt-3 text-sm leading-7 text-secondary">{article.description}</p>
          <Link href={`/insights/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read the guide <ArrowUpRight className="h-4 w-4" /></Link>
        </article>)}
      </section>
    </main>
  );
}
