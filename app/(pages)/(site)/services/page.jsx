import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Globe,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Rocket,
  Search,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";

const serviceCards = [
  {
    icon: Globe,
    title: "Business websites & digital presence",
    description:
      "Modern business websites, landing pages, and digital experiences designed to clarify your message and turn interest into trust and action.",
  },
  {
    icon: ShoppingCart,
    title: "Custom SaaS & web apps",
    description:
      "From MVPs to full product experiences, we design and build software that supports real workflows, user journeys, and business operations.",
  },
  {
    icon: LayoutDashboard,
    title: "Frontend systems & product UX",
    description:
      "Reusable interfaces, design patterns, and product experiences built to feel clear, scalable, and easy for users to understand.",
  },
  {
    icon: BrainCircuit,
    title: "AI, automation & workflow tooling",
    description:
      "Practical AI and automation solutions that reduce repetitive work and help teams move faster without unnecessary complexity.",
  },
];

const coreCapabilities = [
  "Custom software development",
  "SaaS products and platforms",
  "Web and internal systems",
  "Tailored technology solutions",
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-background/80 p-6 shadow-[0_18px_60px_rgba(16,20,16,0.06)] sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,194,20,0.12),transparent_45%)]" />
        <div className="relative">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Services
          </p>
          <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.04em] text-foreground">
            Technology services built around{" "}
            <span className="text-primary">real business needs</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base text-secondary">
            Neuctra helps businesses, founders, and teams build websites,
            products, workflows, and digital experiences that are useful from
            day one and ready to scale. We combine product thinking, technical
            execution, and a clear understanding of real-world operations to
            turn complex problems into practical technology systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground"
            >
              About Neuctra
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Products, platforms, and digital systems designed for real-world use
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceCards.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-7"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-300 group-hover:bg-primary/15" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(0,194,20,0.04)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-secondary">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-24 space-y-6">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" />
            What we do
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            From the first idea to{" "}
            <span className="text-secondary">the finished product.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-secondary">
            The capabilities to plan, build, launch, and improve digital
            products that solve real problems.
          </p>
        </div>

        {/* Row 1: Core capabilities */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card/70 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-secondary">
                <Sparkles className="h-4 w-4 text-primary" />
                Our capabilities
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Everything you need to build
              </h3>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border">
              <Boxes className="h-5 w-5 text-primary" />
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item, index) => (
              <div
                key={item}
                className="group flex min-h-28 flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.03]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-xs font-semibold tabular-nums text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-5">
                  <p className="text-sm font-semibold leading-6 text-foreground">
                    {item}
                  </p>
                  <div className="mt-3 h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                <Workflow className="h-4 w-4 text-primary" />
              </span>
              <p className="text-sm text-secondary">
                Connected capabilities. One cohesive product vision.
              </p>
            </div>

            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Plan · Build · Scale
            </span>
          </div>
        </div>

        {/* Row 2: Client workflow */}
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.07] via-card to-background p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-secondary">
                <Workflow className="h-4 w-4 text-primary" />
                Our approach
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                Turning business challenges into digital solutions.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary sm:text-base">
                We combine product thinking and engineering to build solutions
                around your goals, users, and real business workflows.
              </p>
            </div>
          </div>

          {/* Three workflow steps */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Define the problem, identify goals, and clarify requirements.",
                icon: Search,
              },
              {
                number: "02",
                title: "Design & build",
                description:
                  "Create intuitive experiences and reliable, scalable systems.",
                icon: Layers3,
              },
              {
                number: "03",
                title: "Launch & improve",
                description:
                  "Deliver the solution, gather feedback, and evolve over time.",
                icon: Rocket,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-primary">
                      STEP {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <h4 className="mt-5 text-base font-semibold text-foreground">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 sm:items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-4 w-4 text-primary" />
            </span>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Built around your goals
              </p>
              <p className="mt-1 text-sm leading-6 text-secondary">
                Every solution starts with the problem, not just the technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-[1.75rem] border border-border bg-card p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Ready to build?
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              Turn your idea into a product, platform, or digital experience
              that works.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground"
            >
              Explore products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
