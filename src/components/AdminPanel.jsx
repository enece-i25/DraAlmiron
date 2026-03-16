import { useState } from 'react';

export default function AdminPanel({ onLogout, onImagesUpdate }) {
  const [images, setImages] = useState(() => {
    const saved = localStorage.getItem('galeria_images');
    return saved ? JSON.parse(saved) : [
      { id: 1, titulo: 'Recepción', url: '📷 Recepción' },
      { id: 2, titulo: 'Sillón Dental', url: '📷 Sillón Dental' },
      { id: 3, titulo: 'Equipamiento', url: '📷 Equipamiento' },
      { id: 4, titulo: 'Área de Espera', url: '📷 Área de Espera' }
    ];
  });
  
  const [newImage, setNewImage] = useState({ titulo: '', url: '' });
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState(null);

  // Convertir archivo a Base64
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona una imagen');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen es muy grande. Máximo 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setNewImage({ ...newImage, url: base64 });
        setPreview(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newImage.titulo.trim() || !newImage.url.trim()) {
      alert('Por favor completa título y sube una imagen');
      return;
    }

    const updatedImages = [
      ...images,
      { id: Date.now(), titulo: newImage.titulo, url: newImage.url }
    ];
    setImages(updatedImages);
    localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
    onImagesUpdate(updatedImages);
    setNewImage({ titulo: '', url: '' });
    setPreview(null);
  };

  const handleDeleteImage = (id) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
    onImagesUpdate(updatedImages);
  };

  const handleEditImage = (id, titulo, url) => {
    setEditingId(id);
    setNewImage({ titulo, url });
    if (url.startsWith('data:')) {
      setPreview(url);
    }
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    if (!newImage.titulo.trim() || !newImage.url.trim()) {
      alert('Por favor completa título e imagen');
      return;
    }

    const updatedImages = images.map(img =>
      img.id === editingId
        ? { ...img, titulo: newImage.titulo, url: newImage.url }
        : img
    );
    setImages(updatedImages);
    localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
    onImagesUpdate(updatedImages);
    setNewImage({ titulo: '', url: '' });
    setPreview(null);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewImage({ titulo: '', url: '' });
    setPreview(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <div>
            <h1 style={{ color: '#4a9fd8', margin: '0 0 5px 0' }}>Panel de Administración</h1>
            <p style={{ color: '#999', margin: 0 }}>Gestiona las imágenes de la galería</p>
          </div>
          <button
            onClick={onLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Formulario */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#333', marginTop: 0 }}>
            {editingId ? '✏️ Editar Imagen' : '➕ Agregar Nueva Imagen'}
          </h2>
          
          <form onSubmit={editingId ? handleUpdateImage : handleAddImage}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                Título de la Imagen
              </label>
              <input
                type="text"
                value={newImage.titulo}
                onChange={(e) => setNewImage({ ...newImage, titulo: e.target.value })}
                placeholder="Ej: Recepción, Sillón, Equipamiento, etc."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                📸 Sube tu foto desde la computadora
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '2px solid #4a9fd8',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
              />
              <small style={{ color: '#999', marginTop: '5px', display: 'block' }}>
                Formatos: JPG, PNG, GIF. Máximo 5MB
              </small>
            </div>

            {(preview || (newImage.url && newImage.url.startsWith('data:'))) && (
              <div style={{
                marginBottom: '20px',
                padding: '15px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                border: '2px solid #4a9fd8'
              }}>
                <p style={{ margin: '0 0 10px 0', fontWeight: '600', color: '#333' }}>✅ Vista Previa:</p>
                <img
                  src={preview || newImage.url}
                  alt="preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '250px',
                    borderRadius: '6px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            )}

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                🔗 O usa URL de imagen (opcional)
              </label>
              <input
                type="url"
                value={newImage.url && !newImage.url.startsWith('data:') ? newImage.url : ''}
                onChange={(e) => {
                  setNewImage({ ...newImage, url: e.target.value });
                  if (!e.target.value.startsWith('data:')) setPreview(null);
                }}
                placeholder="https://ejemplo.com/imagen.jpg"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
              <small style={{ color: '#999', marginTop: '5px', display: 'block' }}>
                Puedes usar URLs públicas de Google Drive, Imgur, Cloudinary, etc.
              </small>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#4a9fd8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3a8bc8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4a9fd8'}
              >
                {editingId ? '✅ Actualizar Imagen' : '➕ Agregar Imagen'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: '12px 30px',
                    backgroundColor: '#999',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ✕ Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Lista de Imágenes */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#333', marginTop: 0 }}>Imágenes Actuales ({images.length})</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {images.map(img => (
              <div key={img.id} style={{
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#f9f9f9'
              }}>
                <div style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px',
                  fontSize: '2rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={img.url} 
                    alt={img.titulo}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>{img.titulo}</h4>
                <p style={{ margin: '0 0 15px 0', fontSize: '0.75rem', color: '#999', wordBreak: 'break-all', maxHeight: '40px', overflow: 'hidden' }}>
                  {img.url.substring(0, 50)}...
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleEditImage(img.id, img.titulo, img.url)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: '#4a9fd8',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('¿Eliminar esta imagen?')) {
                        handleDeleteImage(img.id);
                      }
                    }}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
