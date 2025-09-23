'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -1 }}
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      {dark ? 'Light' : 'Dark'}
    </motion.button>
  );
}
