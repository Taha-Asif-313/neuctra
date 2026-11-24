import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import seoServices from "@/app/data/seoServices";

export function generateStaticParams() {
  return seoServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = seoServices.find((item) => item.slug === slug);
  if (!page) return { title: "Service not found", robots: { index: false, follow: false } };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      type: "website",
      title: `${page.title} | Neuctra`,
      description: page.description,
      url: `https://neuctra.com/services/${page.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const page = seoServices.find((item) => item.slug === slug);
  if (!page) return null;

  const url = `https://neuctra.com/services/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.title,
        description: page.description,
        url,
        provider: { "@id": "https://neuctra.com/#organization" },
        ...(page.slug === "custom-software-pakistan"
          ? { areaServed: { "@type": "Country", name: "Pakistan" } }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://neuctra.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://neuctra.com/services" },
          { "@type": "ListItem", position: 3, name: page.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-secondary">
        <Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true"> / </span>
        <Link href="/services" className="hover:text-primary">Services</Link><span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-foreground">{page.title}</span>
      </nav>

      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Neuctra Services</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{page.h1}</h1>
        <p className="mt-6 text-lg leading-8 text-secondary">{page.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/services" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground">All services</Link>
        </div>
      </header>

      <section className="mt-16 grid gap-8 border-y border-border py-10 md:grid-cols-[1fr_2fr]">
        <h2 className="text-2xl font-semibold">Who this helps</h2>
        <p className="leading-7 text-secondary">{page.audience}</p>
      </section>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">What the work can address</h2>
          <ul className="mt-6 space-y-4">
            {page.outcomes.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-secondary"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">A clear project process</h2>
          <ol className="mt-6 space-y-5">
            {page.process.map((item, index) => <li key={item} className="flex gap-4 text-sm leading-7 text-secondary"><span className="font-mono text-primary">0{index + 1}</span><span>{item}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {page.faqs.map(([question, answer]) => <details key={question} className="group py-5">
            <summary className="cursor-pointer list-none pr-6 text-lg font-medium marker:hidden">{question}</summary>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-secondary">{answer}</p>
          </details>)}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-primary/20 bg-primary/[0.06] p-7 sm:p-10">
        <h2 className="text-2xl font-semibold">Tell us what is getting in the way</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary">Share the workflow, product idea, or business challenge. Neuctra can discuss whether a custom build, an existing tool, or another approach is the right fit.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Contact Neuctra <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </main>
  );
}
