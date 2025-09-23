'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="container-page">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
