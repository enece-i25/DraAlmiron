export default function Notification({ mensaje, tipo }) {
  return (
    <div className={`mensaje-notificacion ${tipo}`} style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px 20px',
      borderRadius: '8px',
      fontWeight: '600',
      zIndex: 1000,
      backgroundColor: tipo === 'exito' ? '#10b981' : '#ef4444',
      color: 'white',
      animation: 'deslizarIn 0.3s ease'
    }}>
      {mensaje}
    </div>
  );
}
