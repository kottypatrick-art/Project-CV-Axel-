import { useState, useEffect } from 'react';

/**
 * Hook pour détecter dynamiquement la section visible à l'écran
 * et mettre en surbrillance l'ancre correspondante dans la Navbar.
 *
 * @param {string[]} sectionIds - Liste des IDs de section (ex: ['hero', 'a-propos', ...])
 * @param {number} offset - Décalage en pixels (par défaut 200px)
 * @returns {string} activeId - L'ID de la section actuellement active
 */
export function useScrollSpy(sectionIds, offset = 200) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }
      setActiveId(sectionIds[0]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Vérification initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
