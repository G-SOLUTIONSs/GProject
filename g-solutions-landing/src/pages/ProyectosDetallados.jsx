import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PRTGImage from '../assets/PRTGAWS.jpeg';
import MCImage from '../assets/MCCC.jpeg';
import PTWImage from '../assets/PWEBS.jpeg';
import BTDImage from '../assets/DBOT.jpeg';

// Imágenes de ejemplo para los carruseles
import Img1 from '../assets/logo.png';
import Img2 from '../assets/logo.png';
import Img3 from '../assets/logo.png';

// Componente Modal para Portafolios Web con diseño específico
const PortfolioWebModal = ({ isOpen, onClose, proyecto }) => {
  const [selectedCV, setSelectedCV] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cvs = [
    { id: 1, name: "CV Profesional", images: [Img1, Img2, Img3] },
    { id: 2, name: "CV Creativo", images: [Img2, Img3, Img1] },
    { id: 3, name: "CV Académico", images: [Img3, Img1, Img2] },
    { id: 4, name: "CV Freelancer", images: [Img1, Img3, Img2] },
  ];

  const carouselItems = cvs.find(cv => cv.id === selectedCV)?.images || [];

  // Efecto para prevenir el scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Efecto para el carrusel automático
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex < carouselItems.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isOpen, carouselItems.length]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex < carouselItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : carouselItems.length - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 relative">
        {/* Botón de cerrar - Posicionado dentro del modal pero cerca del contenido */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 z-10 transition-colors shadow-md"
        >
          <i className="fas fa-times"></i>
        </button>
        
        {/* Contenido principal - Layout específico para Portafolios Web */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Panel izquierdo (25%) - Selector vertical de CVs */}
          <div className="w-full lg:w-1/4 bg-gray-100 p-5 border-r border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-5 text-center border-b border-gray-300 pb-3">Tipos de Portafolio</h3>
            <div className="space-y-3">
              {cvs.map(cv => (
                <div
                  key={cv.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedCV === cv.id 
                      ? 'bg-red-100 border-l-4 border-red-500 text-red-800 font-medium' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedCV(cv.id);
                    setCurrentIndex(0);
                  }}
                >
                  {cv.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Panel derecho (75%) - Contenido del CV */}
          <div className="w-full lg:w-3/4 flex flex-col">
            {/* Carrusel (50% del espacio vertical) */}
            <div className="h-1/2 relative bg-gray-800">
              <div className="flex h-full overflow-hidden">
                {carouselItems.map((img, index) => (
                  <div
                    key={index}
                    className={`min-w-full h-full transition-transform duration-500 ${
                      index === currentIndex ? 'block' : 'hidden'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`CV ${selectedCV} - Imagen ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Controles del carrusel */}
              <button 
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors text-white"
                onClick={prevSlide}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors text-white"
                onClick={nextSlide}
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              {/* Indicadores del carrusel */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? 'bg-red-500' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Detalles técnicos (50% del espacio vertical) - ALTURA CORREGIDA */}
            <div className="h-1/2 p-6 bg-white overflow-y-auto border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Detalles Técnicos</h3>
              
              <div className="mb-4">
                <h4 className="text-red-600 font-medium mb-2">Tecnologías Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-red-600 font-medium mb-2">Funcionalidades</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {proyecto.funcionalidades.map((func, index) => (
                    <li key={index} className="text-sm">{func}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-red-600 font-medium mb-2">Características</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {proyecto.caracteristicas.map((caract, index) => (
                    <li key={index} className="text-sm">{caract}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Modal para otros proyectos (mantenido igual)
const ProjectModal = ({ isOpen, onClose, proyecto }) => {
  const [activeDetailTab, setActiveDetailTab] = useState('tecnologias');

  // Efecto para prevenir el scroll cuando el modal está abierto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 z-10 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>
        
        {/* Imagen principal del proyecto con carrusel */}
        <div className="h-72 relative">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
          >
            {proyecto.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={img} 
                  alt={`${proyecto.titulo} - Imagen ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Contenido del proyecto */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Encabezado */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h2>
            <p className="text-gray-600">{proyecto.descripcion}</p>
          </div>
          
          {/* Detalles técnicos */}
          <div className="flex-1 p-6 overflow-hidden flex flex-col min-h-0">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Detalles Técnicos</h3>
            
            {/* Pestañas de detalles */}
            <div className="flex border-b border-gray-300 mb-4">
              <button
                className={`py-2 px-4 font-medium ${
                  activeDetailTab === 'tecnologias' 
                    ? 'text-red-500 border-b-2 border-red-500' 
                    : 'text-gray-500 hover:text-red-400'
                }`}
                onClick={() => setActiveDetailTab('tecnologias')}
              >
                Tecnologías
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeDetailTab === 'funcionalidades' 
                    ? 'text-red-500 border-b-2 border-red-500' 
                    : 'text-gray-500 hover:text-red-400'
                }`}
                onClick={() => setActiveDetailTab('funcionalidades')}
              >
                Funcionalidades
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeDetailTab === 'caracteristicas' 
                    ? 'text-red-500 border-b-2 border-red-500' 
                    : 'text-gray-500 hover:text-red-400'
                }`}
                onClick={() => setActiveDetailTab('caracteristicas')}
              >
                Características
              </button>
            </div>
            
            {/* Contenido de las pestañas con scroll interno */}
            <div className="text-gray-700 overflow-y-auto flex-1">
              {activeDetailTab === 'tecnologias' && (
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {activeDetailTab === 'funcionalidades' && (
                <ul className="list-disc pl-5 space-y-2">
                  {proyecto.funcionalidades.map((func, index) => (
                    <li key={index}>{func}</li>
                  ))}
                </ul>
              )}
              
              {activeDetailTab === 'caracteristicas' && (
                <ul className="list-disc pl-5 space-y-2">
                  {proyecto.caracteristicas.map((caract, index) => (
                    <li key={index}>{caract}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProyectosDetallados = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const proyectos = [
    {
      id: 1,
      titulo: "Dashboard De PRTG con AWS",
      descripcion: "Desarrollo e implementación de una plataforma de monitoreo centralizada, integrando y unificando más de 5 servidores PRTG en un solo panel de control. La solución se diseñó para optimizar la supervisión de redes y servidores de forma remota, asegurando tiempos de respuesta más rápidos ante incidencias.",
      tecnologias: ["AWS", "S3", "CloudFront", "Lambda", "PRTG API"],
      funcionalidades: [
        "AWS S3 y CloudFront: para hosting rápido y seguro del dashboard.",
        "AWS Lambda: para procesar datos y ejecutar funciones automatizadas sin necesidad de servidores dedicados.",
        "PRTG API: para la extracción de métricas en tiempo real.",
        "Interfaz responsive: adaptable a diferentes dispositivos y resoluciones."
      ],
      caracteristicas: [
        "Monitoreo en tiempo real de múltiples servidores",
        "Alertas automáticas configurables",
        "Panel de control unificado",
        "Histórico de métricas y reportes"
      ],
      images: [PRTGImage, Img1, Img2]
    },
    {
      id: 2,
      titulo: "Servidor de Minecraft",
      descripcion: "Proyecto de despliegue y automatización de servidores de Minecraft utilizando contenedores Docker, optimizado para ejecutarse en Oracle Cloud. El sistema permite a los usuarios levantar, detener o reiniciar servidores con comandos simples, asegurando flexibilidad y estabilidad en el entorno de juego.",
      tecnologias: ["Oracle Cloud", "Docker", "Python", "Bash", "Minecraft Server"],
      funcionalidades: [
        "Oracle Cloud: infraestructura escalable para hosting.",
        "Docker: para encapsular y gestionar entornos de servidor.",
        "Python: para scripts de automatización y configuración inicial.",
        "Interfaz de administración web para gestión simplificada."
      ],
      caracteristicas: [
        "Despliegue automatizado con un solo comando",
        "Backups automáticos de mundos y configuraciones",
        "Escalado según demanda de jugadores",
        "Sistema de plugins y mods preconfigurado"
      ],
      images: [MCImage, Img2, Img3]
    },
    {
      id: 3,
      titulo: "Portafolios Web",
      descripcion: "Diseño y desarrollo de páginas web tipo portafolio profesional para estudiantes y recién egresados que buscan destacar en procesos de selección académica o laboral. Cada portafolio incluye secciones para presentación personal, experiencia, proyectos destacados y enlaces de contacto.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "AWS S3"],
      funcionalidades: [
        "AWS S3: para hosting rápido y seguro.",
        "HTML y CSS: para diseño responsivo y adaptado a dispositivos móviles.",
        "Formularios de contacto integrados",
        "Optimización para motores de búsqueda (SEO)"
      ],
      caracteristicas: [
        "Diseño personalizado para cada cliente",
        "Modo oscuro/claro adaptable",
        "Integración con redes sociales",
        "Analíticas de visitas integradas"
      ],
      images: [PTWImage, Img3, Img1]
    },
    {
      id: 4,
      titulo: "Integración de Discord para Soporte y Ventas",
      descripcion: "Desarrollo de un sistema de automatización para atención al cliente y ventas dentro de Discord, mediante la implementación de bots personalizados para gestión de tickets, consultas rápidas y seguimiento de ventas.",
      tecnologias: ["Discord API", "Node.js", "MongoDB", "Python", "Webhooks"],
      funcionalidades: [
        "Discord API: para conexión y control de canales.",
        "Bots personalizados: para automatizar interacciones y clasificación de solicitudes.",
        "Scripts de automatización: para reportes y análisis de actividad.",
        "Sistema de tickets: para organizar y priorizar consultas."
      ],
      caracteristicas: [
        "Respuestas automáticas a preguntas frecuentes",
        "Sistema de tickets con categorías",
        "Recordatorios y seguimiento de conversaciones",
        "Integración con CRM y herramientas de analytics"
      ],
      images: [BTDImage, Img1, Img3]
    },
  ];

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProyectoSeleccionado(null);
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-red-700 bg-red-100 rounded-full mb-4">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Explora en profundidad cada uno de nuestros desarrollos.
            </p>
          </div>

          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div 
                key={proyecto.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col hover:border-red-200"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={proyecto.images[0]} 
                    alt={proyecto.titulo} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Contenido Básico */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{proyecto.descripcion}</p>
                  
                  {/* Tecnologías (solo muestra las primeras 3) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {proyecto.tecnologias.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{proyecto.tecnologias.length - 3} más
                      </span>
                    )}
                  </div>

                  {/* Botón para abrir el modal */}
                  <button
                    onClick={() => abrirModal(proyecto)}
                    className="w-full mt-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center"
                  >
                    Ver detalles completos
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal para el proyecto seleccionado */}
      {proyectoSeleccionado && (
        <>
          {proyectoSeleccionado.id === 3 ? (
            <PortfolioWebModal 
              isOpen={modalOpen} 
              onClose={cerrarModal} 
              proyecto={proyectoSeleccionado} 
            />
          ) : (
            <ProjectModal 
              isOpen={modalOpen} 
              onClose={cerrarModal} 
              proyecto={proyectoSeleccionado} 
            />
          )}
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default ProyectosDetallados;