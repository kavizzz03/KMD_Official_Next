"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

const CATEGORIES = ["All", "Signature", "Classic", "Festive", "Gift Box"];

export default function ProductsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="espresso-panel relative overflow-hidden py-32 text-center sm:py-40">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slower" />
        <p className="eyebrow text-[var(--gold-bright)]/80">Handmade &amp; Fresh</p>
        <RevealText
          as="h1"
          text="Our sweets, made the traditional way"
          className="mx-auto mt-5 max-w-2xl px-6 font-display text-4xl font-medium text-[var(--cream)] sm:text-5xl"
        />
        <Reveal delay={0.5}>
          <p className="mx-auto mt-6 max-w-xl px-6 text-[var(--cream)]/60">
            Ten favourites from our kitchen - order any of them directly on WhatsApp.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <Reveal className="sticky top-20 z-30 mb-12 flex flex-wrap justify-center gap-3 rounded-full border hairline bg-[var(--cream)]/85 p-2 backdrop-blur-md">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {active === c && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 gold-gradient rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  active === c ? "text-[var(--espresso-deep)]" : "text-[var(--ink)]/60 hover:text-[var(--gold-dim)]"
                }`}
              >
                {c}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
