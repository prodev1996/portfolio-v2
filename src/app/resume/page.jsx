'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import HeroResume from '@/components/HeroResume';
import AnchorHeading from '@/components/AnchorHeading';

import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResumePage() {
  const printPage = () => (typeof window !== 'undefined' ? window.print() : null);

  return (
    <main className="w-full">
      {/* Force centering on this page only */}
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* HERO */}
        <HeroResume />

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-2 print:hidden">
          <motion.a
            href="/Rajiv_Bhandari_Resume.pdf" // put the PDF in /public
            download
            className="btn btn-primary px-4 py-2"
            initial="hidden"
            animate="show"
            variants={fade}
          >
            📄 Download PDF
          </motion.a>

          <motion.button
            onClick={printPage}
            className="btn btn-outline px-4 py-2"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.05 }}
          >
            🖨️ Print
          </motion.button>

          {/* in-page quick nav */}
          <motion.nav
            className="ml-auto flex flex-wrap gap-2 text-sm"
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ delay: 0.1 }}
            aria-label="Resume sections"
          >
            {[
              { href: '#summary', label: 'Summary' },
              { href: '#experience', label: 'Experience' },
              { href: '#education', label: 'Education' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
            ].map((i) => (
              <Link key={i.href} href={i.href} className="badge hover:ring-2 hover:ring-brand-500">
                {i.label}
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* SUMMARY */}
        <section id="summary" className="section" aria-labelledby="summary-heading">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <AnchorHeading id="summary" level={2}>
              Summary
            </AnchorHeading>
          </motion.div>

          <motion.p
            className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Versatile ICT professional with a Master’s in IT (Advanced). Blend of{' '}
            <strong>IT support & system administration</strong> (Windows, AD, Microsoft 365, VPN/MFA) and{' '}
            <strong>full-stack development</strong> (React, Django, MySQL). Delivered production projects like{' '}
            <strong>GlideEdu.com.au</strong> and <strong>MeroGaadi</strong>, and supported 100+ users with a
            security-first, documentation-driven approach. Open to <strong>Junior Developer</strong>,{' '}
            <strong>IT Support</strong>, and <strong>SysAdmin</strong> roles.
          </motion.p>
        </section>

        {/* SECTIONS */}
        <Experience />
        <Education />
        <Skills highlight={['React', 'Active Directory', 'Microsoft 365', 'Django']} />
        <Projects compact />
      </div>
    </main>
  );
}
