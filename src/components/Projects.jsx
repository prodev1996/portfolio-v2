'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects({ compact = false, animated = true }) {
  const items = [
    {
      t: 'Glide Education & Visa Services',
      s: 'Consultancy Website',
      d: 'React + Tailwind, animations, deployed on Vercel.',
      img: '/projects/glide.jpg',
      href: 'https://www.glideedu.com.au/',
    },
    {
      t: 'Prime Roof Care',
      s: 'Lead Enquiry System',
      d: 'Django + SQLite backend with reCAPTCHA & REST APIs.',
      img: '/projects/primeroof.jpg',
      // add href if this one is live
    },
    {
      t: 'My Portfolio',
      s: 'Personal Site',
      d: 'Next.js + Tailwind + Framer Motion; responsive, dark mode, sections & animations.',
      img: '/projects/portfolio.jpg',
      href: 'https://rajiv-portfolio-delta.vercel.app/', // update if your new domain differs
    },
  ];

  const list = compact ? items.slice(0, 4) : items;
  const [broken, setBroken] = useState({}); // { [index]: true }

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <motion.h2
        id="projects-heading"
        className="h2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="mt-5 grid md:grid-cols-2 gap-6">
        {list.map((p, i) => (
          <motion.article
            key={p.t}
            className="card overflow-hidden group"
            initial={animated ? { opacity: 0, y: 24, scale: 0.98 } : false}
            whileInView={animated ? { opacity: 1, y: 0, scale: 1 } : false}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            whileHover={{ y: -3 }}
          >
            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800"
            >
              {!broken[i] ? (
                <motion.div whileHover={{ scale: 1.03 }} className="absolute inset-0">
                  <Image
                    src={p.img}
                    alt={p.t}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={i < 2}
                    onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                  />
                </motion.div>
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-100 to-cyan-100 dark:from-slate-700 dark:to-slate-800">
                  <span className="text-sm text-brand-700/80 dark:text-slate-300">
                    Screenshot not available
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <div className="mt-4">
              <h3 className="font-semibold text-brand-700">{p.t}</h3>
              <p className="text-sm text-slate-500">{p.s}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{p.d}</p>

              <div className="mt-3 flex gap-2">
                {p.href && (
                  <motion.a
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline px-3 py-1.5 text-sm"
                  >
                    Visit
                  </motion.a>
                )}
                <motion.a
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="btn btn-primary px-3 py-1.5 text-sm"
                >
                  Discuss
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
