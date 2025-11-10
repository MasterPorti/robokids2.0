"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRobot, FaCut, FaCube, FaArrowRight } from "react-icons/fa";

interface SchoolButtonProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
  iconType?: "robotica" | "corte" | "3d";
}

export default function SchoolButton({
  title,
  description,
  icon,
  href,
  gradient,
  iconType,
}: SchoolButtonProps) {
  const getIcon = () => {
    if (iconType === "robotica") return <FaRobot className="text-4xl" />;
    if (iconType === "corte") return <FaCut className="text-4xl" />;
    if (iconType === "3d") return <FaCube className="text-4xl" />;
    return null;
  };
  // Determine glow color based on gradient
  const getGlowClass = () => {
    if (gradient.includes("26BB9E")) return "hover:shadow-cyan-500/50";
    if (gradient.includes("DB5679")) return "hover:shadow-pink-500/50";
    if (gradient.includes("3988CD")) return "hover:shadow-blue-500/50";
    return "hover:shadow-purple-500/50";
  };

  return (
    <Link
      href={href}
      className={`group block relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getGlowClass()} hover-lift`}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative z-10">
        <div className="mb-6 relative flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Image
              src={icon}
              alt={`${title} en Coacalco y Cuautitlán Izcalli - Robokids Education`}
              width={80}
              height={80}
              className="h-20 w-20 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
            />
          </div>
          {iconType && (
            <div className="text-white/80 group-hover:text-white transition-colors">
              {getIcon()}
            </div>
          )}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-500">
          {title}
        </h3>
        
        <p className="text-gray-100 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold group-hover:bg-white/20 group-hover:gap-4 group-hover:scale-105 transition-all duration-300">
          <span>Explorar curso</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

