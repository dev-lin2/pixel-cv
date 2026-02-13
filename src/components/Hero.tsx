import { Mail, MapPin } from "lucide-react";
import type { CVData } from "../types";
import { Button } from "../ui/Button";

interface HeroProps {
  data: CVData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-pixel text-2xl md:text-3xl text-text mb-2">
          {data.name}
        </h1>
        <p className="font-pixel text-sm text-accent mb-4">{data.title}</p>

        {data.location && (
          <p className="font-pixel-body text-lg text-text-muted flex items-center justify-center gap-1 mb-6">
            <MapPin size={16} /> {data.location}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${data.email}`}>
            <Mail size={16} /> Contact
          </Button>
          {data.socials?.map((social) => (
            <Button key={social.name} href={social.url} variant="outline">
              {social.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
