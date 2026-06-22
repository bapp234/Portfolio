import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[3px]
        origin-left
        bg-[var(--accent)]
      "
      style={{
        scaleX: scrollYProgress,
        width: '100%',
      }}
    />
  );
}