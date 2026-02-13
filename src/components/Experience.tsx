import type { Experience as ExperienceItem } from "../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface ExperienceProps {
  items: ExperienceItem[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg text-accent mb-6">Experience</h2>
        <div className="space-y-6">
          {items.map((exp) => (
            <Card key={`${exp.role}-${exp.company}-${exp.period}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <div>
                  <h3 className="font-pixel text-sm text-text">{exp.role}</h3>
                  <p className="font-pixel-body text-lg text-text-secondary">
                    {exp.company}
                  </p>
                </div>
                <span className="font-pixel-body text-base text-text-muted">
                  {exp.period}
                </span>
              </div>
              {exp.description && (
                <p className="font-pixel-body text-base text-text-secondary mb-3">
                  {exp.description}
                </p>
              )}
              {exp.tags && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
