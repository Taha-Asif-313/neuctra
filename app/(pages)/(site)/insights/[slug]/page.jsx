import Link from "next/link";
import insights from "@/app/data/insights";

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return { title: "Guide not found", robots: { index: false, follow: false } };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description, url: `https://neuctra.com/insights/${article.slug}` },
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return null;

  const url = `https://neuctra.com/insights/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        dateModified: article.updated,
        mainEntityOfPage: url,
        publisher: { "@id": "https://neuctra.com/#organization" },
        author: { "@id": "https://neuctra.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neuctra.com/" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://neuctra.com/insights" },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-secondary"><Link href="/" className="hover:text-primary">Home</Link> / <Link href="/insights" className="hover:text-primary">Insights</Link></nav>
      <article>
        <header>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Business technology guide</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-8 text-secondary">{article.description}</p>
          <p className="mt-4 text-xs text-muted-foreground">Published and reviewed by Neuctra · {article.updated}</p>
        </header>
        <section className="mt-10 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6" aria-label="Quick answer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Quick answer</h2>
          <p className="mt-3 text-base leading-8 text-foreground">{article.answer}</p>
        </section>
        <div className="mt-10 space-y-10">
          {article.sections.map(([heading, content]) => <section key={heading}>
            <h2 className="text-2xl font-semibold text-foreground">{heading}</h2>
            <p className="mt-3 text-base leading-8 text-secondary">{content}</p>
          </section>)}
        </div>
      </article>
      <aside className="mt-14 rounded-3xl border border-border bg-card/70 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Discuss this with Neuctra</h2>
        <p className="mt-3 text-sm leading-7 text-secondary">If your needs point toward a custom solution, explore the service details or contact Neuctra with your workflow and requirements.</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href={article.related} className="text-primary">{article.relatedLabel}</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact Neuctra</Link>
        </div>
      </aside>
    </main>
  );
}
