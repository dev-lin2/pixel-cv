import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import type { CVData } from "./types";

export default function App() {
  const [data, setData] = useState<CVData | null>(null);

  useEffect(() => {
    fetch("/cv.json")
      .then((response) => response.json())
      .then((json: CVData) => setData(json))
      .catch((error) => {
        console.error("Failed to load cv.json", error);
      });
  }, []);

  useEffect(() => {
    document.title = data?.name || "pixel-cv";
  }, [data?.name]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <p className="font-pixel text-accent">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header name={data.name} />
      <main>
        <Hero data={data} />
        {data.bio && <About bio={data.bio} />}
        {data.experience && <Experience items={data.experience} />}
        {data.skills && <Skills groups={data.skills} />}
        {data.projects && <Projects items={data.projects} />}
        <Contact email={data.email} />
      </main>
      <Footer />
    </div>
  );
}
