import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terminos = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-rojo_c mb-6 text-center">
            Términos y Condiciones Generales
          </h1>
          <p className="text-gray-700 mb-8 text-center">Última actualización: 15 de agosto de 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-8">
              Al contratar cualquiera de los servicios de Gsolutions ("El Proveedor"), usted ("El Cliente") acepta y se compromete a cumplir los siguientes Términos y Condiciones. Es responsabilidad del Cliente leer, comprender y aceptar estas condiciones antes de iniciar cualquier proyecto o suscripción.
            </p>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Objeto del Contrato</h2>
              <p className="text-gray-700">
                Gsolutions se compromete a prestar servicios profesionales en las áreas de Diseño y Desarrollo Web (Planes "Pixie"), Migración de Infraestructura a la Nube (Planes "CloudLift"), y Desarrollo e Implementación de Chatbots con Inteligencia Artificial (Planes "Bot"). El alcance, características y entregables específicos de cada servicio se definen en el plan particular contratado por eliente.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Descripción y Alcance de los Servicios</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.1. Planes de Diseño Web "Pixie"</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Pixie Starter:</strong> Incluye el diseño y publicación de una página única (Landing Page), diseño responsivo, botón de contacto y 1 mes de hosting gratuito, después $350/mes.</li>
                <li><strong>Pixie Pro:</strong> Incluye el diseño de hasta 4 páginas, integración con redes sociales, configuración de SEO básico y 3 meses de hosting gratuito, después $450/mes.</li>
                <li><strong>Pixie Premium:</strong> Incluye el desarrollo de una tienda en línea completa, integración de pasarela de pagos, SEO avanzado con analíticas y 6 meses de hosting gratuito, después $650/mes.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Revisiones:</strong> El proceso de diseño inicial incluye hasta dos rondas de revisiones menores (ajustes de texto, imágenes o colores). Cambios estructurales, nuevas funcionalidades o revisiones adicionales no contempladas en el plan original serán cotizadas por separado.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2.2. Planes de Migración a la Nube "CloudLift"</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>CloudLift Básico:</strong> Migración de hasta 50 GB de datos/aplicaciones, configuración de seguridad inicial en AWS, Oracle Cloud o Google Cloud y capacitación básica, puede incluir el soporte de $1,000/mes (Opcional) incluye respaldos y monitoreo básico.</li>
                <li><strong>CloudLift Pro:</strong> Migración de hasta 5 servidores, configuración de acceso seguro (VPN/IAM), capacitación completa y 1 mes de soporte post-migración, al concluir el mes de soporte, Se cobrarán $1,500/mes, por mantenimiento (Optimización + Soporte Técnico).</li>
                <li><strong>CloudLift Enterprise:</strong> Migración compleja o multinube, integración de seguridad avanzada (WAF, IDS), monitoreo por 30 días y 3 meses de soporte, al concluir los 3 meses de soporte, Se cobrarán $3,000/mes, por mantenimiento (Optimización + Soporte continuo + Monitoreo).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Responsabilidad del Proveedor de Nube:</strong> El Cliente es el único responsable de la relación contractual y los pagos directos con el proveedor de servicios en la nube (AWS, Oracle Cloud, etc.). Gsolutions actúa únicamente como gestor de la migración y configuración.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2.3. Planes de Chatbots con IA "Bot"</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>BotAmigo:</strong> Chatbot para FAQs con integración en web o WhatsApp, entrenado con la información proporcionada por el Cliente, Se cobrarán $500/mes de soporte (Optimización de Respuestas + Costo de API + Reportes Mensuales).</li>
                <li><strong>BotPro:</strong> Chatbot con IA generativa, respuestas contextuales, reportes y dashboard de analíticas. Se cobrarán $1,000/mes de soporte (Optimización de Respuestas + Costo de API + Reportes Mensuales).</li>
                <li><strong>BotBoss:</strong> Agente IA multicanal (Web, WhatsApp, Messenger, Instagram) con integración a CRM/APIs. El pago único cubre el desarrollo, entrenamiento avanzado e integración. Se cobrarán $2,500/mes de soporte (Optimización de Respuestas + Costo de API + Reportes Mensuales).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Contenido y Entrenamiento:</strong> El éxito del chatbot depende de la calidad de la información proporcionada. El Cliente se compromete a entregar toda la documentación y accesos necesarios para el correcto entrenamiento y funcionamiento del bot.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Pagos, Facturación y Cancelación</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.1. Proyectos de Pago Único</h3>
              <p className="text-gray-700">
                Se requiere un anticipo no reembolsable del 50% del costo total para iniciar el proyecto. El 50% restante deberá ser liquidado al finalizar la entrega del servicio, previo a la entrega de accesos finales, manuales o puesta en producción.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.2. Servicios de Suscripción Mensual</h3>
              <p className="text-gray-700">
                El pago se realizará de forma mensual y por adelantado. La fecha de corte será el día en que se contrató el servicio. El incumplimiento de un pago dará lugar a la suspensión automática del servicio tras 5 días naturales de retraso. La reactivación del servicio podría generar un cargo administrativo adicional.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.3. Política de Cancelación</h3>
              <p className="text-gray-700">
                <strong>Proyectos de Pago Único:</strong> En caso de cancelación por parte del Cliente una vez iniciado el trabajo, el anticipo del 50% no será devuelto bajo ninguna circunstancia, como compensación por los recursos y tiempo invertido.
              </p>
              <p className="text-gray-700">
                <strong>Servicios de Suscripción:</strong> El Cliente puede cancelar su suscripción en cualquier momento. La cancelación será efectiva al final del ciclo de facturación ya pagado. No se realizarán reembolsos por periodos de servicio parciales. Tras la cancelación, los servicios asociados (sitio web, chatbot) serán desactivados.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Propiedad Intelectual</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">4.1. Contenido del Cliente</h3>
              <p className="text-gray-700">
                El Cliente garantiza ser el titular o tener los derechos de uso de todo el contenido proporcionado (textos, imágenes, videos, logos) y exime a Gsolutions de cualquier reclamación por derechos de autor o propiedad intelectual de terceros.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">4.2. Propiedad del Trabajo Realizado</h3>
              <p className="text-gray-700">
                <strong>Planes de Pago Único:</strong> El 100% de la propiedad sobre las configuraciones, código y desarrollos realizados se transfiere al Cliente una vez que el proyecto ha sido liquidado en su totalidad. La propiedad intelectual del diseño y código permanece con Gsolutions. La propiedad total del sitio web o agente IA podrá ser transferida al Cliente tras completar 6 meses consecutivos de pago de mantenimiento o al cubrir una cuota única de liberación (a ser cotizada).
              </p>
              <p className="text-gray-700">
                <strong>Derecho de Portafolio:</strong> Gsolutions se reserva el derecho de mostrar el trabajo finalizado en su portafolio y materiales de marketing, siempre anonimizando cualquier información sensible o confidencial del Cliente.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Hosting y Dominio (Aplicable a Planes Pixie)</h2>
              <p className="text-gray-700">
                El periodo de hosting gratuito indicado en cada plan comienza en la fecha de publicación del sitio web.
                Finalizado dicho periodo, el Cliente será el único responsable de la renovación y pago anual del servicio de hosting y del dominio. 
                Gsolutions notificará al Cliente con antelación sobre los vencimientos, pero no se hace responsable por la pérdida del sitio web o dominio en caso de que el Cliente no realice la renovación a tiempo.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Garantía y Soporte Técnico</h2>
              <p className="text-gray-700">
                <strong>Planes Pixie:</strong> El soporte técnico para corregir errores o fallos derivados del desarrollo inicial está incluido durante la vigencia de la suscripción. No incluye la adición de nuevas funcionalidades.
              </p>
              <p className="text-gray-700">
                <strong>Planes CloudLift:</strong> La garantía y el soporte post-migración se limitan estrictamente al periodo especificado en cada plan (1 mes para Pro, 3 meses para Enterprise).
              </p>
              <p className="text-gray-700">
                <strong>Planes Bot:</strong> Se ofrece una garantía de 15 días naturales tras la implementación para corregir errores de funcionamiento. El soporte y mantenimiento manejado con costo mensual aplica con costo dependiendo del plan elegido (BotAmigo, BotPro, BotBoss).
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-gray-700">
                Gsolutions no será responsable por pérdidas de negocio, lucro cesante, daños a terceros o interrupciones de servicio causadas por factores externos, tales como caídas del proveedor de hosting/nube, fallos en APIs de terceros (WhatsApp, Meta, pasarelas de pago), ataques informáticos o el uso indebido del servicio por parte del Cliente. 
                La responsabilidad máxima de Gsolutions se limitará al monto pagado por el Cliente por el servicio en cuestión durante el último mes.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Confidencialidad</h2>
              <p className="text-gray-700">
                Ambas partes acuerdan tratar toda la información compartida durante la relación comercial (credenciales, datos de negocio, estrategias) como estrictamente confidencial y no divulgarla a terceros sin consentimiento previo por escrito.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Modificaciones a los Términos</h2>
              <p className="text-gray-700">
                Gsolutions se reserva el derecho de modificar estos Términos y Condiciones. Cualquier cambio será notificado al Cliente con al menos 15 días de antelación. 
                El uso continuado del servicio después de dicha fecha constituirá la aceptación de los nuevos términos.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Cláusula de Uso Razonable y Anti-Abuso</h2>
              <p className="text-gray-700">
                El servicio de soporte y revisiones está sujeto a un uso razonable. Solicitudes de cambios ilimitadas, re-diseños completos fuera del alcance inicial o un uso indebido del soporte podrán ser facturados como horas de trabajo adicionales. 
                En casos graves como incumplimiento de pagos reiterado o distribución no autorizada del trabajo, Gsolutions podrá suspender de forma inmediata y permanente el servicio y tomar las acciones legales que considere pertinentes.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Cláusula de Uso Razonable y Anti-Abuso</h2>
              <p className="text-gray-700">
                El servicio de soporte y revisiones está sujeto a un uso razonable. Solicitudes de cambios ilimitadas, re-diseños completos fuera del alcance inicial o un uso indebido del soporte podrán ser facturados como horas de trabajo adicionales. En casos graves como incumplimiento de pagos reiterado o distribución no autorizada del trabajo, Gsolutions podrá suspender de forma inmediata y permanente el servicio y tomar las acciones legales que considere pertinentes.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terminos;