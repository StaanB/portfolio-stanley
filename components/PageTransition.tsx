"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const overlayVariants = {
  initial: { scaleX: 1 },
  animate: {
    scaleX: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        <motion.div
          className="pointer-events-none fixed inset-0 z-40 origin-left bg-[#FF6B1A]"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          aria-hidden
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
