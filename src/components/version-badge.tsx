"use client";

import { useEffect, useState } from "react";

export function VersionBadge({ os }: { os: "win" | "mac" }) {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://app.noticomax.com/api/download/${os}?format=json`)
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d?.version) setVersion(d.version);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [os]);

  return (
    <span className="text-[10px] font-mono text-muted-foreground tabular-nums">
      {version ? `v${version.replace(/^v/, "")}` : "latest"}
    </span>
  );
}
