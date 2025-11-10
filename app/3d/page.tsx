import type { Metadata } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Curso de Impresión 3D en Coacalco, Estado de México | Clase Muestra GRATIS | Robokids",
  description: "Curso de impresión 3D en Coacalco, Cofradía y Periférico, Estado de México. Clases muestra GRATIS. Aprende diseño 3D, modelado e impresión 3D. Escuela de tecnología #1 en Coacalco.",
  keywords: [
    "curso de impresión 3D Coacalco",
    "impresión 3D para niños",
    "impresión 3D Coacalco Estado de México",
    "clases de impresión 3D Coacalco",
    "taller impresión 3D Coacalco",
    "diseño 3D Coacalco",
    "modelado 3D Coacalco",
    "impresión 3D Cofradía",
    "impresión 3D Periférico",
    "tecnología 3D Coacalco",
  ],
  openGraph: {
    title: "Curso de Impresión 3D en Coacalco | Robokids",
    description: "Curso de impresión 3D en Coacalco, Estado de México. Clases muestra GRATIS. Escuela de tecnología #1.",
    url: "https://robokidsedu.com/3d",
    images: [
      {
        url: "/3dRobot.png",
        width: 1200,
        height: 630,
        alt: "Curso de Impresión 3D en Coacalco",
      },
    ],
  },
  alternates: {
    canonical: "https://robokidsedu.com/3d",
  },
};

export default function Impresion3DPage() {
  const courseData = {
    name: "Curso de Impresión 3D",
    description: "Aprende a diseñar modelos 3D, configurar impresoras 3D y crear objetos funcionales desde cero.",
    courseCode: "3D-001",
    teaches: [
      "Diseño 3D",
      "Modelado 3D",
      "Configuración de impresoras 3D",
      "Materiales para impresión 3D",
      "Post-procesado de impresiones",
      "Proyectos funcionales",
    ],
    url: "https://robokidsedu.com/3d",
  };

  return (
    <>
      <StructuredData type="Course" data={courseData} />
      
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <Banner icon="/3dSchool.svg" gradient="bg-gradient-to-r from-blue-600/90 via-indigo-500/80 to-purple-600/90" />
        <PromoCard
          title="Curso de Impresión 3D"
          description="Explora el mundo de la impresión 3D y da vida a tus ideas en Coacalco y Cuautitlán Izcalli, Estado de México. Aprende a diseñar modelos 3D, configurar impresoras y crear objetos funcionales desde cero. Nuestro curso de impresión 3D está disponible en nuestras sucursales de Plaza Coacalco (Coacalco), Cofradía y Plaza Periférico (Cuautitlán Izcalli). Clases muestra GRATIS."
          image="/3dRobot.png"
          gradient="from-blue-600/90 via-indigo-500/80 to-purple-600/90"
        />
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]" />
          <div className="container mx-auto relative z-10">
            <BookingForm
              cursoType="D"
              cursoName="Impresión 3D"
              cursoIcon="/3dSchool.svg"
            />
          </div>
        </section>
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.03),transparent_70%)]" />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">Video Promocional - Curso de Impresión 3D</span>
              </h2>
              <p className="text-gray-400 text-lg">Descubre todo lo que puedes lograr con nuestro curso de impresión 3D en Coacalco, Estado de México</p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:border-purple-400/50 transition-all duration-500">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ePid0kKtNFo?autoplay=1&mute=1&controls=0&loop=1&playlist=ePid0kKtNFo"
                title="Video del Curso de Impresión 3D en Coacalco - Robokids"
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
                Curso de Impresión 3D en Coacalco y Cuautitlán Izcalli
              </h1>
              
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Robokids Education</strong> ofrece el mejor <strong>curso de impresión 3D en Coacalco y Cuautitlán Izcalli, Estado de México</strong>. Aprende diseño 3D, modelado e impresión 3D en nuestras sucursales de <strong>Plaza Coacalco (Coacalco)</strong>, <strong>Cofradía (Cuautitlán Izcalli)</strong> y <strong>Plaza Periférico (Cuautitlán Izcalli)</strong>.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  ¿Qué aprenderás en nuestro curso de impresión 3D?
                </h2>
                
                <p>
                  En nuestro <strong>curso de impresión 3D en Coacalco y Cuautitlán Izcalli</strong>, aprenderás a diseñar modelos 3D desde cero, configurar y operar impresoras 3D, trabajar con diferentes materiales, y crear objetos funcionales y creativos.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Clases muestra GRATIS de impresión 3D
                </h2>
                
                <p>
                  Agenda tu <strong>clase muestra GRATIS</strong> de nuestro <strong>curso de impresión 3D</strong> en cualquiera de nuestras sucursales de <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>. ¡Sin compromiso!
                </p>
              </div>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
