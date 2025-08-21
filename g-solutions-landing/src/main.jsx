import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import Terminos from './pages/Terminos'; //pag tyc
import './styles/index.css'
import ProyectosDetallados from './pages/ProyectosDetallados'; //pag proyectosdetallados

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />          // Página principal
        <Route path="/terminos" element={<Terminos />} /> // Nueva ruta
        <Route path="/proyectos-detallados" element={<ProyectosDetallados />} />

      </Routes>
    </Router>
  </React.StrictMode>
)

