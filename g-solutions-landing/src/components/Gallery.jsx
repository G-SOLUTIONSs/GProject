import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Gallery = () => {
  return (
    <section className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: "url('/src/assets/pexels-divinetechygirl-1181354.jpg')"
              }}
            ></div>

            {/* Capa de gradiente encima */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-gray-700 opacity-50"></div>

            {/* Contenido (texto) */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold text-center px-4">
                ¡Lleva tu negocio a la nube con nostros!
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: "url('/src/assets/pexels-shkrabaanthony-5475750.jpg')"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-black opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold text-center px-4">
                Sitios web rápidos, seguros y atractivos.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: "url('/src/assets/pexels-pixabay-207580.jpg')"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold text-center px-4">
                Tu puente digital al futuro.
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
