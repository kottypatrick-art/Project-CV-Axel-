import React from 'react';
import { Globe, Car, Cpu, BookOpen, MessageSquare, ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

export default function Project() {
  const { project } = cvData;

  const interestIcons = {
    Car: <Car className="w-5 h-5 text-or-light" />,
    Cpu: <Cpu className="w-5 h-5 text-or-light" />,
    BookOpen: <BookOpen className="w-5 h-5 text-or-light" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-or-light" />,
  };

  return (
    <section id="projet" className="py-24 relative bg-charbon-surface/40" aria-label="Projet digital et centres d'intérêt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Badge variant="gold">{project.badge}</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-creme mt-3 tracking-tight">
              {project.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-creme-muted mt-3">
              {project.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mockup Projet Web Entreprise Locale */}
          <div className="lg:col-span-7">
            <Reveal>
              <article className="rounded-3xl bg-charbon-surface border border-or-border overflow-hidden shadow-prestige flex flex-col">
                
                {/* Barre Navigateur */}
                <div className="px-4 py-3 bg-charbon border-b border-or-border/20 flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-center font-mono text-[11px] text-creme-dim truncate">
                    {project.showcase.urlLabel}
                  </div>
                </div>

                {/* Cadre de Prévisualisation */}
                <div className="h-56 sm:h-64 bg-gradient-to-br from-[#181924] to-[#101117] flex flex-col items-center justify-center p-6 text-center border-b border-or-border/20 relative">
                  <div className="w-12 h-12 rounded-xl bg-or-dim border border-or-border flex items-center justify-center text-or-light mb-3">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-creme text-sm sm:text-base">
                    Vitrine Digitale Responsive
                  </span>
                  <span className="font-mono text-xs text-or-light mt-1">
                    [{project.showcase.placeholderText}]
                  </span>
                </div>

                {/* Contenu textuel du projet */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-creme">
                    {project.showcase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-creme-muted leading-relaxed">
                    {project.showcase.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.showcase.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-or-dim border border-or-border/60 text-or-light font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Centres d'intérêt */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-charbon-surface border border-or-border shadow-card flex flex-col gap-6">
                <h3 className="text-lg font-bold text-creme pb-3 border-b border-or-border/20">
                  Centres d'intérêt
                </h3>

                <div className="space-y-5">
                  {project.interests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 transition-transform duration-200 hover:translate-x-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-or-dim border border-or-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        {interestIcons[interest.icon] || null}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-creme mb-0.5">
                          {interest.title}
                        </h4>
                        <p className="text-xs text-creme-dim leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
