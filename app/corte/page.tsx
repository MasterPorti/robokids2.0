import type { Metadata } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PromoCard from "../components/PromoCard";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Curso de Corte Láser en Coacalco, Estado de México | Clase Muestra GRATIS | Robokids",
  description: "Curso de corte láser en Coacalco, Cofradía y Periférico, Estado de México. Clases muestra GRATIS. Aprende a diseñar y fabricar con corte láser. Escuela de tecnología #1 en Coacalco.",
  keywords: [
    "curso de corte láser Coacalco",
    "corte láser para niños",
    "corte láser Coacalco Estado de México",
    "clases de corte láser Coacalco",
    "taller corte láser Coacalco",
    "corte láser Cofradía",
    "corte láser Periférico",
    "tecnología láser Coacalco",
    "diseño láser Coacalco",
    "fabricación láser",
  ],
  openGraph: {
    title: "Curso de Corte Láser en Coacalco | Robokids",
    description: "Curso de corte láser en Coacalco, Estado de México. Clases muestra GRATIS. Escuela de tecnología #1.",
    url: "https://robokidsedu.com/corte",
    images: [
      {
        url: "/corteFire.png",
        width: 1200,
        height: 630,
        alt: "Curso de Corte Láser en Coacalco",
      },
    ],
  },
  alternates: {
    canonical: "https://robokidsedu.com/corte",
  },
};

export default function CortePage() {
  const courseData = {
    name: "Curso de Corte Láser",
    description: "Aprende a diseñar y fabricar objetos personalizados con tecnología de corte láser de precisión.",
    courseCode: "LASER-001",
    teaches: [
      "Diseño para corte láser",
      "Operación de máquinas láser",
      "Trabajo con diferentes materiales",
      "Precisión en fabricación",
      "Proyectos personalizados",
    ],
    url: "https://robokidsedu.com/corte",
  };

  return (
    <>
      <StructuredData type="Course" data={courseData} />
      
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <Banner icon="/LaserSchool.svg" gradient="bg-gradient-to-r from-pink-600/90 via-rose-500/80 to-red-600/90" />
        <PromoCard
          title="Curso de Corte Láser"
          description="Descubre el poder del corte láser y crea proyectos únicos en madera, acrílico y más materiales en Coacalco y Cuautitlán Izcalli, Estado de México. Aprende a diseñar y fabricar objetos personalizados con tecnología de precisión. Nuestro curso de corte láser está disponible en nuestras sucursales de Plaza Coacalco (Coacalco), Cofradía y Plaza Periférico (Cuautitlán Izcalli). Clases muestra GRATIS."
          image="/corteFire.png"
          gradient="from-pink-600/90 via-rose-500/80 to-red-600/90"
        />
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_70%)]" />
          <div className="container mx-auto relative z-10">
            <BookingForm
              cursoType="C"
              cursoName="Corte Láser"
              cursoIcon="/LaserSchool.svg"
            />
          </div>
        </section>
        <section className="relative py-16 px-4 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03),transparent_70%)]" />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">Video Promocional - Curso de Corte Láser</span>
              </h2>
              <p className="text-gray-400 text-lg">Descubre todo lo que puedes lograr con nuestro curso de corte láser en Coacalco, Estado de México</p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl shadow-pink-500/20 hover:border-pink-400/50 transition-all duration-500">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ePid0kKtNFo?autoplay=1&mute=1&controls=0&loop=1&playlist=ePid0kKtNFo"
                title="Video del Curso de Corte Láser en Coacalco - Robokids"
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
                Curso de Corte Láser en Coacalco y Cuautitlán Izcalli
              </h1>
              
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Robokids Education</strong> ofrece el mejor <strong>curso de corte láser en Coacalco y Cuautitlán Izcalli, Estado de México</strong>. Aprende a diseñar y fabricar objetos personalizados con tecnología de precisión láser en nuestras sucursales de <strong>Plaza Coacalco (Coacalco)</strong>, <strong>Cofradía (Cuautitlán Izcalli)</strong> y <strong>Plaza Periférico (Cuautitlán Izcalli)</strong>.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  ¿Qué aprenderás en nuestro curso de corte láser?
                </h2>
                
                <p>
                  En nuestro <strong>curso de corte láser en Coacalco y Cuautitlán Izcalli</strong>, aprenderás a diseñar proyectos únicos, operar máquinas láser de precisión, trabajar con diferentes materiales como madera y acrílico, y crear objetos personalizados con la más alta calidad.
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Clases muestra GRATIS de corte láser
                </h2>
                
                <p>
                  Agenda tu <strong>clase muestra GRATIS</strong> de nuestro <strong>curso de corte láser</strong> en cualquiera de nuestras sucursales de <strong>Coacalco y Cuautitlán Izcalli, Estado de México</strong>. ¡Sin compromiso!
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
