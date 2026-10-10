import React from 'react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative" aria-label="Expériences professionnelles">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Titre de section */}
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Badge variant="gold">Parcours Opérationnel</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-creme mt-3 tracking-tight">
              Expérience professionnelle
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-creme-muted mt-3">
              Un engagement prouvé en centre de contact, caractérisé par le sang-froid sous tension et le respect systématique des indicateurs de qualité.
            </p>
          </Reveal>
        </div>

        {/* Timeline verticale animée */}
        <div className="relative pl-2 sm:pl-4">
          {/* Ligne verticale dorée */}
          <div
            className="absolute top-3 bottom-0 left-[7px] w-[2px] bg-gradient-to-b from-or-light via-or/40 to-or/5"
            aria-hidden="true"
          />

          <div className="space-y-2">
            {cvData.experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
