"use client";

import Image from "next/image";
import { FaGift, FaFire } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

interface BannerProps {
  icon: string;
  gradient: string;
}

export default function Banner({ icon, gradient }: BannerProps) {
  return (
    <div className={`relative ${gradient} py-16 px-4 overflow-hidden mt-20 border-b border-white/10`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative flex-shrink-0 animate-float">
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse" />
            <Image 
              src={icon} 
              alt="Curso de Robótica para Niños en Coacalco y Cuautitlán Izcalli - Robokids Education" 
              width={100} 
              height={100}
              className="relative z-10 drop-shadow-2xl"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/30 mb-4">
              <FaGift className="text-yellow-300" />
              <span className="text-white/90 text-sm font-semibold">Oferta Especial</span>
              <HiSparkles className="text-yellow-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Clase Muestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Gratis</span>
            </h2>
            <p className="flex items-center gap-2 text-2xl text-white/90 font-semibold">
              <FaFire className="text-orange-400" />
              Descuento permanente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

