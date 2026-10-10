import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Composant wrapper Reveal : anime élégamment l'entrée d'un bloc au scroll
 * avec Framer Motion tout en respectant strictement prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 25,
  className = "",
  amount = 0.15,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
