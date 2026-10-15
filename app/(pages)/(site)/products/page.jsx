import Link from "next/link";

const products = [
  {
    name: "Authix",
    category: "Identity infrastructure",
    description:
      "Authentication, user identity, and core app data foundations so teams can build secure products without repeating the same backend setup.",
    focus: "Secure access, identity flows, and trusted app infrastructure.",
  },
  {
    name: "UI",
    category: "Design system",
    description:
      "Reusable interface components and product design patterns for clean dashboards, user flows, and modern web experiences.",
    focus: "Consistent interfaces and faster product iteration.",
  },
  {
    name: "Notlix",
    category: "Productivity & life OS",
    description:
      "A practical platform for planning, notes, memory, organization, and digital life management that keeps work useful and uncluttered.",
    focus: "Focus, planning, and everyday productivity in one place.",
  },
  {
    name: "Tools",
    category: "Utilities",
    description:
      "Fast, accessible utilities for common digital tasks that need to feel simple, quick, and helpful in daily work.",
    focus: "Lightweight workflows and time-saving utilities.",
  },
  {
    name: "Future products",
    category: "Emerging ideas",
    description:
      "Neuctra continues building new products that support developers, teams, and everyday users with software that feels practical and thoughtfully designed.",
    focus: "New tools shaped by real customer problems and product insight.",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Product ecosystem
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Neuctra products built for <span className="text-primary">real-world use</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg">
          Neuctra creates a growing portfolio of software products that help people work better, build faster, and simplify digital workflows. The ecosystem includes Authix, UI, Notlix, Tools, and future products designed around practical needs.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {product.category}
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">{product.name}</h2>
            <p className="mb-4 text-sm leading-7 text-secondary">{product.description}</p>
            <div className="rounded-xl border border-border bg-background p-3 text-sm text-secondary">
              {product.focus}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Neuctra product philosophy</h2>
        <p className="max-w-4xl text-secondary leading-7">
          Every product is shaped by the same approach: make software useful, understandable, and dependable. Whether the goal is authentication, interface systems, productivity, or a lightweight utility, the focus stays on solving real problems clearly rather than adding unnecessary complexity.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Explore the site
          </Link>
          <Link href="/contact" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground">
            Talk to Neuctra
          </Link>
        </div>
      </section>
    </main>
  );
}
