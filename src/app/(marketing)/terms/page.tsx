import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "nomnk5138@gmail.com";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of NoticoMax, Lyte, sync, and subscriptions.",
};

const sections = [
  {
    title: "Using NoticoMax",
    body: [
      "You must be at least 13 years old, or the minimum age required in your country, to use NoticoMax. You are responsible for complying with laws that apply to your use of the service.",
      "You are responsible for your account credentials, devices, and activity performed through your account. Contact support promptly if you believe your account has been compromised.",
    ],
  },
  {
    title: "Your Content",
    body: [
      "You retain ownership of notes, reminders, URLs, files, preferences, and other content you create. You grant NoticoMax the limited permission needed to store, process, sync, and display that content to provide features you request.",
      "You are responsible for maintaining appropriate backups. Local-only content may be lost if a device, browser profile, or app installation is erased.",
    ],
  },
  {
    title: "Lyte and AI-Generated Information",
    body: [
      "Lyte uses third-party artificial intelligence and, when requested, search services to respond to prompts and perform supported actions. AI output can be incomplete, outdated, or incorrect.",
      "Do not rely on Lyte as a substitute for professional medical, legal, financial, safety, or emergency advice. Review important dates, reminders, links, and actions before relying on them.",
      "You may not use Lyte to violate law, infringe rights, distribute malware, evade service limits, or generate abusive or dangerous content.",
    ],
  },
  {
    title: "Subscriptions and Usage Limits",
    body: [
      "NoticoMax Plus, Platinum, and MAXXED are monthly auto-renewable subscriptions. The price and billing currency shown by Apple at confirmation control your purchase.",
      "Subscriptions renew automatically unless canceled through your Apple account at least 24 hours before the end of the current billing period. NoticoMax does not directly process or store your complete payment card information.",
      "Lyte chat and live lookup allowances reset each billing month, do not roll over, and vary by plan. Usage may be delayed briefly while App Store and subscription status updates are processed.",
      "You can manage or cancel an App Store subscription in your Apple account settings. Refund requests for App Store purchases are handled under Apple's policies.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "Do not access the service through unauthorized automated means, interfere with its operation, attempt to bypass security or usage controls, or use NoticoMax to store or distribute unlawful content.",
      "We may limit or suspend access when reasonably necessary to protect users, the service, or third-party infrastructure from fraud, abuse, or security threats.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "NoticoMax relies on services such as Apple, hosting and database providers, RevenueCat, and AI or search providers. Their services and terms may also apply when you use related features.",
      "Links and recommendations may lead to third-party websites. NoticoMax does not control or endorse all third-party content, availability, pricing, or privacy practices.",
    ],
  },
  {
    title: "Availability and Changes",
    body: [
      "We may improve, add, remove, or modify features and plan limits. We will provide notice when a material change requires it. Temporary interruptions may occur for maintenance, security, or causes outside our control.",
    ],
  },
  {
    title: "Disclaimers and Liability",
    body: [
      "NoticoMax is provided on an as-is and as-available basis to the extent permitted by law. We do not guarantee uninterrupted operation, error-free AI output, or that synced data will always be available.",
      "To the extent permitted by law, NoticoMax is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the service. Rights that cannot legally be waived remain unaffected.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may stop using NoticoMax at any time. We may suspend or terminate access for a material violation of these Terms, fraud, abuse, or a security threat. Subscription cancellation and account deletion are separate actions.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms as NoticoMax evolves. The current version and effective date will remain available on this page. Continuing to use the service after an effective update means you accept the revised Terms where permitted by law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
      <div className="mb-12 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Terms of Use
        </p>
        <h1 className="text-4xl font-bold tracking-tight">NoticoMax Terms of Use</h1>
        <p className="text-muted-foreground">Effective date: August 19, 2026</p>
        <p className="text-lg text-muted-foreground">
          These Terms govern your use of the NoticoMax apps, website, Lyte assistant,
          online sync, and related services.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <div className="space-y-3 text-muted-foreground">
              {section.body.map((item) => (
                <p key={item} className="leading-7">
                  {item}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-4 border-t pt-10">
          <h2 className="text-2xl font-bold">Privacy and Contact</h2>
          <p className="text-muted-foreground">
            Our{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            explains how information is handled. Questions about these Terms can be sent to{" "}
            <a className="underline underline-offset-4" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
