import whatsappIcon from '../assets/img/whatsapp.svg';

export default function Contacto({ formData, handleInputChange, handleFormSubmit, privacidad, setPrivacidad }) {
  const handleWhatsApp = () => {
    const numeroWhatsApp = '+543794011820';
    const mensaje = 'Hola, quiero agendar una turno con la Dra. Cecilia Teresita Almirón';
    const url = `https://wa.me/${numeroWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <div className="contacto-wrapper">
          <div className="contacto-info">
            <h2>Reservá tu Turno</h2>
            <p>Completá el formulario y nos pondremos en contacto para confirmar tu turno. Tu información será tratada con absoluta confidencialidad.</p>
            <div className="contacto-datos">
              <div className="dato">
                <span className="dato-icon">📞</span>
                <div>
                  <h4>Teléfono</h4>
                  <p><a href="">+543794011820</a></p>
                </div>
              </div>
              <div className="dato">
                <span className="dato-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:consultorio@email.com">Tu email</a></p>
                </div>
              </div>
              <div className="dato">
                <span className="dato-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Corrientes Capital</p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-secondary"
              onClick={handleWhatsApp}
              style={{
                marginTop: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                style={{
                  width: '20px',
                  height: '20px'
                }}
              />
              Escribir por WhatsApp
            </button>
          </div>
          <form className="formulario" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono de Contacto *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motivo">Motivo de la Consulta</label>
              <select
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleInputChange}
              >
                <option value="">Selecciona un motivo</option>
                <option value="consulta-general">Consulta General</option>
                <option value="limpieza">Limpieza y Profilaxis</option>
                <option value="endodoncia">Endodoncia</option>
                <option value="implantes">Implantes</option>
                <option value="urgencia">Urgencia Dental</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje Adicional</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntanos más sobre tu consulta..."
              ></textarea>
            </div>
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="privacidad"
                checked={privacidad}
                onChange={(e) => setPrivacidad(e.target.checked)}
                required
              />
              <label htmlFor="privacidad">Autorizo el uso de mis datos según la Ley 25.326 de Protección de Datos Personales</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Reservar Turno</button>
            <p className="form-disclaimer">La información proporcionada será utilizada exclusivamente para la gestión de turnos y consultas, conforme a la Ley 25.326 de Protección de Datos Personales.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
