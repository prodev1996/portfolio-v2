'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Download, X } from 'lucide-react';

export default function CTARibbon() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('ctaRibbonDismissed');
    if (dismissed === 'true') setOpen(false);
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem('ctaRibbonDismissed', 'true');
  };

  if (!open) return null;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
      role="region"
      aria-label="Call to action"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/85">
        <Rocket className="hidden sm:block text-brand-600" size={18} />
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Open to <span className="font-semibold">Junior Developer</span>, <span className="font-semibold">IT Support</span>, or <span className="font-semibold">SysAdmin</span> roles.
        </p>
        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:bhandarirajiv25@gmail.com?subject=Opportunity for Rajiv"
            className="btn btn-primary px-3 py-1.5 text-sm"
          >
            Hire me
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="/Rajiv_Bhandari_Resume.pdf"
            download
            className="btn btn-outline px-3 py-1.5 text-sm flex items-center gap-1"
          >
            <Download size={16} /> Resume
          </motion.a>
        </div>
        <button
          aria-label="Dismiss"
          onClick={dismiss}
          className="ml-1 rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}
