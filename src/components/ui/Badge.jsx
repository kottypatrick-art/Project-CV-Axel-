import React from 'react';

/**
 * Badge de prestige réutilisable avec micro-point d'état lumineux.
 */
export default function Badge({
  children,
  variant = 'gold',
  showDot = true,
  className = "",
}) {
  const styles = {
    gold: {
      container: "bg-or-dim border-or-border text-or-light",
      dot: "bg-or-bright shadow-[0_0_8px_#F5D78E]",
    },
    green: {
      container: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      dot: "bg-emerald-400 shadow-[0_0_8px_#34D399] animate-pulse",
    },
    neutral: {
      container: "bg-ardoise/70 border-or-border/40 text-creme-muted",
      dot: "bg-creme-dim",
    },
  };

  const currentStyle = styles[variant] || styles.gold;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono tracking-wider uppercase ${currentStyle.container} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${currentStyle.dot}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
