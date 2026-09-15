import { ExternalLinkIcon } from "@/components/ui/Icons";
import { storeLabels, type StoreId, type StoreLinks as Links } from "@/content/stores";

type StoreLinksProps = {
  appName: string;
  stores: Links;
  className?: string;
};

export function StoreLinks({ appName, stores, className }: StoreLinksProps) {
  const entries = (Object.keys(storeLabels) as StoreId[]).flatMap((id) => {
    const href = stores[id];
    return href ? [{ id, href }] : [];
  });

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {entries.map(({ id, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${appName} — ${storeLabels[id]}`}
            className="group inline-flex min-h-9 items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-control hover:text-fg"
          >
            {storeLabels[id]}
            <ExternalLinkIcon className="size-3.5 text-faint transition-colors duration-200 group-hover:text-accent" />
          </a>
        </li>
      ))}
    </ul>
  );
}
