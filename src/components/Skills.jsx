'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import AnchorHeading from '@/components/AnchorHeading';
import { Search } from 'lucide-react';

const groups = [
  {
    key: 'systems',
    title: 'Systems & Infrastructure',
    items: [
      'Windows 10/11', 'Windows Server', 'Active Directory', 'Group Policies',
      'DNS/DHCP', 'VPN', 'MFA', 'Microsoft 365', 'Azure AD',
      'Remote Support', 'LAN/WAN', 'Firewall', 'Endpoint Protection', 'Cisco (Basics)'
    ],
  },
  {
    key: 'development',
    title: 'Development',
    items: [
      'JavaScript', 'React', 'Django', 'Node.js', 'Express',
      'REST APIs', 'HTML/CSS', 'Tailwind CSS', 'MySQL', 'MongoDB'
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    items: [
      'Git', 'GitHub', 'CI/CD', 'Docker (Basic)', 'AWS', 'Postman', 'VS Code'
    ],
  },
  {
    key: 'itsm',
    title: 'Collaboration & ITSM',
    items: [
      'Microsoft Teams', 'SharePoint', 'Jira', 'Confluence', 'Zendesk',
      'Documentation', 'End-user Training', 'ITIL Foundation', 'Google IT Support'
    ],
  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'systems', label: 'Systems' },
  { key: 'development', label: 'Development' },
  { key: 'tools', label: 'Tools' },
  { key: 'itsm', label: 'ITSM' },
];

/**
 * Optional highlight:
 * <Skills highlight={['React', 'Active Directory', 'Microsoft 365']} />
 */
export default function Skills({ highlight = [] }) {
  const [active, setActive] = useState('all');
  const [q, setQ] = useState('');
  const highlightSet = useMemo(
    () => new Set(highlight.map((s) => s.toLowerCase())),
    [highlight]
  );

  const filteredGroups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const base = active === 'all' ? groups : groups.filter(g => g.key === active);
    if (!needle) return base;
    return base
      .map(g => ({
        ...g,
        items: g.items.filter(it => it.toLowerCase().includes(needle)),
      }))
      .filter(g => g.items.length > 0);
  }, [active, q]);

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <AnchorHeading id="skills" level={2}>
          Skills
        </AnchorHeading>
      </motion.div>

      {/* Controls: filter chips + search */}
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
            aria-label="Search skills"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search skills…"
            className="w-full sm:w-64 rounded-lg border border-slate-200 bg-white/60 py-2 pl-9 pr-3 text-sm
                       placeholder:text-slate-400 shadow-sm focus:border-brand-500 focus:ring-2
                       focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
          />
        </label>
      </div>

      {/* Groups */}
      <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredGroups.length === 0 ? (
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-300">
              No skills match <span className="font-semibold">“{q}”</span>. Try a different search.
            </p>
          </motion.div>
        ) : (
          filteredGroups.map((g, gi) => (
            <motion.section
              key={g.title}
              role="group"
              aria-label={g.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-brand-700">{g.title}</h3>
                <span className="text-xs text-slate-500">{g.items.length}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s, si) => {
                  const isHL = highlightSet.has(s.toLowerCase());
                  return (
                    <motion.span
                      key={s}
                      className={`badge ${isHL ? 'bg-brand-200 text-brand-900 ring-2 ring-brand-500' : ''}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.02 }}
                      whileHover={{ y: -2 }}
                    >
                      {s}
                    </motion.span>
                  );
                })}
              </div>
            </motion.section>
          ))
        )}
      </div>
    </section>
  );
}
