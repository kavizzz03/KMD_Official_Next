"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND } from "@/data/brand";

const SLIDES = [
  {
    eyebrow: "Since 2014",
    title: "Sweetness Made the Traditional Way",
    text: "Every treat at KMD Sweet House is hand-crafted in small batches, using recipes passed down through our family.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Our Signature",
    title: "Kalu Dodol & Wattalapan, Slow-Made",
    text: "Rich treacle, fresh coconut, and hours of patient stirring — the flavours our customers keep coming back for.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Festive Favourites",
    title: "Kokis, Kavum & the New Year Table",
    text: "From crisp kokis to golden konda kavum, we prepare festive classics that bring families together.",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Visit Us in Hanwella",
    title: "12 Years of Trust, One Sweet Box at a Time",
    text: "Step into our store in Thunnana, Hanwella, or order your favourites straight to your door.",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=1800",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--maroon-deep)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon-deep)] via-[var(--maroon-deep)]/60 to-[var(--maroon-deep)]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--maroon-deep)]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* floating decorative sweets */}
      <div className="pointer-events-none absolute -right-6 top-24 hidden h-24 w-24 rounded-full gold-gradient opacity-70 blur-sm animate-float-slow md:block" />
      <div className="pointer-events-none absolute right-24 bottom-16 hidden h-16 w-16 rounded-full gold-gradient opacity-60 blur-sm animate-float-slower md:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-black/20 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-light)]" />
            <span className="eyebrow text-[var(--gold-light)]">{BRAND.yearsOfTrust}+ Years of Trust</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow mb-3 text-[var(--gold-light)]">{slide.eyebrow}</p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-[var(--cream)] sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--cream)]/80 md:text-lg">
                {slide.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-full gold-gradient px-7 py-3.5 text-sm font-semibold text-[var(--maroon-deep)] shadow-lg transition-transform hover:scale-105"
            >
              Explore Our Sweets
            </Link>
            <a
              href={BRAND.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 px-6 py-3.5 text-sm font-semibold text-[var(--cream)] backdrop-blur-sm transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-light)]"
            >
              <FaWhatsapp /> Order on WhatsApp
            </a>
          </div>
        </div>

        {/* slide indicators */}
        <div className="mt-16 flex gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-[var(--gold-light)]" : "w-4 bg-[var(--cream)]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
