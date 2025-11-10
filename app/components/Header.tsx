"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "525540781607";
const WHATSAPP_MESSAGE = "Hola, quísiera más información sobre los cursos 🤯";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/LogoWhite.svg"
              alt="Robokids Education - Curso de Robótica para Niños en Coacalco y Cuautitlán Izcalli"
              width={150}
              height={50}
              className="h-12 w-auto transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white rounded-full font-semibold hover:from-[#20ba5a] hover:to-[#25d366] transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
          >
            <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : "group-hover:bg-cyan-300"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all ${
              isMenuOpen ? "opacity-0" : "group-hover:bg-cyan-300"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : "group-hover:bg-cyan-300"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-[#0a0a0f]/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg shadow-green-500/30"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

