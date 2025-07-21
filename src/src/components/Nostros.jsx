import React from "react";

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 px-6 bg-oscuro">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4 leading-tight">
              ¿Quiénes somos?
            </span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Somos más que un proveedor de hosting, somos tu socio tecnológico para el éxito digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          {[
            {
              icon: "",
              title: "Nuestra Misión",
              text: "Empoderar a empresas y emprendedores con infraestructura tecnológica de clase mundial, permitiéndoles enfocarse en lo que realmente importa: su negocio.",
            },
            {
              icon: "",
              title: "Nuestra Visión",
              text: "Ser el referente en soluciones de hosting en Latinoamérica, reconocidos por nuestra innovación, soporte excepcional y compromiso con el éxito de nuestros clientes.",
            },
            {
              icon: "",
              title: "Nuestros Valores",
              text: "Transparencia, excelencia técnica, innovación constante y atención personalizada. Creemos en construir relaciones a largo plazo basadas en la confianza.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-red-600 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 
                        hover:bg-gradient-to-br hover:from-red-700 hover:via-rojo_c hover:to-red-500"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-white">{item.title}</h3>
              <p className="text-white text-center">{item.text}</p>
            </div>
          ))}
        </div>


        <div className="mt-16 bg-oscuro rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-rojo_c">Nuestra Historia</h3>
              <p className="text-negro text-lg mb-4">
                Somos un equipo mexicano de tecnología enfocado en el desarrollo e implementación de soluciones digitales a medida. Nos especializamos en la creación de páginas web y aplicaciones web modernas, funcionales y escalables, construidas desde cero con una visión centrada en tus objetivos.
                Desde el primer contacto, trabajamos de la mano contigo para entender a fondo tu proyecto y diseñar una solución que no solo se adapte a tus necesidades, sino que también siente las bases para su crecimiento futuro.
              </p>
              <p className="text-negro text-lg">
                Nuestro enfoque se basa en una comunicación clara, constante y cercana con el cliente, entendiendo que cada detalle cuenta cuando se trata de dar los primeros pasos hacia el mundo digital.
                Más allá del desarrollo web, nuestra visión es ofrecer soluciones completas en la nube: servidores, hosting especializado, gestión de bases de datos, migración y despliegue de servicios cloud — todo con el respaldo de un equipo comprometido, capacitado y listo para llevar tu proyecto al siguiente nivel.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 absolute -top-10 -left-10 animate-float-circle"></div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                  alt="Team"
                  className="relative z-10 w-64 h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
