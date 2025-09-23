'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Briefcase, Mail } from 'lucide-react';

const EMAIL = 'bhandarirajiv25@gmail.com';

export default function HeroResume() {
  return (
    <section className="relative mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-cyan-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-800 print:shadow-none">
      {/* subtle glow */}
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      />

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* avatar */}
        <motion.div
          className="relative h-28 w-28 overflow-hidden rounded-2xl ring-4 ring-white shadow-lg dark:ring-slate-900"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/avatar.jpg" // replace if needed
            alt="Rajiv Bhandari"
            fill
            className="object-cover"
            sizes="112px"
            priority
          />
        </motion.div>

        {/* text */}
        <div className="flex-1">
          <motion.h1
            className="text-3xl font-bold text-brand-800 dark:text-brand-200"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          >
            Rajiv Bhandari — Resume
          </motion.h1>

          <motion.p
            className="mt-1 text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            IT Support Engineer • Full-Stack Developer
          </motion.p>

          <motion.div
            className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-1"><MapPin size={16} /> Adelaide, SA • Remote</span>
            <span className="inline-flex items-center gap-1"><Briefcase size={16} /> Open to: Junior Dev, IT Support, SysAdmin</span>
            <a className="inline-flex items-center gap-1 underline text-brand-700" href={`mailto:${EMAIL}`}>
              <Mail size={16} /> {EMAIL}
            </a>
          </motion.div>

          <motion.div
            className="mt-3 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {['Windows/AD', 'Microsoft 365', 'React', 'Django', 'MySQL', 'CI/CD'].map((b, i) => (
              <span key={b} className="badge" style={{ transitionDelay: `${i * 30}ms` }}>{b}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
