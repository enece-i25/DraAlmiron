export default function Servicios({ items }) {
  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="servicios-grid">
          {items.map((item, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icon">{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
