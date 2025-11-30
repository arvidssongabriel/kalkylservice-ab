"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Clock, Building2, CheckCircle2, Cpu, Quote } from "lucide-react";
import "./globals.css";

type FadeSectionProps = {
   id?: string;
   className?: string;
   children: React.ReactNode;
};

function FadeSection({ id, className, children }: FadeSectionProps) {
   const ref = useRef<HTMLElement | null>(null);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setVisible(true);
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.12 }
      );

      observer.observe(node);
      return () => observer.disconnect();
   }, []);

   return (
      <section
         id={id}
         ref={ref}
         className={`section fade-section ${visible ? "fade-section-visible" : ""} ${className ?? ""}`}>
         {children}
      </section>
   );
}

function scrollToId(id: string) {
   const el = document.getElementById(id);
   if (!el) return;
   el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomePage() {
   return (
      <div className="app">
         {/* HEADER */}
         <header className="header">
            <div className="header-inner">
               <div className="logo-area">
                  <span className="brand-pill">Elkalkyler för företag</span>
                  <h1 className="site-title">
                     <span className="site-title-main">Kalkylservice AB</span>
                  </h1>
                  <p className="site-tagline">
                     <span className="site-tagline-pill">Din elkalkylator</span>
                  </p>
               </div>
               <div className="header-cta">
                  <button type="button" className="btn-primary" onClick={() => scrollToId("contact")}>
                     Kontakta oss
                  </button>
               </div>
            </div>
            <div className="header-accent" />
         </header>

         <main>
            {/* HERO */}
            <FadeSection id="about" className="hero-section">
               <div className="hero">
                  <div className="hero-text">
                     <h2>Trygga kalkyler för lönsamma elprojekt</h2>
                     <p className="hero-lead">
                        Med över tre decennier i branschen hjälper vi elinstallations­ företag runt om i Sverige att
                        räkna rätt – från anbud till färdig entreprenad.
                     </p>
                     <ul className="hero-list">
                        <li>Entreprenad- och produktionskalkyler</li>
                        <li>Realistiska arbetstider & materialpriser</li>
                        <li>Underlag som är lätta att följa på byggarbetsplatsen</li>
                     </ul>

                     <div className="hero-actions">
                        <button type="button" className="btn-primary" onClick={() => scrollToId("contact")}>
                           Boka ett samtal
                        </button>
                        <button type="button" className="btn-primary" onClick={() => scrollToId("services")}>
                           Se vad vi räknar på
                        </button>
                     </div>
                  </div>

                  <div className="hero-photo-wrapper">
                     <Image
                        src="/fri.png"
                        alt="Kalkylservice AB arbetar med elkalkyler och ritningar"
                        width={468}
                        height={327}
                        className="hero-photo"
                        priority
                     />
                  </div>
               </div>
            </FadeSection>

            {/* USP / VARFÖR VI */}
            <FadeSection id="usp">
               <div className="section-narrow">
                  <h2>Varför Kalkylservice AB?</h2>
                  <div className="usp-grid">
                     <div className="usp-card">
                        <Clock className="usp-icon" />
                        <h3>30+ års erfarenhet</h3>
                        <p>
                           Lång praktisk erfarenhet av elinstallationer gör att kalkylerna bygger på verkliga tider och
                           arbetsmoment.
                        </p>
                     </div>

                     <div className="usp-card">
                        <Building2 className="usp-icon" />
                        <h3>Entreprenad & service</h3>
                        <p>Vi arbetar med både stora entreprenader och mindre projekt åt lokala elfirmor.</p>
                     </div>

                     <div className="usp-card">
                        <Cpu className="usp-icon" />
                        <h3>Strukturerade underlag</h3>
                        <p>Tydliga kalkyler som är lätta att följa upp i både produktion och ekonomi.</p>
                     </div>

                     <div className="usp-card">
                        <CheckCircle2 className="usp-icon" />
                        <h3>Trygg partner</h3>
                        <p>Personlig kontakt, raka besked och leveranser i tid – varje gång.</p>
                     </div>
                  </div>
               </div>
            </FadeSection>

            {/* TJÄNSTER */}
            <FadeSection id="services">
               <div className="section-wide services-section">
                  <h2>Vad vi räknar på åt ert företag</h2>
                  <p className="section-intro">
                     Tjänsterna räknas per timme till låg timkostnad. Vi hjälper er med bland annat:
                  </p>

                  <div className="services-grid">
                     <div className="service-card">
                        <h3>Entreprenadkalkyler</h3>
                        <ul>
                           <li>Kompletta anbudsunderlag</li>
                           <li>Ritade entreprenader</li>
                           <li>Totalentreprenader</li>
                        </ul>
                     </div>

                     <div className="service-card">
                        <h3>Produktionskalkyler</h3>
                        <ul>
                           <li>Produktionskalkyler för elinstallationer</li>
                           <li>Arbetsplaneringar</li>
                           <li>Dokumentationsservice</li>
                        </ul>
                     </div>

                     <div className="service-card">
                        <h3>Ekonomi & priser</h3>
                        <ul>
                           <li>Materialpriser & arbetstider</li>
                           <li>Lagerinköpspriser</li>
                           <li>Prisuppgifter & offertavlämningar</li>
                        </ul>
                     </div>

                     <div className="service-card">
                        <h3>Alternativa lösningar</h3>
                        <ul>
                           <li>Alternativa lösningar och jämförelser</li>
                           <li>Optimerade förslag utifrån era behov</li>
                        </ul>
                     </div>
                  </div>

                  <p className="signature">Vänliga hälsningar, Kalkylservice AB</p>
               </div>
            </FadeSection>

            {/* TESTIMONIALS */}
            <FadeSection id="testimonials">
               <div className="section-narrow">
                  <h2>Vad säger våra kunder?</h2>
                  <div className="testimonials-grid">
                     <article className="testimonial-card">
                        <Quote className="testimonial-quote" />
                        <p>
                           “Vi använder Kalkylservice för alla större entreprenader. Det ger oss trygghet i både pris
                           och tidplan.”
                        </p>
                        <span className="testimonial-name">Platschef, elentreprenör</span>
                     </article>

                     <article className="testimonial-card">
                        <Quote className="testimonial-quote" />
                        <p>
                           “Kalkylerna är tydliga och lätta att följa upp. Vi ser snabbt om vi ligger rätt i projektet.”
                        </p>
                        <span className="testimonial-name">Ekonomiansvarig, installationsföretag</span>
                     </article>

                     <article className="testimonial-card">
                        <Quote className="testimonial-quote" />
                        <p>“Snabba besked, raka svar och stor förståelse för vår verklighet ute på fältet.”</p>
                        <span className="testimonial-name">Servicechef, region Väst</span>
                     </article>
                  </div>
               </div>
            </FadeSection>

            {/* KONTAKT */}
            <FadeSection id="contact">
               <div className="section-wide contact-section">
                  <h2>Kontakta oss</h2>
                  <p className="section-intro">
                     Hör av dig så berättar vi mer om hur vi kan hjälpa ditt företag med elkalkyler.
                  </p>

                  <div className="contact-grid">
                     <div className="contact-item">
                        <Phone className="contact-icon" />
                        <div>
                           <h3>Telefon</h3>
                           <p>Mobil: 070-298 80 46</p>
                        </div>
                     </div>

                     <div className="contact-item">
                        <Mail className="contact-icon" />
                        <div>
                           <h3>E-post</h3>
                           <p>
                              <a href="mailto:kalkylservice@telia.com" className="contact-link">
                                 kalkylservice@telia.com
                              </a>
                           </p>
                        </div>
                     </div>

                     <div className="contact-item">
                        <MapPin className="contact-icon" />
                        <div>
                           <h3>Adress</h3>
                           <p>Emil Spelares väg 5</p>
                           <p>395 97 Läckeby</p>
                        </div>
                     </div>

                     <div className="contact-item">
                        <ExternalLink className="contact-icon" />
                        <div>
                           <h3>Karta</h3>
                           <p>
                              <a
                                 href="https://www.google.se/maps/place/Emil+Spelares+v%C3%A4g+5,+395+97+L%C3%A4ckeby/@56.7822555,16.2984839,17z/data=!3m1!4b1!4m6!3m5!1s0x4657c515015b2373:0x7bb1ebe256340aed!8m2!3d56.7822526!4d16.3010588!16s%2Fg%2F11c43yy_q0?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                                 target="_blank"
                                 rel="noreferrer"
                                 className="contact-link">
                                 Öppna i Google Maps
                              </a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeSection>
         </main>

         {/* FOOTER */}
         <footer className="footer">
            <div className="footer-inner">
               <div>
                  <p className="footer-brand">Kalkylservice AB</p>
                  <p className="footer-text">Din partner för trygga elkalkyler.</p>
               </div>
               <div className="footer-meta">
                  <span>© {new Date().getFullYear()} Kalkylservice AB</span>
               </div>
            </div>
         </footer>
      </div>
   );
}
