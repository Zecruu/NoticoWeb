import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const supportEmail = "nomnk5138@gmail.com";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Notico Max for iOS and web.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
      <div className="mb-12 max-w-2xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Support
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Notico Max support</h1>
        <p className="text-lg text-muted-foreground">
          Need help with your notes, account, sync, reminders, or App Store
          purchase? Contact support and include the device, app version, and a
          short description of the issue.
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href={`mailto:${supportEmail}`}>
            <Mail className="h-4 w-4" />
            Email Support
          </a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="space-y-3 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h2 className="font-semibold">Contact</h2>
            <p className="text-sm text-muted-foreground">
              Send support requests to{" "}
              <a className="underline underline-offset-4" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="font-semibold">Privacy</h2>
            <p className="text-sm text-muted-foreground">
              Review how Notico Max handles account data, saved content, and
              support requests on the privacy page.
            </p>
            <Link
              href="/privacy"
              className="inline-flex text-sm font-medium underline underline-offset-4"
            >
              View Privacy Policy
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="font-semibold">Response</h2>
            <p className="text-sm text-muted-foreground">
              Support is handled by email. Most requests are reviewed as soon as
              possible in the order they are received.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-16 max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold">Common help topics</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            For account or sync issues, include the email address on your
            Notico Max account and whether the issue happens on iPhone, iPad, or
            web.
          </p>
          <p>
            For billing or subscription questions, include the plan name and the
            purchase platform. Do not send full payment card details by email.
          </p>
          <p>
            For bug reports, include what you expected to happen, what happened
            instead, and any steps that reproduce the issue.
          </p>
        </div>
      </section>
    </div>
  );
}
