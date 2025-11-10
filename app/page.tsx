import type { Metadata } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SchoolButton from "./components/SchoolButton";
import VideoSection from "./components/VideoSection";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli | Robokids",
  description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Clases muestra GRATIS. Escuela de robótica #1. También ofrecemos cursos de corte láser e impresión 3D.",
  alternates: {
    canonical: "https://robokidsedu.com",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="Organization" data={null} />
      <StructuredData type="LocalBusiness" data={null} />
      <StructuredData 
        type="FAQPage" 
        data={{
          questions: [
            {
              question: "¿Dónde están ubicadas las sucursales de Robokids?",
              answer: "Tenemos sucursales en Coacalco (Plaza Coacalco) y Cuautitlán Izcalli (Cofradía y Plaza Periférico), Estado de México. Ofrecemos clases de robótica, corte láser e impresión 3D para niños y jóvenes."
            },
            {
              question: "¿Las clases muestra son realmente gratis?",
              answer: "Sí, ofrecemos clases muestra completamente GRATIS sin compromiso. Es una oportunidad perfecta para que los niños conozcan nuestros cursos de robótica, corte láser e impresión 3D antes de inscribirse."
            },
            {
              question: "¿Para qué edades son los cursos?",
              answer: "Nuestros cursos están diseñados para niños y jóvenes de 6 a 30 años. Tenemos programas adaptados a diferentes niveles y edades, desde principiantes hasta avanzados."
            },
            {
              question: "¿Qué cursos ofrecen en Coacalco y Cuautitlán Izcalli?",
              answer: "Ofrecemos tres cursos principales: Curso de Robótica para Niños, Curso de Corte Láser y Curso de Impresión 3D. Todos disponibles en nuestras sucursales de Coacalco y Cuautitlán Izcalli, Estado de México."
            },
            {
              question: "¿Cómo puedo agendar una clase muestra gratis?",
              answer: "Puedes agendar tu clase muestra gratis a través de WhatsApp. Simplemente selecciona tu edad, el día de la semana que prefieras y la sucursal más cercana (Coacalco o Cuautitlán Izcalli)."
            },
            {
              question: "¿Los cursos son solo para niños?",
              answer: "No, nuestros cursos están diseñados para niños y jóvenes de 6 a 30 años. Ofrecemos programas adaptados a diferentes niveles, desde principiantes hasta avanzados."
            }
          ]
        }} 
      />
      
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <HeroSection />
        
        {/* School Buttons Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a] overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_70%)]" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50">
                  <span className="text-cyan-300 font-semibold">📍 Coacalco</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50">
                  <span className="text-purple-300 font-semibold">📍 Cuautitlán Izcalli</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">Curso de Robótica para Niños y Jóvenes</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explora las tecnologías del futuro y desarrolla habilidades que te preparan para el mañana. Clases muestra GRATIS en nuestras sucursales de <strong className="text-cyan-400">Coacalco</strong> y <strong className="text-purple-400">Cuautitlán Izcalli</strong>, Estado de México.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SchoolButton
              title="Curso de Robótica para Niños"
              description="Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli. Construye y programa robots inteligentes. Domina la ingeniería y la programación mientras creas proyectos increíbles."
              icon="/RoboticaSchool.svg"
              href="/robotica"
              gradient="from-cyan-600/80 via-cyan-500/70 to-teal-600/80"
              iconType="robotica"
            />
            <SchoolButton
              title="Curso de Corte Láser"
              description="Curso de corte láser en Coacalco y Cuautitlán Izcalli. Diseña y fabrica con precisión láser. Crea proyectos únicos en madera, acrílico y más materiales avanzados."
              icon="/LaserSchool.svg"
              href="/corte"
              gradient="from-pink-600/80 via-rose-500/70 to-red-600/80"
              iconType="corte"
            />
            <SchoolButton
              title="Curso de Impresión 3D"
              description="Curso de impresión 3D en Coacalco y Cuautitlán Izcalli. Da vida a tus ideas con impresión 3D. Aprende diseño 3D, modelado y fabricación digital desde cero."
              icon="/3dSchool.svg"
              href="/3d"
              gradient="from-blue-600/80 via-indigo-500/70 to-purple-600/80"
              iconType="3d"
            />
          </div>
        </div>
      </section>

      <VideoSection />
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            <span className="gradient-text">Preguntas Frecuentes</span>
          </h2>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Dónde están ubicadas las sucursales de Robokids?</h3>
              <p className="text-gray-300">
                Tenemos sucursales en <strong className="text-cyan-400">Coacalco (Plaza Coacalco)</strong> y <strong className="text-purple-400">Cuautitlán Izcalli (Cofradía y Plaza Periférico)</strong>, Estado de México. Ofrecemos clases de robótica, corte láser e impresión 3D para niños y jóvenes.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Las clases muestra son realmente gratis?</h3>
              <p className="text-gray-300">
                Sí, ofrecemos clases muestra completamente <strong className="text-cyan-400">GRATIS</strong> sin compromiso. Es una oportunidad perfecta para que los niños conozcan nuestros cursos de robótica, corte láser e impresión 3D antes de inscribirse.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Para qué edades son los cursos?</h3>
              <p className="text-gray-300">
                Nuestros cursos están diseñados para niños y jóvenes de <strong className="text-cyan-400">6 a 30 años</strong>. Tenemos programas adaptados a diferentes niveles y edades, desde principiantes hasta avanzados.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Qué cursos ofrecen en Coacalco y Cuautitlán Izcalli?</h3>
              <p className="text-gray-300">
                Ofrecemos tres cursos principales: <strong className="text-cyan-400">Curso de Robótica para Niños</strong>, <strong className="text-pink-400">Curso de Corte Láser</strong> y <strong className="text-blue-400">Curso de Impresión 3D</strong>. Todos disponibles en nuestras sucursales de Coacalco y Cuautitlán Izcalli, Estado de México.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Cómo puedo agendar una clase muestra gratis?</h3>
              <p className="text-gray-300">
                Puedes agendar tu clase muestra gratis a través de <strong className="text-green-400">WhatsApp</strong>. Simplemente selecciona tu edad, el día de la semana que prefieras y la sucursal más cercana (Coacalco o Cuautitlán Izcalli).
              </p>
            </div>
            <div className="glass rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">¿Los cursos son solo para niños?</h3>
              <p className="text-gray-300">
                No, nuestros cursos están diseñados para <strong className="text-cyan-400">niños y jóvenes de 6 a 30 años</strong>. Ofrecemos programas adaptados a diferentes niveles, desde principiantes hasta avanzados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Highlight Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              <span className="gradient-text">Nuestras Sucursales</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Encuéntranos en dos ubicaciones estratégicas en el Estado de México
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-cyan-500/20">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Coacalco</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <strong className="text-cyan-400">Plaza Coacalco</strong> - Nuestra sucursal principal en Coacalco, Estado de México. Fácilmente accesible para todas las familias de la zona.
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50">
                <span className="text-cyan-300 text-sm font-semibold">Estado de México</span>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-purple-500/20">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Cuautitlán Izcalli</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <strong className="text-purple-400">Cofradía</strong> y <strong className="text-purple-400">Plaza Periférico</strong> - Dos sucursales en Cuautitlán Izcalli, Estado de México. Ubicaciones estratégicas para máximo acceso.
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50">
                <span className="text-purple-300 text-sm font-semibold">Estado de México</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Escuela de Robótica #1 en Coacalco y Cuautitlán Izcalli
            </h2>
            
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                <strong>Robokids Education</strong> es la escuela de robótica líder en <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>. Ofrecemos el mejor <strong>curso de robótica para niños y jóvenes</strong> en la zona, con sucursales estratégicamente ubicadas en <strong>Plaza Coacalco (Coacalco)</strong>, <strong>Cofradía (Cuautitlán Izcalli)</strong> y <strong>Plaza Periférico (Cuautitlán Izcalli)</strong>.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Curso de Robótica para Niños y Jóvenes - Clases Muestra GRATIS
              </h3>
              
              <p>
                Nuestro <strong>curso de robótica para niños y jóvenes</strong> está diseñado para estudiantes de 6 a 20 años. En <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>, ofrecemos clases muestra <strong>GRATIS</strong> para que conozcas nuestra metodología antes de inscribirte.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                ¿Por qué elegir Robokids?
              </h3>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Curso de robótica especializado para niños y jóvenes</li>
                <li>Instructores expertos en robótica educativa</li>
                <li>Equipos de última generación</li>
                <li>Múltiples ubicaciones: Plaza Coacalco (Coacalco), Cofradía y Plaza Periférico (Cuautitlán Izcalli)</li>
                <li>Clases muestra GRATIS sin compromiso</li>
                <li>Ambiente seguro y educativo</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Ubicaciones de Nuestro Curso de Robótica
              </h3>
              
              <p>
                Contamos con tres sucursales en <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong> para tu conveniencia:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Plaza Coacalco:</strong> Nuestra sucursal en Coacalco, Estado de México - fácilmente accesible</li>
                <li><strong>Cofradía:</strong> Ubicada en Cuautitlán Izcalli, Estado de México - ubicación estratégica para familias de la zona</li>
                <li><strong>Plaza Periférico:</strong> Ubicada en Cuautitlán Izcalli, Estado de México - convenientemente ubicada para máximo acceso</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Agenda tu Clase Muestra GRATIS de Robótica
              </h3>
              
              <p>
                ¿Listo para comenzar? Agenda tu <strong>clase muestra GRATIS</strong> de nuestro <strong>curso de robótica para niños y jóvenes</strong> en cualquiera de nuestras sucursales de <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>. ¡No requiere compromiso!
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
    </>
  );
}
