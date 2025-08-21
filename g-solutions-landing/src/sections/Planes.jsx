import React, { useState } from 'react';

const Planes = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Paginas Web');

  const planes = {
    'Paginas Web': [
      {
        nombre: "Pixie Starter",
        precio: "$3,499",
        caracteristicas: [
          "1 Página (Landing Page)",
          "Diseño Responsivo",
          "Boton de contacto",
          "Hosting gratis por 1 Mes"
        ],
        destacado: false
      },
      {
        nombre: "Pixie Pro",
        precio: "$5,499",
        caracteristicas: [
          "Hasta 4 páginas",
          "Integracion de redes sociales",
          "SEO básico",
          "Hosting gratis 3 Meses"
        ],
        destacado: true
      },
      {
        nombre: "Pixie Premium",
        precio: "$9,999",
        caracteristicas: [
          "Tienda Completa",
          "Pasarela de pagos integrada",
          "SEO avanzado + analiticas",
          "Hosting gratis 6 Meses",
        ],
        destacado: false
      }
    ],
    'Migracion': [
      {
        nombre: "CloudLift Básico",
        precio: "$4,000",
        caracteristicas: [
          "Migración de datos y aplicaciones pequeñas (hasta 50 GB)",
          "Configuración inicial de seguridad en AWS/Oracle Cloud/Google Cloud",
          "Capacitación básica de uso",
          "Soporte Mensual(Opcional)."
        ],
        destacado: false
      },
      {
        nombre: "CloudLift Pro",
        precio: "$8,000",
        caracteristicas: [
          "Migración de infraestructura completa (hasta 5 servidores)",
          "Configuración de acceso seguro (VPN/IAM)",
          "Capacitación completa + manual de uso.",
          "1 mes de soporte post-migración.",
          "Soporte Mensual por costo extra."
        ],
        destacado: true
      },
      {
        nombre: "CloudLift Enterprise",
        precio: "$15,000",
        caracteristicas: [
          "Migración compleja o multinube",
          "Integración de seguridad avanzada (WAF, IDS, IAM granular)",
          "Monitoreo de funcionamiento post-migración (30 días).",
          "Capacitación y soporte por 3 meses gratis.",
          "Soporte Mensual por costo extra."
        ],
        destacado: false
      }
    ],
    'Agentes IA': [
      {
        nombre: "BotAmigo",
        precio: "$4,500",
        caracteristicas: [
          "Chatbot básico para responder FAQs",
          "ntegración en web o WhatsApp",
          "Entrenado con info del cliente",
          "$500/mes - Soporte"
        ],
        destacado: false
      },
      {
        nombre: "BotPro",
        precio: "$5,700",
        caracteristicas: [
          "Chatbot inteligente con IA generativa",
          "Respuestas personalizadas según contexto",
          "Reportes de interacciones",
          "Dashboard analítico",
          "$1,000/mes - Soporte"
        ],
        destacado: true
      },
      {
        nombre: "BotBoss",
        precio: "$15,000",
        caracteristicas: [
          "Agente IA multicanal (Web, WhatsApp, Messenger, Instagram)",
          "Integración con CRM y APIs externas",
          "Entrenamiento avanzado y mantenimiento mensual",
          "$2,500/mes - Soporte Prioritario"
        ],
        destacado: false
      }
    ]
  };

  return (
    <section id="planes" className="py-20 bg-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-rojo_f bg-red-100 rounded-full mb-4">
            Nuestros Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Elige el paquete perfecto
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Soluciones escalables para cada necesidad
          </p>
        </div>

        {/* Pestañas */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {Object.keys(planes).map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  categoriaActiva === categoria
                    ? 'bg-rojo_c text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes[categoriaActiva].map((plan, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl p-8 shadow-lg transition-all duration-300 ${
                plan.destacado
                  ? 'border-rojo_c bg-gradient-to-b from-red-50 to-white transform scale-[1.02]'
                  : 'border-gray-200 hover:shadow-xl'
              }`}
            >
              {/* Badge destacado */}
              {plan.destacado && (
                <div className="bg-rojo_c text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ¡Más popular!
                </div>
              )}

              <h3 className="text-2xl font-bold text-center mb-2">{plan.nombre}</h3>
              <p className="text-3xl font-bold text-rojo_c text-center mb-6">{plan.precio}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-700">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition ${plan.destacado
                  ? 'bg-rojo_c text-white hover:bg-rojo_f shadow-lg'
                  : 'bg-white text-rojo_c border border-rojo_c hover:bg-gray-50'
                  }`} >
                    <a href="#contacto" className="block w-full h-full"> {plan.nombre === "Custom" ? "Cotizar ahora" : "Contratar"}
                    </a>
                </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;