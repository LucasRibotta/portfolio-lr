import { ShaderField } from "@/components/ui/ShaderField";

export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,color-mix(in_srgb,var(--color-accent)_8%,transparent),transparent_70%)]" />
      <ShaderField />
      <div className="noise absolute inset-0" />
    </div>
  );
}
