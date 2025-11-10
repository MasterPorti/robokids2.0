"use client";

import { FaWhatsapp, FaRobot, FaRocket, FaMapMarkerAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const WHATSAPP_NUMBER = "525540781607";
const WHATSAPP_MESSAGE = "Hola, quiero mi clase de robótica gratis 🙌";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,217,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_70%)]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto max-w-5xl text-center relative z-10 animate-slide-up">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-cyan-500/30">
          <FaRocket className="text-cyan-400 animate-bounce" />
          <span className="text-cyan-400 text-sm font-semibold">El Futuro de la Educación</span>
          <IoSparkles className="text-purple-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text block mb-2">Curso de Robótica para Niños</span>
          <span className="text-white">en Coacalco</span>
          <span className="block mt-2 gradient-text">y Cuautitlán Izcalli</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Clases muestra <span className="text-cyan-400 font-semibold">GRATIS</span>. 
          Escuela de robótica <span className="text-purple-400 font-semibold">#1 en Estado de México</span>.
        </p>

        {/* Location Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-2 border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all animate-pulse">
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <span className="text-white font-bold text-lg">Coacalco</span>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400 transition-all animate-pulse">
            <FaMapMarkerAlt className="text-purple-400 text-xl" />
            <span className="text-white font-bold text-lg">Cuautitlán Izcalli</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white rounded-full text-lg font-bold hover:from-[#20ba5a] hover:to-[#25d366] transition-all hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50"
          >
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
            Quiero mi clase de robótica
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

