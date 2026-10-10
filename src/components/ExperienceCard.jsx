import React from 'react';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

export default function ExperienceCard({ experience, index }) {
  const isFirst = index === 0;

  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      
      {/* Nœud lumineux sur la frise */}
      <div
        className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 transition-all ${
          isFirst
            ? "bg-or-bright border-or-light shadow-[0_0_16px_#F5D78E]"
            : "bg-charbon border-or-light shadow-[0_0_8px_rgba(212,168,67,0.4)]"
        }`}
        aria-hidden="true"
      />

      <Reveal delay={index * 0.15}>
        <article className="p-6 sm:p-8 rounded-2xl bg-charbon-surface border border-or-border hover:border-or-borderBright transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-prestige">
          
          {/* En-tête de carte */}
          <div className="flex flex-wrap justify-between items-start gap-3 pb-4 mb-4 border-b border-or-border/20">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-creme tracking-tight">
                {experience.role}
              </h3>
              <p className="font-serif italic text-or-light text-base mt-0.5">
                {experience.company} {experience.location && `• ${experience.location}`}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5">
              {experience.badge && (
                <Badge variant="green">{experience.badge}</Badge>
              )}
              <span className="font-mono text-xs text-creme-muted">
                {experience.period}
              </span>
            </div>
          </div>

          {/* Liste des réalisations / missions */}
          <ul className="space-y-2.5 list-none">
            {experience.missions.map((mission, mIdx) => (
              <li key={mIdx} className="flex items-start gap-3 text-xs sm:text-sm text-creme-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-or-light mt-2 flex-shrink-0" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </div>
  );
}
