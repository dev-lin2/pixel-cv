interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-2.5 py-1 bg-muted text-text-secondary text-sm font-pixel-body border-2 border-border">
      {children}
    </span>
  );
}
