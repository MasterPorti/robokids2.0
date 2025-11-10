"use client";

import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const WHATSAPP_NUMBER = "525540781607";
const WHATSAPP_MESSAGE = "Hola, quiero mi clase de robótica gratis 🙌";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-cyan-500/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="gradient-text">Robokids Education</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Escuela de robótica #1 en Coacalco y Cuautitlán Izcalli, Estado de México. 
              Cursos de robótica, corte láser e impresión 3D para niños y jóvenes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Locations Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Nuestras Sucursales</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Plaza Coacalco</p>
                  <p className="text-gray-400 text-sm">Coacalco, Estado de México</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Cofradía</p>
                  <p className="text-gray-400 text-sm">Cuautitlán Izcalli, Estado de México</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Plaza Periférico</p>
                  <p className="text-gray-400 text-sm">Cuautitlán Izcalli, Estado de México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Nuestros Cursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/robotica"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Curso de Robótica
                </Link>
              </li>
              <li>
                <Link
                  href="/corte"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                  Curso de Corte Láser
                </Link>
              </li>
              <li>
                <Link
                  href="/3d"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Curso de Impresión 3D
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <FaWhatsapp className="text-2xl text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-sm">+52 55 4078 1607</p>
                </div>
              </a>
              <a
                href="tel:+525540781607"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaPhone className="text-xl text-cyan-400" />
                <div>
                  <p className="text-white font-semibold text-sm">Teléfono</p>
                  <p className="text-gray-400 text-sm">+52 55 4078 1607</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-xl text-cyan-400" />
                <div>
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-gray-400 text-sm">info@robokidsedu.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Robokids Education. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/robotica"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Robótica
              </Link>
              <Link
                href="/corte"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Corte Láser
              </Link>
              <Link
                href="/3d"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Impresión 3D
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

