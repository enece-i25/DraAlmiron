export default function Header({ abrirFormulario }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h1>Dra. Almirón</h1>
            <p className="tagline">Odontología Profesional</p>
          </div>
          <ul className="nav-menu">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
