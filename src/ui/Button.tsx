import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = `
    inline-flex items-center gap-2 px-5 py-2.5
    font-pixel text-xs uppercase tracking-wide
    border-4 transition-transform
    hover:-translate-y-0.5 active:translate-y-0
    shadow-[3px_3px_0_0_var(--shadow)]
    hover:shadow-[4px_4px_0_0_var(--shadow)]
  `;

  const variants = {
    primary: "bg-accent text-bg border-accent",
    outline:
      "bg-transparent text-accent border-accent hover:bg-accent hover:text-bg",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}
