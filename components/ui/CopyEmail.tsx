"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

type CopyEmailProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

export function CopyEmail({ email, copyLabel, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copyLabel}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-control px-4 font-mono text-xs tracking-wide text-muted uppercase transition-colors duration-200 hover:border-muted hover:text-fg"
    >
      {copied ? (
        <CheckIcon className="size-4 text-accent" />
      ) : (
        <CopyIcon className="size-4" />
      )}
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
