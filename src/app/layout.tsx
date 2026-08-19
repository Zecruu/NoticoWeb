import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noticomax.com"),
  title: {
    default: "NoticoMax — One app for notes, money, and life admin",
    template: "%s | NoticoMax",
  },
  description:
    "Notes, bookmarks, reminders, locations, passwords, a household budget, and Lyte assistance — local-first with optional sync across Windows, macOS, iOS, and web.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://noticomax.com",
    siteName: "NoticoMax",
    title: "NoticoMax — One app for notes, money, and life admin",
    description:
      "Local-first notes, reminders, budgets, and Lyte assistance across Windows, macOS, iOS, and web.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "NoticoMax" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoticoMax — One app for notes, money, and life admin",
    description: "Local-first notes, reminders, budgets, and Lyte assistance across your devices.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
