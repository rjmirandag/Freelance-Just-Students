// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
const logo = require('../assets/Just Students Logo.png');

const LandingPage = () => {
  // Componente Header
  const Header = () => (
    <header>
      <div className="header-left">
        <img src={logo} alt="Just Students Logo" />
        <nav>
          <a href="/">Inicio</a>
          <a href="/about">Acerca de</a>
          <a href="/contact">Contacto</a>
        </nav>
      </div>
      <div className="header-right">
        {/* Opciones para iniciar sesión */}
        <a href="/login/freelancer" className="btn">Iniciar Sesión como Freelancer</a>
        <a href="/login/requester" className="btn">Iniciar Sesión como Solicitante</a>
      </div>
    </header>
  );

  // Sección Hero – mensaje principal
  const HeroSection = () => (
    <section className="hero-container">
      <h1>Encuentra oportunidades freelance mientras estudias</h1>
      <p>
        Únete a Just Students, la comunidad que conecta talento estudiantil con proyectos reales.
      </p>
      <div className="hero-buttons">
        <a href="/register" className="btn">Regístrate ahora</a>
      </div>
    </section>
  );

  // Sección “How It Works”
  const HowItWorks = () => (
    <section className="how-it-works">
      <h2>¿Cómo funciona?</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Regístrate</h3>
          <p>Utiliza tu correo institucional o personal para crear tu cuenta.</p>
        </div>
        <div className="step">
          <h3>2. Publica o busca proyectos</h3>
          <p>
            Los estudiantes freelance publican su perfil y ofertan en proyectos, mientras los
            solicitantes comparten sus necesidades.
          </p>
        </div>
        <div className="step">
          <h3>3. Colabora y crece</h3>
          <p>
            Conecta con otros miembros de la comunidad, trabaja en proyectos reales y acumula
            experiencia.
          </p>
        </div>
      </div>
    </section>
  );

  // Sección de Testimonios
  const Testimonials = () => (
    <section className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonial">
        <p>
          "Gracias a Just Students encontré proyectos que complementaron mi carrera y me impulsaron
          profesionalmente."
        </p>
        <cite>- Estudiante Freelancer</cite>
      </div>
    </section>
  );

  // Sección Call to Action para invitar a los usuarios a registrarse
  const CallToAction = () => (
    <section className="call-to-action">
      <h2>¡Comienza ahora!</h2>
      <p>
        Únete a nuestra comunidad y transforma tu potencial en experiencia profesional. Da el primer
        paso hacia tu futuro.
      </p>
      <div className="cta-buttons">
        <a href="/register" className="btn">Registrarse</a>
      </div>
    </section>
  );

  // Composición final de la Landing Page (Dashboard)
  return (
    <div className="landing-container">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default LandingPage;