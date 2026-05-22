import Link from "next/link";
import Image from "next/image";
import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 space-y-3 sm:col-span-1">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="NoticoMax" width={24} height={24} className="rounded-lg" />
              <span className="font-semibold">NoticoMax</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              One app for notes, money, and life admin. Six platforms, fully offline, one account.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <div className="flex flex-col gap-2">
              <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</Link>
              <a href="https://app.noticomax.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Open web app</a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/Zecruu/NoticoMax" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a href="mailto:support@noticomax.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> Contact
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} NoticoMax. All rights reserved.</span>
          <span>Built for people who keep too many tabs open.</span>
        </div>
      </div>
    </footer>
  );
}
