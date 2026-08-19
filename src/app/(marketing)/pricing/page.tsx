import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { SubscriptionPlanCards } from "@/components/subscription-plans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare NoticoMax Free, Plus, Platinum, and MAXXED plans for Lyte assistance and online sync.",
};

const compare = [
  { name: "Monthly price", free: "$0", plus: "$5.99", platinum: "$9.99", maxxed: "$34.99" },
  { name: "Lyte chats per month", free: "—", plus: "1,000", platinum: "2,000", maxxed: "10,000" },
  { name: "Live web lookups per month", free: "—", plus: "25", platinum: "50", maxxed: "250" },
  { name: "Online sync", free: "—", plus: "Included", platinum: "Included", maxxed: "Included" },
  { name: "Local-first productivity tools", free: "Included", plus: "Included", platinum: "Included", maxxed: "Included" },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center space-y-4 mb-14">
        <Badge variant="secondary" className="rounded-full">Pricing</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Choose how much help you want from Lyte.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start with local tools for free. Paid plans add online sync and a monthly
          allowance for Lyte chats and live web research.
        </p>
      </div>

      <div className="mb-20">
        <SubscriptionPlanCards />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Feature comparison</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-center p-4 font-medium w-24">Free</th>
                <th className="text-center p-4 font-medium w-28">Plus</th>
                <th className="text-center p-4 font-medium w-28">Platinum</th>
                <th className="text-center p-4 font-medium w-28">MAXXED</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.name} className="border-t hover:bg-muted/30 transition-colors">
                  <td className="p-4">{row.name}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.free}</td>
                  <td className="p-4 text-center">{row.plus}</td>
                  <td className="p-4 text-center">{row.platinum}</td>
                  <td className="p-4 text-center">{row.maxxed}</td>
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
