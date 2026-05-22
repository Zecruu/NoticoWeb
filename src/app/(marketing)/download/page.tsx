import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VersionBadge } from "@/components/version-badge";
import { Download, Monitor, Apple, Smartphone, Globe, Chrome, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download NoticoMax for Windows, macOS, iOS, Android, web, or as a browser extension. Same account, same data, all six.",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center space-y-4 mb-14">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get NoticoMax</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Six ways to install. Same account, same data, all six.
        </p>
      </div>

      {/* Desktop */}
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mb-4">
        <Card className="border-primary/50 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <Monitor className="h-5 w-5" />
              </div>
              <VersionBadge os="win" />
            </div>
            <div>
              <h3 className="font-semibold">Windows</h3>
              <p className="text-xs text-muted-foreground">Windows 10+ · 64-bit installer</p>
            </div>
            <Button asChild className="w-full gap-2">
              <a href="https://app.noticomax.com/api/download/win">
                <Download className="h-4 w-4" />
                Download .exe
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/50 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <Apple className="h-5 w-5" />
              </div>
              <VersionBadge os="mac" />
            </div>
            <div>
              <h3 className="font-semibold">macOS</h3>
              <p className="text-xs text-muted-foreground">Apple Silicon & Intel · signed + notarized</p>
            </div>
            <Button asChild className="w-full gap-2">
              <a href="https://app.noticomax.com/api/download/mac">
                <Download className="h-4 w-4" />
                Download .dmg
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Mobile + Web + Extension */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-16">
        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">iOS</h3>
              <p className="text-xs text-muted-foreground">iPhone & iPad · App Store</p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <a href="https://apps.apple.com/us/app/notico-max/id6762639265">App Store</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Android</h3>
              <p className="text-xs text-muted-foreground">Google Play</p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <a href="https://play.google.com/store/apps/details?id=com.noticomax">Google Play</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Web</h3>
              <p className="text-xs text-muted-foreground">Installable PWA · works offline</p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <a href="https://app.noticomax.com">Open web app</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/40 hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Chrome className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Browser extension</h3>
              <p className="text-xs text-muted-foreground">Chrome & Firefox · clip to app</p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <a href="https://app.noticomax.com/extension">Get extension</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Developer note */}
      <div className="max-w-3xl mx-auto rounded-2xl border bg-muted/30 p-6 mb-16">
        <div className="flex gap-4">
          <Terminal className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">For scripting & CI</h3>
            <p className="text-sm text-muted-foreground">
              The download URLs are stable. They always redirect to the newest installer:
            </p>
            <pre className="text-xs font-mono bg-background border rounded-lg p-3 overflow-x-auto">
              <code>{`# Windows
curl -L https://app.noticomax.com/api/download/win -o NoticoMax-Setup.exe

# macOS
curl -L https://app.noticomax.com/api/download/mac -o NoticoMax.dmg

# Just want the version number?
curl https://app.noticomax.com/api/download/win?format=json`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How to install</h2>
        <div className="space-y-4">
          {[
            "Download the installer for your OS.",
            "Run it — the desktop app is signed (Apple notarized on macOS), so no scary warnings.",
            "Sign in with Apple, Google, or email. Same account works on every platform.",
            "On a second device, install and sign in — your data syncs down automatically (Pro / Family).",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm pt-1.5">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-8">
          The desktop binary ships zero secrets. Auto-updates run silently in the background.
        </p>
      </div>

      <div className="text-center mt-12">
        <Badge variant="outline" className="text-xs">Linux: coming soon — Snap & AppImage</Badge>
      </div>
    </div>
  );
}
