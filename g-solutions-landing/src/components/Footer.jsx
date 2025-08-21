import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gris_c text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg"></span>
              </div>
              <span className="ml-2 text-xl font-bold">GSolutions</span>
            </div>
            <p className="text-gray-300 text-sm">
              © 2026 Gsolutions. Todos los derechos reservados.
            </p>
          </div>

          

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="/#nosotros" className="text-gray-300 hover:text-white text-sm">¿Quienes Somos?</a></li>
              <li><a href="/#progreso" className="text-gray-300 hover:text-white text-sm">Nuestro Proceso</a></li>
              <li><a href="/#proyectos" className="text-gray-300 hover:text-white text-sm">Proyectos</a></li>
              <li><a href="/#planes" className="text-gray-300 hover:text-white text-sm">Planes</a></li>
              <li><a href="/#faq" className="text-gray-300 hover:text-white text-sm">Preguntas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contáctanos</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <a href="tel:+525617241295">+52 56 1724 1295</a>
              </li>
              <li className="flex items-start">
                <i className="fab fa-whatsapp mt-1 mr-3"></i>
                <a href="https://wa.me/+525617241295?text=Hola%20quiero%20más%20información">
                  +52 56 1724 1295
                </a>
              </li>
            </ul>
          </div>
        <div>
            <h4 className="text-lg font-bold mb-4">Terminos</h4>
            <ul className="space-y-2">
              <li><Link to="/terminos" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm" > Términos y Condiciones</Link></li>
            </ul>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
