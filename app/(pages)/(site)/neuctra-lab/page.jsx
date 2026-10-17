import Link from "next/link";
import { Accordion } from "@neuctra/ui";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  BrainCircuit,
  Code2,
  Rocket,
  Lightbulb,
  Play,
  Terminal,
  Compass,
  BadgeCheck,
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
    <main className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="absolute right-[-160px] top-[35%] h-80 w-80 rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wide text-secondary">
                Neuctra's learning platform
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Understand technology.
              <span className="mt-2 block text-primary">
                Build something real.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base text-secondary sm:text-lg">
              Learn software development, explore modern technologies, and
              discover how to solve real-world business problems through
              practical, hands-on learning.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@NeuctraLab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4" />
                Explore tutorials
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                About Neuctra
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary">
              <span className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                Practical coding
              </span>
              <span className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Problem solving
              </span>
              <span className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                Product building
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-primary/[0.10] blur-[80px]" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-5 shadow-2xl shadow-primary/[0.04] sm:p-7">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BookOpenText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Neuctra Lab</p>
                    <p className="text-xs text-muted-foreground">
                      Learn by understanding and building
                    </p>
                  </div>
                </div>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>

              <div className="space-y-3 py-6">
                {[
                  {
                    icon: Terminal,
                    number: "01",
                    title: "Understand the fundamentals",
                    description: "Learn how technology works.",
                  },
                  {
                    icon: Code2,
                    number: "02",
                    title: "Build practical solutions",
                    description: "Turn concepts into working software.",
                  },
                  {
                    icon: BrainCircuit,
                    number: "03",
                    title: "Solve real problems",
                    description: "Apply technology where it matters.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-background/70 p-4 transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-mono text-[10px] text-primary">
                            {item.number}
                          </span>
                          <h3 className="text-sm font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-secondary sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-primary/15 bg-primary/[0.05] p-4">
                <p className="text-sm font-medium text-foreground">
                  The goal isn't just to learn code.
                </p>
                <p className="mt-1 text-sm text-secondary">
                  It's to understand problems and build useful solutions.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Learn. Build. Solve.
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Practical technology education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning pillars */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we teach
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Technology is a tool.
            <span className="block text-secondary">Learn how to use it.</span>
          </h2>
          <p className="mt-5 text-sm text-secondary sm:text-base">
            Explore the concepts, practical skills, and problem-solving
            approaches needed to build software and make better use of
            technology.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card/70 p-6 transition-all duration-300 sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-sm text-secondary">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Learning tracks */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-primary/[0.07] blur-[100px]" />

          <div className="relative mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold capitalize tracking-[0.2em] text-primary">
                Your learning journey
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Learn what you need to build.
              </h2>
              <p className="mt-4 text-sm text-secondary sm:text-base">
                From understanding the basics to developing products and solving
                business challenges with technology.
              </p>
            </div>

            <Compass className="hidden h-8 w-8 shrink-0 text-primary sm:block" />
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2">
            {learningTracks.map((track, index) => (
              <article
                key={track.title}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 sm:p-6"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 font-mono text-xs font-semibold text-primary">
                  0{index + 1}
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {track.title}
                </h3>

                <p className="mt-3 text-sm text-secondary">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 rounded-3xl border border-border bg-card/60 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our philosophy
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Don't just memorize.
              <span className="block text-secondary">
                Understand. Experiment. Build.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-sm text-secondary sm:text-base">
              At Neuctra Lab, learning goes beyond writing code. We focus on
              understanding how things work, choosing the right tools, and
              applying technology to meaningful problems. Whether you're
              learning software development or exploring how businesses can work
              better with technology, the goal is to turn knowledge into
              practical skills.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                About Neuctra
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Explore products
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Got questions?
            </h2>

            <p className="mt-5 max-w-md text-sm text-secondary sm:text-base">
              Learn more about Neuctra Lab, what we teach, and how our
              educational platform fits into the wider Neuctra ecosystem.
            </p>
          </div>

          <div className="min-w-0">
            <Accordion itemClassName="bg-card!" items={faqItems} allowMultiple={false} />
          </div>
        </div>
      </section>
    </main>
  );
}
