"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Notico Max" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-bold">NOTICO MAX</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Download
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:flex">
            <Link href="/download">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
