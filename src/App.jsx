import Navbar from './components/NavBar/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <div className="app__components">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

