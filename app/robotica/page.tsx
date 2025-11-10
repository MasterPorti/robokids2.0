import type { Metadata } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
import BookingForm from "../components/BookingForm";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli | Clase Muestra GRATIS",
  description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Clases muestra GRATIS. Aprende a construir y programar robots. Escuela de robótica #1. Agenda tu clase gratis hoy.",
  keywords: [
    "curso de robótica para niños",
    "curso de robótica para jóvenes",
    "robótica para niños Coacalco",
    "robótica Coacalco Estado de México",
    "escuela de robótica Coacalco",
    "clases de robótica Coacalco",
    "robótica Cofradía",
    "robótica Periférico",
    "robótica Cuautitlán Izcalli",
    "robótica Estado de México",
    "curso robótica cerca de mí",
    "clases robótica niños Coacalco",
    "robótica educativa Coacalco",
    "taller de robótica Coacalco",
    "robótica para adolescentes",
    "programación robots niños",
    "construir robots Coacalco",
    "aprender robótica Coacalco",
    "curso robótica Cuautitlán Izcalli",
    "escuela robótica Cuautitlán Izcalli",
    "clases robótica Cuautitlán Izcalli",
  ],
  openGraph: {
    title: "Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli | Robokids",
    description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Clases muestra GRATIS. Escuela de robótica #1.",
    url: "https://robokidsedu.com/robotica",
    images: [
      {
        url: "/roboticaFire.png",
        width: 1200,
        height: 630,
        alt: "Curso de Robótica para Niños en Coacalco",
      },
    ],
  },
  alternates: {
    canonical: "https://robokidsedu.com/robotica",
  },
};

export default function RoboticaPage() {
  const courseData = {
    name: "Curso de Robótica para Niños y Jóvenes",
    description: "Aprende a construir y programar robots. Desarrolla habilidades en ingeniería, programación y resolución de problemas mientras creas proyectos increíbles.",
    courseCode: "ROB-001",
    teaches: [
      "Construcción de robots",
      "Programación de robots",
      "Ingeniería mecánica básica",
      "Electrónica básica",
      "Resolución de problemas",
      "Pensamiento lógico",
    ],
    url: "https://robokidsedu.com/robotica",
  };

  const breadcrumbData = {
    items: [
      { name: "Inicio", url: "https://robokidsedu.com" },
      { name: "Curso de Robótica", url: "https://robokidsedu.com/robotica" },
    ],
  };

  return (
    <>
      <StructuredData type="Organization" data={null} />
      <StructuredData type="LocalBusiness" data={null} />
      <StructuredData type="Course" data={courseData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <Banner icon="/RoboticaSchool.svg" gradient="bg-gradient-to-r from-cyan-600/90 via-cyan-500/80 to-teal-600/90" />
        <PromoCard
          title="Curso de Robótica para Niños y Jóvenes"
          description="Sumérgete en el mundo de la robótica y aprende a construir, programar y controlar robots en Coacalco y Cuautitlán Izcalli, Estado de México. Desarrolla habilidades en ingeniería, programación y resolución de problemas mientras creas proyectos increíbles. Nuestro curso de robótica para niños y jóvenes está diseñado para enseñar desde los conceptos básicos hasta proyectos avanzados. Clases muestra GRATIS disponibles en nuestras sucursales de Plaza Coacalco (Coacalco), Cofradía y Plaza Periférico (Cuautitlán Izcalli)."
          image="/roboticaFire.png"
          gradient="from-cyan-600/90 via-cyan-500/80 to-teal-600/90"
        />
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_70%)]" />
          <div className="container mx-auto relative z-10">
            <BookingForm
              cursoType="R"
              cursoName="Robótica"
              cursoIcon="/RoboticaSchool.svg"
            />
          </div>
        </section>
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.03),transparent_70%)]" />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">Video Promocional - Curso de Robótica</span>
              </h2>
              <p className="text-gray-400 text-lg">Descubre todo lo que puedes lograr con nuestro curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México</p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ePid0kKtNFo?autoplay=1&mute=1&controls=0&loop=1&playlist=ePid0kKtNFo"
                title="Video del Curso de Robótica para Niños y Jóvenes en Coacalco - Robokids"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section className="py-16 px-4 bg-[#0a0a0f]">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-invert max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli
              </h1>
              
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Robokids Education</strong> es la escuela de robótica #1 en <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>. Ofrecemos el mejor <strong>curso de robótica para niños y jóvenes</strong> en la zona, con clases muestra <strong>GRATIS</strong> en nuestras sucursales de <strong>Plaza Coacalco (Coacalco)</strong>, <strong>Cofradía (Cuautitlán Izcalli)</strong> y <strong>Plaza Periférico (Cuautitlán Izcalli)</strong>.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  ¿Por qué elegir nuestro curso de robótica para niños?
                </h2>
                
                <p>
                  Nuestro <strong>curso de robótica para niños y jóvenes</strong> está diseñado específicamente para estudiantes de 6 a 20 años. En <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>, somos la opción preferida por padres que buscan una educación tecnológica de calidad para sus hijos.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Ubicaciones de nuestro curso de robótica
                </h2>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Plaza Coacalco:</strong> Ubicada en Coacalco, Estado de México - nuestra sucursal principal</li>
                  <li><strong>Cofradía:</strong> Ubicada en Cuautitlán Izcalli, Estado de México - sucursal estratégicamente ubicada para fácil acceso</li>
                  <li><strong>Plaza Periférico:</strong> Ubicada en Cuautitlán Izcalli, Estado de México - convenientemente ubicada para familias de la zona</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  ¿Qué aprenderán los niños en nuestro curso de robótica?
                </h2>
                
                <p>
                  En nuestro <strong>curso de robótica para niños y jóvenes en Coacalco</strong>, los estudiantes aprenderán a construir robots desde cero, programarlos para realizar tareas específicas, y desarrollar habilidades en ingeniería, programación y resolución de problemas. Todo esto en un ambiente divertido y educativo.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Clases muestra GRATIS de robótica en Coacalco
                </h2>
                
                <p>
                  Ofrecemos <strong>clases muestra GRATIS</strong> de nuestro curso de robótica en todas nuestras sucursales de <strong>Coacalco, Estado de México</strong>. Agenda tu clase muestra gratis hoy y descubre por qué somos la escuela de robótica #1 en Coacalco.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
