"use client";

import { useEffect, useState } from "react";
import { CheckIcon, MailIcon } from "./Icons";

type EmailLinkProps = {
  email: string;
  label: string;
  copiedLabel: string;
  className?: string;
  iconClassName?: string;
};

export function EmailLink({
  email,
  label,
  copiedLabel,
  className,
  iconClassName,
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <a
      href={`mailto:${email}`}
      onClick={() => {
        navigator.clipboard?.writeText(email).then(
          () => setCopied(true),
          () => setCopied(false),
        );
      }}
      className={className}
    >
      {copied ? (
        <CheckIcon className={iconClassName} />
      ) : (
        <MailIcon className={iconClassName} />
      )}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </a>
  );
}
