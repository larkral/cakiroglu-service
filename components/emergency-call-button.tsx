"use client";

import { Phone } from "lucide-react";

const PHONE = "+905523075842";

export function EmergencyCallButton() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2
      px-4 py-3 rounded-full
      bg-gradient-to-b from-zinc-900 to-black
      text-white
      border border-white/10
      shadow-[0_15px_45px_rgba(0,0,0,0.55)]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
      hover:-translate-y-0.5
      active:translate-y-0
      transition-all duration-300 ease-out"
    >
      {/* ICON */}
      <span className="flex items-center justify-center w-8 h-8 rounded-full
      bg-white/5 border border-white/10">
        <Phone size={16} className="text-white/90" />
      </span>

      {/* TEXT */}
      <span className="leading-tight">
        <span className="block text-[10px] text-white/40">
          Acil
        </span>
        <span className="block text-xs font-medium tracking-wide">
          HEMEN ARA
        </span>
      </span>
    </a>
  );
}