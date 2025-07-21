import React, { useState, useRef } from 'react';

const ContactSliders = () => {
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setFormOpen(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      {!formOpen && (
        <button
          onClick={() => setFormOpen(true)}
          className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-700 to-rojo_c text-white px-4 py-6 rounded-l-lg shadow-lg hover:bg-blue-700 transition z-20 writing-mode-vertical"
        >
          <span className="flex items-center">
            <i className="fas fa-paper-plane mr-2"></i> Contáctanos
          </span>
        </button>
      )}

      {/* Overlay */}
      {formOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-10"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Formulario flotante */}
      <div
        ref={formRef}
        className={`fixed right-0 top-20 bottom-4 w-[350px] md:w-[400px] max-w-full bg-form_d shadow-xl z-30 p-6 overflow-y-auto rounded-l-2xl transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${formOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Hablemos de tu proyecto</h3>
          <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            e.target.reset();
            setFormOpen(false);
          }}
        >
          <div className="relative">
            <input type="text" required placeholder=" " className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Nombre completo</label>
          </div>

          <div className="relative">
            <input type="email" required placeholder=" " className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Correo electrónico</label>
          </div>

          <div className="relative">
            <input type="tel" placeholder=" " className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Teléfono (opcional)</label>
          </div>

          <div className="relative">
            <select className="w-full px-4 py-3 border border-red rounded-lg bg-white focus:outline-none focus:border-rojo_c">
              <option value="" disabled hidden>Servicio de interés</option>
              <option value="web">Desarrollo Web</option>
              <option value="cloud">Infraestructura Cloud</option>
              <option value="database">Gestión de Bases de Datos</option>
              <option value="migration">Migración Cloud</option>
              <option value="other">Otro servicio</option>
            </select>
          </div>

          <div className="relative">
            <textarea rows="4" placeholder=" " required className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c"></textarea>
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Cuéntanos sobre tu proyecto</label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="privacy" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-rojo_f" />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">Acepto la política de privacidad</label>
          </div>

          <button type="submit" className="w-full bg-rojo_c text-white py-3 px-6 rounded-lg font-medium hover:bg-rojo_f transition flex items-center justify-center">
            <i className="fas fa-paper-plane mr-2"></i> Enviar consulta
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Otras formas de contacto</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <i className="fas fa-envelope text-rojo_c mr-3"></i>
              <span className="text-gray-600">contacto@cloudsolutions.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-rojo_c mr-3"></i>
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-rojo_c mr-3"></i>
              <span className="text-gray-600">Av. Digital 123, Cloud City</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSliders;
