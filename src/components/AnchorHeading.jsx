// src/components/AnchorHeading.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, Check } from 'lucide-react';

export default function AnchorHeading({
  id,
  children,
  level = 2,
  anchor = true,          // <-- toggle anchors on/off
  iconVisibility = 'hover' // 'hover' | 'always' | 'hidden'
}) {
  const [copied, setCopied] = useState(false);
  const Tag = level === 3 ? 'h3' : 'h2';

  if (!anchor) {
    return <Tag id={id} className="h2 scroll-mt-24">{children}</Tag>;
  }

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const iconClass =
    iconVisibility === 'hidden'
      ? 'hidden'
      : iconVisibility === 'always'
      ? 'visible'
      : 'invisible group-hover:visible md:visible'; // hover on mobile, always visible on md+

  return (
    <div className="group relative flex items-center gap-2">
      <Tag id={id} className="h2 scroll-mt-24">{children}</Tag>
      <motion.button
        aria-label={`Copy link to ${children}`}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={copyLink}
        className={`${iconClass} rounded-md p-1 text-slate-500 hover:text-brand-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800`}
      >
        {copied ? <Check size={16} /> : <LinkIcon size={16} />}
      </motion.button>
      <a href={`#${id}`} className="sr-only">Jump to {children}</a>
    </div>
  );
}
