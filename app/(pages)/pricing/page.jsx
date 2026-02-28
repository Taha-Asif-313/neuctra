import { Check, DollarSign } from "lucide-react";

export const metadata = {
  title: "Pricing | Neuctra",
  description:
    "Explore Neuctra product-wise pricing plans for startups, teams, and enterprises.",
};

export default function PricingPage() {
  const products = [
    {
      name: "Neuctra Authix",
      logo: "/logos/authix.png",
      desc: "Authentication & authorization platform with 2FA, OAuth2, SSO, and role-based access control.",
      pricing: [
        {
          tier: "Starter",
          price: "$0/mo",
          features: ["Basic login", "Email/password auth", "Community support"],
        },
        {
          tier: "Pro",
          price: "$29/mo",
          features: [
            "OAuth2 & SSO",
            "2FA",
            "Role-based access",
            "Email support",
          ],
        },
        {
          tier: "Enterprise",
          price: "Custom",
          features: [
            "Dedicated instance",
            "Priority SLA",
            "Custom integrations",
          ],
        },
      ],
    },
    {
      name: "Neuctra UI",
      logo: "/logos/ui.png",
      desc: "UI component library & design system with pre-built layouts and developer-friendly kits.",
      pricing: [
        {
          tier: "Starter",
          price: "$0/mo",
          features: [
            "Limited components",
            "Basic layouts",
            "Community support",
          ],
        },
        {
          tier: "Pro",
          price: "$39/mo",
          features: [
            "Full component library",
            "Admin panel templates",
            "Email support",
          ],
        },
        {
          tier: "Enterprise",
          price: "Custom",
          features: [
            "Custom design system",
            "Dedicated support",
            "On-premise option",
          ],
        },
      ],
    },
    {
      name: "Neuctra Notlix",
      logo: "/logos/notlix.png",
      desc: "Workflow and productivity management tool for business operations optimization.",
      pricing: [
        {
          tier: "Starter",
          price: "$0/mo",
          features: [
            "Basic workflow tracking",
            "Limited tasks",
            "Community support",
          ],
        },
        {
          tier: "Pro",
          price: "$49/mo",
          features: [
            "Advanced workflow automation",
            "Unlimited tasks",
            "Email support",
          ],
        },
        {
          tier: "Enterprise",
          price: "Custom",
          features: [
            "Custom workflows",
            "Priority support",
            "Dedicated instance",
          ],
        },
      ],
    },
    {
      name: "Neuctra Codinel",
      logo: "/logos/codinel.png",
      desc: "Developer-focused SaaS with utilities, deployment helpers, and code management tools.",
      pricing: [
        {
          tier: "Starter",
          price: "$0/mo",
          features: ["Basic utilities", "Community support"],
        },
        {
          tier: "Pro",
          price: "$34/mo",
          features: ["Full toolset", "Deployment helpers", "Email support"],
        },
        {
          tier: "Enterprise",
          price: "Custom",
          features: [
            "Dedicated infrastructure",
            "Custom integrations",
            "Priority support",
          ],
        },
      ],
    },
    {
      name: "Neuctra Lyfesync",
      logo: "/logos/lyfesync.png",
      desc: "Personal productivity & life management platform with habit tracking and task management.",
      pricing: [
        {
          tier: "Starter",
          price: "$0/mo",
          features: [
            "Basic task tracking",
            "Habit tracking",
            "Community support",
          ],
        },
        {
          tier: "Pro",
          price: "$19/mo",
          features: [
            "Advanced analytics",
            "Sync across devices",
            "Email support",
          ],
        },
        {
          tier: "Enterprise",
          price: "Custom",
          features: ["Custom workflows", "Team management", "Priority support"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Banner */}
      <div className="border-b border-zinc-800 bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <DollarSign className="text-primary w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />

            <span>
              Neuctra <span className="text-primary">Pricing</span>
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Product-specific pricing plans designed for startups, teams, and
            enterprises. Compare features and choose the best plan for each
            Neuctra product.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {products.map((product, idx) => (
          <section key={idx}>
            {/* Product Header with Logo */}
            <div className="flex items-center mb-4 gap-4">
              {product.logo && (
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  className="w-10 h-10 object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold">{product.name}</h2>
            </div>
            <p className="text-zinc-400 mb-6">{product.desc}</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111] border-b border-zinc-800">
                    <th className="px-6 py-3">Plan</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Features</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {product.pricing.map((tier, i) => (
                    <tr
                      key={i}
                      className="border-b border-zinc-800 hover:bg-zinc-900 transition-all"
                    >
                      <td className="px-6 py-4 font-medium">{tier.tier}</td>
                      <td className="px-6 py-4">{tier.price}</td>
                      <td className="px-6 py-4 space-y-1">
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <Check size={16} className="text-primary" />
                            <span className="text-zinc-400 text-sm">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={
                            tier.tier === "Enterprise" ? "/contact" : "/signup"
                          }
                          className="px-4 py-2 bg-primary rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_#00ff88]/40 transition-all inline-block"
                        >
                          {tier.tier === "Enterprise"
                            ? "Contact Sales"
                            : "Get Started"}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Notes */}
        <section>
          <p className="text-zinc-500 text-sm text-center mt-6">
            Payments are securely processed via Paddle. Subscriptions
            automatically renew unless canceled.
          </p>
        </section>
      </div>
    </div>
  );
}
