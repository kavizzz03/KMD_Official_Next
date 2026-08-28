"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-[var(--maroon-deep)] py-28 text-center">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slower" />
        <Reveal>
          <p className="eyebrow text-[var(--gold-light)]">Handmade &amp; Fresh</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold text-[var(--cream)] sm:text-5xl">
            Our Sweets, Made the Traditional Way
          </h1>
          <p className="mx-auto mt-5 max-w-xl px-6 text-[var(--cream)]/70">
            Ten favourites from our kitchen — order any of them directly on WhatsApp.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                active === c
                  ? "gold-gradient border-transparent text-[var(--maroon-deep)] shadow-md"
                  : "border-[var(--gold)]/30 text-[var(--ink)]/70 hover:border-[var(--gold)] hover:text-[var(--gold-deep)]"
              }`}
            >
              {c}
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
