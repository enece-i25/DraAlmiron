export default function Beneficios({ items }) {
  return (
    <section className="benefits">
      <div className="container">
        <h2>¿Por qué elegir nuestro consultorio?</h2>
        <div className="benefits-grid">
          {items.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
