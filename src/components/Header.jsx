import { useState } from 'react';

export default function Header({ abrirFormulario, onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <h1>Dra. Almirón</h1>
            <p className="tagline">Odontología Profesional</p>
          </div>
          
          {/* Botón hamburguesa para móviles */}
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menú de navegación desktop */}
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

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <>
          {/* Overlay oscuro */}
          <div 
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
          
          {/* Menú lateral */}
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-menu">
              <li><a href="#hero" onClick={handleMenuItemClick}>Inicio</a></li>
              <li><a href="#servicios" onClick={handleMenuItemClick}>Servicios</a></li>
              <li><a href="#testimonios" onClick={handleMenuItemClick}>Testimonios</a></li>
              <li><a href="#contacto" onClick={handleMenuItemClick}>Contacto</a></li>
              <li><a href="#faq" onClick={handleMenuItemClick}>FAQ</a></li>
              {onAdminClick && (
                <li className="admin-mobile">
                  <button 
                    className="btn-admin-mobile"
                    onClick={() => {
                      onAdminClick();
                      setMenuOpen(false);
                    }}
                  >
                    🔐 Admin
                  </button>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
