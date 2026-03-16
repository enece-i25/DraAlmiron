import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Notification from './components/Notification';
import BotonWhatsApp from './components/BotonWhatsApp';
import Hero from './components/Hero';
import Credenciales from './components/Credenciales';
import Beneficios from './components/Beneficios';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Testimonios from './components/Testimonios';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import FAQ from './components/FAQ';
import Legal from './components/Legal';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  
  // ============ GALERÍA ============
  const [galeryImages, setGaleryImages] = useState(() => {
    const saved = localStorage.getItem('galeria_images');
    return saved ? JSON.parse(saved) : [];
  });

  // ============ TESTIMONIOS ============
  const [testimoniosData, setTestimoniosData] = useState(() => {
    const saved = localStorage.getItem('testimonios');
    return saved ? JSON.parse(saved) : [
      {
        texto: "La Dra. Almirón me explicó cada paso del tratamiento y me hizo sentir segura en todo momento. Recomiendo su consultorio.",
        autor: "Mariana G.",
        rating: 5
      },
      {
        texto: "Llevé a mi hijo a su primera consulta y la atención fue excelente. Nos manejaron su miedo perfecto.",
        autor: "Pablo R.",
        rating: 5
      },
      {
        texto: "Me realicé una cirugía de implante y todo salió perfecto. El consultorio es moderno y la Dra. impecable.",
        autor: "Lucía F.",
        rating: 5
      }
    ];
  });

  // ============ NOTICIAS ============
  const [noticiasData, setNoticiasData] = useState(() => {
    const saved = localStorage.getItem('noticias');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    motivo: '',
    mensaje: ''
  });
  
  const [privacidad, setPrivacidad] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [notification, setNotification] = useState(null);

  // Verificar si hay sesión guardada
  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Scroll hacia el inicio al cargar la página
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cargar datos dinámicamente
  React.useEffect(() => {
    const savedGaleria = localStorage.getItem('galeria_images');
    if (savedGaleria) setGaleryImages(JSON.parse(savedGaleria));
    
    const savedTestimonios = localStorage.getItem('testimonios');
    if (savedTestimonios) setTestimoniosData(JSON.parse(savedTestimonios));
    
    const savedNoticias = localStorage.getItem('noticias');
    if (savedNoticias) setNoticiasData(JSON.parse(savedNoticias));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarTelefono = (telefono) => {
    const regex = /^[\d\s\+\-\(\)]{8,}$/;
    return regex.test(telefono);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.email.trim()) {
      mostrarNotificacion('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    if (!validarEmail(formData.email)) {
      mostrarNotificacion('Por favor ingresa un email válido.', 'error');
      return;
    }

    if (!validarTelefono(formData.telefono)) {
      mostrarNotificacion('Por favor ingresa un teléfono válido.', 'error');
      return;
    }

    if (!privacidad) {
      mostrarNotificacion('Debes aceptar la política de privacidad.', 'error');
      return;
    }

    console.log('Datos del formulario:', { ...formData, privacidad });
    mostrarNotificacion('¡Turno reservado exitosamente! Nos pondremos en contacto pronto.', 'exito');
    
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      motivo: '',
      mensaje: ''
    });
    setPrivacidad(false);
  };

  const mostrarNotificacion = (mensaje, tipo) => {
    setNotification({ mensaje, tipo });
    setTimeout(() => setNotification(null), 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      pregunta: "¿Qué obras sociales se aceptan en el consultorio?",
      respuesta: "Trabajamos con las principales obras sociales y prepagas de la región. Consultá si tu cobertura está incluida y te asesoramos sobre los alcances y requisitos para cada tratamiento."
    },
    {
      pregunta: "¿Qué incluye la primera consulta odontológica?",
      respuesta: "La primera consulta consiste en una entrevista personalizada, evaluación clínica completa, toma de fotografías intraorales y, si es necesario, radiografías. Recibirás un diagnóstico detallado y un plan de tratamiento adaptado a tus necesidades."
    },
    {
      pregunta: "¿Cómo solicito un turno de urgencia?",
      respuesta: "En caso de dolor intenso, fractura dental o infección, comunicate por teléfono o completá el formulario indicando 'urgencia'. Te daremos prioridad para una atención rápida y segura."
    },
    {
      pregunta: "¿Qué debo llevar a mi consulta?",
      respuesta: "Traé tu DNI, credencial de obra social (si corresponde) y estudios previos si los tenés. Si sos paciente nuevo, llegá 10 minutos antes para completar tu ficha de ingreso."
    },
    {
      pregunta: "¿Atienden a niños? ¿Cómo es la atención odontopediátrica?",
      respuesta: "Sí, contamos con atención especializada para niños. Utilizamos técnicas de manejo de conducta y un ambiente amigable para que la experiencia sea positiva y sin miedo."
    },
    {
      pregunta: "¿Qué medidas de bioseguridad se aplican?",
      respuesta: "Cumplimos con estrictos protocolos de desinfección, uso de equipos de protección personal y esterilización de instrumental, garantizando un entorno seguro para todos los pacientes."
    },
    {
      pregunta: "¿Qué opciones de pago hay disponibles?",
      respuesta: "Aceptamos efectivo, tarjetas de débito y crédito, y ofrecemos planes de pago para tratamientos extensos. Consultá por promociones vigentes y facilidades de financiación."
    },
    {
      pregunta: "¿Cómo se protegen mis datos personales?",
      respuesta: "Tus datos son tratados con absoluta confidencialidad y solo se utilizan para la gestión de turnos y tratamientos, en cumplimiento de la Ley 25.326 de Protección de Datos Personales."
    }
  ];

  const beneficios = [
    { titulo: "Atención Personalizada", descripcion: "Sin apuros, adaptada a tus necesidades y prioridades.", icono: "👥" },
    { titulo: "Consultorio Moderno", descripcion: "Equipado con tecnología de vanguardia y ambiente acogedor.", icono: "🏥" },
    { titulo: "Máxima Seguridad", descripcion: "Estricto cumplimiento de protocolos de bioseguridad.", icono: "🛡️" },
    { titulo: "Comunicación Clara", descripcion: "Explicaciones claras y acompañamiento en cada etapa del tratamiento.", icono: "💬" },
    { titulo: "Opciones de Pago", descripcion: "Trabajamos con obras sociales y ofrecemos planes de pago.", icono: "💳" },
    { titulo: "Calidad y Confianza", descripcion: "Enfoque integral en tu salud bucal y bienestar general.", icono: "⭐" }
  ];

  const servicios = [
    { titulo: "Cirugía Oral", descripcion: "Extracciones complejas, colocación de implantes y tratamiento de infecciones. Realizado bajo protocolos de asepsia y control del dolor.", icono: "🔪" },
    { titulo: "Operatoria Dental", descripcion: "Restauración de dientes afectados por caries, fracturas o desgaste. Materiales estéticos y técnicas modernas.", icono: "🦷" },
    { titulo: "Endodoncia", descripcion: "Salvamos dientes infectados eliminando la infección y preservando la estructura dental. Procedimiento seguro con tecnología de última generación.", icono: "💉" },
    { titulo: "Periodoncia", descripcion: "Tratamiento de enfermedades de encías (gingivitis y periodontitis) mediante limpiezas profundas y educación en higiene oral.", icono: "🌱" },
    { titulo: "Odontopediatría", descripcion: "Atención especializada para niños con enfoque lúdico y preventivo. Técnicas de manejo de conducta y ambiente amigable.", icono: "👶" },
    { titulo: "Estética Dental", descripcion: "Blanqueamientos, carillas y tratamientos para mejorar la apariencia de tu sonrisa. Resultados naturales y duraderos.", icono: "✨" }
  ];

  return (
    <div className="app">
      {/* Si no está autenticado pero presionó acceso admin, mostrar login */}
      {!isAuthenticated && showAdmin ? (
        <Login onLoginSuccess={() => {
          setIsAuthenticated(true);
        }} />
      ) : null}

      {/* Si está autenticado y quiere ver admin, mostrar panel */}
      {isAuthenticated && showAdmin ? (
        <AdminPanel 
          onLogout={() => {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('usuario');
            setIsAuthenticated(false);
            setShowAdmin(false);
          }}
          onImagesUpdate={(images) => {
            setGaleryImages(images);
          }}
          onTestimoniosUpdate={(testimonios) => {
            setTestimoniosData(testimonios);
          }}
          onNoticiesUpdate={(noticias) => {
            setNoticiasData(noticias);
          }}
        />
      ) : null}

      {/* Mostrar página normal si no está en admin */}
      {!showAdmin ? (
        <>
          <Header 
            abrirFormulario={() => {
              const elemento = document.getElementById('contacto');
              elemento?.scrollIntoView({ behavior: 'smooth' });
            }}
            onAdminClick={() => setShowAdmin(true)}
          />

          {notification && (
            <Notification mensaje={notification.mensaje} tipo={notification.tipo} />
          )}

          <BotonWhatsApp />

          <Hero scrollToContacto={() => {
            const elemento = document.getElementById('contacto');
            elemento?.scrollIntoView({ behavior: 'smooth' });
          }} />

          <Credenciales />

          <Beneficios items={beneficios} />

          <Servicios items={servicios} />

          <Galeria images={galeryImages} />

          <Testimonios items={testimoniosData.length > 0 ? testimoniosData : testimonios} />

          <Noticias items={noticiasData} />

          <Contacto
            formData={formData}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            privacidad={privacidad}
            setPrivacidad={setPrivacidad}
          />

          <FAQ items={faqItems} openIndex={openFaqIndex} toggleFaq={toggleFaq} />

          <Legal />

          <Footer />
        </>
      ) : null}
    </div>
  );
}
