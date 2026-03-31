import { useState } from 'react';
import CarouselAdmin from './CarouselAdmin';

export default function Galeria({ images = [] }) {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: '✨',
      title: 'Equipamiento Moderno',
      description: 'Tecnología de punta para tu comodidad'
    },
    {
      id: 2,
      icon: '🧼',
      title: 'Higiene Certificada',
      description: 'Protocolos de desinfección estrictos'
    },
    {
      id: 3,
      icon: '😌',
      title: 'Ambiente Acogedor',
      description: 'Diseño pensado para tu bienestar'
    },
    {
      id: 4,
      icon: '👨‍⚕️',
      title: 'Profesionalismo',
      description: 'Equipo altamente capacitado'
    }
  ];

  const testimonial = {
    text: '"Me sorprendió lo moderno y limpio que es el consultorio. La Dra. y su equipo hacen sentir muy seguro"',
    author: 'Carlos M.',
    role: 'Paciente'
  };

  return (
    <section className="galeria" aria-labelledby="galeria-title">
      <div className="container">
        <div className="galeria-header">
          <h2 id="galeria-title" className="galeria-title">Nuestro Consultorio</h2>
          <p className="galeria-subtitle">Espacio moderno, limpio y acogedor para tu comodidad</p>
        </div>
      </div>

      {/* Carousel con contador - Full Width */}
      <div className="galeria-carousel-wrapper">
        <CarouselAdmin images={images} />
        <div className="galeria-counter" aria-live="polite">
          Galería de imágenes del consultorio
        </div>
      </div>

      <div className="container">
        <div className="galeria-benefits">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="benefit-card"
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
              role="article"
              aria-label={`${benefit.title}: ${benefit.description}`}
              style={{
                transform: hoveredBenefit === benefit.id ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Mejorado */}
        <div className="galeria-cta-section">
          <h3>¿Te gustaría conocer nuestro consultorio?</h3>
          <p>Agenda tu consulta sin compromiso y comprueba la calidad de nuestro servicio</p>
          <a 
            href="#contacto" 
            className="cta-button"
            aria-label="Ir a la sección de contacto para agendar tu cita"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Testimonial integrado */}
        <div className="galeria-testimonial" role="blockquote">
          <div className="testimonial-quote">{testimonial.text}</div>
          <div className="testimonial-author">
            <span className="author-name">{testimonial.author}</span>
            <span className="author-role">{testimonial.role}</span>
          </div>
          <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
        </div>

        {/* Nota legal */}
        <div className="galeria-nota">
          <p>
            <strong>Nota:</strong> Se mostrarán fotografías profesionales del consultorio. 
            Todas las imágenes de pacientes requieren consentimiento informado y privacidad garantizada.
          </p>
        </div>
      </div>
    </section>
  );
}
