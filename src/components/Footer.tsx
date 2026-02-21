export function Footer() {
  return (
    <footer className="py-8 border-t-4 border-border text-center">
      <p className="font-pixel-body text-base text-text-muted">
        (c) {new Date().getFullYear()} - Built with{" "}
        <a
          href="https://github.com/dev-lin2/pixel-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text"
        >
          pixel-cv
        </a>
      </p>
    </footer>
  );
}
