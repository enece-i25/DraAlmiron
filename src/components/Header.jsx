import { useState } from 'react';

export default function Header({ abrirFormulario, onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    handleMenuItemClick();
    
    // Obtener el elemento destino
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Obtener la altura del navbar
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    // Calcular la posición con offset
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra para padding

    // Scroll suave
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
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
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Inicio</a></li>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</a></li>
              <li><a href="#testimonios" onClick={(e) => handleNavClick(e, '#testimonios')}>Testimonios</a></li>
              <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>Contacto</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
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
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Inicio</a></li>
              <li><a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</a></li>
              <li><a href="#testimonios" onClick={(e) => handleNavClick(e, '#testimonios')}>Testimonios</a></li>
              <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>Contacto</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
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
