import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Neuctra Authix",
    category: "Identity infrastructure",
    description:
      "Authentication, user identity, and secure app foundations that let teams build trusted products with less repeated backend work.",
    focus: "Secure access, identity flows, and better product infrastructure.",
    image: "/logos/authix.png",
    href: "https://authix.neuctra.com",
    cta: "Get started",
    featured: true,
  },
  {
    name: "Neuctra UI",
    category: "Design system",
    description:
      "Reusable interface components and patterns for modern dashboards, workflows, and product experiences that are clear and scalable.",
    focus: "Consistent interfaces and faster product iteration.",
    image: "/logos/ui.png",
    href: "https://ui.neuctra.com",
    cta: "View docs",
    featured: true,
  },
  {
    name: "Neuctra Notlix",
    category: "Productivity & life OS",
    description:
      "A practical platform for notes, planning, memory, and daily organization that helps people stay focused without the clutter.",
    focus: "Focus, planning, and everyday productivity in one place.",
    image: "/logos/notlix.png",
    href: "https://notlix.neuctra.com",
    cta: "Explore",
  },
  {
    name: "Neuctra Tools",
    category: "Utilities",
    description:
      "Useful, fast browser tools for everyday digital tasks that need to feel simple, quick, and genuinely helpful.",
    focus: "Lightweight workflows and time-saving utility products.",
    image: null,
    href: "https://tools.neuctra.com",
    cta: "Open tools",
  },
  {
    name: "Future products",
    category: "Emerging ideas",
    description:
      "Neuctra continues building new products that support developers, teams, and everyday users with software that stays practical and thoughtfully designed.",
    focus: "New tools shaped by real customer problems and product insight.",
    image: null,
    href: "/contact",
    cta: "Talk to us",
  },
];

export default function ProductsPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />
        <div className="absolute -right-40 top-[40%] h-80 w-80 rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-secondary">
              The Neuctra ecosystem
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Software that moves
            <span className="mt-1 block text-primary">ideas forward.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base text-secondary sm:text-lg">
            From developer infrastructure to everyday digital tools, we build
            thoughtful software that helps people create, work, and live better.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore our products
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Work with us
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
          <span className="text-xs font-medium capitalize tracking-[0.16em] text-muted-foreground">
            One ecosystem
          </span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="text-sm text-secondary">Developer tools</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="text-sm text-secondary">Productivity</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="text-sm text-secondary">Digital solutions</span>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold capitalize tracking-[0.2em] text-primary">
              What we're building
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Products with a purpose.
            </h2>
            <p className="max-w-lg mt-3 text-sm text-secondary">
              Independent products, connected by one idea: make technology more
              useful and accessible.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Category */}
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium capitalize tracking-[0.15em] text-secondary">
                    {product.category}
                  </span>

                  {product.featured ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
                      Featured
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Product identity */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center transition-colors">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={`${product.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-primary">N</span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      A Neuctra product
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-lg text-sm text-secondary">
                  {product.description}
                </p>

                {/* Focus */}
                <div className="mt-7">
                  <p className="mb-1 text-sm font-semibold capitalize text-accent-foreground">
                    Product focus
                  </p>
                  <p className="text-sm text-foreground">{product.focus}</p>
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                  <a
                    href={product.href}
                    target={
                      product.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      product.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href={product.href}
                    target={
                      product.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      product.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    {product.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-primary/[0.04] blur-[90px]" />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold capitalize tracking-[0.2em] text-primary">
                Our approach
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Less complexity.
                <span className="block text-secondary">
                  More meaningful work.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm text-secondary sm:text-base">
                Good software doesn't need to make things complicated. We focus
                on solving real problems with practical tools, thoughtful
                experiences, and dependable technology.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Solve real problems",
                  text: "Build around genuine needs and practical use cases, not features for the sake of features.",
                },
                {
                  number: "02",
                  title: "Keep things simple",
                  text: "Create clear, intuitive experiences that help people get things done with less friction.",
                },
                {
                  number: "03",
                  title: "Build for growth",
                  text: "Develop reliable foundations that can evolve as products, businesses, and users grow.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <span className="font-mono text-xs text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-secondary">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Have something worth building?
                </h3>
                <p className="mt-1 text-sm text-secondary">
                  Let's turn your idea into a useful digital product.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Explore Neuctra
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Let's talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
