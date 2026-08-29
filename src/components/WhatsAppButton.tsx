"use client";

import { FaWhatsapp } from "react-icons/fa";
import { BRAND } from "@/data/brand";

export default function WhatsAppButton() {
  return (
    <a
      href={BRAND.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2.5 overflow-hidden rounded-full bg-[#1fb855] pl-4 pr-4 text-white shadow-[0_10px_28px_rgba(31,184,85,0.45)] transition-all duration-300 hover:pr-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1fb855] opacity-30" />
      <FaWhatsapp className="text-2xl shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
