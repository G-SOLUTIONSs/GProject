import React from "react";

const Proceso = () => {
  return (
    <section id="proceso" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-rojo_f bg-pink-100 rounded-full mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo trabajamos para hacer realidad tu proyecto
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Un proceso claro y estructurado que garantiza resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-rojo_c to-rojo_f transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {[1, 2, 3, 4].map((step) => {
              const steps = [
                {
                  title: "Consulta y Planificación",
                  description: "Analizamos tus necesidades, objetivos y expectativas para crear un plan de acción personalizado.",
                  items: [
                    "Reunión inicial para entender tu negocio",
                    "Definición de objetivos y KPIs",
                    "Propuesta detallada y cronograma",
                  ],
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                },
                {
                  title: "Diseño y Prototipado",
                  description: "Creamos diseños atractivos y funcionales que reflejan la identidad de tu marca y mejoran la experiencia del usuario.",
                  items: [
                    "Investigación de mercado y competencia",
                    "Creación de wireframes y prototipos",
                    "Diseño de interfaz de usuario (UI/UX)",
                  ],
                  img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                },
                {
                  title: "Desarrollo y Pruebas",
                  description: "Implementamos todas las funcionalidades con código limpio y eficiente, realizando pruebas rigurosas en cada etapa.",
                  items: [
                    "Desarrollo front-end y back-end",
                    "Integración de sistemas y APIs",
                    "Pruebas de funcionalidad y rendimiento",
                  ],
                  img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                },
                {
                  title: "Lanzamiento y Soporte",
                  description: "Implementamos tu proyecto en producción y ofrecemos soporte continuo para garantizar su éxito a largo plazo.",
                  items: [
                    "Migración a servidores de producción",
                    "Capacitación para el equipo",
                    "Soporte y mantenimiento continuo",
                  ],
                  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                },
              ];

              const s = steps[step - 1];

              return (
                <div
                  key={step}
                  className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse group"
                >
                  <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="bg-white p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-rojo_f font-bold text-xl mr-4">
                          {step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{s.description}</p>
                      <ul className="space-y-2">
                        {s.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mt-1 mr-2">✔</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex w-1/2 px-4 justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-rojo_c border-4 border-white shadow-lg"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="h-full flex items-center justify-center">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="rounded-lg shadow-md w-full max-w-md group-hover:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
