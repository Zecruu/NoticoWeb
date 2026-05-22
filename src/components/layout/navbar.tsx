"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="NoticoMax" width={28} height={28} className="rounded-lg" />
          <span className="text-base font-semibold tracking-tight">NoticoMax</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#platforms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Platforms
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Download
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:flex">
            <a href="https://app.noticomax.com/api/download/win">
              <Download className="mr-1.5 h-4 w-4" />
              Get the app
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
