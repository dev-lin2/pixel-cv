interface ProgressBarProps {
  label: string;
  value: number;
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm font-pixel-body">
        <span>{label}</span>
        <span className="text-text-muted">{value}%</span>
      </div>
      <div className="h-3 bg-muted border-2 border-border">
        <div
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
