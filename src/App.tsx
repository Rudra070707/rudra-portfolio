import AppLayout from './components/layout/AppLayout'
import Footer from './components/layout/Footer'
import Navbar from './components/navigation/Navbar'
import About from './components/sections/About'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

function App() {
  return (
    <AppLayout>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Achievements />

        <Contact />
      </main>

      <Footer />
    </AppLayout>
  )
}

export default App