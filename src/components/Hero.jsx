export default function Hero({ scrollToContacto }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Tu sonrisa, nuestra prioridad</h1>
        <p className="hero-subtitle">Atención odontológica profesional y cercana en Corrientes Capital</p>
        <button className="btn btn-primary btn-lg" onClick={scrollToContacto}>
          Reservá tu turno
        </button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
}
