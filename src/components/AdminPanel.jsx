import { useState } from 'react';

export default function AdminPanel({ onLogout, onImagesUpdate, onTestimoniosUpdate, onNoticiesUpdate }) {
  const [activeTab, setActiveTab] = useState('galeria');
  
  // ======================== GALERÍA ========================
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
  const [editingImageId, setEditingImageId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // ======================== TESTIMONIOS ========================
  const [testimonios, setTestimonios] = useState(() => {
    const saved = localStorage.getItem('testimonios');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newTestimonio, setNewTestimonio] = useState({ texto: '', autor: '', rating: 5 });
  const [editingTestimonioId, setEditingTestimonioId] = useState(null);

  // ======================== NOTICIAS ========================
  const [noticias, setNoticias] = useState(() => {
    const saved = localStorage.getItem('noticias');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newNoticia, setNewNoticia] = useState({ titulo: '', contenido: '', fecha: new Date().toISOString().split('T')[0], urlRedes: '', imagenUrl: '' });
  const [editingNoticiaId, setEditingNoticiaId] = useState(null);
  const [imagePreviewNoticia, setImagePreviewNoticia] = useState(null);

  const handleFileSelectNoticia = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona una imagen');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen es muy grande. Maximo 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setNewNoticia({ ...newNoticia, imagenUrl: base64 });
        setImagePreviewNoticia(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const detectEmbedType = (url) => {
    if (!url) return null;
    if (url.includes('instagram.com') || url.includes('instagr.am')) return 'instagram';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
    if (url.includes('tiktok.com')) return 'tiktok';
    return null;
  };

  // ======================== FUNCIONES GALERÍA ========================
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
        setImagePreview(base64);
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
    const updatedImages = [...images, { id: Date.now(), titulo: newImage.titulo, url: newImage.url }];
    setImages(updatedImages);
    localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
    onImagesUpdate?.(updatedImages);
    setNewImage({ titulo: '', url: '' });
    setImagePreview(null);
  };

  const handleEditImage = (id, titulo, url) => {
    setEditingImageId(id);
    setNewImage({ titulo, url });
    if (url.startsWith('data:')) setImagePreview(url);
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    if (!newImage.titulo.trim() || !newImage.url.trim()) {
      alert('Por favor completa título e imagen');
      return;
    }
    const updatedImages = images.map(img =>
      img.id === editingImageId ? { ...img, titulo: newImage.titulo, url: newImage.url } : img
    );
    setImages(updatedImages);
    localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
    onImagesUpdate?.(updatedImages);
    setNewImage({ titulo: '', url: '' });
    setImagePreview(null);
    setEditingImageId(null);
  };

  const handleDeleteImage = (id) => {
    if (confirm('¿Eliminar esta imagen?')) {
      const updatedImages = images.filter(img => img.id !== id);
      setImages(updatedImages);
      localStorage.setItem('galeria_images', JSON.stringify(updatedImages));
      onImagesUpdate?.(updatedImages);
    }
  };

  const handleCancelImage = () => {
    setEditingImageId(null);
    setNewImage({ titulo: '', url: '' });
    setImagePreview(null);
  };

  // ======================== FUNCIONES TESTIMONIOS ========================
  const handleAddTestimonio = (e) => {
    e.preventDefault();
    if (!newTestimonio.texto.trim() || !newTestimonio.autor.trim()) {
      alert('Por favor completa texto y autor');
      return;
    }
    const updatedTestimonios = [...testimonios, { id: Date.now(), ...newTestimonio, publicado: true }];
    setTestimonios(updatedTestimonios);
    localStorage.setItem('testimonios', JSON.stringify(updatedTestimonios));
    onTestimoniosUpdate?.(updatedTestimonios);
    setNewTestimonio({ texto: '', autor: '', rating: 5 });
  };

  const handleEditTestimonio = (id, texto, autor, rating) => {
    setEditingTestimonioId(id);
    setNewTestimonio({ texto, autor, rating });
  };

  const handleUpdateTestimonio = (e) => {
    e.preventDefault();
    if (!newTestimonio.texto.trim() || !newTestimonio.autor.trim()) {
      alert('Por favor completa texto y autor');
      return;
    }
    const updatedTestimonios = testimonios.map(t =>
      t.id === editingTestimonioId ? { ...t, ...newTestimonio } : t
    );
    setTestimonios(updatedTestimonios);
    localStorage.setItem('testimonios', JSON.stringify(updatedTestimonios));
    onTestimoniosUpdate?.(updatedTestimonios);
    setNewTestimonio({ texto: '', autor: '', rating: 5 });
    setEditingTestimonioId(null);
  };

  const handleDeleteTestimonio = (id) => {
    if (confirm('¿Eliminar este testimonio?')) {
      const updatedTestimonios = testimonios.filter(t => t.id !== id);
      setTestimonios(updatedTestimonios);
      localStorage.setItem('testimonios', JSON.stringify(updatedTestimonios));
      onTestimoniosUpdate?.(updatedTestimonios);
    }
  };

  const handleCancelTestimonio = () => {
    setEditingTestimonioId(null);
    setNewTestimonio({ texto: '', autor: '', rating: 5 });
  };

  // ======================== FUNCIONES NOTICIAS ========================
  const handleAddNoticia = (e) => {
    e.preventDefault();
    if (!newNoticia.titulo.trim() || (!newNoticia.contenido.trim() && !newNoticia.urlRedes.trim())) {
      alert('Por favor completa título y al menos contenido o URL de redes');
      return;
    }
    const updatedNoticias = [...noticias, { id: Date.now(), ...newNoticia }];
    setNoticias(updatedNoticias);
    localStorage.setItem('noticias', JSON.stringify(updatedNoticias));
    onNoticiesUpdate?.(updatedNoticias);
    setNewNoticia({ titulo: '', contenido: '', fecha: new Date().toISOString().split('T')[0], urlRedes: '', imagenUrl: '' });
    setImagePreviewNoticia(null);
  };

  const handleEditNoticia = (id, titulo, contenido, fecha, urlRedes = '', imagenUrl = '') => {
    setEditingNoticiaId(id);
    setNewNoticia({ titulo, contenido, fecha, urlRedes, imagenUrl });
    if (imagenUrl && imagenUrl.startsWith('data:')) {
      setImagePreviewNoticia(imagenUrl);
    }
  };

  const handleUpdateNoticia = (e) => {
    e.preventDefault();
    if (!newNoticia.titulo.trim() || (!newNoticia.contenido.trim() && !newNoticia.urlRedes.trim())) {
      alert('Por favor completa título y al menos contenido o URL de redes');
      return;
    }
    const updatedNoticias = noticias.map(n =>
      n.id === editingNoticiaId ? { ...n, ...newNoticia } : n
    );
    setNoticias(updatedNoticias);
    localStorage.setItem('noticias', JSON.stringify(updatedNoticias));
    onNoticiesUpdate?.(updatedNoticias);
    setNewNoticia({ titulo: '', contenido: '', fecha: new Date().toISOString().split('T')[0], urlRedes: '', imagenUrl: '' });
    setImagePreviewNoticia(null);
    setEditingNoticiaId(null);
  };

  const handleDeleteNoticia = (id) => {
    if (confirm('¿Eliminar esta noticia?')) {
      const updatedNoticias = noticias.filter(n => n.id !== id);
      setNoticias(updatedNoticias);
      localStorage.setItem('noticias', JSON.stringify(updatedNoticias));
      onNoticiesUpdate?.(updatedNoticias);
    }
  };

  const handleCancelNoticia = () => {
    setEditingNoticiaId(null);
    setNewNoticia({ titulo: '', contenido: '', fecha: new Date().toISOString().split('T')[0], urlRedes: '', imagenUrl: '' });
    setImagePreviewNoticia(null);
  };

  const buttonStyle = (color) => ({
    padding: '12px 30px',
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s'
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
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
            <p style={{ color: '#999', margin: 0 }}>Gestiona galería, testimonios y noticias</p>
          </div>
          <button onClick={onLogout} style={{ ...buttonStyle('#ef4444'), padding: '10px 20px' }}>
            Cerrar Sesión
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {[['galeria', '🖼️ Galería'], ['testimonios', '⭐ Testimonios'], ['noticias', '📰 Noticias']].map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                backgroundColor: activeTab === tab ? '#4a9fd8' : 'white',
                color: activeTab === tab ? 'white' : '#666',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* GALERÍA */}
        {activeTab === 'galeria' && (
          <>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>{editingImageId ? '✏️ Editar Imagen' : '➕ Agregar Nueva Imagen'}</h2>
              <form onSubmit={editingImageId ? handleUpdateImage : handleAddImage}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Título</label>
                  <input type="text" value={newImage.titulo} onChange={(e) => setNewImage({ ...newImage, titulo: e.target.value })} placeholder="Ej: Recepción, Sillón" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>📸 Imagen</label>
                  <input type="file" accept="image/*" onChange={handleFileSelect} style={{ width: '100%', padding: '10px', border: '2px solid #4a9fd8', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                {imagePreview && (
                  <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px', border: '2px solid #4a9fd8' }}>
                    <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>✅ Vista Previa:</p>
                    <img src={imagePreview} alt="preview" style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '6px' }} />
                  </div>
                )}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" style={buttonStyle('#4a9fd8')}>{editingImageId ? '✅ Actualizar' : '➕ Agregar'}</button>
                  {editingImageId && <button type="button" onClick={handleCancelImage} style={buttonStyle('#999')}>✕ Cancelar</button>}
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>Imágenes ({images.length})</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {images.map(img => (
                  <div key={img.id} style={{ border: '2px solid #e0e0e0', borderRadius: '8px', padding: '15px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ width: '100%', height: '150px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', overflow: 'hidden' }}>
                      <img src={img.url} alt={img.titulo} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ margin: '0 0 15px 0' }}>{img.titulo}</h4>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleEditImage(img.id, img.titulo, img.url)} style={{ ...buttonStyle('#4a9fd8'), flex: 1, padding: '10px' }}>✏️</button>
                      <button onClick={() => handleDeleteImage(img.id)} style={{ ...buttonStyle('#ef4444'), flex: 1, padding: '10px' }}>🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* TESTIMONIOS */}
        {activeTab === 'testimonios' && (
          <>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>{editingTestimonioId ? '✏️ Editar Testimonio' : '➕ Nuevo Testimonio'}</h2>
              <form onSubmit={editingTestimonioId ? handleUpdateTestimonio : handleAddTestimonio}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Autor</label>
                  <input type="text" value={newTestimonio.autor} onChange={(e) => setNewTestimonio({ ...newTestimonio, autor: e.target.value })} placeholder="Nombre del paciente" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Calificación</label>
                  <select value={newTestimonio.rating} onChange={(e) => setNewTestimonio({ ...newTestimonio, rating: parseInt(e.target.value) })} style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }}>
                    {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ⭐</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Comentario</label>
                  <textarea value={newTestimonio.texto} onChange={(e) => setNewTestimonio({ ...newTestimonio, texto: e.target.value })} placeholder="Comentario del paciente..." rows="4" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" style={buttonStyle('#4a9fd8')}>{editingTestimonioId ? '✅ Actualizar' : '➕ Publicar'}</button>
                  {editingTestimonioId && <button type="button" onClick={handleCancelTestimonio} style={buttonStyle('#999')}>✕ Cancelar</button>}
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>Testimonios ({testimonios.length})</h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                {testimonios.map(t => (
                  <div key={t.id} style={{ border: '2px solid #e0e0e0', borderRadius: '8px', padding: '15px', backgroundColor: '#f9f9f9' }}>
                    <p style={{ margin: '0 0 10px 0', fontStyle: 'italic', color: '#555' }}>"{t.texto}"</p>
                    <h4 style={{ margin: '0 0 5px 0', color: '#4a9fd8' }}>{t.autor}</h4>
                    <p style={{ margin: '0 0 15px 0' }}>{'⭐'.repeat(t.rating)}</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleEditTestimonio(t.id, t.texto, t.autor, t.rating)} style={{ ...buttonStyle('#4a9fd8'), flex: 1, padding: '10px' }}>✏️</button>
                      <button onClick={() => handleDeleteTestimonio(t.id)} style={{ ...buttonStyle('#ef4444'), flex: 1, padding: '10px' }}>🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* NOTICIAS */}
        {activeTab === 'noticias' && (
          <>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>{editingNoticiaId ? '✏️ Editar Noticia' : '➕ Nueva Noticia'}</h2>
              <form onSubmit={editingNoticiaId ? handleUpdateNoticia : handleAddNoticia}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Título</label>
                  <input type="text" value={newNoticia.titulo} onChange={(e) => setNewNoticia({ ...newNoticia, titulo: e.target.value })} placeholder="Título de la noticia" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Fecha</label>
                  <input type="date" value={newNoticia.fecha} onChange={(e) => setNewNoticia({ ...newNoticia, fecha: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Contenido</label>
                  <textarea value={newNoticia.contenido} onChange={(e) => setNewNoticia({ ...newNoticia, contenido: e.target.value })} placeholder="Escribe la noticia..." rows="5" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>� Imagen de la Noticia</label>
                  <input type="file" accept="image/*" onChange={handleFileSelectNoticia} style={{ width: '100%', padding: '10px', border: '2px solid #4a9fd8', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                {imagePreviewNoticia && (
                  <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px', border: '2px solid #4a9fd8' }}>
                    <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>✅ Vista Previa:</p>
                    <img src={imagePreviewNoticia} alt="preview" style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '6px' }} />
                  </div>
                )}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>�🔗 URL de Redes Sociales (Instagram, YouTube, TikTok, Facebook)</label>
                  <input type="url" value={newNoticia.urlRedes} onChange={(e) => setNewNoticia({ ...newNoticia, urlRedes: e.target.value })} placeholder="Ej: https://instagram.com/p/abc123 o https://youtube.com/watch?v=abc123" style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', boxSizing: 'border-box' }} />
                  <small style={{ color: '#999', marginTop: '5px', display: 'block' }}>
                    💡 <strong>Cómo obtener la URL:</strong>
                    <br />📸 Instagram: Haz clic en los 3 puntos del post → "Copiar link"
                    <br />🎥 YouTube: Copia la URL de la barra de direcciones
                    <br />🎵 TikTok: Haz clic en Compartir → "Copiar link"
                    <br />👥 Facebook: Haz clic en los 3 puntos → "Obtener link del post"
                  </small>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" style={buttonStyle('#4a9fd8')}>{editingNoticiaId ? '✅ Actualizar' : '➕ Publicar'}</button>
                  {editingNoticiaId && <button type="button" onClick={handleCancelNoticia} style={buttonStyle('#999')}>✕ Cancelar</button>}
                </div>
              </form>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ color: '#333', marginTop: 0 }}>Noticias ({noticias.length})</h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                {noticias.map(n => (
                  <div key={n.id} style={{ border: '2px solid #e0e0e0', borderRadius: '8px', padding: '15px', backgroundColor: '#f9f9f9', display: 'grid', gridTemplateColumns: n.imagenUrl ? '140px 1fr' : '1fr', gap: '15px', alignItems: 'start' }}>
                    {n.imagenUrl && (
                      <div style={{ width: '140px', height: '140px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src={n.imagenUrl} alt={n.titulo} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', color: '#4a9fd8' }}>{n.titulo}</h3>
                      <p style={{ margin: '0 0 10px 0', color: '#999', fontSize: '0.9rem' }}>📅 {n.fecha}</p>
                      {n.contenido && <p style={{ margin: '0 0 15px 0', color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>{n.contenido.substring(0, 100)}{n.contenido.length > 100 ? '...' : ''}</p>}
                      {n.urlRedes && <p style={{ margin: '0 0 15px 0', color: '#4a9fd8', fontWeight: '600', fontSize: '0.9rem' }}>🔗 <a href={n.urlRedes} target="_blank" rel="noreferrer" style={{ color: '#4a9fd8', textDecoration: 'underline' }}>{detectEmbedType(n.urlRedes)?.toUpperCase()} Post</a></p>}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => handleEditNoticia(n.id, n.titulo, n.contenido, n.fecha, n.urlRedes, n.imagenUrl)} style={{ ...buttonStyle('#4a9fd8'), flex: 1, padding: '10px' }}>✏️</button>
                        <button onClick={() => handleDeleteNoticia(n.id)} style={{ ...buttonStyle('#ef4444'), flex: 1, padding: '10px' }}>🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
