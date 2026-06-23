import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[var(--page-bg)]
      "
      exit={{
        opacity: 0,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="
            h-14
            w-14
            animate-spin
            rounded-full
            border-4
            border-[var(--border)]
            border-t-[var(--accent)]
          "
        />

        <span
          className="
            text-sm
            font-semibold
            text-[var(--muted)]
          "
        >
          Loading...
        </span>
      </div>
    </motion.div>
  );
}