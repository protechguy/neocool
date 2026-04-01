"use client";

import { motion } from "framer-motion";

export function SlideIn({ children, direction = "left", className = "" }: { children: React.ReactNode; direction?: "left" | "right"; className?: string }) {
  const x = direction === "left" ? -80 : 80;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
