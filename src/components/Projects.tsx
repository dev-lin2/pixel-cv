import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface ProjectsProps {
  items: Project[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg text-accent mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((project) => (
            <Card key={project.name}>
              <h3 className="font-pixel text-sm text-text mb-2">{project.name}</h3>
              <p className="font-pixel-body text-base text-text-secondary mb-3">
                {project.description}
              </p>
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel-body text-sm text-accent hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel-body text-sm text-accent hover:underline flex items-center gap-1"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
