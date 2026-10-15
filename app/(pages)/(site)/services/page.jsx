import Link from "next/link";

const services = [
  {
    title: "Custom software development",
    description:
      "We design and build bespoke digital tools that match specific workflows, business logic, and customer needs.",
  },
  {
    title: "SaaS products and platforms",
    description:
      "From MVPs to production-ready platforms, we help founders and teams turn product ideas into reliable software experiences.",
  },
  {
    title: "Web applications and internal systems",
    description:
      "We build dashboards, portals, operational systems, and modern web apps that help teams run work more smoothly and effectively.",
  },
  {
    title: "Tailored technology solutions",
    description:
      "We create practical digital systems for business needs, whether the goal is automation, better experiences, or improved operations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Services
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Technology services built around <span className="text-primary">business needs</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg">
          Neuctra provides custom technology services that help businesses and founders build websites, products, workflows, and digital experiences that are useful from day one and ready to scale.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">{service.title}</h2>
            <p className="text-sm leading-7 text-secondary">{service.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">How Neuctra works with clients</h2>
        <p className="max-w-4xl text-secondary leading-7">
          We combine product thinking, technical execution, and a clear understanding of real business workflows. That means the work is not just visually polished, but also structured to fit the problem it is meant to solve.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Start a project
          </Link>
          <Link href="/about" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground">
            About Neuctra
          </Link>
        </div>
      </section>
    </main>
  );
}
