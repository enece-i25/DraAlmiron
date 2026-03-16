export default function Testimonios({ items }) {
  return (
    <section id="testimonios" className="testimonios">
      <div className="container">
        <h2>Testimonios de Pacientes</h2>
        <div className="testimonios-grid">
          {items.map((item, index) => (
            <div key={index} className="testimonio-card">
              <div className="stars">{'⭐'.repeat(item.rating)}</div>
              <p className="testimonio-texto">"{item.texto}"</p>
              <p className="testimonio-autor">— {item.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
