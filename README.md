# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, particle effects, and a clean user interface.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional interface with smooth animations
- **Particle Background** - Dynamic particle effects for enhanced visual appeal
- **Multiple Sections**:
  - Hero/Landing section
  - About section with timeline
  - Projects showcase
  - Contact form
  - Footer with social links
- **Icon Integration** - FontAwesome icons for professional aesthetics
- **Fast Performance** - Built with Vite for lightning-fast development and optimized builds

## 🛠️ Technologies & Libraries

This project uses the following technologies and libraries:

### Core
- **React** (v18.3.1) - JavaScript library for building user interfaces
- **Vite** (v5.4.10) - Next-generation frontend build tool
- **React DOM** (v18.3.1) - React package for working with the DOM

### Styling
- **TailwindCSS** (v3.4.15) - Utility-first CSS framework
- **PostCSS** (v8.4.49) - Tool for transforming CSS with JavaScript
- **Autoprefixer** (v10.4.20) - PostCSS plugin to parse CSS and add vendor prefixes

### Icons
- **FontAwesome** (v6.7.1) - Icon library
- **@fortawesome/react-fontawesome** - React component for FontAwesome icons
- **@fortawesome/free-brands-svg-icons** - Brand icons for social media links

### Development Tools
- **ESLint** (v9.13.0) - Linting tool for identifying and fixing code problems
- **@vitejs/plugin-react** (v4.3.3) - Official Vite plugin for React

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager

To check if you have Node.js and npm installed, run:
```bash
node --version
npm --version
```

## 🚀 Installation

Follow these steps to get the project running on your local machine:

1. **Clone the repository** (or download the project):
   ```bash
   git clone <your-repository-url>
   cd "Website Portfolio"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all the required packages listed in `package.json`.

## 💻 Running the Project

### Development Mode

To run the project in development mode with hot module replacement (HMR):

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to:
```
http://localhost:5173
```

The page will automatically reload when you make changes to the code.

### Production Build

To create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build on a local server.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality issues |

## 📁 Project Structure

```
Website Portfolio/
├── public/                     # Static assets
│   ├── img/                   # Image files
│   ├── particles.json         # Particle configuration
│   └── vite.svg              # Vite logo
├── src/
│   ├── components/           # React components
│   │   ├── About/           # About section
│   │   ├── Contact/         # Contact form section
│   │   ├── Footer/          # Footer component
│   │   ├── Hero/            # Hero/Landing section
│   │   ├── NavBar/          # Navigation bar
│   │   ├── ParticlesBackground/  # Particle effects
│   │   └── Projects/        # Projects showcase
│   ├── assets/              # Project assets
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit the respective component files in `src/components/`
- **Images**: Replace images in the `public/img/` folder
- **Particle Effects**: Modify `public/particles.json` for particle customization
- **Styling**: Update component CSS files or use TailwindCSS utility classes

### Adding New Sections

1. Create a new component folder in `src/components/`
2. Import and add the component to `src/App.jsx`
3. Style using TailwindCSS or component-specific CSS

## 🌐 Deployment

You can deploy this project to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to your gh-pages branch
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Issues
If you encounter dependency issues, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure all dependencies are installed and you're using a compatible Node.js version (16+).

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

Update this section with your information:
- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 📚 Additional Documentation

- **[Particles.js Setup Guide](Particles_README.md)** - Detailed guide for installing, configuring, and customizing the particle background effect

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing fast build tool
- TailwindCSS for the utility-first CSS framework
- FontAwesome for the icon library
- Particles.js for the beautiful particle effects

---

**Happy Coding! 🚀**
