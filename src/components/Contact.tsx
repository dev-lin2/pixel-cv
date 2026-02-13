import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-lg text-accent mb-6">Contact</h2>
        <Card className="text-center">
          <p className="font-pixel-body text-xl text-text mb-6">
            Interested in working together? Let's talk.
          </p>
          <Button href={`mailto:${email}`}>
            <Mail size={16} /> {email}
          </Button>
        </Card>
      </div>
    </section>
  );
}
