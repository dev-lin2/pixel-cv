import { Card } from "../ui/Card";

interface AboutProps {
  bio: string;
}

export function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg text-accent mb-6">About</h2>
        <Card>
          <p className="font-pixel-body text-xl text-text leading-relaxed">{bio}</p>
        </Card>
      </div>
    </section>
  );
}
