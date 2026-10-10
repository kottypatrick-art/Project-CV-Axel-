import React from 'react';
import { Headphones, Laptop, HeartHandshake, Globe } from 'lucide-react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';
import SkillMeter from './SkillMeter';

export default function Skills() {
  const { skills } = cvData;

  const categoryIcons = {
    Headphones: <Headphones className="w-5 h-5 text-or-light" />,
    Laptop: <Laptop className="w-5 h-5 text-or-light" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-or-light" />,
  };

  return (
    <section id="competences" className="py-24 relative bg-charbon-surface/40" aria-label="Compétences professionnelles">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Badge variant="gold">{skills.badge}</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-creme mt-3 tracking-tight">
              {skills.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-creme-muted mt-3">
              {skills.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grille des 3 groupes de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {skills.categories.map((cat, catIdx) => (
            <Reveal key={cat.id} delay={catIdx * 0.15}>
              <div className="p-6 sm:p-7 rounded-2xl bg-charbon-surface border border-or-border hover:border-or-borderBright transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-or-border/20">
                    <div className="w-10 h-10 rounded-xl bg-or-dim border border-or-border flex items-center justify-center flex-shrink-0">
                      {categoryIcons[cat.icon] || null}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-creme">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <SkillMeter
                        key={itemIdx}
                        name={item.name}
                        level={item.level}
                        score={item.score}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mini-section Langues */}
        <Reveal delay={0.3}>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-ardoise/80 via-charbon-surface to-charbon-surface border border-or-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-or-dim border border-or-border flex items-center justify-center text-or-light flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-creme">
                  Compétences linguistiques
                </h3>
                <p className="text-xs text-creme-muted">
                  Communication fluide pour clients locaux et internationaux
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {skills.languages.map((lang, lIdx) => (
                <div key={lIdx} className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-or-dim border border-or-border font-mono text-xs font-bold text-or-light">
                    {lang.code}
                  </span>
                  <div>
                    <span className="block text-xs sm:text-sm font-semibold text-creme">
                      {lang.language} ({lang.level})
                    </span>
                    <span className="block text-[11px] text-creme-dim">
                      {lang.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
