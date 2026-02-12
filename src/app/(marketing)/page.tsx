import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  StickyNote,
  Globe,
  Bell,
  GraduationCap,
  Cloud,
  Share2,
  Check,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: StickyNote,
    title: "Smart Notes",
    description:
      "Create rich notes with markdown support, code blocks, and full-text search across all your content.",
  },
  {
    icon: Globe,
    title: "URL Bookmarks",
    description:
      "Save, organize, and tag your favorite URLs. Never lose an important link again.",
  },
  {
    icon: Bell,
    title: "Reminders",
    description:
      "Set time-based reminders with recurring options to stay on top of your tasks.",
  },
  {
    icon: GraduationCap,
    title: "Study Tools",
    description:
      "Create flashcards and quizzes to boost your learning with active recall techniques.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Seamlessly sync your data across devices with automatic cloud backups.",
  },
  {
    icon: Share2,
    title: "Share & Collaborate",
    description:
      "Share notes and quizzes with public links. Collaborate without friction.",
  },
];

const freeFeatures = [
  "Unlimited notes, URLs & reminders",
  "Offline access",
  "Folders & organization",
  "Full-text search",
  "Dark mode",
  "Markdown support",
];

const proFeatures = [
  "Everything in Free",
  "Cloud sync across devices",
  "Automatic backups",
  "Shared notes & quizzes",
  "API access",
  "Priority support",
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <Image
              src="/logo.png"
              alt="Notico Max"
              width={80}
              height={80}
              className="rounded-2xl"
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                NOTICO MAX
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                Your smart productivity hub for notes, study tools, and seamless sync.
                Everything you need to organize your life — in one powerful desktop app.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="https://github.com/Zecruu/NoticoMax/releases/download/v1.0.13/Notico-Max-Setup-1.0.13.exe">
                  <Download className="h-5 w-5" />
                  Download for Windows
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From quick notes to deep study sessions, Notico Max has the tools to keep you
              organized and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-t py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Simple pricing</h2>
            <p className="text-muted-foreground">Start free. Upgrade when you need cloud features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <Card className="hover:border-primary/40 hover:shadow-md transition-all">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/download">Download Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-primary hover:shadow-md transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$5</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/download">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See full feature comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Download Notico Max for free and start organizing your notes, bookmarks, and reminders today.
          </p>
          <Button asChild size="lg" className="gap-2">
            <a href="https://github.com/Zecruu/NoticoMax/releases/download/v1.0.13/Notico-Max-Setup-1.0.13.exe">
              <Download className="h-5 w-5" />
              Download for Windows
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Windows 10+ required. macOS and Linux coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
