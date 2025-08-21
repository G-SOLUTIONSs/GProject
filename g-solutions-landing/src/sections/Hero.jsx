import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-gris relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          {/* Texto izquierda */}
          <div className="md:w-1/2 mb-10 md:mb-0 slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu presentacion y herramienta digital{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rojo_f to-rojo_c">
                sin complicaciones
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Nos encargamos de todo el desarrollo técnico para que tú solo te
              enfoques en lo que realmente importa: tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contacto"
                className="px-8 py-3 bg-white text-rojo_c rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Comenzar ahora
              </a>
              <a
                href="/#planes"
                className="px-8 py-3 border-2 border-white text-black rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Ver servicios
              </a>
            </div>

            {/* Testimonios fake */}
            
          </div>

          {/* Imagen derecha */}
          <div className="md:w-1/2 relative slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Desarrollo web"
                className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
              />
              {/* Tarjeta 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <span className="text-blue-500 text-xl">👍</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Eficiencia</p>
                    <p className="text-sm text-gray-600">Desarrollamos tus proyectos en tiempo y forma</p>
                  </div>
                </div>
              </div>
              {/* Tarjeta 2 */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-3">
                    <span className="text-green-500 text-xl">🛡️</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Seguridad</p>
                    <p className="text-sm text-gray-600">Aplicamos seguridad robusta en cada paso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    
  );
};

export default Hero;
