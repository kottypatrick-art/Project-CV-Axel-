import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Footer() {
  const { footer } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-or-border/20 bg-[#0B0B0E]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-creme-dim">
        <p>
          <strong className="text-creme">{footer.copyright}</strong> &bull; {footer.role}. {footer.rights}
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 font-mono text-or-light hover:text-or-bright transition-colors cursor-pointer group"
          aria-label="Retourner en haut de page"
        >
          <span>{footer.backToTopLabel}</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
