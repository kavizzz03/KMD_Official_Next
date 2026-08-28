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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <FaWhatsapp className="relative" />
    </a>
  );
}
