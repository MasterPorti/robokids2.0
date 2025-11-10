"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const WHATSAPP_NUMBER = "525540781607";

interface BookingFormProps {
  cursoType: "R" | "C" | "D";
  cursoName: string;
  cursoIcon: string;
}

export default function BookingForm({
  cursoType,
  cursoName,
  cursoIcon,
}: BookingFormProps) {
  const [edad, setEdad] = useState(0);
  const [horario, setHorario] = useState("");
  const [sucursal, setSucursal] = useState("Plaza Coacalco");
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [shakeEdad, setShakeEdad] = useState(false);
  const [shakeSchedule, setShakeSchedule] = useState(false);
  const [shakeSucursal, setShakeSucursal] = useState(false);
  const [shake, setShake] = useState(false);

  const ages = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];
  const sucursales = [
    "Plaza Coacalco",
    "Cofradía (Cuautitlán Izcalli)",
    "Plaza Periférico (Cuautitlán Izcalli)",
  ];

  // Close branch dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isBranchOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-branch-dropdown]')) {
          setIsBranchOpen(false);
        }
      }
    };

    if (isBranchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBranchOpen]);

  const handleAgeSelect = (age: number) => {
    setEdad(age);
    setIsAgeModalOpen(false);
    setShakeEdad(false);
  };

  const handleScheduleSelect = (schedule: string) => {
    setHorario(schedule);
    setIsScheduleModalOpen(false);
    setShakeSchedule(false);
  };

  const handleSubmit = () => {
    let hasError = false;

    if (edad === 0) {
      setShakeEdad(true);
      hasError = true;
      setTimeout(() => setShakeEdad(false), 500);
    }

    if (horario === "") {
      setShakeSchedule(true);
      hasError = true;
      setTimeout(() => setShakeSchedule(false), 500);
    }

    if (hasError) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Build WhatsApp message - Clean sucursal name (remove parenthetical info for cleaner message)
    const sucursalLimpia = sucursal.includes("(") ? sucursal.split(" (")[0] : sucursal;
    const message = `Hola, quiero agendar mi clase muestra gratis. Día: ${horario}, Sucursal: ${sucursalLimpia}. Gracias! 🙌`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  const isFormValid = edad > 0 && horario !== "";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative glass rounded-3xl p-8 md:p-10 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
              <FaGraduationCap className="text-cyan-300" />
              <span className="text-cyan-300 text-sm font-semibold">Reserva tu lugar</span>
              <HiSparkles className="text-purple-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Agenda tu clase muestra gratis
            </h3>
            <p className="text-gray-400">Completa el formulario y te contactaremos por WhatsApp</p>
          </div>

        {/* Age Selector */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
            <FaUser className="text-cyan-400" />
            Edad
          </label>
          <button
            onClick={() => setIsAgeModalOpen(true)}
            className={`group w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
              shakeEdad
                ? "animate-shake border-red-500 bg-red-500/10"
                : "border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            } text-white font-semibold text-left flex items-center justify-between`}
          >
            <span className={`flex items-center gap-2 ${edad === 0 ? "text-gray-400" : "text-white"}`}>
              {edad === 0 ? (
                "¿Cuál es tu edad?"
              ) : (
                <>
                  <FaCheckCircle className="text-green-400" />
                  Perfecto {edad} años!!
                </>
              )}
            </span>
            <svg
              className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Schedule Selector */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
            <FaCalendarAlt className="text-cyan-400" />
            Día de la semana
          </label>
          <button
            onClick={() => setIsScheduleModalOpen(true)}
            className={`group w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
              shakeSchedule
                ? "animate-shake border-red-500 bg-red-500/10"
                : "border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            } text-white font-semibold text-left flex items-center justify-between`}
          >
            <span className={horario === "" ? "text-gray-400" : "text-white"}>
              {horario === "" ? "¿Qué día te gustaría tomar la clase?" : horario}
            </span>
            <svg
              className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Branch Selector */}
        <div className="mb-8 relative" data-branch-dropdown>
          <label className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2">
            <FaMapMarkerAlt className="text-cyan-400" />
            Sucursal
          </label>
          <button
            onClick={() => setIsBranchOpen(!isBranchOpen)}
            className={`group w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
              shakeSucursal
                ? "animate-shake border-red-500 bg-red-500/10"
                : "border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            } text-white font-semibold flex items-center justify-between`}
          >
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              {sucursal}
            </span>
            <svg
              className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                isBranchOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isBranchOpen && (
            <div className="absolute z-10 w-full mt-2 glass border border-cyan-500/50 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 animate-slide-up">
              {sucursales.map((suc) => (
                <button
                  key={suc}
                  onClick={() => {
                    setSucursal(suc);
                    setIsBranchOpen(false);
                  }}
                  className={`w-full px-6 py-4 text-left text-white hover:bg-cyan-500/20 transition-all duration-300 border-b border-cyan-500/10 last:border-b-0 ${
                    sucursal === suc ? "bg-cyan-500/10 text-cyan-300" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    {suc}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`group w-full px-8 py-5 rounded-xl font-bold text-white transition-all duration-300 ${
            isFormValid
              ? "bg-gradient-to-r from-[#25d366] to-[#20ba5a] hover:from-[#20ba5a] hover:to-[#25d366] hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
              : "bg-gray-600/50 cursor-not-allowed text-gray-400"
          } ${shake ? "animate-shake" : ""}`}
        >
          <span className="flex items-center justify-center gap-3">
            {isFormValid ? (
              <>
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                <span>Agenda clase muestra gratis</span>
              </>
            ) : (
              "Completa el formulario para continuar"
            )}
          </span>
        </button>
        </div>
      </div>

      {/* Age Modal */}
      {isAgeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-slide-up"
          onClick={() => setIsAgeModalOpen(false)}
        >
          <div
            className="glass rounded-3xl p-8 max-w-md w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Selecciona tu edad
                </h3>
                <p className="text-gray-400 text-sm mt-1">Elige tu edad para personalizar tu experiencia</p>
              </div>
              <button
                onClick={() => setIsAgeModalOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-5 md:grid-cols-6 gap-3 max-h-[60vh] overflow-y-auto pr-2">
              {ages.map((age) => (
                <button
                  key={age}
                  onClick={() => handleAgeSelect(age)}
                  className="px-4 py-4 rounded-xl border-2 border-cyan-500/30 bg-cyan-500/5 text-white font-bold hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-lg"
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {isScheduleModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-slide-up"
          onClick={() => setIsScheduleModalOpen(false)}
        >
          <div
            className="glass rounded-3xl p-8 max-w-md w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-h-[80vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Selecciona un día
                </h3>
                <p className="text-gray-400 text-sm mt-1">Elige el día de la semana para tu clase muestra</p>
              </div>
              <button
                onClick={() => setIsScheduleModalOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {diasSemana.map((dia, index) => (
                <button
                  key={index}
                  onClick={() => handleScheduleSelect(dia)}
                  className="group px-6 py-4 rounded-xl border-2 border-cyan-500/30 bg-cyan-500/5 text-white font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaCalendarAlt className="text-cyan-400 text-sm" />
                    {dia}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

