# 🚀 INSTALACIÓN Y EJECUCIÓN - React Landing Page

## 📋 Requisitos Previos

- **Node.js** v14 o superior
- **npm** (incluido con Node.js)
- **git** (opcional, para control de versiones)

---

## ✅ Paso 1: Verificar Instalación de Node.js

Abre PowerShell (terminal) y ejecuta:

```powershell
node --version
npm --version
```

Si ves números (ej: v18.0.0 y 8.0.0) ✅ Tienes Node.js instalado

Si no, descarga desde: https://nodejs.org/

---

## 📦 Paso 2: Instalar Dependencias

En la carpeta `CA-Odontologia`, ejecuta:

```powershell
npm install
```

Esto instalará:
- React 18.2.0
- React DOM 18.2.0
- Vite (herramienta de build)
- Plugin de Vite para React

**Tiempo esperado**: 1-2 minutos

---

## 🎯 Paso 3: Ejecutar en Desarrollo

```powershell
npm run dev
```

**Resultado esperado**:
```
VITE v4.0.0  ready in 500ms

➜  Local:   http://localhost:3000/
➜  press h to show help
```

Tu navegador se abrirá automáticamente con la landing page.

---

## 🔧 Personalización Rápida

### Cambiar Número WhatsApp

1. Abre: `src/App.jsx`
2. Busca: `const abrirWhatsApp = () => {`
3. Cambia: `const telefono = '+54379';`
4. Por tu número real: `const telefono = '+54379XXXXXXXXX';`
5. Guarda (Ctrl+S)

**El cambio aparecerá automáticamente en el navegador** 🔄

### Cambiar Email

1. Abre: `src/App.jsx`
2. Busca: `<p><a href="mailto:consultorio@email.com">`
3. Reemplaza: `consultorio@email.com` por tu email
4. Guarda

### Cambiar Colores

1. Abre: `src/index.css`
2. Busca: `:root { --color-`
3. Modifica los valores HEX
4. Guarda

---

## 🌐 Para Producción

### Build Optimizado

```powershell
npm run build
```

Genera carpeta `dist/` con archivos optimizados listos para publicar.

### Preview del Build

```powershell
npm run preview
```

Muestra cómo se ve en producción.

---

## 🚀 Desplegar Online

### Opción A: Vercel (Recomendado - Gratis)

```powershell
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Desplegar
vercel
```

### Opción B: Netlify

```powershell
# 1. Build
npm run build

# 2. Ir a https://netlify.com
# 3. Drag & drop la carpeta "dist"
```

### Opción C: GitHub Pages

```powershell
# 1. Build
npm run build

# 2. Subir a GitHub
# 3. Activar Pages en Settings
```

---

## 📱 Pruebas Finales

Después de ejecutar `npm run dev`, verifica:

✅ **Página carga completamente**
✅ **Logo "Dra. Almirón" visible**
✅ **Botón WhatsApp en esquina inferior derecha** 💬
✅ **Al hacer clic en WhatsApp, abre chat**
✅ **Formulario valida emails correctamente**
✅ **FAQ abre/cierra preguntas**
✅ **Se ve bien en móvil (redimensiona ventana)**

---

## 🆘 Problemas Comunes

### Problema: "npm: El término no está reconocido"
**Solución**: Reinicia PowerShell o instala Node.js

### Problema: "EACCES permission denied"
**Solución** (Mac/Linux):
```bash
sudo npm install -g npm
```

### Problema: Puerto 3000 ya en uso
**Solución**:
```powershell
npm run dev -- --port 3001
```

### Problema: "Cannot find module"
**Solución**:
```powershell
rm -r node_modules
npm install
npm run dev
```

---

## 📚 Estructura de Archivos

```
CA-Odontologia/
├── src/
│   ├── App.jsx           ← Componentes React AQUÍ
│   ├── main.jsx          ← Punto de entrada
│   └── index.css         ← Estilos CSS
├── index-react.html      ← HTML principal
├── vite.config.js        ← Config de Vite
├── package.json          ← Dependencias (NO EDITAR)
├── .gitignore            ← Archivos ignorados
└── node_modules/         ← Se crea con npm install
```

---

## ⚡ Comandos Disponibles

```powershell
# Iniciar desarrollo
npm run dev

# Build para producción
npm run build

# Ver cómo se vería en producción
npm run preview

# Lint (verificar código)
npm run lint
```

---

## 🎯 Workflow Recomendado

1. **Desarrollo**:
   ```powershell
   npm run dev
   # Edita archivos en src/
   # Los cambios aparecen automáticamente
   ```

2. **Personalización**:
   - Cambia teléfono WhatsApp ✅
   - Actualiza email ✅
   - Modifica contenido ✅

3. **Testing**:
   - Prueba en navegador ✅
   - Redimensiona para móvil ✅
   - Prueba botón WhatsApp ✅

4. **Producción**:
   ```powershell
   npm run build
   # Subir carpeta 'dist' a servidor
   ```

---

## 📊 Performance Tips

- **Desarrollo**: `npm run dev` - Con recarga en caliente
- **Producción**: `npm run build` - Optimizado automáticamente
- **Tamaño**: ~50KB después de minificación
- **Velocidad**: <1 segundo carga completa

---

## 🔗 Enlaces Útiles

- [Node.js](https://nodejs.org/)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [npm Scripts](https://docs.npmjs.com/)

---

## ✨ Características Implementadas

✅ React 18 (última versión)  
✅ Vite (build tool rápido)  
✅ Componentes modulares  
✅ Botón WhatsApp flotante con animación  
✅ Formulario con validación  
✅ FAQ interactiva  
✅ 100% Responsivo  
✅ Sin dependencias innecesarias  

---

## 🎉 ¡Listo!

Tu landing page React está lista para:

1. **Desarrollo local** → `npm run dev`
2. **Personalización rápida** → Edita `src/App.jsx`
3. **Despliegue online** → `npm run build`

**¡A captar nuevos pacientes! 🦷✨**

---

**Versión**: 1.0 React  
**Última actualización**: Marzo 13, 2026

