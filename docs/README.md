# Landing Page - Dra. Cecilia Teresita Almirón
## Odontóloga en Corrientes Capital

Bienvenido a la landing page profesional e integral para la Dra. Cecilia Teresita Almirón (M.P. 2821).

---

## 📋 Descripción del Proyecto

Esta landing page ha sido desarrollada siguiendo las mejores prácticas del sector dental, normativas argentinas (Ley 25.326 de Protección de Datos Personales, regulaciones ANMAT), y estándares de accesibilidad WCAG 2.2.

**Objetivo**: Maximizar la conversión de visitantes en pacientes, transmitiendo confianza, profesionalismo y cercanía.

---

## 🎨 Diseño Visual

### Paleta de Colores
- **Blanco (#ffffff)**: Simboliza pureza, limpieza y profesionalismo
- **Celeste (#4a9fd8)**: Transmite tranquilidad, confianza y seguridad
- **Verde Agua (#5eb3b8)**: Evoca salud, bienestar y esperanza

### Tipografía
- **Fuente Principal**: Roboto, Open Sans, Helvetica Neue
- **Tamaño Base**: 16px mínimo para accesibilidad
- **Pesos**: 500 (normal), 600 (títulos)

---

## 📁 Estructura de Archivos

```
CA-Odontologia/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS (paleta de colores, responsive)
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este archivo
└── assets/             # Carpeta para imágenes (futura)
    └── images/         # Galería del consultorio
```

---

## 🏗️ Secciones de la Landing Page

### 1. **Navegación (Header)**
- Logo con tagline
- Menú de navegación con scroll suave
- Sticky header para fácil acceso

### 2. **Hero Section**
- Encabezado principal: "Tu sonrisa, nuestra prioridad"
- Subtítulo con propuesta de valor
- Botón CTA (Reservá tu turno)
- Gradiente de colores (celeste a verde agua)

### 3. **Credentials**
- Nombre y matrícula profesional (M.P. 2821)
- Experiencia: +15 años
- Enfoque humanista

### 4. **Beneficios** (6 cards)
- Atención Personalizada
- Consultorio Moderno
- Máxima Seguridad
- Comunicación Clara
- Opciones de Pago
- Calidad y Confianza

### 5. **Servicios** (6 cards)
- Cirugía Oral
- Operatoria Dental
- Endodoncia
- Periodoncia
- Odontopediatría
- Estética Dental

### 6. **Galería**
- Espacio para fotografías profesionales del consultorio
- Placeholders con emojis (actualizar con imágenes reales)
- Nota sobre consentimiento de pacientes

### 7. **Testimonios** (3 ejemplos)
- Calificaciones de 5 estrellas
- Texto empático y auténtico
- Nombres de pacientes (reales con consentimiento)

### 8. **Formulario de Contacto/Reserva**
- Campos: Nombre, Teléfono, Email, Motivo, Mensaje
- Aceptación de política de privacidad
- Validación JavaScript
- Información de contacto adicional

### 9. **Preguntas Frecuentes (FAQ)**
- 8 preguntas comunes
- Acordeón interactivo (open/close)
- Abordaje de: obras sociales, primera consulta, urgencias, niños, bioseguridad, pagos, datos personales

### 10. **Avisos Legales**
- Disclaimer sobre información médica
- Disclaimer de protección de datos
- Enlaces a políticas de privacidad, términos y cookies

### 11. **Footer**
- Información de copyright
- Ubicación: Corrientes Capital
- Gradiente de colores

---

## ⚙️ Funcionalidades JavaScript

### 1. **FAQ Interactiva**
```javascript
- Click en pregunta abre/cierra respuesta
- Solo una respuesta abierta a la vez
- Animación suave
```

### 2. **Validación de Formulario**
```javascript
- Validación de campos requeridos
- Validación de email
- Validación de teléfono
- Aceptación de política de privacidad obligatoria
```

### 3. **Mensajes de Notificación**
```javascript
- Mensajes de éxito/error
- Posición fija en pantalla
- Auto-cierre después de 5 segundos
- Animaciones suaves
```

### 4. **Scroll Suave**
```javascript
- Navegación mediante anclas (#)
- Animación smooth scroll
- Actualización de link activo según posición
```

### 5. **Rastreo Básico**
```javascript
- Contador de visitas (localStorage)
- Rastreo de clics en CTA
- Console logs para debugging
```

### 6. **Detección de Dispositivo**
```javascript
- Identificación de móvil
- Aplicación de clase 'mobile' en body
```

---

## 📱 Responsividad

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: 320px - 768px

### Características Responsivas
- Grid que se adapta automáticamente
- Navegación optimizada para móvil
- Fuentes escalables
- Imágenes responsive
- Espaciado adaptativo

---

## ♿ Accesibilidad (WCAG 2.2)

### Características Implementadas
- ✅ Contraste de color adecuado (AA+)
- ✅ Navegación por teclado
- ✅ Focus visible en elementos interactivos
- ✅ Semántica HTML correcta
- ✅ Labels explícitos en formulario
- ✅ Texto alternativo para imágenes (alt)
- ✅ Respeto a preferencias de movimiento reducido
- ✅ Tamaño de fuente mínimo 16px

---

## 🔒 Protección de Datos Personales

### Cumplimiento Normativo
- **Ley 25.326**: Protección de Datos Personales (Argentina)
- **ANMAT**: Regulaciones de publicidad médica
- **Colegios Profesionales**: Ética odontológica

### Medidas Implementadas
- Checkbox de consentimiento en formulario
- Aviso legal de privacidad
- Información sobre uso de datos
- Derechos del paciente (acceso, rectificación, supresión)
- No se solicitan datos sensibles innecesarios

---

## 🚀 Cómo Usar

### 1. **Instalación Local**
```bash
# Simplemente abre index.html en tu navegador
# o sirve desde un servidor local:
python -m http.server 8000
# Accede a http://localhost:8000
```

### 2. **Personalización**

#### Cambiar Contacto
En `index.html`, busca la sección `.contacto-datos`:
```html
<p><a href="tel:+543794XXX-XXXX">Tu teléfono</a></p>
<p><a href="mailto:consultorio@email.com">Tu email</a></p>
```

#### Actualizar Imágenes
Reemplaza los placeholders en la sección `.galeria` con URLs reales:
```html
<img src="ruta/a/imagen.jpg" alt="Descripción">
```

#### Modificar Colores (opcional)
En `styles.css`, actualiza las variables:
```css
:root {
    --color-celeste: #tu-color;
    --color-verde-agua: #tu-color;
}
```

#### Conectar Formulario a Backend
En `script.js`, implementa la función:
```javascript
async function enviarDatosAlServidor(datos) {
    const response = await fetch('/api/reservar-turno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return response.json();
}
```

### 3. **Despliegue en Servidor**
- Subir archivos a hosting (Netlify, Vercel, GitHub Pages)
- Configurar dominio personalizado
- Implementar HTTPS (obligatorio)
- Configurar Google My Business
- Implementar Google Analytics

---

## 📊 SEO Local

### Palabras Clave Recomendadas
- Odontóloga en Corrientes Capital
- Dentista Corrientes
- Dra. Cecilia Almirón
- Consultorio dental profesional
- Tratamientos dentales Corrientes

### Meta Tags
Actualizar en `<head>` de `index.html`:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
```

### Google My Business
- Crear perfil con datos del consultorio
- Agregar fotografías profesionales
- Solicitar reseñas a pacientes
- Responder comentarios regularmente

---

## 📈 Métricas y KPIs

### Indicadores Principales
1. **Tasa de Conversión**: % de visitantes que reservan turno
2. **Tasa de Rebote**: % de salidas rápidas
3. **Tiempo en Página**: Promedio de sesión
4. **Clics en CTA**: Cantidad de interacciones
5. **Envíos de Formulario**: Conversiones efectivas
6. **Llamadas Telefónicas**: Contactos por teléfono

### Herramientas de Análisis
- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps)
- Google Optimize (pruebas A/B)

---

## 🔧 Próximos Pasos - Mejoras Futuras

- [ ] Integrar sistema de agenda (Calendly, SimplyBook)
- [ ] Implementar WhatsApp Business API
- [ ] Agregar blog con contenido de salud dental
- [ ] Implementar chatbot de IA
- [ ] Integrar Google My Business embed
- [ ] Añadir certificaciones y acreditaciones
- [ ] Crear versión en inglés
- [ ] Implementar newsletter
- [ ] Agregar testimonios en video
- [ ] Optimizar velocidad de carga (Lighthouse)

---

## 📝 Normativa y Ética

### Publicidad Médica - Argentina
- ✅ Información veraz, precisa y clara
- ✅ Matrícula profesional incluida
- ✅ Sin promesas de resultados garantizados
- ✅ Sin testimonios engañosos
- ✅ Consentimiento informado para imágenes
- ✅ Respeto a privacidad del paciente

---

## 💡 Tips de Marketing

1. **Testimonios**: Solicita permiso por escrito a pacientes satisfechos
2. **Imágenes**: Usa fotos reales del consultorio, no stock
3. **FAQ**: Actualiza según preguntas reales de pacientes
4. **Blog**: Publica contenido sobre prevención dental
5. **Redes Sociales**: Comparte la URL en Facebook e Instagram
6. **Google My Business**: Mantén información actualizada
7. **Revisiones**: Responde a todas las reseñas
8. **CTA**: Mantén botones visibles y claros

---

## 📞 Soporte y Contacto

Para consultas sobre esta landing page:
- **Dra. Cecilia Teresita Almirón (M.P. 2821)**
- **Ubicación**: Corrientes Capital
- **Correo**: [Tu email]
- **Teléfono**: [Tu teléfono]

---

## 📄 Licencia

Esta landing page es de uso exclusivo de la Dra. Cecilia Teresita Almirón.

---

## ✨ Características Destacadas

✅ Diseño moderno y atractivo  
✅ Paleta de colores profesional (blanco, celeste, verde agua)  
✅ 100% responsivo (mobile-first)  
✅ Accesible (WCAG 2.2)  
✅ Optimizado para SEO local  
✅ Cumple normativas argentinas  
✅ Formulario funcional con validación  
✅ FAQ interactiva  
✅ Testimonios con rating  
✅ Rápido y ligero  
✅ Sin dependencias externas  
✅ Fácil de personalizar  

---

**Última actualización**: Marzo 13, 2026  
**Versión**: 1.0

¡Que tu landing page sea exitosa y atraiga muchos nuevos pacientes! 🦷✨
