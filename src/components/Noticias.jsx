import { useEffect } from 'react';

const getEmbedUrl = (url) => {
  if (!url) return null;
  
  // Instagram - usar oEmbed
  if (url.includes('instagram.com') || url.includes('instagr.am')) {
    return url;
  }
  
  // YouTube - extraer video ID
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId;
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else {
      videoId = new URLSearchParams(url.split('?')[1]).get('v');
    }
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // TikTok - usar la URL original
  if (url.includes('tiktok.com')) {
    return url;
  }
  
  // Facebook - usar oEmbed
  if (url.includes('facebook.com') || url.includes('fb.watch')) {
    return url;
  }
  
  return null;
};

const getEmbedType = (url) => {
  if (!url) return null;
  if (url.includes('instagram.com') || url.includes('instagr.am')) return 'instagram';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('tiktok.com')) return 'tiktok';
  if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
  return null;
};

export default function Noticias({ items }) {
  useEffect(() => {
    // Delay para asegurar que el DOM se haya renderizado
    const delay = setTimeout(() => {
      // Procesar Instagram embeds
      if (window.instgrm && window.instgrm.Embeds) {
        try {
          window.instgrm.Embeds.process();
        } catch (e) {
          console.log('Instagram embed processing:', e);
        }
      }
      
      // Procesar TikTok embeds
      if (window.tiktok && window.tiktok.Embed) {
        try {
          window.tiktok.Embed.lib.render(document.body);
        } catch (e) {
          console.log('TikTok embed processing:', e);
        }
      }
      
      // Procesar Facebook embeds
      if (window.FB && window.FB.XFBML) {
        try {
          window.FB.XFBML.parse();
        } catch (e) {
          console.log('Facebook embed processing:', e);
        }
      }
    }, 500);
    
    return () => clearTimeout(delay);
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section id="noticias" className="noticias">
      <div className="container">
        <h2>📰 Novedades</h2>
        <div className="noticias-grid">
          {items.map((noticia, index) => {
            const embedType = getEmbedType(noticia.urlRedes);
            const embedUrl = getEmbedUrl(noticia.urlRedes);
            
            return (
              <div key={index} className="noticia-card">
                <div className="noticia-fecha">📅 {noticia.fecha}</div>
                {noticia.imagenUrl && (
                  <div className="noticia-imagen">
                    <img src={noticia.imagenUrl} alt={noticia.titulo} />
                  </div>
                )}
                <h3>{noticia.titulo}</h3>
                
                {noticia.urlRedes && embedType === 'youtube' && embedUrl && (
                  <div className="noticia-embed youtube-embed">
                    <iframe 
                      src={embedUrl} 
                      title={noticia.titulo}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                      allowFullScreen
                    />
                  </div>
                )}
                
                {noticia.urlRedes && embedType === 'instagram' && (
                  <div className="noticia-embed instagram-embed" key={`ig-${noticia.id}`}>
                    <blockquote 
                      className="instagram-media" 
                      data-instgrm-permalink={noticia.urlRedes} 
                      data-instgrm-version="14"
                      style={{ marginBottom: '0' }}
                    />
                  </div>
                )}
                
                {noticia.urlRedes && embedType === 'tiktok' && (
                  <div className="noticia-embed tiktok-embed" key={`tk-${noticia.id}`}>
                    <blockquote 
                      className="tiktok-embed"
                      cite={noticia.urlRedes}
                      data-source="instagram"
                      style={{ width: '100%' }}
                    >
                      <section><a target="_blank" rel="noreferrer" href={noticia.urlRedes}>Ver en TikTok</a></section>
                    </blockquote>
                  </div>
                )}
                
                {noticia.urlRedes && embedType === 'facebook' && (
                  <div className="noticia-embed facebook-embed" key={`fb-${noticia.id}`}>
                    <div 
                      className="fb-post" 
                      data-href={noticia.urlRedes} 
                      data-show-text="true"
                      data-width="550"
                    />
                  </div>
                )}
                
                {noticia.contenido && (
                  <p>{noticia.contenido}</p>
                )}
                
                {!noticia.contenido && noticia.urlRedes && (
                  <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '10px' }}>
                    📱 Ver más en {embedType.toUpperCase()}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
