import type { Metadata } from "next";

const supportEmail = "nomnk5138@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Notico Max.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Account information, such as your name and email address, when you create an account or contact support.",
      "Content you choose to save in Notico Max, such as notes, URLs, reminders, folders, tags, and shared note data.",
      "Technical information needed to operate the service, such as app version, device or browser information, error logs, and timestamps.",
      "Payment or subscription status information from the App Store or payment provider. Notico Max does not store full payment card numbers.",
      "Lyte prompts, relevant conversation context, and profile preferences you choose to provide when you use the assistant.",
      "Usage information such as Lyte chat and live lookup counts needed to enforce plan allowances and prevent abuse.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "To provide Notico Max features, including saving notes, syncing data, reminders, search, and sharing.",
      "To authenticate accounts, protect the service, troubleshoot bugs, and respond to support requests.",
      "To manage subscriptions, plan access, and service communications related to your account.",
      "To provide Lyte responses, live web research, requested actions, and personalized suggestions based on preferences you save.",
      "To improve reliability, performance, and user experience.",
    ],
  },
  {
    title: "Sharing Information",
    body: [
      "We do not sell your personal information.",
      "We may share information with service providers that help operate Notico Max, such as hosting, database, analytics, support, app distribution, and payment services.",
      "When you use Lyte, the prompt and limited context needed to answer it may be processed by AI, search, or mapping providers. Notico Max does not intentionally add password-vault entries or payment card details to Lyte context.",
      "We may disclose information if required by law, to protect users, or to prevent fraud or abuse.",
      "If you create a public share link, the content included in that share link may be accessible to people who have the link.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep account and app data for as long as needed to provide the service, comply with legal obligations, resolve disputes, and enforce agreements.",
      "Deleted content may remain in backups or logs for a limited period before removal.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can request access, correction, export, or deletion of your account data by contacting support.",
      "You can stop using cloud features or delete locally stored app content from your device at any time.",
      "You can manage App Store subscriptions through your Apple account settings.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Notico Max is not intended for children under 13. If you believe a child provided personal information, contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organizational safeguards to protect personal information. No internet service can guarantee complete security.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy from time to time. The latest version will be posted on this page with the updated effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
      <div className="mb-12 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Privacy Policy
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Notico Max Privacy Policy</h1>
        <p className="text-muted-foreground">Effective date: August 19, 2026</p>
        <p className="text-lg text-muted-foreground">
          This Privacy Policy explains how Notico Max collects, uses, and
          protects information when you use the Notico Max app, website, and
          related services.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <ul className="space-y-3 text-muted-foreground">
              {section.body.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="space-y-4 border-t pt-10">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-muted-foreground">
            For privacy questions or requests, contact Notico Max at{" "}
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
