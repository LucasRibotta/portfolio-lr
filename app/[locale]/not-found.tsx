import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Backdrop } from "@/components/layout/Backdrop";
import { defaultLocale } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Backdrop />
      <main
        id="main"
        className="flex min-h-[100svh] items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
            404
          </p>
          <h1 className="mt-5 text-3xl font-medium tracking-tight text-fg sm:text-4xl">
            This page does not exist.
          </h1>
          <Link
            href={`/${defaultLocale}`}
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-control px-6 text-sm font-medium text-fg transition-colors duration-200 hover:border-muted hover:bg-surface"
          >
            Back to home
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </main>
    </>
  );
}
