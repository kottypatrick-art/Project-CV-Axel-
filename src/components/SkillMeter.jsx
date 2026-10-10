import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Jauge qualitative discrète à 3 segments.
 * Élimine les pourcentages arbitraires (pas de 95% ou 88%)
 * au profit d'échelons concrets : Maîtrisé (3/3), Solide (2/3), En progression (1/3).
 */
export default function SkillMeter({ name, level, score = 3 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline gap-2">
        <span className="text-xs sm:text-sm font-medium text-creme">
          {name}
        </span>
        <span className="font-mono text-[10px] sm:text-xs font-semibold text-or-light tracking-wider uppercase">
          {level}
        </span>
      </div>

      <div className="flex gap-1.5 h-1.5 w-full" aria-hidden="true">
        {[1, 2, 3].map((segmentIndex) => {
          const isFilled = segmentIndex <= score;

          return (
            <div
              key={segmentIndex}
              className="flex-1 h-full rounded-sm bg-white/10 overflow-hidden"
            >
              {isFilled && (
                <motion.div
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: segmentIndex * 0.1, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className="w-full h-full bg-gradient-to-r from-or to-or-light shadow-[0_0_8px_rgba(212,168,67,0.4)]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
