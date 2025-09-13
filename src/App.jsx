import { Helmet } from 'react-helmet'
import { Toaster } from './components/ui/toaster'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import TechnologiesSection from './components/TechnologiesSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Helmet>
        <title>Mathias Hahner - Backend Developer</title>
        <meta
          name="description"
          content="Desenvolvedor Backend Java e Spring Boot. Especialista em tecnologias modernas como microsserviços, arquitetura hexagonal e sistemas distribuídos."
        />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechnologiesSection />
        <ContactSection />
        <Toaster />
      </div>
    </>
  )
}

export default App
