import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Private, local-first organization.",
    features: [
      "Notes, URLs, reminders, budget, and more",
      "Local storage on one device",
      "Works offline",
    ],
    cta: "Download free",
    href: "https://app.noticomax.com/api/download/win",
  },
  {
    name: "NoticoMax Plus",
    price: "$5.99",
    description: "Everyday help from Lyte, with sync.",
    features: [
      "1,000 Lyte chats each month",
      "25 live web lookups each month",
      "Online sync across devices",
    ],
    cta: "Choose Plus",
    href: "https://app.noticomax.com/settings",
  },
  {
    name: "NoticoMax Platinum",
    price: "$9.99",
    description: "More room for daily planning.",
    features: [
      "2,000 Lyte chats each month",
      "50 live web lookups each month",
      "Online sync across devices",
    ],
    cta: "Choose Platinum",
    href: "https://app.noticomax.com/settings",
    badge: "Most popular",
  },
  {
    name: "NoticoMax MAXXED",
    price: "$34.99",
    description: "High-volume access for frequent users.",
    features: [
      "10,000 Lyte chats each month",
      "250 live web lookups each month",
      "Online sync across devices",
    ],
    cta: "Choose MAXXED",
    href: "https://app.noticomax.com/settings",
    badge: "Highest usage",
  },
] as const;

export function SubscriptionPlanCards() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.name === "NoticoMax Platinum" ? "border-primary" : undefined}
          >
            <CardContent className="flex h-full flex-col gap-5 p-6">
              <div className="min-h-24 space-y-2">
                <div className="flex min-h-6 items-center justify-between gap-2">
                  <h3 className="font-semibold">{plan.name}</h3>
                  {"badge" in plan ? <Badge>{plan.badge}</Badge> : null}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>

              <ul className="flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={plan.name === "Free" ? "outline" : "default"}
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-7 space-y-2 text-center text-xs text-muted-foreground">
        <p>
          Prices shown in USD. Your App Store displays the localized price before purchase.
          Lyte usage resets monthly and does not roll over.
        </p>
        <p>
          By subscribing, you agree to the{" "}
          <Link href="/terms" className="underline underline-offset-4">
            Terms of Use
          </Link>{" "}
          and acknowledge the{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
