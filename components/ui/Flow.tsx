import { Fragment } from "react";

type FlowNode = {
  title: string;
  detail: string;
};

type FlowProps = {
  label: string;
  caption?: string;
  nodes: readonly FlowNode[];
  bidirectional?: boolean;
};

function Connector({ bidirectional }: { bidirectional?: boolean }) {
  return (
    <li
      aria-hidden="true"
      className="flex items-center justify-center py-2"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4 rotate-90 text-line-strong"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h16" />
        <path d="M15.5 7.5 20 12l-4.5 4.5" />
        {bidirectional ? <path d="M8.5 16.5 4 12l4.5-4.5" /> : null}
      </svg>
    </li>
  );
}

export function Flow({ label, caption, nodes, bidirectional }: FlowProps) {
  const List = bidirectional ? "ul" : "ol";

  return (
    <figure className="m-0">
      <figcaption className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
        {label}
      </figcaption>

      <List className="mt-5 flex flex-col">
        {nodes.map((node, index) => (
          <Fragment key={node.title}>
            {index > 0 ? <Connector bidirectional={bidirectional} /> : null}
            <li className="rounded-lg border border-line bg-surface/50 px-4 py-3.5">
              <p className="text-sm font-medium text-fg">{node.title}</p>
              <p className="mt-1 font-mono text-[0.7rem] leading-relaxed text-faint">
                {node.detail}
              </p>
            </li>
          </Fragment>
        ))}
      </List>

      {caption ? (
        <p className="mt-5 max-w-md text-sm leading-relaxed text-faint">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}
