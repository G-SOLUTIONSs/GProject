import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PRTGImage from '../assets/PRTGAWS.jpeg';
import MCImage from '../assets/MCCC.jpeg';
import PTWImage from '../assets/PWEBS.jpeg';
import BTDImage from '../assets/DBOT.jpeg';




const Proyectos = () => {
  // Datos de proyectos (puedes reemplazarlos con tus proyectos reales)
  const proyectos = [
    {
      id: 1,
      titulo: "Dashboard De PRTG con AWS",
      descripcion: "Plataforma de Monitoreo unificando +5 servidores PRTG.",
      tecnologias: ["AWS", "S3", "CloudFront","Lambda"],
      imagen: PRTGImage,
      enlace: "/proyectos-detallados",
    },
    {
      id: 2,
      titulo: "Servidor de Minecraft",
      descripcion: "Automatizacion y depliegues de servidores de Minecraft con Docker ",
      tecnologias: ["Oracle Cloud", "Docker", "Python"],
      imagen: MCImage,
      enlace: "/proyectos-detallados",
    },
    {
      id: 3,
      titulo: "Portafolio Web para estudiante",
      descripcion: "CV o Portafolios Web para distintos estudiantes",
      tecnologias: ["AWS", "S3", "HTML","CSS"],
      imagen: PTWImage,
      enlace: "/proyectos-detallados",
    },
    {
      id: 4,
      titulo: "Integracion de Discord para Soporte",
      descripcion: "Sistema de automatizacion para soporte de tickets con bots de Discord",
      tecnologias: ["Discord", "Bots", "Automatizacion"],
      imagen: BTDImage,
      enlace: "/proyectos-detallados",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-rojo_f bg-red-100 rounded-full mb-4">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        {/* Slider de Proyectos */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="pb-12"
        >
          {proyectos.map((proyecto) => (
            <SwiperSlide key={proyecto.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Imagen del proyecto */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{proyecto.titulo}</h3>
                  <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
                  
                  {/* Tecnologías */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Tecnologías:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-rojo_c text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <div className="px-6 pb-6">
                  <a
                    href={proyecto.enlace}
                    className="block w-full text-center px-4 py-2 bg-rojo_c text-white rounded-lg hover:bg-rojo_f transition"
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres un proyecto similar para tu negocio?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3 bg-rojo_c text-white rounded-lg font-semibold hover:bg-rojo_f transition shadow-lg hover:shadow-xl"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;