import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Notico Max" width={24} height={24} className="rounded-lg" />
              <span className="font-bold">NOTICO MAX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your smart productivity hub for notes, study tools, and seamless sync.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <div className="flex flex-col gap-2">
              <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Download
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Notico Max. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
