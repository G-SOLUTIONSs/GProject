import React, { useRef, useEffect, useState } from 'react';

const ContactSliders = () => {
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);

  // Cierra el formulario al hacer clic fuera o cambiar el hash
  const handleOverlayClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeForm();
    }
  };
 const closeForm = () => {
    setFormOpen(false);
    if (window.location.hash === '#contacto') {
      window.history.pushState(null, null, ' '); // Limpia el hash sin recargar
    }
  };

  // Detecta cambios en el hash (ej: "#contacto")
  useEffect(() => {
    const handleHashChange = () => {
      setFormOpen(window.location.hash === '#contacto');
    };
    // Verificar hash al cargar (por si alguien entra directamente con #contacto)
    handleHashChange();

    // Escuchar cambios futuros
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
       {/* Botón flotante (ahora es un <a> que cambia el hash) */}
      {!formOpen && (
        <a
          href="#contacto"
          className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-700 to-rojo_c text-white px-4 py-6 rounded-l-lg shadow-lg hover:bg-blue-700 transition z-20 writing-mode-vertical"
        >
          <span className="flex items-center">
            <i className="fas fa-paper-plane mr-2"></i> Contáctanos
          </span>
         </a>
      )}

      {/* Overlay y formulario (controlado por formOpen) */}
      {formOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 z-10"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Formulario flotante */}
      <div
        ref={formRef}
        className={`fixed right-0 top-20 bottom-4 w-[350px] md:w-[400px] max-w-full bg-form_d shadow-xl z-30 p-6 overflow-y-auto rounded-l-2xl transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
          formOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Hablemos de tu proyecto</h3>
          <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <form
          className="space-y-5"
          action="https://formsubmit.co/oyael017@gmail.com" 
          method="POST"
        >
          <div className="relative">
            <input 
              type="text" 
              name="nombre"
              required 
              placeholder=" " 
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" 
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Nombre completo</label>
          </div>

          <div className="relative">
            <input 
              type="email" 
              name="email"
              required 
              placeholder=" " 
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" 
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Correo electrónico</label>
          </div>

          <div className="relative">
            <input 
              type="tel" 
              name="telefono"
              placeholder=" " 
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c" 
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Teléfono (opcional)</label>
          </div>

          <div className="relative">
            <select 
              name="servicio"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-rojo_c"
            >
              <option value="" disabled selected hidden>Servicio de interés</option>
              <option value="Pixie Starter">Pixie Starter</option>
              <option value="Pixie Pro">Pixie Pro</option>
              <option value="Pixie Premium">Pixie Premium</option>
              <option value="CloudLift Básico">CloudLift Básico</option>
              <option value="CloudLift Pro">CloudLift Pro</option>
              <option value="CloudLift Enterprise">CloudLift Enterprise</option>
              <option value="BotAmigo">BotAmigo</option>
              <option value="BotPro">BotPro</option>
              <option value="BotBoss">BotBoss</option>
              <option value="Otro servicio">Otro servicio</option>
            </select>
          </div>

          <div className="relative">
            <textarea 
              rows="4" 
              name="mensaje"
              placeholder=" " 
              required 
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rojo_c"
            ></textarea>
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-rojo_c">Cuéntanos sobre tu proyecto</label>
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="privacy" 
              name="acepta_politica"
              required
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-rojo_f" 
            />
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
              <i className="fas fa-phone-alt text-rojo_c mr-3"></i>
              <span className="text-gray-600">+52 (56) 1724-1295</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSliders;