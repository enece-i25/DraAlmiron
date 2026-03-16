import CarouselAdmin from './CarouselAdmin';

export default function Galeria({ images = [] }) {
  return (
    <section className="galeria">
      <div className="container">
        <h2>Nuestro Consultorio</h2>
        <p className="galeria-subtitle">Espacio moderno, limpio y acogedor para tu comodidad</p>
      </div>
      
      <div style={{ marginBottom: '40px', marginTop: '30px' }}>
        <CarouselAdmin images={images} />
      </div>

      <div className="container">
        <p className="galeria-nota">Nota: Se mostrarán fotografías profesionales del consultorio. Todas las imágenes de pacientes requieren consentimiento informado.</p>
      </div>
    </section>
  );
}
