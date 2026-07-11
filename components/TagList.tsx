"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export function TagList({ items }: { items: string[] }) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {items.map((tag) => (
        <motion.span
          key={tag}
          variants={item}
          whileHover={{ scale: 1.08, color: "#FF6B1A" }}
          className="rounded-full border border-[#2A241C] px-2 py-0.5 text-xs text-[#A89E92]"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}
