export const metadata = {
  title: "Privacy Policy | Neuctra",
  description: "Learn how Neuctra protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-zinc-400">Last Updated: 2026</p>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
          <ul className="text-zinc-400 mt-2 space-y-2">
            <li>• Name & Email</li>
            <li>• Payment details (processed by Paddle)</li>
            <li>• Usage & analytics data</li>
            <li>• Device information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">How We Use Data</h2>
          <p className="text-zinc-400 mt-2">
            We use data to provide services, process payments, improve
            security, and communicate updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Security</h2>
          <p className="text-zinc-400 mt-2">
            We implement encryption and modern security practices to protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8">Your Rights</h2>
          <p className="text-zinc-400 mt-2">
            You may request access, modification, or deletion of your data at any time.
            Contact: support@neuctra.com
          </p>
        </section>
      </div>
    </div>
  );
}
