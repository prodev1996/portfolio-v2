'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800"
    >
      <nav className="container-page flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold text-lg text-brand-700">RB</Link>
        <div className="hidden md:flex gap-1">
          {links.map((l, i) => (
            <motion.div key={l.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
              <Link href={l.href}
                className={`nav-link ${pathname === l.href ? 'active-link' : ''}`}>
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <DarkModeToggle />
      </nav>
    </motion.header>
  );
}
