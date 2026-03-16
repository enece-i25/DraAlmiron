# 🚀 Landing Page React - Dra. Almirón

## Versión React con Botón WhatsApp Flotante

Esta es la versión **React** de la landing page para la Dra. Cecilia Teresita Almirón, con todas las funcionalidades anteriores más un **botón WhatsApp flotante** integrado.

---

## 📦 Nuevas Características

### ✨ Botón WhatsApp Flotante
- ✅ Posición fija (esquina inferior derecha)
- ✅ Animación pulsante
- ✅ Hover effect con escala
- ✅ Enlace directo a WhatsApp
- ✅ Color oficial de WhatsApp (#25D366)
- ✅ Fácil personalización del número

### ✅ Componentes React
- Componentes reutilizables y modulares
- Gestión de estado con `useState`
- Funcionalidades interactivas
- Validación de formulario integrada
- FAQ interactivo

---

## 📂 Estructura de Carpetas

```
CA-Odontologia/
├── src/
│   ├── App.jsx              ← Componente principal
│   ├── main.jsx             ← Punto de entrada React
│   └── index.css            ← Estilos globales
├── index-react.html         ← HTML principal para Vite
├── vite.config.js           ← Configuración de Vite
├── package.json             ← Dependencias
├── .gitignore               ← Git ignores
└── [Archivos anteriores: HTML vanilla, documentación, etc.]
```

---

## 🚀 Cómo Ejecutar

### Opción 1: Con Node.js (Recomendado)

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
npm run dev

# Se abrirá automáticamente en http://localhost:3000
```

### Opción 2: Build para Producción

```bash
# Generar archivos optimizados
npm run build

# Previsualizar build
npm run preview
```

---

## 📱 Botón WhatsApp - Personalización

### Cambiar el Número de Teléfono

En `src/App.jsx`, busca la función `abrirWhatsApp`:

```javascript
const abrirWhatsApp = () => {
  const telefono = '+54379'; // ← CAMBIAR AQUÍ
  const mensaje = 'Hola, me gustaría agendar una cita con la Dra. Almirón.';
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};
```

**Reemplaza** `+54379` por:
```
+54379XXXXXXXXX  (Tu número real con código de país)
```

### Cambiar el Mensaje Predeterminado

En la misma función, modifica:
```javascript
const mensaje = 'Tu mensaje personalizado aquí';
```

### Personalizar el Botón

El botón está en el componente `BotonWhatsApp`:

```javascript
<button
  className="whatsapp-button"
  onClick={onClick}
  title="Contáctanos por WhatsApp"
  style={{
    position: 'fixed',
    bottom: '30px',      // Distancia desde abajo
    right: '30px',       // Distancia desde derecha
    width: '60px',       // Ancho
    height: '60px',      // Alto
    borderRadius: '50%',
    backgroundColor: '#25D366',  // Color
    // ... más estilos
  }}
>
  💬  {/* Cambiar emoji aquí */}
</button>
```

---

## 🎛️ Componentes Disponibles

### Componentes Creados en React

1. **App** - Componente principal con gestión de estado
2. **Header** - Navegación
3. **Notification** - Mensajes de éxito/error
4. **BotonWhatsApp** - Botón flotante WhatsApp ⭐
5. **Hero** - Sección principal
6. **Credenciales** - Información profesional
7. **Beneficios** - 6 beneficios en cards
8. **Servicios** - 6 servicios odontológicos
9. **Galeria** - Galería de imágenes
10. **Testimonios** - Testimonios de pacientes
11. **Contacto** - Formulario de contacto
12. **FAQ** - Preguntas frecuentes interactivas
13. **Legal** - Avisos legales
14. **Footer** - Pie de página

---

## 🔄 Funcionalidades Implementadas

✅ **Formulario con Validación**
- Email válido
- Teléfono válido
- Campos requeridos
- Checkbox de privacidad obligatorio
- Mensajes de éxito/error

✅ **FAQ Interactiva**
- Acordeón que abre/cierra
- Una pregunta abierta a la vez
- Animaciones suaves

✅ **Navegación Suave**
- Scroll smooth entre secciones
- Enlaces internos funcionales

✅ **Rastreo de Clics**
- Logs en consola
- Rastreo de CTA

✅ **WhatsApp Integrado** ⭐
- Botón flotante fijo
- Animación pulsante
- Enlace directo
- Personalizable

---

## 📊 Diferencias con Versión HTML Vanilla

| Aspecto | HTML Vanilla | React |
|--------|-------------|-------|
| **Tamaño** | ~50KB | ~200KB (con node_modules) |
| **Desarrollo** | Rápido para pequeños cambios | Escalable para grandes proyectos |
| **Componentes** | Monolítico | Modulares y reutilizables |
| **Estado** | LocalStorage | React Hooks (useState) |
| **Rendimiento** | Excelente | Muy bueno |
| **Mantenibilidad** | Media | Alta |
| **SEO** | Nativo | Requiere SSR para óptimo SEO |

---

## 🔧 Personalización Fácil

### Cambiar Colores

En `src/index.css`, modifica las variables CSS:

```css
:root {
    --color-celeste: #4a9fd8;      /* Cambiar aquí */
    --color-verde-agua: #5eb3b8;   /* Cambiar aquí */
    --color-blanco: #ffffff;
}
```

### Cambiar Contenido

Todos los datos están en el componente `App.jsx`:

```javascript
const beneficios = [
  { titulo: "...", descripcion: "...", icono: "..." }
];

const servicios = [
  { titulo: "...", descripcion: "...", icono: "..." }
];

const testimonios = [
  { texto: "...", autor: "...", rating: 5 }
];
```

### Agregar Nuevas Secciones

1. Crear componente en `App.jsx`
2. Definir datos en arrays
3. Renderizar en el return de App
4. Agregar estilos en `index.css`

---

## 🌐 Desplegar en Producción

### Con Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Desplegar
vercel
```

### Con Netlify

```bash
# 1. Generar build
npm run build

# 2. Arrastrar carpeta 'dist' a Netlify.com
```

### Con GitHub Pages

```bash
# 1. Generar build
npm run build

# 2. Subir carpeta 'dist' a GitHub
```

---

## 🚀 Próximas Mejoras Posibles

- [ ] Conectar formulario a backend real
- [ ] Integrar con sistemas de reserva (Calendly, SimplyBook)
- [ ] Agregar animaciones más avanzadas (Framer Motion)
- [ ] Implementar dark mode
- [ ] Agregar más idiomas (i18n)
- [ ] Agregar búsqueda en FAQ
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar chat bot
- [ ] Integración con Google Analytics
- [ ] Carrito de compra para servicios

---

## 📦 Dependencias

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.0.0"
  }
}
```

**Sin dependencias adicionales necesarias.** Todo es React puro + CSS vanilla.

---

## 🎓 Aprende más sobre React

- [React Documentación Oficial](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JavaScript ES6+ Features](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 📞 WhatsApp Integration

### URL Format
```
https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]?text=[MESSAGE]
```

### Ejemplos
```
// Solo número
https://wa.me/5437912345678

// Con mensaje
https://wa.me/5437912345678?text=Hola

// Con mensaje personalizado y URL encoded
https://wa.me/5437912345678?text=Hola,%20me%20gustaría%20agendar
```

---

## ✅ Checklist de Implementación

```
INSTALACIÓN:
☐ Node.js instalado (v14+)
☐ npm install ejecutado
☐ npm run dev funciona

PERSONALIZACIÓN:
☐ Número WhatsApp actualizado
☐ Teléfono y email actualizados
☐ Contenido personalizado
☐ Colores verificados

PRUEBAS:
☐ Formulario valida correctamente
☐ FAQ funciona
☐ Botón WhatsApp abre chat
☐ Responsive en móvil
☐ Scroll suave funciona

PRODUCCIÓN:
☐ npm run build sin errores
☐ Archivos en carpeta dist
☐ Desplegado en servidor
☐ Dominio configurado
```

---

## 🎯 Performance Tips

```bash
# Analizar tamaño de bundle
npm run build -- --visualize

# Ver logs detallados
npm run dev -- --debug

# Optimizar imágenes
# Usar WebP en lugar de JPG
# Usar lazy loading
```

---

## 🆘 Solucionar Problemas

### Error: "Module not found"
```bash
npm install
npm run dev
```

### Puerto 3000 ocupado
```bash
npm run dev -- --port 3001
```

### Build no funciona
```bash
# Limpiar cache
rm -rf node_modules dist
npm install
npm run build
```

---

## 📝 Notas Importantes

1. **React 18+** - Usa todas las características modernas
2. **Vite** - Build tool súper rápido
3. **CSS Vanilla** - Sin Tailwind ni Bootstrap
4. **Sin librerías externas** - Máximo control
5. **WhatsApp Nativo** - Sin API key necesaria

---

## 🏆 Conclusión

Tienes una **landing page profesional en React** con:
- ✅ Interfaz moderna y responsiva
- ✅ Componentes reutilizables
- ✅ Botón WhatsApp flotante con animación
- ✅ Formulario validado
- ✅ FAQ interactiva
- ✅ Fácil de personalizar y mantener

**¡Lista para captar nuevos pacientes!** 🦷✨

---

**Versión**: 1.0 React  
**Fecha**: Marzo 13, 2026  
**Estado**: ✅ Pronto para Desarrollo/Producción

