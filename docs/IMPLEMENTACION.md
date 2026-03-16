# 📋 Guía de Implementación - Landing Page Dra. Almirón

## 🚀 Inicio Rápido

### Paso 1: Verificar Archivos
```
✓ index.html       - Estructura HTML
✓ styles.css       - Estilos CSS (colores, responsive)
✓ script.js        - Funcionalidades JavaScript
✓ config.json      - Configuración editable
✓ README.md        - Documentación completa
```

### Paso 2: Abrir la Página
- **Opción A (Local)**: Haz doble clic en `index.html`
- **Opción B (Servidor)**: Sube archivos a un hosting web

### Paso 3: Pruebas Iniciales
```
✓ Verifica que todos los estilos se cargen correctamente
✓ Prueba la navegación en móvil y desktop
✓ Valida el formulario
✓ Abre/cierra las preguntas del FAQ
```

---

## ⚙️ Personalización Esencial

### 1️⃣ Actualizar Información de Contacto

**En `index.html` - Busca la sección "Contacto":**

```html
<!-- Línea aprox. 268 -->
<div class="dato">
    <span class="dato-icon">📞</span>
    <div>
        <h4>Teléfono</h4>
        <p><a href="tel:+543794XXX-XXXX">+54 (Actualizar)</a></p>
    </div>
</div>

<!-- Línea aprox. 275 -->
<div class="dato">
    <span class="dato-icon">📧</span>
    <div>
        <h4>Email</h4>
        <p><a href="mailto:consultorio@email.com">tu-email@email.com</a></p>
    </div>
</div>
```

**Reemplaza:**
- `+543794XXX-XXXX` → Tu número de teléfono real con código de país
- `consultorio@email.com` → Tu email profesional

---

### 2️⃣ Actualizar Destino del Formulario

**En `script.js` - Función para enviar datos:**

```javascript
// Línea aprox. 45 - Actualmente simula envío, necesita backend
// TODO: Implementar envío a servidor real

async function enviarDatosAlServidor(datos) {
    // Opción 1: Si usas un backend propio
    const response = await fetch('https://tudominio.com/api/reservar-turno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return response.json();
    
    // Opción 2: Si usas Formspree (sin backend)
    // https://formspree.io
    // Simplemente actualiza el action del formulario en HTML
}
```

---

### 3️⃣ Conectar con WhatsApp

**En `script.js` - Función `abrirWhatsApp()`:**

```javascript
// Línea aprox. 114
function abrirWhatsApp() {
    const telefono = '+54379XXXXXXXXX'; // TU NÚMERO CON CÓDIGO
    const mensaje = 'Hola, me gustaría agendar una cita con la Dra. Almirón.';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
```

**Botón en HTML (agregar después del CTA principal):**
```html
<button class="btn btn-secondary" onclick="abrirWhatsApp()">
    💬 Escribir por WhatsApp
</button>
```

---

### 4️⃣ Actualizar Imágenes de Galería

**En `index.html` - Sección Galería (línea aprox. 185):**

Reemplaza los placeholders:
```html
<!-- Actual (placeholder) -->
<div class="galeria-placeholder">📷 Recepción</div>

<!-- Por (imagen real) -->
<img src="assets/images/recepcion.jpg" alt="Recepción del consultorio">
```

**Estructura de carpetas recomendada:**
```
CA-Odontologia/
└── assets/
    └── images/
        ├── recepcion.jpg
        ├── sillon.jpg
        ├── equipamiento.jpg
        ├── espera.jpg
        └── logo.png
```

---

## 🔐 Protección de Datos (IMPORTANTE)

### Actualizar Política de Privacidad

**En `index.html` - Crear página `/privacidad.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Política de Privacidad</title>
</head>
<body>
    <h1>Política de Privacidad</h1>
    
    <h2>Protección de Datos Personales</h2>
    <p>De conformidad con la Ley 25.326 de Protección de Datos Personales 
    y el Decreto 1891/2015...</p>
    
    <h2>Información Recopilada</h2>
    <ul>
        <li>Nombre y apellido</li>
        <li>Teléfono</li>
        <li>Email</li>
        <li>Información de salud (motivo de consulta)</li>
    </ul>
    
    <h2>Uso de Información</h2>
    <p>Utilizamos tus datos exclusivamente para...</p>
    
    <h2>Tus Derechos</h2>
    <p>Tienes derecho a acceso, rectificación y supresión...</p>
</body>
</html>
```

---

## 📊 Implementar Google Analytics

### Paso 1: Crear Cuenta
1. Ve a https://analytics.google.com
2. Crea una nueva propiedad
3. Copia tu ID de seguimiento (UA-XXXXXXXXX-X o G-XXXXXXXXX)

### Paso 2: Agregar Código

**En `index.html` - Antes de `</head>`:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXX'); // Reemplaza con tu ID
</script>
```

---

## 🗂️ Crear Sistema de Reserva de Turnos

### Opción 1: Calendly (Recomendado para principiantes)

1. Ve a https://calendly.com
2. Crea una cuenta gratuita
3. Configura tu calendario de disponibilidad
4. Copia el enlace/embed
5. Agrega en HTML:

```html
<iframe src="https://calendly.com/tu-usuario/consulta" 
        width="100%" height="600"></iframe>
```

### Opción 2: SimplyBook.me

1. Ve a https://simplybook.me
2. Registra tu negocio
3. Configura servicios y horarios
4. Integra en la landing page

### Opción 3: Backend Personalizado

**Node.js + Express ejemplo:**

```javascript
app.post('/api/reservar-turno', (req, res) => {
    const { nombre, telefono, email, motivo } = req.body;
    
    // Validar datos
    // Guardar en base de datos
    // Enviar confirmación por email
    // Enviar recordatorio por WhatsApp
    
    res.json({ 
        success: true, 
        mensaje: 'Turno reservado exitosamente' 
    });
});
```

---

## 📱 Optimizar para Google My Business

### Paso 1: Crear Perfil

1. Ve a https://www.google.com/business
2. Accede con cuenta Google
3. Crea negocio: "Dra. Cecilia Almirón - Consultorio Dental"
4. Completa información:
   - Nombre: `Dra. Cecilia Teresita Almirón`
   - Dirección: Tu dirección en Corrientes
   - Teléfono: Tu teléfono
   - Sitio web: Tu dominio

### Paso 2: Agregar Fotos

- Sube 15-20 fotos del consultorio
- Incluye: exterior, recepción, sillón, equipamiento
- Todas las imágenes deben ser claras y profesionales

### Paso 3: Solicitar Reseñas

**En tu consultorio:**
- Código QR que enlace a Google Reviews
- Pide a pacientes satisfechos que dejen reseña

**Código QR link:**
```
https://g.page/r/[TU_ID_NEGOCIO]/review
```

---

## ⚡ Optimizar Velocidad de Carga

### Herramientas para Medir

1. **Google PageSpeed Insights**: https://pagespeed.web.dev
2. **GTmetrix**: https://gtmetrix.com
3. **Lighthouse**: (En DevTools de Chrome)

### Mejoras a Implementar

```css
/* 1. Comprimir imágenes */
/* Usar formato WEBP en lugar de JPG */
/* Usar herramienta: TinyPNG, ImageOptim */

/* 2. Minimizar CSS y JS */
/* Usar herramientas: Minify, UglifyJS */

/* 3. Usar Cache */
/* Configurar headers en servidor */
Cache-Control: max-age=31536000
```

---

## 🔍 Validación y Pruebas

### Checklist Pre-Lanzamiento

```
FUNCIONAMIENTO:
☐ Todos los botones CTA funcionan
☐ Formulario valida datos correctamente
☐ FAQ abre/cierra sin problemas
☐ Enlaces de navegación funcionan
☐ Scroll suave es fluido

DISEÑO:
☐ Se ve bien en móvil (320px)
☐ Se ve bien en tablet (768px)
☐ Se ve bien en desktop (1920px)
☐ Colores son consistentes
☐ Tipografía es legible

ACCESIBILIDAD:
☐ Contraste suficiente (AA+)
☐ Se puede navegar por teclado
☐ Focus visible en enlaces
☐ Imágenes tienen alt text
☐ Formulario accesible

SEO:
☐ Meta title correcto (≤60 caracteres)
☐ Meta description correcto (≤160 caracteres)
☐ H1 presente en la página
☐ URLs amigables
☐ Sitemap.xml creado

SEGURIDAD:
☐ HTTPS habilitado
☐ Formulario no expone datos sensibles
☐ Política de privacidad implementada
☐ Cookies declaradas

RENDIMIENTO:
☐ Tiempo de carga <3 segundos
☐ Google PageSpeed >90
☐ Sin errores en consola
```

---

## 🌐 Despliegue en Internet

### Opción 1: Netlify (Recomendado - Gratis)

1. Ve a https://netlify.com
2. Haz drag & drop con tu carpeta
3. Tu sitio está en vivo en minutos
4. Dominio personalizado (pago)

### Opción 2: Vercel

1. Ve a https://vercel.com
2. Conecta tu repositorio Git
3. Deploy automático con cada cambio

### Opción 3: GitHub Pages

1. Crea repositorio en GitHub
2. Sube archivos HTML/CSS/JS
3. Sitio disponible en `username.github.io`

### Opción 4: Hosting Tradicional

- Contratar hosting con proveedor
- Subir archivos por FTP
- Configurar dominio personalizado
- Instalar certificado SSL (HTTPS)

---

## 📧 Envío de Emails Automáticos

### Formspree (Sin backend necesario)

**En HTML - Actualizar formulario:**

```html
<form action="https://formspree.io/f/TU_ID" method="POST">
    <input type="text" name="nombre" required>
    <input type="email" name="email" required>
    <input type="tel" name="telefono" required>
    <textarea name="mensaje"></textarea>
    <button type="submit">Enviar</button>
</form>
```

### Brevo (Mailchimp alternativa)

1. Ve a https://www.brevo.com
2. Configura formulario web
3. Copia código embed
4. Integra en landing page

---

## 🎓 Próximas Mejoras

### Corto Plazo (1-3 meses)
- [ ] Conectar sistema de reserva de turnos
- [ ] Implementar WhatsApp Business API
- [ ] Agregar blog con artículos de salud dental
- [ ] Crear formulario de newsletter

### Mediano Plazo (3-6 meses)
- [ ] Implementar chatbot de IA
- [ ] Agregar testimonios en video
- [ ] Crear galería de antes/después
- [ ] Implementar sistema de reseñas integrado

### Largo Plazo (6+ meses)
- [ ] Crear versión en inglés
- [ ] Agregar app móvil
- [ ] Implementar sistema de pagos online
- [ ] Crear programa de fidelización

---

## 📞 Soporte

Si necesitas ayuda:

1. **Revisa la documentación**: README.md
2. **Inspecciona la consola**: F12 → Console tab
3. **Valida HTML**: https://validator.w3.org
4. **Valida CSS**: https://jigsaw.w3.org/css-validator
5. **Busca en Google**: "Landing page + tu pregunta"

---

## ✅ Conclusión

Tu landing page está lista para comenzar a captar pacientes. Personaliza con tu información, optimiza para búsqueda local, y mantén actualizado el contenido.

**¡Éxito con tu consultorio! 🦷✨**

---

**Última actualización**: Marzo 13, 2026  
**Versión**: 1.0
