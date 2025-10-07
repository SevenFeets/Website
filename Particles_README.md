# Particles.js Background - Installation & Configuration Guide

This guide explains how to install, configure, and customize the particle background effect used in this portfolio website.

## 📚 What is Particles.js?

Particles.js is a lightweight JavaScript library for creating beautiful particle animations and interactive backgrounds. It's highly customizable and performs well across different devices.

- **Official Repository**: [particles.js on GitHub](https://github.com/VincentGarreau/particles.js/)
- **Demo**: [particles.js demo](https://vincentgarreau.com/particles.js/)

## 🛠️ Installation Methods

### Method 1: CDN (Currently Used in This Project) ✅

The easiest way to use particles.js is via CDN. This is the method currently implemented in this project.

**Step 1:** Add the script tag to your `index.html` file in the `<head>` section:

```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

**Advantages:**
- ✅ No npm package installation required
- ✅ Quick setup
- ✅ Smaller bundle size (loaded separately)
- ✅ Works immediately with React

**Current Implementation:** See `index.html` at line 9

---

### Method 2: NPM Package (Alternative)

You can also install particles.js as an npm package if you prefer.

```bash
npm install particles.js
```

Then import it in your component:

```javascript
import 'particles.js';
```

**Note:** The CDN method is recommended for React projects to avoid bundling issues.

---

## 📁 Project Structure

```
Website Portfolio/
├── public/
│   └── particles.json          # Particle configuration file
├── src/
│   └── components/
│       └── ParticlesBackground/
│           ├── ParticlesBackground.jsx   # React component
│           └── ParticlesBackground.css   # Component styles
└── index.html                  # CDN script included here
```

## 🚀 How It Works

### 1. HTML Setup (`index.html`)

The particles.js library is loaded via CDN:

```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

This makes `window.particlesJS` globally available.

### 2. React Component (`ParticlesBackground.jsx`)

The component creates a container div and initializes particles:

```jsx
import { useEffect } from 'react';

function ParticlesBackground() {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-js', '/particles.json', function () {
                console.log('particles.js config loaded');
            });
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundColor: '#0a0a00'
            }}
        />
    );
}

export default ParticlesBackground;
```

### 3. Configuration File (`particles.json`)

Located in the `public` folder, this JSON file controls all particle behaviors and appearance.

## ⚙️ Configuration Guide

The `particles.json` file contains all settings for your particle effect. Here's a breakdown of the main sections:

### Particle Settings

```json
"particles": {
    "number": {
        "value": 60,                    // Number of particles
        "density": {
            "enable": true,
            "value_area": 800           // Density area
        }
    },
    "color": {
        "value": "#00ff00"              // Particle color (green)
    },
    "shape": {
        "type": "circle"                // Shape: circle, edge, triangle, polygon, star, image
    },
    "opacity": {
        "value": 0.8,                   // Opacity (0-1)
        "random": false
    },
    "size": {
        "value": 3,                     // Particle size
        "random": true,                 // Random sizes
        "anim": {
            "enable": false             // Animated size
        }
    }
}
```

### Line Linking (Connections Between Particles)

```json
"line_linked": {
    "enable": true,                     // Show connections
    "distance": 150,                    // Max connection distance
    "color": "#00ff00",                 // Line color
    "opacity": 0.4,                     // Line opacity
    "width": 1                          // Line width
}
```

### Movement Settings

```json
"move": {
    "enable": true,                     // Enable movement
    "speed": 2,                         // Movement speed
    "direction": "none",                // Direction: none, top, bottom, left, right, etc.
    "random": true,                     // Random movement
    "straight": false,
    "out_mode": "out",                  // Behavior at edges: out, bounce
    "bounce": false,
    "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
    }
}
```

### Interactivity

```json
"interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
            "enable": true,             // Enable hover effect
            "mode": "grab"              // Mode: grab, bubble, repulse
        },
        "onclick": {
            "enable": true,             // Enable click effect
            "mode": "push"              // Mode: push, remove, bubble, repulse
        },
        "resize": true                  // Resize with window
    },
    "modes": {
        "grab": {
            "distance": 200,            // Hover grab distance
            "line_linked": {
                "opacity": 0.8
            }
        },
        "push": {
            "particles_nb": 4           // Particles added on click
        }
    }
}
```

### Background

```json
"background": {
    "color": "#0a0a00",                 // Background color
    "image": "",                        // Background image URL
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
}
```

## 🎨 Customization Examples

### Example 1: Blue Theme with More Particles

Edit `public/particles.json`:

```json
{
    "particles": {
        "number": {
            "value": 100                 // More particles
        },
        "color": {
            "value": "#00d4ff"           // Blue color
        },
        "line_linked": {
            "color": "#00d4ff"
        }
    }
}
```

### Example 2: Snow Effect

```json
{
    "particles": {
        "number": {
            "value": 200
        },
        "color": {
            "value": "#ffffff"           // White
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": false              // No lines
        },
        "move": {
            "direction": "bottom",       // Fall down
            "speed": 2
        }
    }
}
```

### Example 3: Stars Effect

```json
{
    "particles": {
        "number": {
            "value": 150
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "star",              // Star shape
            "polygon": {
                "nb_sides": 5
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 0.5,
            "random": true
        }
    },
    "background": {
        "color": "#000033"               // Dark blue background
    }
}
```

## 📝 Step-by-Step Installation for New Projects

If you want to add this particle background to a new React project:

### Step 1: Install Dependencies
Your project should have React already. No additional npm packages needed if using CDN.

### Step 2: Add CDN Script
Add to `index.html` in the `<head>` section:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

### Step 3: Create Configuration File
Create `public/particles.json` and copy the configuration from this project or customize it.

### Step 4: Create React Component
Create `src/components/ParticlesBackground/ParticlesBackground.jsx`:

```jsx
import { useEffect } from 'react';

function ParticlesBackground() {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-js', '/particles.json', function () {
                console.log('particles.js config loaded');
            });
        } else {
            console.error('Particles.js not loaded');
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundColor: '#0a0a00'
            }}
        />
    );
}

export default ParticlesBackground;
```

### Step 5: Use in Your App
Import and use in `App.jsx`:

```jsx
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

function App() {
    return (
        <div className="app">
            <ParticlesBackground />
            {/* Other components */}
        </div>
    );
}
```

### Step 6: Adjust Z-Index
Make sure other content has a higher z-index:

```css
.app__components {
    position: relative;
    z-index: 1;
}
```

## 🎯 Interactive Modes

Particles.js supports several interactive modes:

### Hover Modes
- **grab** - Connect particles to cursor
- **bubble** - Particles grow on hover
- **repulse** - Particles move away from cursor

### Click Modes
- **push** - Add particles on click
- **remove** - Remove particles on click
- **bubble** - Create bubble effect
- **repulse** - Repel particles

Example configuration:
```json
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "bubble"
        }
    }
}
```

## 🐛 Troubleshooting

### Particles Not Showing
1. Check browser console for errors
2. Verify CDN script is loaded: `console.log(window.particlesJS)`
3. Ensure `particles.json` is in the `public` folder
4. Check if the container div has proper dimensions

### Performance Issues
1. Reduce particle count: `"number": { "value": 30 }`
2. Disable line linking: `"line_linked": { "enable": false }`
3. Reduce movement speed: `"speed": 1`
4. Disable interactivity on mobile devices

### Particles Behind Other Elements
Ensure your main content has a higher z-index:
```css
.main-content {
    position: relative;
    z-index: 1;
}
```

## 📱 Mobile Optimization

For better mobile performance, consider using conditional rendering:

```jsx
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

// Reduce particles on mobile
if (isMobile && window.particlesJS) {
    // Load a mobile-optimized config
}
```

## 🔗 Useful Resources

- [Particles.js Official Site](https://vincentgarreau.com/particles.js/)
- [GitHub Repository](https://github.com/VincentGarreau/particles.js/)
- [Configuration Generator](https://vincentgarreau.com/particles.js/#default) - Visual tool to create configs
- [CDN Links](https://www.jsdelivr.com/package/npm/particles.js)

## 🎨 Configuration Generator Tool

The easiest way to create custom configurations:

1. Visit: https://vincentgarreau.com/particles.js/
2. Use the visual interface to customize particles
3. Click "CodePen" to see the configuration
4. Copy the JSON to your `particles.json` file

## ⚡ Performance Tips

1. **Limit Particle Count**: Keep particles between 30-80 for best performance
2. **Disable on Mobile**: Consider disabling on smaller screens
3. **Use Simple Shapes**: Circles perform better than complex shapes
4. **Reduce Interactivity**: Limit interactive features on low-end devices
5. **Optimize Line Distance**: Lower values = better performance

## 📊 Browser Compatibility

Particles.js works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE11 (limited support)

---

**Need Help?** Check the [official documentation](https://github.com/VincentGarreau/particles.js/) or open an issue on GitHub.

**Happy Coding! ✨**

