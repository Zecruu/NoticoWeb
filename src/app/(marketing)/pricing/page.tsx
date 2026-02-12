import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing for Notico Max. Start free, upgrade to Pro for cloud sync and more.",
};

interface Feature {
  name: string;
  free: boolean;
  pro: boolean;
}

const features: Feature[] = [
  { name: "Unlimited notes, URLs & reminders", free: true, pro: true },
  { name: "Offline access", free: true, pro: true },
  { name: "Folders & organization", free: true, pro: true },
  { name: "Full-text search", free: true, pro: true },
  { name: "Dark & light mode", free: true, pro: true },
  { name: "Markdown support", free: true, pro: true },
  { name: "Tags & pinning", free: true, pro: true },
  { name: "Import / Export", free: true, pro: true },
  { name: "Cloud sync across devices", free: false, pro: true },
  { name: "Automatic backups", free: false, pro: true },
  { name: "Access from any browser", free: false, pro: true },
  { name: "Shared notes & quizzes", free: false, pro: true },
  { name: "API access", free: false, pro: true },
  { name: "Priority support", free: false, pro: true },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Start free with all the core features. Upgrade to Pro when you need cloud sync,
          sharing, and more.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        {/* Free */}
        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Free</h2>
              <p className="text-sm text-muted-foreground">
                Everything you need for personal productivity
              </p>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link href="/download">
                <Download className="mr-2 h-4 w-4" />
                Download Free
              </Link>
            </Button>
            <ul className="space-y-3">
              {features
                .filter((f) => f.free)
                .map((f) => (
                  <li key={f.name} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    {f.name}
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pro */}
        <Card className="border-primary hover:shadow-md transition-all relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge>Recommended</Badge>
          </div>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-sm text-muted-foreground">
                Cloud sync, sharing, and advanced features
              </p>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link href="/download">
                <Download className="mr-2 h-4 w-4" />
                Download & Upgrade
              </Link>
            </Button>
            <ul className="space-y-3">
              {features
                .filter((f) => f.pro)
                .map((f) => (
                  <li key={f.name} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    {f.name}
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Feature comparison</h2>
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-center p-4 font-medium w-24">Free</th>
                <th className="text-center p-4 font-medium w-24">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-t hover:bg-muted/30 transition-colors">
                  <td className="p-4">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.free ? (
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.pro ? (
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
