import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = ["About", "Experience", "Skills", "Projects", "Contact"];

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/95 backdrop-blur border-b-4 border-border">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-pixel text-sm text-accent">
          <img src="/logo.png" alt={`${name} logo`} className="h-6 w-6 object-contain" />
          <span>{name}</span>
        </a>

        <nav className="hidden md:flex gap-6">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-pixel-body text-base text-text-secondary hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-text"
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-surface border-t-4 border-border px-4 py-4 space-y-2">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-pixel-body text-lg text-text-secondary hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
