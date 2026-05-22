import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  StickyNote,
  Bookmark,
  Bell,
  CalendarDays,
  MapPin,
  KeyRound,
  GraduationCap,
  Wallet,
  Target,
  Users,
  FolderOpen,
  Terminal,
  Share2,
  WifiOff,
  ShieldCheck,
  Fingerprint,
  RefreshCw,
  ArrowRight,
  Check,
  Apple,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";

const platforms = [
  { name: "Windows", icon: Monitor },
  { name: "macOS", icon: Apple },
  { name: "iOS", icon: Smartphone },
  { name: "Web", icon: Globe },
];

const captureFeatures = [
  { icon: StickyNote, title: "Notes", body: "Rich text, color-coded, pinnable, tagged, foldered. Markdown when you want it, WYSIWYG when you don't." },
  { icon: Bookmark, title: "Bookmarks", body: "Save links from anywhere — the share sheet on your phone, the PWA on the web, or paste straight in." },
  { icon: Bell, title: "Reminders", body: "Daily, weekly, monthly, yearly recurring rules. Push notifications on mobile, system notifications on desktop." },
  { icon: CalendarDays, title: "Calendar view", body: "See and create reminders on a month grid. Import your Apple or Google calendar via .ics." },
  { icon: MapPin, title: "Locations", body: "Save spots with GPS + address. Opens in Apple Maps on iOS, your default map app everywhere else.", beta: true },
  { icon: KeyRound, title: "Passwords & env vars", body: "Local-only by default. Optional encrypted sync. Dev-friendly: store API keys without leaving your notes app." },
  { icon: GraduationCap, title: "Study flashcards", body: "Term/definition pairs with a real quiz mode. Built so you actually study, not just collect cards." },
];

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/8%),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="NoticoMax" width={56} height={56} className="rounded-2xl" />
              <span className="text-2xl font-semibold tracking-tight">NoticoMax</span>
            </div>

            <div className="space-y-5 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                One app for notes, money,
                <br className="hidden sm:block" /> and{" "}
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  life admin.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Notes, bookmarks, reminders, locations, a household budget, and shared
                family folders. Fully offline. Synced across <strong className="text-foreground">Windows, macOS, iOS, and the web</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 h-11 px-6">
                <a href="https://app.noticomax.com/api/download/win">
                  <Download className="h-4 w-4" />
                  Download for Windows
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 h-11 px-6">
                <a href="https://app.noticomax.com/api/download/mac">
                  <Apple className="h-4 w-4" />
                  Download for macOS
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2 h-11">
                <Link href="/download">
                  All platforms
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Free plan, no credit card. Auto-updates silently.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS STRIP */}
      <section id="platforms" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="text-center space-y-2 mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">One account · all your devices</p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Desktop, phone, and browser. Same account, same data.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-2 rounded-xl border bg-card px-4 py-5 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <p.icon className="h-6 w-6 text-muted-foreground" />
                <span className="text-xs font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES: CAPTURE */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-4">
          <Badge variant="secondary" className="rounded-full">Capture & organize</Badge>
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              Everything you'd otherwise scatter across seven apps.
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Notes, links, reminders, a calendar, locations, passwords, flashcards.
              One inbox, one search bar, one keyboard shortcut.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {captureFeatures.map((f) => (
            <Card key={f.title} className="hover:border-primary/40 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-4 w-4" />
                  </div>
                  {f.beta && <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Beta</Badge>}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MONEY & GOALS */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full">Money & goals</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              A budget that doesn't make you open a separate app.
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Categories, monthly limits, transactions. Per-month limit overrides for
              the months that aren't normal. Scroll into future months and plan ahead.
              See an all-time summary or last month at a glance.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Monthly categories with limits and rollover history</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Per-month overrides — bump groceries for December, leave the rest</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> All-time + monthly summaries side by side</li>
              <li className="flex gap-2"><Target className="h-4 w-4 text-foreground shrink-0 mt-0.5" /> Goals scoped to today, this month, or this year</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SHARING / HOUSEHOLDS */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full">Households</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              Share folders with your family. Not your data with strangers.
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Create a household, share a join code — no email required. Then share
              any folder with everyone, or only the people who need it. Notes,
              reminders, URLs, passwords, locations, and the budget all turn into
              household-scoped content with one toggle.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2"><Users className="h-4 w-4 text-foreground shrink-0 mt-0.5" /> Up to 5 seats included on Family Plan — extras at $1/mo each</li>
              <li className="flex gap-2"><FolderOpen className="h-4 w-4 text-foreground shrink-0 mt-0.5" /> Per-folder, per-member permissions (everyone or select)</li>
              <li className="flex gap-2"><Wallet className="h-4 w-4 text-foreground shrink-0 mt-0.5" /> Shared family budget — roommates and partners both update it</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Existing data stays yours — just attach a household to share it</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full">Developer & power-user</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              The only notes app that syncs your Claude Code skills.
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Back up your <code className="font-mono text-foreground bg-background px-1.5 py-0.5 rounded">/skills</code> and{" "}
              <code className="font-mono text-foreground bg-background px-1.5 py-0.5 rounded">/prompts</code> to the cloud and pull them onto a new
              machine with one command. Plus a PWA share target and an env-var vault
              that doesn't pretend developers aren't users.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="outline" className="gap-1.5 py-1.5 px-3"><Terminal className="h-3.5 w-3.5" /> Claude Code + Codex CLI</Badge>
              <Badge variant="outline" className="gap-1.5 py-1.5 px-3"><Share2 className="h-3.5 w-3.5" /> PWA share target</Badge>
              <Badge variant="outline" className="gap-1.5 py-1.5 px-3"><KeyRound className="h-3.5 w-3.5" /> Env-var vault</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY BAR */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="secondary" className="rounded-full">Quality bar</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              Built like you'll trust it with the only copy.
            </h2>
            <p className="text-muted-foreground md:text-lg">
              The boring engineering work most apps skip.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <QualityCard
              icon={WifiOff}
              title="Genuinely offline"
              body="IndexedDB-first locally. Last-write-wins sync when online. No spinner of doom in airplane mode."
            />
            <QualityCard
              icon={ShieldCheck}
              title="Zero-secret desktop binary"
              body="The installer ships nothing sensitive. The app fetches from app.noticomax.com. Reverse-engineering the .exe gets you nothing."
            />
            <QualityCard
              icon={Fingerprint}
              title="Biometric lock"
              body="Face ID and Touch ID on iOS. Apple Sign-in everywhere."
            />
            <QualityCard
              icon={RefreshCw}
              title="Silent auto-updates"
              body="New version on every release. The desktop app updates itself the next time you open it."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <Pricing />

      {/* FINAL CTA */}
      <section className="border-t py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
            Stop tab-juggling. Start <span className="text-muted-foreground line-through">organizing</span> living.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Free plan covers everything local. Upgrade when you want it on more than one device.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 h-11 px-6">
              <a href="https://app.noticomax.com/api/download/win">
                <Download className="h-4 w-4" /> Download for Windows
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 h-11 px-6">
              <a href="https://app.noticomax.com/api/download/mac">
                <Apple className="h-4 w-4" /> Download for macOS
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            iOS and the web app on the <Link href="/download" className="underline underline-offset-2">downloads page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

function QualityCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <Card className="hover:border-primary/40 hover:shadow-md transition-all">
      <CardContent className="p-5 space-y-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </CardContent>
    </Card>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="rounded-full">Pricing</Badge>
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
            Free forever. Pro from <span className="text-foreground">$0.99/mo</span>.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Start local. Add cloud sync when you want it on more than one device.
            Add a household when one user isn't enough.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 max-w-5xl mx-auto">
          {/* FREE */}
          <Card className="hover:border-primary/40 hover:shadow-md transition-all">
            <CardContent className="p-7 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-sm text-muted-foreground">Everything, just local.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <a href="https://app.noticomax.com/api/download/win">Download free</a>
              </Button>
              <ul className="space-y-2.5 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Every feature, on a single device</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> 100 MB local storage</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Fully offline — never blocks you</li>
                <li className="flex gap-2 text-muted-foreground"><span className="h-4 w-4 shrink-0 mt-0.5 text-center">·</span> Ads on mobile only — none on desktop or web</li>
                <li className="flex gap-2 text-muted-foreground"><span className="h-4 w-4 shrink-0 mt-0.5 text-center">·</span> No cloud sync</li>
              </ul>
            </CardContent>
          </Card>

          {/* PRO */}
          <Card className="hover:border-primary/40 hover:shadow-md transition-all">
            <CardContent className="p-7 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-sm text-muted-foreground">Sync everywhere. No ads.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button asChild className="w-full">
                <a href="https://app.noticomax.com/api/download/win">Get Pro</a>
              </Button>
              <ul className="space-y-2.5 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Cloud sync across Windows, macOS, iOS, and web</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> No ads, anywhere</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Sharing + API access</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Claude Code + Codex CLI skill sync</li>
              </ul>
              <div className="border-t pt-4 space-y-2 text-sm">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Storage</p>
                <div className="flex justify-between"><span>5 GB</span><span className="font-medium">$0.99/mo</span></div>
                <div className="flex justify-between"><span>50 GB</span><span className="font-medium">$2.99/mo</span></div>
                <div className="flex justify-between"><span>200 GB</span><span className="font-medium">$5.99/mo</span></div>
              </div>
            </CardContent>
          </Card>

          {/* FAMILY — anchored */}
          <Card className="border-primary shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="px-3">Most popular</Badge>
            </div>
            <CardContent className="p-7 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Family</h3>
                <p className="text-sm text-muted-foreground">Up to 5 people, shared everything.</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button asChild className="w-full">
                <a href="https://app.noticomax.com/api/download/win">Start Family Plan</a>
              </Button>
              <ul className="space-y-2.5 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Everything in Pro, for up to 5 people</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Household + per-folder sharing</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Shared budget, locations, folders</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> Extra seats: <strong>$1/mo each</strong></li>
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

        <p className="text-center text-xs text-muted-foreground mt-8">
          Have a legacy Lifetime Pro key? It still works — sign in and paste it under Settings → License.
        </p>
      </div>
    </section>
  );
}
