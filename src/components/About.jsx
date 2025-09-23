'use client';
import { motion } from 'framer-motion';
import AnchorHeading from '@/components/AnchorHeading';
import Link from 'next/link';

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      {/* Heading with copyable anchor */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
        <AnchorHeading id="about" level={2}>
          About me
        </AnchorHeading>
      </motion.div>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        {/* Left: narrative */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="space-y-4"
        >
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            I’m <strong>Rajiv Bhandari</strong> — an ICT professional with a <strong>Master’s in IT (Advanced)</strong> from
            Torrens University Australia. I bridge <strong>IT support & system administration</strong> with
            <strong> full-stack development</strong>, so I can keep infrastructure reliable and also ship features users love.
          </p>

          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            On the infrastructure side, I’ve supported <strong>100+ users</strong> across{' '}
            <strong>Windows / Active Directory / Microsoft 365</strong>, MFA, VPN, and endpoint hygiene. On the product side,
            I’ve built and deployed modern apps and sites (e.g. <strong>GlideEdu.com.au</strong>, <strong>Primeroofcare.com.au</strong>,
            <strong> My portfolio</strong>) using <strong>React</strong>, <strong>Django</strong>, and <strong>MySQL</strong>.
          </p>

          <ul className="mt-2 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-200">
            {[
              'Practical sysadmin: AD, Group Policies, DNS/DHCP, M365/Azure AD, security-first mindset.',
              'Developer ergonomics: clean code, API design, component reuse, accessibility.',
              'DevOps-lite: CI/CD basics, Docker (basic), cloud deploys, logs & monitoring awareness.',
              'Collaborative: clear documentation, end-user training, and calm incident handling.',
            ].map((li, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
              >
                {li}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: quick facts + CTA */}
        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="card"
          aria-label="Highlights and actions"
        >
          <h3 className="font-semibold text-brand-700">Quick facts</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              '100+ users supported',
              'Windows / AD / M365',
              'React • Django • MySQL',
              'CI/CD & Docker (basic)',
              'Available: Software /Website Developer',
              'Available: IT Support',
              'Softwaere Engineer',
              'Available: SysAdmin',
            ].map((tag, i) => (
              <motion.span
                key={tag}
                className="badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.02 * i }}
                whileHover={{ y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="mt-5 grid sm:grid-cols-2 gap-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/Rajiv_Bhandari_Resume.pdf"
              download
              className="btn btn-primary px-4 py-2 text-center"
            >
              📄 Download Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="btn btn-outline px-4 py-2 text-center"
            >
              Explore Projects
            </motion.a>
          </div>

          <motion.div
            className="mt-4 text-sm text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Prefer email?{' '}
            <a className="underline text-brand-700" href="mailto:bhandarirajiv25@gmail.com">
              bhandarirajiv25@gmail.com
            </a>
            {'  '}•{' '}
            <Link
              href="https://www.linkedin.com/in/rajiv-bhandari25/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-brand-700"
            >
              LinkedIn
            </Link>
          </motion.div>

          {/* Subtle CTA footer */}
          <motion.div
            className="mt-5 rounded-lg border border-slate-200 dark:border-slate-800 p-3 text-center"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">
              Let’s build something reliable and fast — <span className="font-semibold">together</span>.
            </p>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
