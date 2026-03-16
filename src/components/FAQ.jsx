export default function FAQ({ items, openIndex, toggleFaq }) {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          {items.map((item, index) => (
            <div key={index} className="faq-item" style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--color-gris-medio)' }}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: 'var(--color-gris-claro)',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: 600,
                  color: 'var(--color-celeste)',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-celeste)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gris-claro)';
                  e.currentTarget.style.color = 'var(--color-celeste)';
                }}
              >
                <span>{item.pregunta}</span>
                <span style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
              </button>
              {openIndex === index && (
                <div style={{ padding: '20px', backgroundColor: 'var(--color-blanco)' }}>
                  <p style={{ color: 'var(--color-subtexto)', lineHeight: 1.8, margin: 0 }}>{item.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
