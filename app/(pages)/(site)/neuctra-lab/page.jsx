import Link from "next/link";
import { Accordion } from "@neuctra/ui";
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://neuctra.com/#organization",
      name: "Neuctra",
      url: "https://neuctra.com/",
      logo: "https://neuctra.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/neuctra",
        "https://github.com/neuctra",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://neuctra.com/#website",
      url: "https://neuctra.com/",
      name: "Neuctra",
      publisher: { "@id": "https://neuctra.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": "https://neuctra.com/neuctra-lab#faq",
      url: "https://neuctra.com/neuctra-lab",
      name: "Neuctra Lab | Practical Technology Education",
      description:
        "Learn practical software development, technology education, and business problem-solving through Neuctra Lab's real-world tutorials and product-driven learning.",
      isPartOf: { "@id": "https://neuctra.com/#website" },
      inLanguage: "en",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Neuctra Lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neuctra Lab is the educational platform within the Neuctra ecosystem. It helps people understand technology, practice software development, and learn to solve real business problems with technology.",
          },
        },
        {
          "@type": "Question",
          name: "What topics does Neuctra Lab cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It covers software development, web technologies, APIs, databases, AI tools, business workflows, developer productivity, and practical product building.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Neuctra Lab for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is designed for students, developers, founders, working professionals, entrepreneurs, and business owners who want to understand and apply technology in real life.",
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    title: "What is Neuctra Lab?",
    content:
      "Neuctra Lab is the educational platform within the Neuctra ecosystem. It helps people understand technology, practice software development, and learn to solve real business problems with technology.",
  },
  {
    title: "What topics does Neuctra Lab cover?",
    content:
      "It covers software development, web technologies, APIs, databases, AI tools, business workflows, developer productivity, and practical product building.",
  },
  {
    title: "Who is Neuctra Lab for?",
    content:
      "It is designed for students, developers, founders, working professionals, entrepreneurs, and business owners who want to understand and apply technology in real life.",
  },
  {
    title: "How is Neuctra Lab connected to Neuctra?",
    content:
      "Neuctra builds products and custom technology solutions, while Neuctra Lab teaches the ideas, skills, and practical thinking behind building and improving those solutions.",
  },
];

const pillars = [
  {
    icon: BookOpenText,
    title: "Technology education",
    description:
      "Explaining software development concepts, tools, systems, and modern technologies in a way that is practical and easier to understand.",
  },
  {
    icon: Code2,
    title: "Practical software development",
    description:
      "Showing how to build websites, apps, SaaS products, and digital tools through real examples and applied learning.",
  },
  {
    icon: BrainCircuit,
    title: "Business problem solving with technology",
    description:
      "Helping people understand how software, automation, APIs, AI, and digital workflows can solve real business challenges.",
  },
  {
    icon: Rocket,
    title: "Developer growth",
    description:
      "Supporting aspiring developers, builders, and professionals with learning resources, tutorials, and practical product-building lessons.",
  },
];

const learningTracks = [
  {
    title: "Foundations",
    description:
      "The basics of web development, APIs, authentication, data flow, and product thinking for beginners and growing developers.",
  },
  {
    title: "Product building",
    description:
      "How to plan, design, build, ship, and improve software products using real-world workflows and product decisions.",
  },
  {
    title: "Business technology",
    description:
      "How software can solve workflow issues, automate tasks, reduce friction, and support business operations in practical ways.",
  },
  {
    title: "Modern tools",
    description:
      "Hands-on guidance around frameworks, libraries, integrations, AI tools, and best practices used in real product teams.",
  },
];

export default function NeuctraLabPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Neuctra Lab
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          A learning platform for{" "}
          <span className="text-primary">
            technology, builders, and problem solvers
          </span>
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg">
          Neuctra Lab is the educational side of the Neuctra ecosystem. It helps
          people understand technology, develop practical technical skills, and
          learn how to apply software to real-world problems.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              {title}
            </h2>
            <p className="text-sm leading-7 text-secondary">{description}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Learning tracks
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-foreground sm:text-4xl">
          What you can learn here
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {learningTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-xl border border-border bg-background p-5"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {track.title}
              </h3>
              <p className="text-sm leading-7 text-secondary">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Learning philosophy
        </h2>
        <p className="max-w-4xl text-secondary leading-7">
          Neuctra Lab focuses on understanding, experimenting, building, and
          solving problems. The goal is not only to teach code, but also to help
          people understand when to use technology, how to choose the right
          tools, and how to create value with software.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Learn about Neuctra
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground"
          >
            See products
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold text-foreground sm:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="mx-auto max-w-4xl">
          <Accordion items={faqItems} allowMultiple={false} />
        </div>
      </section>
    </main>
  );
}
