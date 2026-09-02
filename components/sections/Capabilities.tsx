import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { capabilityIds, type Dictionary } from "@/content/types";

type CapabilitiesProps = {
  content: Dictionary["capabilities"];
};

export function Capabilities({ content }: CapabilitiesProps) {
  return (
    <Section
      id="capabilities"
      index="03"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
    >
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {capabilityIds.map((id, index) => {
            const item = content.items[id];
            return (
              <li
                key={id}
                className="group bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-fg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
