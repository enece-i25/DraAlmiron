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
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
    }}>
      {/* Slide actual */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '66.67%', // Ratio 3:2
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
          padding: '30px 20px 20px',
          fontSize: '1.3rem',
          fontWeight: 'bold'
        }}>
          {displayImages[currentIndex].titulo}
        </div>

        {/* Botones navegación */}
        <button
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
          }}
        >
          ◀
        </button>

        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
          }}
        >
          ▶
        </button>
      </div>

      {/* Indicadores */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        flexWrap: 'wrap'
      }}>
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentIndex ? '30px' : '12px',
              height: '12px',
              borderRadius: '6px',
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
        top: '15px',
        right: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '600'
      }}>
        {currentIndex + 1} / {displayImages.length}
      </div>
    </div>
  );
}
