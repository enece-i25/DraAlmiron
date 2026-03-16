import whatsappIcon from '../assets/img/whatsapp.svg';

export default function BotonWhatsApp() {
  const numeroWhatsApp = '+543794011820';
  
  const handleWhatsApp = () => {
    const mensaje = 'Hola, quiero agendar una turno con la Dra. Cecilia Teresita Almirón';
    const url = `https://wa.me/${numeroWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className="whatsapp-button"
      onClick={handleWhatsApp}
      title="Contáctanos por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        transition: 'all 0.3s ease',
        animation: 'pulse 2s infinite',
        padding: 0,
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </button>
  );
}
