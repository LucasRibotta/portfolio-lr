import { ArrowUpIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/content/types";

type FooterProps = {
  content: Dictionary["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs tracking-wide text-faint">
          © {new Date().getFullYear()} {content.rights}
        </p>

        <a
          href="#home"
          className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
        >
          {content.backToTop}
          <ArrowUpIcon className="size-4 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </a>
      </div>
    </footer>
  );
}
