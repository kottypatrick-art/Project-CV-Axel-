import React from 'react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

export default function Education() {
  const { education } = cvData;

  return (
    <section id="formation" className="py-24 relative" aria-label="Formation et diplômes">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Badge variant="gold">{education.badge}</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-creme mt-3 tracking-tight">
              {education.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-creme-muted mt-3">
              {education.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grille de 4 cartes sobres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <article className="p-6 sm:p-8 rounded-2xl bg-charbon-surface border border-or-border hover:border-or-borderBright transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-baseline gap-3 pb-2">
                    <h3 className="text-base sm:text-lg font-bold text-creme">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-or-light whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="font-serif italic text-creme-muted text-sm sm:text-base mb-3">
                    {item.school}
                  </p>

                  <p className="text-xs sm:text-sm text-creme-dim leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
