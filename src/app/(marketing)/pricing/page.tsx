import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "NoticoMax pricing. Free for local use, Pro from $0.99/mo for cloud sync, Family from $5/mo for up to 5 people.",
};

const compare = [
  { name: "Notes, bookmarks, reminders, calendar, locations, passwords, flashcards", free: true, pro: true, family: true },
  { name: "Household budget + goals", free: true, pro: true, family: true },
  { name: "Fully offline (IndexedDB)", free: true, pro: true, family: true },
  { name: "100 MB local storage", free: true, pro: true, family: true },
  { name: "Apple Sign-in + biometric lock", free: true, pro: true, family: true },
  { name: "Mobile ads removed", free: false, pro: true, family: true },
  { name: "Cloud sync across all 6 platforms", free: false, pro: true, family: true },
  { name: "Web app access", free: false, pro: true, family: true },
  { name: "Browser extension + PWA share target", free: false, pro: true, family: true },
  { name: "Claude Code + Codex CLI skill sync", free: false, pro: true, family: true },
  { name: "Public sharing (notes, quizzes)", free: false, pro: true, family: true },
  { name: "API access", free: false, pro: true, family: true },
  { name: "Households + join codes", free: false, pro: false, family: true },
  { name: "Per-folder sharing with member-level perms", free: false, pro: false, family: true },
  { name: "Shared family budget + locations", free: false, pro: false, family: true },
  { name: "Up to 5 seats (+$1/mo per extra)", free: false, pro: false, family: true },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center space-y-4 mb-14">
        <Badge variant="secondary" className="rounded-full">Pricing</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Free forever. Upgrade when it's worth it.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything works locally on the Free plan. Pay only when you want cloud sync,
          household sharing, or more storage.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 max-w-5xl mx-auto mb-20">
        {/* FREE */}
        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-7 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Free</h2>
              <p className="text-sm text-muted-foreground">Local-only, all features.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Button asChild variant="outline" className="w-full" size="lg">
              <a href="https://app.noticomax.com/api/download/win">Download free</a>
            </Button>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Every feature, single device</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> 100 MB local storage</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Mobile ads (none on desktop / web)</li>
              <li className="flex gap-2 text-muted-foreground"><X className="h-4 w-4 shrink-0 mt-0.5" /> No cloud sync</li>
            </ul>
          </CardContent>
        </Card>

        {/* PRO */}
        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-7 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Pro</h2>
              <p className="text-sm text-muted-foreground">Sync + no ads.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$0.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Button asChild className="w-full" size="lg">
              <a href="https://app.noticomax.com/api/download/win">Get Pro</a>
            </Button>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Cloud sync across 6 platforms</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> No ads, anywhere</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Sharing, API, browser extension</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Claude Code skill sync</li>
            </ul>
            <div className="border-t pt-4 space-y-2 text-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Storage tiers</p>
              <div className="flex justify-between"><span>5 GB</span><span className="font-medium">$0.99/mo</span></div>
              <div className="flex justify-between"><span>50 GB</span><span className="font-medium">$2.99/mo</span></div>
              <div className="flex justify-between"><span>200 GB</span><span className="font-medium">$5.99/mo</span></div>
            </div>
          </CardContent>
        </Card>

        {/* FAMILY */}
        <Card className="border-primary shadow-md relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="px-3">Most popular</Badge>
          </div>
          <CardContent className="p-7 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Family</h2>
              <p className="text-sm text-muted-foreground">5 people, shared everything.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$5</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Button asChild className="w-full" size="lg">
              <a href="https://app.noticomax.com/api/download/win">Start Family Plan</a>
            </Button>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Everything in Pro, ×5 people</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Households + join codes</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Per-folder permissions</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Shared budget, locations, folders</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Extra seats: <strong>$1/mo</strong></li>
            </ul>
            <div className="border-t pt-4 space-y-2 text-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Family storage</p>
              <div className="flex justify-between"><span>20 GB</span><span className="font-medium">$2.99/mo</span></div>
              <div className="flex justify-between"><span>100 GB</span><span className="font-medium">$4.99/mo</span></div>
              <div className="flex justify-between"><span>500 GB</span><span className="font-medium">$14.99/mo</span></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Feature comparison</h2>
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-center p-4 font-medium w-24">Free</th>
                <th className="text-center p-4 font-medium w-24">Pro</th>
                <th className="text-center p-4 font-medium w-24">Family</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.name} className="border-t hover:bg-muted/30 transition-colors">
                  <td className="p-4">{row.name}</td>
                  <td className="p-4 text-center">{row.free ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}</td>
                  <td className="p-4 text-center">{row.pro ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}</td>
                  <td className="p-4 text-center">{row.family ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Legacy Lifetime Pro keys (NMAX-XXXX-XXXX-XXXX) still work — paste them under Settings → License after signing in.
        </p>
      </div>
    </div>
  );
}
