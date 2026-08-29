import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/data/products";
import { BRAND } from "@/data/brand";

export default function ProductCard({ product }: { product: Product }) {
  const waHref = `https://wa.me/94${BRAND.whatsapp.number.slice(1)}?text=${encodeURIComponent(
    `Hello KMD Sweet House, I'd like to order ${product.name}.`
  )}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[1.4rem] bg-[var(--paper)] shadow-[0_1px_2px_rgba(28,20,14,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgba(28,20,14,0.28)]">
      <span className="pointer-events-none absolute inset-0 z-10 rounded-[1.4rem] ring-1 ring-inset ring-[var(--gold)]/0 transition-all duration-500 group-hover:ring-[var(--gold)]/50" />

      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-bright)] backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-[var(--ink)]">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink)]/60">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t hairline pt-4">
          <span className="font-display text-base font-semibold text-[var(--gold-dim)]">
            {product.price}
          </span>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1fb855] text-white transition-transform duration-300 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
