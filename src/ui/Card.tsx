import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-surface border-4 border-border p-6
        shadow-[4px_4px_0_0_var(--shadow)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
