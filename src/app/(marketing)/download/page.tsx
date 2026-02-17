import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, HardDrive, Cpu, Apple, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Notico Max for Windows. Your smart productivity hub.",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Download NOTICO MAX</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Get started in seconds. Install the app and start organizing your productivity.
        </p>
      </div>

      {/* Download Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
        {/* Windows */}
        <Card className="border-primary hover:shadow-md transition-all">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <Monitor className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Windows</h3>
              <p className="text-xs text-muted-foreground">Windows 10+</p>
            </div>
            <Button asChild className="w-full gap-2">
              <a href="https://github.com/Zecruu/NoticoMax/releases/download/v1.0.21/Notico-Max-Setup-1.0.21.exe">
                <Download className="h-4 w-4" />
                Download .exe
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* macOS */}
        <Card className="opacity-60">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <Apple className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">macOS</h3>
              <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
            </div>
            <Button disabled variant="outline" className="w-full">
              Not Available Yet
            </Button>
          </CardContent>
        </Card>

        {/* Linux */}
        <Card className="opacity-60">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
              <Terminal className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Linux</h3>
              <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
            </div>
            <Button disabled variant="outline" className="w-full">
              Not Available Yet
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Requirements */}
      <div className="max-w-xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Monitor className="h-4 w-4 text-muted-foreground shrink-0" />
                <span><strong>OS:</strong> Windows 10 or later (64-bit)</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu className="h-4 w-4 text-muted-foreground shrink-0" />
                <span><strong>Processor:</strong> 1 GHz or faster</span>
              </div>
              <div className="flex items-center gap-3">
                <HardDrive className="h-4 w-4 text-muted-foreground shrink-0" />
                <span><strong>Storage:</strong> 200 MB available space</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu className="h-4 w-4 text-muted-foreground shrink-0" />
                <span><strong>RAM:</strong> 4 GB minimum</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Installation Steps */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How to install</h2>
        <div className="space-y-4">
          {[
            { step: 1, text: "Download the installer by clicking the download button above" },
            { step: 2, text: "Run the .exe file and follow the installation wizard" },
            { step: 3, text: "Launch NOTICO MAX and create your free account" },
            { step: 4, text: "Start organizing your notes, bookmarks, and reminders" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {item.step}
              </div>
              <p className="text-sm pt-1.5">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
