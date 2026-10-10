import React, { useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Send, FileDown, ChevronDown, MapPin, Clock, Layers, User } from 'lucide-react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Effet de parallaxe subtil sur l'arrière-plan avec useScroll et useTransform
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 120]);

  const chipIcons = {
    MapPin: <MapPin className="w-3.5 h-3.5 text-or-light" />,
    Clock: <Clock className="w-3.5 h-3.5 text-or-light" />,
    Layers: <Layers className="w-3.5 h-3.5 text-or-light" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Présentation générale"
    >
      {/* Arrière-plan cinématique automobile avec reflets et multi-overlay sombre */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          style={{ y: bgY }}
          className="absolute -inset-[5%] w-[110%] h-[110%] bg-[url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center filter brightness-[0.6] contrast-[1.1]"
        />
        {/* Gradients d'assombrissement pour garantir la lisibilité optimale (Charbon ~75-85%) */}
        <div className="absolute inset-0 bg-radial-gradient from-or/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-charbon/85 via-charbon/75 to-charbon" />
        <div className="absolute inset-0 bg-gradient-to-r from-charbon/95 via-charbon/80 to-charbon/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne Texte */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            
            {/* Badge de prestige */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="gold">{cvData.hero.badge}</Badge>
            </motion.div>

            {/* Nom massif avec tracking serré */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-creme leading-[1.05]"
            >
              KOTTY<br />Paul Axel
            </motion.h1>

            {/* Titre professionnel en Playfair Display italique or */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif italic text-2xl sm:text-3xl text-or-light"
            >
              {cvData.identity.title}
            </motion.p>

            {/* Accroche sous le titre */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-creme pl-4 border-l-2 border-or"
            >
              {cvData.identity.tagline}
            </motion.p>

            {/* Descriptif d'impact */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm sm:text-base text-creme-muted leading-relaxed max-w-2xl"
            >
              {cvData.hero.description}
            </motion.p>

            {/* Puces métadonnées */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2.5 pt-1"
            >
              {cvData.hero.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ardoise/80 border border-or-border/40 text-xs font-mono text-creme-muted backdrop-blur-sm"
                >
                  {chipIcons[chip.icon] || null}
                  <span>{chip.text}</span>
                </span>
              ))}
            </motion.div>

            {/* Deux boutons d'appel à l'action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Button href="#contact" variant="gold" icon={<Send className="w-4 h-4" />}>
                {cvData.hero.ctaContact}
              </Button>

              <Button
                href={cvData.identity.cvUrl}
                download="CV_Paul_Axel_KOTTY.pdf"
                target="_blank"
                variant="outline"
                icon={<FileDown className="w-4 h-4" />}
              >
                {cvData.hero.ctaResume}
              </Button>
            </motion.div>
          </div>

          {/* Colonne Photo Professionnelle avec Cadre Biseauté */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] p-2 rounded-3xl bg-gradient-to-br from-or-light/30 via-ardoise/80 to-or/20 shadow-prestige"
            >
              <div className="w-full h-full rounded-[1.35rem] overflow-hidden relative bg-charbon-surface">
                {!photoError ? (
                  <img
                    src={cvData.identity.photoUrl}
                    alt={`${cvData.identity.name} - ${cvData.identity.title}`}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  /* Fallback élégant costume bleu marine et chemise claire */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#131A2E] via-[#0F1424] to-[#080A12]">
                    <div className="w-20 h-20 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or-light mb-4 shadow-inner">
                      <User className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-creme text-lg">{cvData.identity.name}</span>
                    <span className="font-mono text-xs text-or-light mt-1">
                      {cvData.identity.title}
                    </span>
                    <p className="text-[11px] text-creme-dim mt-2 max-w-[200px]">
                      Costume bleu marine &amp; chemise claire
                    </p>
                  </div>
                )}
              </div>

              {/* Badge flottant en bas de la photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] py-2 px-4 rounded-full bg-charbon-surface/95 backdrop-blur-md border border-or-borderBright shadow-xl flex items-center justify-center gap-2.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-creme">
                  {cvData.identity.currentBadge}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Indicateur de Défilement */}
      <a
        href="#a-propos"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-creme-dim hover:text-or-light transition-colors font-mono text-[11px] tracking-widest uppercase"
        aria-label="Défiler vers la section À propos"
      >
        <span>Explorer</span>
        <div className="w-5 h-8 rounded-full border border-or-border/60 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-or-light"
          />
        </div>
      </a>
    </section>
  );
}
