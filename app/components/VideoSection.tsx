"use client";

import { FaPlay, FaRobot, FaCut, FaCube } from "react-icons/fa";

export default function VideoSection() {
  const videos = [
    {
      src: "/videos/robotica-mini.mp4",
      thumbnail: "/videos/robotica.jpg",
      title: "Robótica",
      icon: <FaRobot className="text-3xl" />,
    },
    {
      src: "/videos/corte-mini.mp4",
      thumbnail: "/videos/corte.jpg",
      title: "Corte Láser",
      icon: <FaCut className="text-3xl" />,
    },
    {
      src: "/videos/3dprinting.mp4",
      thumbnail: "/videos/impresion.jpg",
      title: "Impresión 3D",
      icon: <FaCube className="text-3xl" />,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#0f0a1a] to-[#0a0a0f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Videos Promocionales</span>
          </h2>
          <p className="text-xl text-gray-400">
            Descubre cómo nuestros estudiantes crean proyectos increíbles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                poster={video.thumbnail}
              >
                Tu navegador no soporta videos.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 mb-3">
                    {video.icon}
                    <span className="text-cyan-300 text-sm font-semibold">Ver más</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

