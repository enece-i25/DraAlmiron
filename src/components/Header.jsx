export default function Header({ abrirFormulario, onAdminClick }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <h1>Dra. Almirón</h1>
            <p className="tagline">Odontología Profesional</p>
          </div>
          <div className="nav-right">
            <ul className="nav-menu">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
            {onAdminClick && (
              <button 
                className="btn-admin"
                onClick={onAdminClick}
                title="Acceso administrador"
              >
                🔐 Admin
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
