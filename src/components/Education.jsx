'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnchorHeading from '@/components/AnchorHeading';
import { GraduationCap, Calendar, BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';

const EDU = [
  {
    id: 'torrens',
    degree: 'Master of IT (Advanced)',
    school: 'Torrens University Australia',
    dates: '2022 – 2024',
    highlights: [
      'Focused on software engineering, systems, and modern web technologies.',
      'Combined infrastructure fundamentals with full-stack development practices.',
    ],
    coursework: [
      'Software Engineering',
      'Web Development',
      'Cloud Computing',
      'Database Systems',
      'Computer Networks',
      'Information Security',
      'DevOps (Intro)',
      'Project Management',
    ],
    // links: []  // ⬅ removed transcript link as requested
  },
  {
    id: 'tribhuvan',
    degree: 'Bachelor in CS & IT',
    school: 'Tribhuvan University',
    dates: '2014 – 2019',
    highlights: [
      'Solid grounding in CS fundamentals and problem-solving.',
      'Built foundational skills used in later professional work.',
    ],
    coursework: [
      'Algorithms & Data Structures',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
      'Object-Oriented Programming',
      'Discrete Mathematics',
      'Web Technologies',
    ],
  },
];

/** Replace or keep the hrefs below with your real credential links */
const CERTS = [
  {
    name: 'Zendesk Customer Service Professional Certificate',
    issuer: 'LinkedIn',
    year: 'Sep 2024',
    // If you have a PDF, place it in /public/certs/ and use that path. Otherwise leave href as '#'.
    href: '#',
  },
  {
    name: 'Cyber Security Foundation',
    issuer: 'CertiProf',
    year: 'Dec 2020',
    href: '#', // add your verify link if you have one
  },
  {
    name: 'Google IT Support Specialization',
    issuer: 'Coursera',
    year: 'Nov 2020',
    href: 'https://www.coursera.org/account/accomplishments/specialization/GHRRWAANPBVK',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Coursera',
    year: 'Sep 2020',
    href: 'https://www.coursera.org/account/accomplishments/certificate/GPYAJUKPXHNR',
  },
];

export default function Education({ animated = true }) {
  const [open, setOpen] = useState({}); // {id: true}
  const limit = 5;

  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <AnchorHeading id="education" level={2}>Education</AnchorHeading>
      </motion.div>

      <div className="relative mt-6 pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

        {EDU.map((e, i) => {
          const isOpen = !!open[e.id];
          const shown = isOpen ? e.coursework : e.coursework.slice(0, limit);
          const hasMore = (e.coursework?.length || 0) > limit;

          return (
            <motion.article
              key={e.id}
              className="relative group mb-5"
              initial={animated ? { opacity: 0, y: 20 } : false}
              whileInView={animated ? { opacity: 1, y: 0 } : false}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="absolute left-0 top-4 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20" />

              <div className="card hover:shadow-lg transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <GraduationCap size={16} className="text-brand-700" />
                    <h3 className="font-semibold text-brand-700">{e.degree}</h3>
                    <span className="text-slate-500">— {e.school}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar size={14} />
                    <span>{e.dates}</span>
                  </div>
                </div>

                {e.highlights?.length ? (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
                    {e.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hi * 0.03 }}
                      >
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                ) : null}

                {e.coursework?.length ? (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <BookOpen size={16} />
                      <span>Key coursework</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {shown.map((c, ci) => (
                        <motion.span
                          key={c}
                          className="badge"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ci * 0.02 }}
                          whileHover={{ y: -2 }}
                        >
                          {c}
                        </motion.span>
                      ))}
                    </div>

                    {hasMore && (
                      <button
                        onClick={() => setOpen((o) => ({ ...o, [e.id]: !isOpen }))}
                        className="mt-2 inline-flex items-center gap-1 text-sm text-brand-700 hover:underline"
                        aria-expanded={isOpen}
                        aria-controls={`${e.id}-coursework`}
                      >
                        {isOpen ? <>Show less <ChevronUp size={16} /></> : <>Show more <ChevronDown size={16} /></>}
                      </button>
                    )}
                  </div>
                ) : null}

                {/* Links section removed since no transcript download is desired */}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Certifications */}
      <motion.div
        className="mt-6 card"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <Award size={18} className="text-brand-700" />
          <h3 className="font-semibold text-brand-700">Certifications</h3>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {CERTS.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.href || '#'}
              target={c.href && c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href && c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="badge hover:ring-2 hover:ring-brand-500"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {c.name} — {c.issuer} ({c.year})
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
