import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Calendar, FileText, Send } from 'lucide-react';
import { cvData } from '../data/cv';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

export default function Contact() {
  const { contact, identity } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyContent = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${identity.email}?subject=${encodeURIComponent(
      formData.subject || 'Contact Recrutement Automobile'
    )}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
  };

  const methodIcons = {
    Phone: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    Mail: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    MessageCircle: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-gradient-to-b from-charbon to-[#0A0A0D] scroll-mt-20" aria-label="Recrutement et contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* En-tête immersif */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <Reveal>
            <Badge variant="gold">{contact.badge}</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-creme mt-3 sm:mt-4 mb-3 sm:mb-4 tracking-tight">
              {contact.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-base text-creme-muted leading-relaxed">
              {contact.subtitle}
            </p>
          </Reveal>
        </div>

        {/* 3 Cartes de Contact Direct Cliquables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mb-8 sm:mb-12">
          {contact.methods.map((method, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <a
                href={method.href}
                target={method.type === 'whatsapp' ? '_blank' : undefined}
                rel={method.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-charbon-surface border border-or-border hover:border-or-light transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-prestige flex flex-row sm:flex-col items-center sm:text-center text-left gap-3.5 sm:gap-4 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or-light group-hover:bg-or group-hover:text-charbon transition-all duration-300 shadow-inner flex-shrink-0">
                  {methodIcons[method.icon] || null}
                </div>
                <div className="flex flex-col sm:items-center min-w-0">
                  <span className="font-mono text-[11px] sm:text-xs text-or-light uppercase tracking-wider mb-0.5">
                    {method.title}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-creme break-all sm:break-normal">
                    {method.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-creme-dim mt-0.5">
                    {method.hint}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Formulaire & Coordonnées */}
        <Reveal delay={0.3}>
          <div className="p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-charbon-surface border border-or-border shadow-prestige grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Colonne Coordonnées */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-creme mb-2 sm:mb-3">
                  {contact.form.title}
                </h3>
                <p className="text-xs sm:text-sm text-creme-muted leading-relaxed">
                  {contact.form.description}
                </p>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or-light flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono uppercase text-creme-dim">Localisation</span>
                    <span className="text-xs sm:text-sm font-semibold text-creme">{contact.details.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or-light flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono uppercase text-creme-dim">Disponibilité</span>
                    <span className="text-xs sm:text-sm font-semibold text-creme">{contact.details.availability}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-or-dim border border-or-border flex items-center justify-center text-or-light flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono uppercase text-creme-dim">Curriculum Vitae</span>
                    <a
                      href={identity.cvUrl}
                      download={contact.details.cvFileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-or-light hover:underline"
                    >
                      {contact.details.cvLabel}
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-creme-dim hidden lg:block">
                Tous les canaux sont consultés quotidiennement pour une réactivité maximale.
              </p>
            </div>

            {/* Colonne Formulaire mailto */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] sm:text-xs font-mono uppercase text-creme-muted mb-1">
                  {contact.form.fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ex. Marc Dupont (Concession Automobile)"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-charbon/70 border border-or-border/40 text-creme placeholder-creme-dim/60 text-base sm:text-sm focus:outline-none focus:border-or-light focus:ring-1 focus:ring-or-light transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] sm:text-xs font-mono uppercase text-creme-muted mb-1">
                  {contact.form.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={contact.form.fields.email.placeholder}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-charbon/70 border border-or-border/40 text-creme placeholder-creme-dim/60 text-base sm:text-sm focus:outline-none focus:border-or-light focus:ring-1 focus:ring-or-light transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] sm:text-xs font-mono uppercase text-creme-muted mb-1">
                  {contact.form.fields.subject.label}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Opportunité Conseiller Automobile"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-charbon/70 border border-or-border/40 text-creme placeholder-creme-dim/60 text-base sm:text-sm focus:outline-none focus:border-or-light focus:ring-1 focus:ring-or-light transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] sm:text-xs font-mono uppercase text-creme-muted mb-1">
                  {contact.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={contact.form.fields.message.placeholder}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-charbon/70 border border-or-border/40 text-creme placeholder-creme-dim/60 text-base sm:text-sm focus:outline-none focus:border-or-light focus:ring-1 focus:ring-or-light transition-all resize-y"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                className="w-full mt-2"
                icon={<Send className="w-4 h-4" />}
              >
                {contact.form.submitLabel}
              </Button>
            </form>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
