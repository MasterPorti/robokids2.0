"use client";

import Image from "next/image";
import { FaBullseye, FaRocket, FaUserTie } from "react-icons/fa";

interface PromoCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export default function PromoCard({
  title,
  description,
  image,
  gradient,
}: PromoCardProps) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div
        className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${gradient} p-8 md:p-12 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl`}
      >
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                {title}
              </h2>
              <p className="text-xl text-white/95 leading-relaxed font-medium">
                {description}
              </p>
            </div>
            
            {/* Feature list */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/30 text-white/90 text-sm font-semibold">
                <FaBullseye className="text-cyan-300" />
                Proyectos prácticos
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/30 text-white/90 text-sm font-semibold">
                <FaRocket className="text-purple-300" />
                Tecnología avanzada
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/30 text-white/90 text-sm font-semibold">
                <FaUserTie className="text-pink-300" />
                Instructores expertos
              </span>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-white/20 shadow-2xl">
            <Image
              src={image}
              alt={`${title} en Coacalco y Cuautitlán Izcalli - Robokids Education`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

