import type { SkillGroup } from "../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg text-accent mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.category}>
              <h3 className="font-pixel text-xs text-accent mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
