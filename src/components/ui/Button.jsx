import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Bouton de prestige interactif avec micro-interaction magnétique discrète
 * et prise en charge native des liens ancres ou d'action (a) et boutons (button).
 */
export default function Button({
  children,
  variant = 'gold',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  className = "",
  icon = null,
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors cursor-pointer select-none";

  const variants = {
    gold:
      "bg-gradient-to-r from-or-bright via-or to-or-dark text-charbon border border-white/25 shadow-goldGlow hover:brightness-105 active:brightness-95",
    outline:
      "bg-charbon-surface/60 text-creme border border-or-border backdrop-blur-md hover:border-or-light hover:bg-or-dim active:bg-or-dim/80",
    subtle:
      "bg-transparent text-creme-muted hover:text-or-light hover:bg-or-dim/50",
  };

  const selectedVariant = variants[variant] || variants.gold;
  const combinedClass = `${baseStyles} ${selectedVariant} ${className}`;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -2, transition: { duration: 0.2 } },
        whileTap: { scale: 0.98 },
      };

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        onClick={onClick}
        className={combinedClass}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
