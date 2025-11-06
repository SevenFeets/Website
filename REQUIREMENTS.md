# Project Requirements

## 📋 Overview

This document outlines all dependencies, requirements, and setup instructions for the Portfolio Website project built with React, Vite, and TailwindCSS.

---

## 🖥️ System Requirements

### Required Software

- **Node.js**: v16.0 or higher (v18+ recommended)
- **npm**: v7.0 or higher (comes with Node.js)
- **Operating System**: Windows 10/11, macOS, or Linux
- **Web Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

### Verify Installation

```bash
node --version  # Should be 16.0+
npm --version   # Should be 7.0+
```

---

## 📦 NPM Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | Core React library |
| `react-dom` | ^18.3.1 | React DOM rendering |
| `@fortawesome/fontawesome-free` | ^6.7.1 | FontAwesome icon library |
| `@fortawesome/free-brands-svg-icons` | ^6.7.1 | Brand icons (social media) |
| `@fortawesome/react-fontawesome` | ^0.2.2 | React FontAwesome component |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^5.4.10 | Build tool and dev server |
| `@vitejs/plugin-react` | ^4.3.3 | Vite plugin for React |
| `tailwindcss` | ^3.4.15 | Utility-first CSS framework |
| `postcss` | ^8.4.49 | CSS transformation tool |
| `autoprefixer` | ^10.4.20 | Adds vendor prefixes to CSS |
| `eslint` | ^9.13.0 | JavaScript linting tool |
| `@eslint/js` | ^9.13.0 | ESLint JavaScript config |
| `eslint-plugin-react` | ^7.37.2 | React-specific ESLint rules |
| `eslint-plugin-react-hooks` | ^5.0.0 | React Hooks ESLint rules |
| `eslint-plugin-react-refresh` | ^0.4.14 | React Refresh ESLint rules |
| `globals` | ^15.11.0 | Global variables for ESLint |
| `@types/react` | ^18.3.12 | TypeScript types for React |
| `@types/react-dom` | ^18.3.1 | TypeScript types for React DOM |

---

## 🌐 External CDN Dependencies

### Particles.js

**Purpose**: Animated particle background effects

- **Library**: particles.js
- **Version**: 2.0.0
- **CDN URL**: `https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js`
- **Location**: Loaded in `index.html` (line 9)
- **Configuration**: `public/particles.json`
- **Documentation**: See `Particles_README.md` for detailed setup

**Why CDN?**
- ✅ Smaller bundle size
- ✅ No npm package conflicts
- ✅ Better performance
- ✅ Easier integration with React

**Alternative Installation** (if needed):
```bash
npm install particles.js
```

**Official Resources**:
- GitHub: https://github.com/VincentGarreau/particles.js/
- Demo: https://vincentgarreau.com/particles.js/
- Config Generator: https://vincentgarreau.com/particles.js/#default

---

## 📁 Required Files Structure

```
Website Portfolio/
├── public/
│   ├── img/                          # Image assets
│   │   ├── abstract_technology_background.jpg
│   │   ├── background_white_design_free.jpg
│   │   ├── background.png
│   │   ├── hero__background.jpg
│   │   ├── my profile.png.jpg
│   │   ├── seashore.jpeg
│   │   ├── sky.jpeg
│   │   └── snow.jpeg
│   ├── particles.json                # ⚡ Particle configuration (REQUIRED)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   └── Timeline.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx
│   │   │   └── NavBar.css
│   │   ├── ParticlesBackground/      # ⚡ Particles component
│   │   │   ├── ParticlesBackground.jsx
│   │   │   └── ParticlesBackground.css
│   │   └── Projects/
│   │       ├── ProjectCard.jsx
│   │       ├── Projects.jsx
│   │       └── Projects.css
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html                        # ⚡ Contains particles.js CDN script
├── package.json                      # NPM dependencies
├── package-lock.json                 # Locked dependency versions
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # TailwindCSS configuration
├── postcss.config.js                 # PostCSS configuration
├── eslint.config.js                  # ESLint configuration
├── README.md                         # Main documentation
├── Particles_README.md               # ⚡ Particles.js detailed guide
└── REQUIREMENTS.md                   # This file
```

---

## 🚀 Installation Instructions

### Step 1: Install Node.js

Download and install from: https://nodejs.org/

### Step 2: Clone/Download Project

```bash
git clone <repository-url>
cd "Website Portfolio"
```

### Step 3: Install NPM Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`.

### Step 4: Verify Installation

```bash
npm list --depth=0
```

You should see all dependencies listed without errors.

---

## ⚙️ Configuration Files

### 1. package.json
**Purpose**: NPM dependencies and scripts
- Already configured ✅
- No manual changes needed

### 2. vite.config.js
**Purpose**: Vite build configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 3. tailwind.config.js
**Purpose**: TailwindCSS configuration
- Configures theme, colors, and plugins
- Defines content paths for purging unused CSS

### 4. postcss.config.js
**Purpose**: PostCSS plugins configuration
- Includes TailwindCSS and Autoprefixer

### 5. eslint.config.js
**Purpose**: Code linting rules
- JavaScript and React linting rules
- Code quality standards

### 6. particles.json ⚡
**Purpose**: Particles.js configuration
**Location**: `public/particles.json`

**Key Settings**:
- **Particle Count**: 60 particles
- **Color**: Green (#00ff00)
- **Shape**: Circle
- **Line Linking**: Enabled (150px distance)
- **Interactivity**: 
  - Hover: Grab effect
  - Click: Push particles
- **Background**: Dark (#0a0a00)

**Customization**: See `Particles_README.md` for detailed guide

---

## 🎨 Particles.js Integration

### Implementation Details

**1. CDN Script (index.html)**
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

**2. React Component (ParticlesBackground.jsx)**
```jsx
import { useEffect } from 'react';

function ParticlesBackground() {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-js', '/particles.json', 
                function () {
                    console.log('particles.js config loaded');
                }
            );
        }
    }, []);

    return (
        <div id="particles-js" 
             style={{ 
                 position: 'fixed', 
                 top: 0, 
                 left: 0, 
                 width: '100%', 
                 height: '100%', 
                 zIndex: 0 
             }} 
        />
    );
}
```

**3. Configuration File (particles.json)**
- Located in `public/` folder
- Loaded at runtime via `particlesJS.load()`
- Fully customizable (see Particles_README.md)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Create production build in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔧 Development Workflow

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:5173`
   - Hot Module Replacement (HMR) enabled
   - Automatic browser refresh on file changes

2. **Build for Production**:
   ```bash
   npm run build
   ```
   - Optimized bundle in `dist/` folder
   - Minified JavaScript and CSS
   - Tree-shaking for smaller bundle size

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```
   - Test production build locally before deployment

---

## 🌐 Browser Compatibility

### Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome | Latest 2 versions ✅ |
| Firefox | Latest 2 versions ✅ |
| Safari | Latest 2 versions ✅ |
| Edge | Latest 2 versions ✅ |
| Opera | Latest 2 versions ✅ |
| Internet Explorer | Not supported ❌ |

**Particles.js Compatibility**:
- ✅ All modern browsers
- ⚠️ Limited support in IE11

---

## 📱 Responsive Design Requirements

### Breakpoints (TailwindCSS)

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Performance Optimization

**For Mobile Devices**:
- Consider reducing particle count (30-40 instead of 60)
- Disable line linking for better performance
- Reduce movement speed

**Edit particles.json for mobile**:
```json
{
    "particles": {
        "number": {
            "value": 30
        },
        "line_linked": {
            "enable": false
        }
    }
}
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Particles Not Showing
**Symptoms**: Blank background, no particle effects

**Solutions**:
```bash
# Check if particles.js is loaded
# Open browser console and type:
console.log(window.particlesJS)
# Should return a function, not undefined
```

- ✅ Verify `index.html` has CDN script
- ✅ Ensure `particles.json` exists in `public/` folder
- ✅ Check browser console for errors
- ✅ Clear browser cache

#### 2. npm install Errors
**Symptoms**: Dependency installation fails

**Solutions**:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 3. Port Already in Use
**Symptoms**: "Port 5173 is already in use"

**Solution**: Vite automatically uses next available port, or:
```bash
# Manually specify port
npm run dev -- --port 3000
```

#### 4. Build Errors
**Check**:
- Node.js version (must be 16+)
- All dependencies installed
- No syntax errors in code

---

## 🚢 Deployment Requirements

### Environment Variables
No environment variables required for basic deployment.

### Build Output
- **Folder**: `dist/`
- **Entry Point**: `dist/index.html`
- **Static Assets**: All in `dist/assets/`

### Deployment Platforms

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
1. Run `npm run build`
2. Upload `dist/` folder

**GitHub Pages**:
1. Run `npm run build`
2. Deploy `dist/` to gh-pages branch

### Post-Deployment Checklist
- ✅ All images load correctly
- ✅ Particles.js CDN is accessible
- ✅ Responsive design works on all devices
- ✅ All links and navigation work
- ✅ FontAwesome icons display correctly

---

## 📚 Additional Resources

### Documentation Links

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **TailwindCSS**: https://tailwindcss.com/
- **FontAwesome**: https://fontawesome.com/
- **Particles.js**: https://vincentgarreau.com/particles.js/
- **Particles.js GitHub**: https://github.com/VincentGarreau/particles.js/

### Project Documentation

- **README.md**: Main project documentation
- **Particles_README.md**: Detailed particles.js setup guide
- **REQUIREMENTS.md**: This file - comprehensive requirements

---

## 🔐 Security Notes

- No sensitive data or API keys required
- All dependencies from trusted sources
- Regular dependency updates recommended:
  ```bash
  npm outdated        # Check for updates
  npm update          # Update dependencies
  ```

---

## 📊 Performance Metrics

### Target Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 500KB (gzipped)

### Optimization Tips

1. **Images**: Use optimized formats (WebP, AVIF)
2. **Particles**: Limit to 30-60 particles
3. **Code Splitting**: Lazy load components if needed
4. **CSS**: TailwindCSS purges unused styles automatically

---

## ✅ Quick Start Checklist

- [ ] Node.js 16+ installed
- [ ] Project files downloaded/cloned
- [ ] `npm install` completed successfully
- [ ] `particles.json` exists in `public/` folder
- [ ] `index.html` contains particles.js CDN script
- [ ] `npm run dev` starts without errors
- [ ] Browser opens at http://localhost:5173
- [ ] Particle background visible and animated
- [ ] All sections load correctly
- [ ] Responsive design works on mobile

---

## 📞 Support

For issues or questions:
1. Check this requirements document
2. Review `README.md` for general info
3. Check `Particles_README.md` for particles.js issues
4. Review browser console for error messages
5. Verify all dependencies are installed

---

**Document Version**: 1.0  
**Last Updated**: November 6, 2025  
**Project Type**: React + Vite Portfolio Website  
**Node.js Requirement**: v16.0+

---

**Happy Coding! 🚀✨**

