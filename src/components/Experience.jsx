'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import AnchorHeading from '@/components/AnchorHeading';
import { Briefcase, Calendar, Search } from 'lucide-react';

const ROLES = [
  {
    id: 'freelance',
    title: 'IT Support & Freelance Developer',
    company: 'Self Employed',
    dates: '2022 – Present',
    track: 'it', // 'it' | 'dev' | 'data'
    tags: ['IT Support', 'SysAdmin', 'Full-Stack'],
    tools: ['Microsoft 365', 'AD', 'DNS/DHCP', 'React', 'Django', 'MySQL', 'Vercel', 'SEO'],
    bullets: [
      'Delivered IT support (Microsoft 365, troubleshooting, user training) and basic server admin.',
      'Launched production sites and apps: GlideEdu.com.au, MeroRoof.com.au, MeroGaadi, FixItNow, Prime Roof Care.',
      'Handled domain & DNS, hosting, cloud deploys, DB setup, backups, and security hardening.',
      'Improved performance and accessibility, and set up basic analytics & SEO.',
    ],
    links: [{ label: 'GlideEdu', href: 'https://www.glideedu.com.au/' }, { label: 'MeroRoof', href: 'https://meroroof.com.au' }],
  },
  {
    id: 'samushroom',
    title: 'Administrative Assistant (IT Support Exposure)',
    company: 'SA Mushroom',
    dates: 'Dec 2023 – May 2024',
    track: 'it',
    tags: ['Operations', 'IT Support'],
    tools: ['Windows', 'Microsoft 365', 'Outlook', 'Teams', 'Excel'],
    bullets: [
      'Supported day-to-day operations and assisted staff with software, connectivity, and peripherals.',
      'Maintained digital records and documentation; improved workflow between departments.',
      'Used Microsoft 365 (Outlook, Teams, Excel, Word) for scheduling and communication.',
    ],
  },
  {
    id: 'eydean',
    title: 'Full-Stack Developer',
    company: 'Eydean Technologies',
    dates: 'Oct 2020 – Feb 2022',
    track: 'dev',
    tags: ['Full-Stack', 'APIs'],
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'REST'],
    bullets: [
      'Built full-stack features with React, Node.js, Express, and MongoDB.',
      'Integrated REST APIs and optimized server-side logic for responsiveness.',
      'Collaborated with cross-functional teams and wrote internal docs.',
    ],
  },
  {
    id: 'cloudfactory',
    title: 'Data Specialist',
    company: 'CloudFactory',
    dates: 'Nov 2017 – Sep 2020',
    track: 'data',
    tags: ['Data', 'Ops'],
    tools: ['Data QA', 'Automation', 'Docs'],
    bullets: [
      'Processed and managed large datasets with high accuracy and security.',
      'Automated data workflows to reduce manual errors by ~50%.',
      'Created internal documentation and provided user training.',
    ],
  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'it', label: 'IT Support' },
  { key: 'dev', label: 'Development' },
  { key: 'data', label: 'Data/Other' },
];

export default function Experience({ animated = true, compact = false }) {
  const [active, setActive] = useState('all');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState({}); // {id: true}

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const base = active === 'all' ? ROLES : ROLES.filter(r => r.track === active);
    if (!needle) return base;
    return base.filter(r => {
      const hay = [
        r.title, r.company, r.dates,
        ...(r.tags || []), ...(r.tools || []), ...(r.bullets || []),
      ].join(' ').toLowerCase();
      return hay.includes(needle);
    });
  }, [active, q]);

  const limit = compact ? 3 : 4;

  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <AnchorHeading id="experience" level={2}>
          Experience
        </AnchorHeading>
      </motion.div>

      {/* Controls */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f, i) => (
            <motion.button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={`badge transition ${active === f.key ? 'ring-2 ring-brand-500 bg-brand-200 text-brand-900' : ''}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -2 }}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        <label className="relative block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            aria-label="Search experience"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search roles, skills…"
            className="w-full sm:w-72 rounded-lg border border-slate-200 bg-white/60 py-2 pl-9 pr-3 text-sm
                       placeholder:text-slate-400 shadow-sm focus:border-brand-500 focus:ring-2
                       focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
          />
        </label>
      </div>

      {/* Timeline */}
      <div className="relative mt-6 pl-6">
        {/* vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

        {filtered.map((r, i) => {
          const isOpen = !!open[r.id];
          const shown = isOpen ? r.bullets : r.bullets.slice(0, limit);
          return (
            <motion.article
              key={r.id}
              className="relative group mb-5"
              initial={animated ? { opacity: 0, y: 20 } : false}
              whileInView={animated ? { opacity: 1, y: 0 } : false}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {/* node */}
              <span className="absolute left-0 top-4 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-brand-600/20" />

              <div className="card hover:shadow-lg transition">
                {/* header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-brand-700" />
                    <h3 className="font-semibold text-brand-700">{r.title}</h3>
                    <span className="text-slate-500">— {r.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar size={14} />
                    <span>{r.dates}</span>
                  </div>
                </div>

                {/* tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tags?.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                  {r.tools?.slice(0, 4).map((t) => (
                    <span key={t} className="badge bg-brand-50 text-brand-700 dark:bg-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                {/* bullets */}
                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
                  {shown.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* links */}
                {r.links?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline px-3 py-1.5 text-sm"
                      >
                        Visit {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                {/* show more / less */}
                {r.bullets.length > limit && (
                  <button
                    onClick={() => setOpen((o) => ({ ...o, [r.id]: !isOpen }))}
                    className="mt-3 text-sm text-brand-700 hover:underline"
                    aria-expanded={isOpen}
                    aria-controls={`${r.id}-bullets`}
                  >
                    {isOpen ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </motion.article>
          );
        })}

        {filtered.length === 0 && (
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-300">
              No roles match <span className="font-semibold">“{q}”</span>. Try a different search or filter.
            </p>
          </motion.div>
        )}
      </div>

      {/* subtle CTA */}
      <motion.div
        className="mt-6 rounded-lg border border-slate-200 dark:border-slate-800 p-4 text-sm text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Open to <span className="font-semibold">Junior Developer</span>, <span className="font-semibold">IT Support</span>, or <span className="font-semibold">SysAdmin</span> roles.
        {' '}Let’s talk — <a href="mailto:bhandarirajiv25@gmail.com" className="underline text-brand-700">bhandarirajiv25@gmail.com</a>.
      </motion.div>
    </section>
  );
}

