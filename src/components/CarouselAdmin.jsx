import { useState, useEffect } from 'react';

export default function CarouselAdmin({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Usar imágenes del localStorage si están disponibles
  const displayImages = images.length > 0 ? images : [
    { id: 1, titulo: 'Recepción', url: '📷 Recepción' },
    { id: 2, titulo: 'Sillón Dental', url: '📷 Sillón Dental' },
    { id: 3, titulo: 'Equipamiento', url: '📷 Equipamiento' },
    { id: 4, titulo: 'Área de Espera', url: '📷 Área de Espera' }
  ];

  // Resetear índice cuando el número de imágenes cambia
  useEffect(() => {
    if (currentIndex >= displayImages.length && displayImages.length > 0) {
      setCurrentIndex(0);
    }
  }, [displayImages.length, currentIndex]);

  // Auto-play del carrusel
  useEffect(() => {
    if (!autoPlay || displayImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % displayImages.length;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, displayImages.length]);

  // Reactivar auto-play después de 10 segundos de inactividad
  useEffect(() => {
    if (autoPlay) return;

    const timeout = setTimeout(() => {
      setAutoPlay(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  if (displayImages.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Cargando galería...</div>;
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '100%',
      margin: '0',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      maxHeight: '550px',
      height: '550px'
    }}>
      {/* Slide actual */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // Ratio 16:9
        backgroundColor: '#e0e0e0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          backgroundColor: '#e0e0e0'
        }}>
          {displayImages[currentIndex]?.url ? (
            <img
              key={currentIndex}
              src={displayImages[currentIndex].url}
              alt={displayImages[currentIndex].titulo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : null}
          <span id={`fallback-${currentIndex}`} style={{
            display: 'none'
          }}>
            📷
          </span>
        </div>

        {/* Título */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          color: 'white',
          padding: '20px 20px 15px',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          {displayImages[currentIndex].titulo}
        </div>
      </div>

      {/* Indicadores */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        flexWrap: 'wrap'
      }}>
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentIndex ? '25px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: index === currentIndex ? '#4a9fd8' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      {/* Contador */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        padding: '6px 10px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}>
        {currentIndex + 1} / {displayImages.length}
      </div>
    </div>
  );
}
