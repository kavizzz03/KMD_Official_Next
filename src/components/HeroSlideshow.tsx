"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { BRAND } from "@/data/brand";
import Magnetic from "./Magnetic";

const SLIDES = [
  {
    eyebrow: "Since 2014",
    title: "Sweetness, made the traditional way",
    text: "Every treat at KMD Sweet House is hand crafted in small batches, using recipes passed down through our family.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Our Signature",
    title: "Kalu Dodol & Wattalapan, slow made",
    text: "Rich treacle, fresh coconut, and hours of patient stirring the flavours our customers keep coming back for.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Festive Favourites",
    title: "Kokis, kavum & the New Year table",
    text: "From crisp kokis to golden konda kavum, we prepare festive classics that bring families together.",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=1800",
  },
  {
    eyebrow: "Visit Us in Hanwella",
    title: "12 years of trust, one sweet box at a time",
    text: "Step into our store in Thunnana, Hanwella, or order your favourites straight to your door.",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=1800",
  },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};
const wordItem = {
  hidden: { y: "115%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--espresso-deep)]">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{ y: imageY }}
        >
          <Image src={slide.image} alt="" fill priority={index === 0} className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso-deep)] via-[var(--espresso-deep)]/65 to-[var(--espresso-deep)]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--espresso-deep)]/85 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[var(--espresso-deep)]/10 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute -right-8 top-28 hidden h-28 w-28 rounded-full gold-gradient opacity-50 blur-md animate-float-slow md:block" />
      <div className="pointer-events-none absolute right-28 bottom-24 hidden h-16 w-16 rounded-full gold-gradient opacity-40 blur-md animate-float-slower md:block" />

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border hairline-dark bg-black/20 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold-bright)" }} />
            <span className="eyebrow text-[var(--gold-bright)]">{BRAND.yearsOfTrust}+ Years of Trust</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={slide.title} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <p className="eyebrow mb-3 text-[var(--gold-bright)]/80">{slide.eyebrow}</p>
              <motion.h1
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-x-[0.26em] font-display text-4xl font-medium leading-[1.06] text-[var(--cream)] sm:text-5xl md:text-6xl"
              >
                {slide.title.split(" ").map((w, i) => (
                  <span key={i} className="overflow-hidden py-1">
                    <motion.span variants={wordItem} className="inline-block italic-accent">
                      {w}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-6 max-w-md text-base leading-relaxed text-[var(--cream)]/75 md:text-lg"
              >
                {slide.text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="/products"
                className="btn-gold gold-gradient inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-lg"
              >
                Explore Our Sweets
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={BRAND.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border hairline-dark px-6 py-3.5 text-sm font-semibold text-[var(--cream)] backdrop-blur-sm transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-bright)]"
              >
                <FaWhatsapp /> Order on WhatsApp
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-8">
          <div className="flex gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.title}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10" : "w-4 bg-[var(--cream)]/25"
                }`}
                style={i === index ? { background: "var(--gold-bright)" } : undefined}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--cream)]/60 md:flex"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <FaArrowDown className="animate-bounce text-xs" />
      </motion.div>
    </section>
  );
}
