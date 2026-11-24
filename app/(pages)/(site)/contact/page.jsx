import ContactForm from "./ContactForm";

export const metadata = {
  title: "Discuss a Custom Software Project",
  description:
    "Tell Neuctra about your business challenge, SaaS idea, website, CRM, POS, e-commerce, or automation project and discuss next steps.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start a conversation</p>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Discuss your business or software challenge</h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-secondary sm:text-base md:mx-0">Tell Neuctra what is slowing your team down or what you want to build. We can discuss whether a custom website, SaaS product, CRM, POS, e-commerce store, or workflow solution is a good fit.</p>
        </div>
      </header>
      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
        <section className="w-full lg:col-span-7" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="mb-6 text-xl font-semibold sm:text-2xl">Tell us about the project</h2>
          <ContactForm />
        </section>
        <aside className="flex w-full flex-col gap-6 lg:col-span-5 lg:gap-8">
          <section className="flex-1 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">What happens next?</h2>
            <p className="text-sm leading-7 text-secondary">Neuctra reviews the problem, goals, and constraints you share. If the project is a fit, the next step is to clarify requirements, likely scope, timeline, and responsibilities before work begins.</p>
          </section>
          <section className="flex-1 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">Contact information</h2>
            <div className="space-y-2 break-words text-sm text-secondary">
              <p><a className="hover:text-primary" href="mailto:support@neuctra.com">support@neuctra.com</a></p>
              <p><a className="hover:text-primary" href="https://neuctra.com/">neuctra.com</a></p>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
