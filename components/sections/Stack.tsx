import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { stack } from "@/content/stack";
import type { Dictionary } from "@/content/types";

type StackProps = {
  content: Dictionary["stack"];
};

export function Stack({ content }: StackProps) {
  return (
    <Section
      id="stack"
      index="05"
      eyebrow={content.eyebrow}
      title={content.title}
    >
      <ul className="flex flex-col">
        {stack.map((group) => (
          <li key={group.id}>
            <Reveal>
              <div className="grid gap-4 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <h3 className="font-mono text-xs tracking-[0.16em] text-faint uppercase">
                  {content.groups[group.id]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface/50 px-3.5 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
