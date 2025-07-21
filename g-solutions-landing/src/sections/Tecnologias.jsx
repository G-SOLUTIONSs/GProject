import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const tecnologias = [
  { nombre: "React", icono: "fab fa-react" },
  { nombre: "Node.js", icono: "fab fa-node-js" },
  { nombre: "Laravel", icono: "fab fa-laravel" },
  { nombre: "WordPress", icono: "fab fa-wordpress" },
  { nombre: "AWS", icono: "fab fa-aws" },
  { nombre: "MySQL", icono: "fas fa-database" },
  { nombre: "Docker", icono: "fab fa-docker" },
  { nombre: "PHP", icono: "fab fa-php" },
  { nombre: "Python", icono: "fab fa-python" },
  { nombre: "JavaScript", icono: "fab fa-js" },
  { nombre: "Vue.js", icono: "fab fa-vuejs" },
  { nombre: "Angular", icono: "fab fa-angular" },
  { nombre: "HTML5", icono: "fab fa-html5" },
  { nombre: "CSS3", icono: "fab fa-css3-alt" },
  { nombre: "Linux", icono: "fab fa-linux" },
  { nombre: "Git", icono: "fab fa-git-alt" },
];

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="py-20 px-6 bg-blanco">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4 leading-tight">
              Tecnologías que implementamos
            </span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-negro max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas y confiables del mercado para garantizar el mejor rendimiento para tus proyectos.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {tecnologias.map((tech, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center p-4 transform transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(230,57,70,0.7)]"
              >
                <i className={`${tech.icono} text-rojo_c text-5xl mb-2`}></i>
                <span className="text-black font-medium text-sm md:text-base">
                  {tech.nombre}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tecnologias;
