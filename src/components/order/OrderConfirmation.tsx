"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function OrderConfirmation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center py-12"
    >
      <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-text-primary">Order Request Received!</h2>
      <p className="mt-3 text-text-secondary">We&apos;ll get back to you shortly with next steps.</p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </motion.div>
  );
}
