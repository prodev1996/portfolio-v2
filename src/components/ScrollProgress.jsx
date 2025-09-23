'use client';
import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} className="progress" />;
}
