// ContactSliders.jsx
import React, { useState } from 'react';

const ContactSliders = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const toggleSlider = (side) => {
    if (side === 'left') setLeftOpen(!leftOpen);
    if (side === 'right') setRightOpen(!rightOpen);
  };

  const closeBoth = () => {
    setLeftOpen(false);
    setRightOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {(leftOpen || rightOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeBoth}
        ></div>
      )}

      {/* Left Slider */}
      <div
        className={`fixed top-0 left-0 w-[350px] max-w-[85%] h-screen bg-gris_c opacity-100 shadow-lg z-[1000] overflow-y-auto transition-transform duration-500 ${leftOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <button onClick={() => toggleSlider('left')} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
            <i className="fas fa-times text-xl"></i>
          </button>
          <h2 className="text-2xl font-bold text-white mb-6">Contáctanos</h2>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            e.target.reset();
            toggleSlider('left');
          }}>
            <input type="text" required placeholder="Nombre completo" className="w-full px-4 py-2 border rounded-md" />
            <input type="email" required placeholder="Correo electrónico" className="w-full px-4 py-2 border rounded-md" />
            <input type="tel" placeholder="Teléfono" className="w-full px-4 py-2 border rounded-md" />
            <select className="w-full px-4 py-2 border rounded-md">
              <option value="">Servicio de interés</option>
              <option value="web">Desarrollo Web</option>
              <option value="app">Aplicación Móvil</option>
              <option value="cloud">Soluciones en la Nube</option>
              <option value="hosting">Hosting y Servidores</option>
              <option value="other">Otro</option>
            </select>
            <textarea rows="4" placeholder="Mensaje" className="w-full px-4 py-2 border rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Right Slider */}
      <div
        className={`fixed top-0 right-0 w-[350px] max-w-[85%] h-screen bg-white shadow-lg z-[1000] overflow-y-auto transition-transform duration-500 ${rightOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          <button onClick={() => toggleSlider('right')} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
            <i className="fas fa-times text-xl"></i>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuestra información</h2>
          <div className="space-y-4">
            <div><strong>Ubicación:</strong> Guadalajara, Jalisco, México</div>
            <div><strong>Teléfonos:</strong> +52 33 1234 5678 / +52 33 8765 4321</div>
            <div><strong>Email:</strong> contacto@tecnomex.com</div>
            <div><strong>Horario:</strong> Lunes a Viernes: 9:00 - 18:00</div>
          </div>
        </div>
      </div>

      {/* Triggers */}
      {!leftOpen && (
        <div
          onClick={() => toggleSlider('left')}
          className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-rojo_f text-white w-[50px] h-[100px] flex items-center justify-center rounded-r-md cursor-pointer z-[999] hover:w-[55px] transition-all"
        >
          <i className="fas fa-paper-plane text-xl"></i>
        </div>
      )}

      {!rightOpen && (
        <div
          onClick={() => toggleSlider('right')}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white w-[50px] h-[100px] flex items-center justify-center rounded-l-md cursor-pointer z-[999] hover:w-[55px] transition-all"
        >
          <i className="fas fa-info-circle text-xl"></i>
        </div>
      )}
    </>
  );
};

export default ContactSliders;
