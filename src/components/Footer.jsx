'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-slate-200 dark:border-slate-800 mt-10"
    >
      <div className="container-page py-6 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Rajiv Bhandari</p>
        <a href="mailto:rajiv@example.com" className="hover:text-brand-600">rajiv@example.com</a>
      </div>
    </motion.footer>
  );
}
