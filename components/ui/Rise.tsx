import type { CSSProperties, ElementType, ReactNode } from "react";

type RiseProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export function Rise({ children, as, delay = 0, className }: RiseProps) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={`rise${className ? ` ${className}` : ""}`}
      style={
        delay ? ({ "--rise-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
