import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cv';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const sectionIds = cvData.navigation.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, 250);

  // Auto-masquage au scroll descendant et réapparition au scroll montant
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollY > 70 && currentScrollY > lastScrollY + 6) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 6 || currentScrollY <= 70) {
        setHidden(false);
      }
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Barre flottante en pilule centrée avec masquage intelligent */}
      <header
        className={`fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none transition-all duration-300 ${
          hidden ? '-translate-y-24 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <nav
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-3 p-1 pl-3 sm:p-1.5 sm:pl-4 rounded-full bg-charbon/95 sm:bg-charbon/80 backdrop-blur-2xl border border-or-border shadow-[0_12px_35px_rgba(0,0,0,0.75)] hover:border-or-borderBright transition-all duration-300"
          aria-label="Navigation principale"
        >
          {/* Logo / Monogramme */}
          <a
            href="#hero"
            className="flex items-center gap-1.5 sm:gap-2 text-creme font-bold text-[11px] sm:text-xs tracking-tight hover:text-or-light transition-colors pr-1 sm:pr-2"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-or animate-pulse-gold flex-shrink-0" />
            <span className="font-mono">P. A. KOTTY</span>
          </a>

          {/* Liens Desktop */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {cvData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "text-creme bg-or/15 font-semibold shadow-inner"
                        : "text-creme-muted hover:text-creme hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Contacter */}
          <a
            href="#contact"
            className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-or-light to-or text-charbon text-[11px] sm:text-xs font-bold shadow-md hover:brightness-110 transition-transform active:scale-95"
          >
            <span>Contacter</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>

          {/* Bouton Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-1.5 rounded-full text-creme-muted hover:text-creme hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Menu Tiroir Mobile Plein Écran */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-charbon/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 p-6 animate-fadeIn md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-12 h-12 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or font-serif font-bold text-lg mb-4">
            {cvData.identity.initials}
          </div>

          {cvData.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMobileMenu}
              className={`text-lg font-semibold transition-colors ${
                activeSection === item.id ? "text-or-light" : "text-creme hover:text-or-light"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-or-light to-or text-charbon font-bold text-sm shadow-goldGlow"
          >
            Me Contacter Directement
          </a>
        </div>
      )}
    </>
  );
}
