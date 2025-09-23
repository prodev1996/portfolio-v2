
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const step = { hidden: { opacity: 0, y: 12 }, show: i => ({ opacity: 1, y: 0, transition: { duration: .6, delay: i * .08 }}) };

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl px-6 py-14 mt-8 shadow-soft
                        bg-white dark:bg-slate-900 before:absolute before:inset-0
                        before:bg-[radial-gradient(1200px_400px_at_10%_-20%,rgba(99,102,241,.12),transparent_60%),radial-gradient(1000px_500px_at_110%_0%,rgba(59,130,246,.10),transparent_60%)] before:content-['']">
      <div className="relative grid md:grid-cols-[1fr,280px] gap-8 place-items-center">
        <div className="text-center md:text-left">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-brand-600 via-cyan-500 to-brand-600 bg-clip-text text-transparent"
            initial="hidden" animate="show" custom={0} variants={step}>
            Rajiv Bhandari
          </motion.h1>
          <motion.p className="mt-2 font-semibold text-slate-700 dark:text-slate-200"
            initial="hidden" animate="show" custom={1} variants={step}>
            IT Support Engineer • Full‑Stack Developer
          </motion.p>
          <motion.p className="mt-1 text-slate-500 dark:text-slate-400"
            initial="hidden" animate="show" custom={2} variants={step}>
            Windows / Active Directory / Microsoft 365 · React · Django · MySQL
          </motion.p>
          <motion.div className="mt-5 flex items-center md:justify-start justify-center gap-3"
            initial="hidden" animate="show" custom={3} variants={step}>
            <a href="/resume" className="btn btn-primary px-4 py-2">View Resume</a>
            <a href="#projects" className="btn btn-outline px-4 py-2">Explore Projects</a>
          </motion.div>
          <div className="mt-4 flex flex-wrap md:justify-start justify-center gap-2">
            {['React','Django','Microsoft 365','Active Directory'].map((t,i)=>(
              <motion.span key={t} className="badge" animate={{ y: [0,-6,0] }} transition={{ repeat: Infinity, duration: 2.3 + i*0.25 }}>
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ rotate: 1, scale: 1.02 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500 to-cyan-500 blur-lg opacity-30"
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-soft">
            <Image
              src="/avatar.jpg"
              alt="Rajiv avatar"
              width={280}
              height={280}
              className="object-cover w-[280px] h-[280px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
