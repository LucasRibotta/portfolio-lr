import { ArrowUpIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/content/types";

type FooterProps = {
  content: Dictionary["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-faint">
          {content.credit}
          <span aria-hidden="true" className="mx-2 text-line-strong">
            /
          </span>
          <span className="font-mono">© {new Date().getFullYear()}</span>
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-fg"
        >
          {content.backToTop}
          <ArrowUpIcon className="size-4" />
        </a>
      </div>
    </footer>
  );
}
