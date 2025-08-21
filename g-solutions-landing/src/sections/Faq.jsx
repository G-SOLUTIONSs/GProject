import React, { useState } from 'react';

const Faq = () => {
  // Datos de preguntas y respuestas actualizados
  const [faqs, setFaqs] = useState([
    {
      pregunta: "¿Cuál es el primer paso después de contratar un servicio?",
      respuesta: "Una vez que eliges tu plan y realizas el pago inicial, nuestro equipo se pondrá en contacto contigo en menos de 24 horas para agendar una reunión de inicio. En esta sesión, definiremos los objetivos, recopilaremos la información necesaria (textos, logos, accesos) y estableceremos un calendario de trabajo.",
      abierto: false
    },
    {
      pregunta: "El precio de los planes, ¿es un pago único o una mensualidad?",
      respuesta: "Nuestro modelo es híbrido. Realizas un pago único inicial por el desarrollo, diseño o migración del proyecto (tu página web, chatbot o infraestructura en la nube). Después de la entrega, se activa un pago mensual que cubre conceptos como el hosting, soporte técnico, mantenimiento, optimizaciones y costos de API, dependiendo del plan que hayas elegido.",
      abierto: false
    },
    {
      pregunta: "¿Ofrecen planes personalizados si mis necesidades no encajan en los paquetes existentes?",
      respuesta: "¡Sí! Entendemos que cada proyecto es único. Si necesitas una solución a la medida, contáctanos para analizar tus requerimientos y prepararte una cotización personalizada.",
      abierto: false
    },
    {
      pregunta: "¿Cuándo soy 100% dueño de mi página web o chatbot?",
      respuesta: "Con el pago único inicial, adquieres el 100% de la propiedad sobre el trabajo realizado y tienes pleno derecho de uso. Sin embargo, la propiedad intelectual (el código fuente y diseño originales) se te transfiere por completo una vez que hayas cubierto 6 meses consecutivos del pago de mantenimiento/soporte. También puedes solicitar una cuota de liberación para obtenerla antes.",
      abierto: false
    },
    {
      pregunta: "En los planes Pixie, ¿qué incluye exactamente el pago mensual después del periodo gratuito?",
      respuesta: "El pago mensual en los planes Pixie cubre dos áreas vitales: Hosting y Soporte Tecnico ",
      abierto: false
    },
    {
      pregunta: "El precio del plan CloudLift, ¿incluye el costo del servicio en la nube (AWS, Oracle Cloud, etc.)?",
      respuesta: "No. Nuestros precios cubren exclusivamente el servicio de diagnóstico, planificación, migración, configuración y soporte. El costo del servicio en la nube es una relación contractual directa entre tú y el proveedor (Amazon, Google, Oracle), y deberás pagarlo por separado a ellos.",
      abierto: false
    },
    {
      pregunta: "Para los planes CloudLift y Bot, ¿es obligatorio el pago mensual de soporte/mantenimiento?",
      respuesta: "Sí, el pago mensual es una parte integral del servicio para garantizar el funcionamiento óptimo, la seguridad y la actualización continua de tu proyecto. Este pago cubre desde respaldos y monitoreo (CloudLift) hasta la optimización de respuestas y los costos de la tecnología de IA (Planes Bot).",
      abierto: false
    },
    {
      pregunta: "¿Qué pasa si decido cancelar el pago mensual de soporte o mantenimiento?",
      respuesta: "Puedes cancelar la suscripción mensual en cualquier momento. Sin embargo, al hacerlo, los servicios asociados se desactivarán. Por ejemplo, tu sitio web (Plan Pixie) dejará de estar en línea, o tu chatbot (Plan Bot) dejará de funcionar, ya que estos pagos cubren los costos operativos esenciales para mantenerlos activos.",
      abierto: false
    },
  ]);

  // Alternar estado de la pregunta
  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      abierto: i === index ? !faq.abierto : false
    })));
  };

  return (
    <section id="faq" className="py-20 bg-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-rojo_f bg-red-100 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Resolvemos tus dudas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.pregunta}
                </h3>
                <span className="text-rojo_c">
                  <i className={`fas ${faq.abierto ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </button>

              {/* Respuesta (se muestra si está abierto) */}
              {faq.abierto && (
                <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-gray-700">{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encontraste tu respuesta? Contáctanos directamente.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3 bg-rojo_c text-white rounded-lg font-semibold hover:bg-rojo_f transition shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-envelope mr-2"></i> Contactar Soporte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;