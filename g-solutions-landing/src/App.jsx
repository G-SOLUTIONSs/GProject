import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Nosotros from './components/nostros'
import Proceso from './sections/Proceso'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Tecnologias from './sections/Tecnologias'
import ContactSliders from './components/ContactSliders'
import Proyectos from './sections/Proyectos'
import Planes from './sections/Planes'
import Faq from './sections/Faq';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <ContactSliders/> 
      <Hero/>
      <Nosotros/>
      <Tecnologias/>
      <Gallery/>
      <Proceso/>
      <Proyectos/>
      <Planes/>
      <Faq/>
      <Footer />
    </div>
  )
}

export default App
