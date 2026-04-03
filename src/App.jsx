import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  )
}
