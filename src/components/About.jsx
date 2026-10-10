import React from 'react';
import { Car } from 'lucide-react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

export default function About() {
  const { about } = cvData;

  return (
    <section id="a-propos" className="py-24 relative" aria-label="À propos de Paul Axel KOTTY">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Grand pavé éditorial / citation */}
        <Reveal>
          <div className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-ardoise/80 via-charbon-surface/90 to-charbon border border-or-border shadow-card mb-12">
            <span
              className="absolute top-4 right-8 font-serif text-7xl sm:text-8xl text-or/10 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="mb-4">
              <Badge variant="gold">{about.badge}</Badge>
            </div>

            <blockquote className="font-serif italic text-lg sm:text-2xl text-creme leading-relaxed mb-6 max-w-4xl">
              {about.quote}
            </blockquote>

            <p className="text-sm sm:text-base text-creme-muted leading-relaxed max-w-3xl">
              {about.body}
            </p>
          </div>
        </Reveal>

        {/* Grille des 3 chiffres clés honnêtes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {about.stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="p-6 rounded-2xl bg-charbon-surface border border-or-border/40 hover:border-or-borderBright transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col justify-between h-full">
                <div>
                  <span className="block text-4xl sm:text-5xl font-extrabold text-or-light font-sans tracking-tight mb-2">
                    {stat.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-creme">
                    {stat.label}
                  </h3>
                </div>
                <span className="text-xs font-mono text-creme-dim mt-4 block">
                  {stat.subtext}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pourquoi le secteur automobile ? */}
        <Reveal delay={0.3}>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-or-dim/50 via-charbon-surface to-charbon-surface border border-or-border flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-or-dim border border-or-border flex items-center justify-center text-or-light flex-shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-creme mb-1">
                {about.automotiveFocus.title}
              </h3>
              <p className="text-xs sm:text-sm text-creme-muted leading-relaxed">
                {about.automotiveFocus.description}
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
