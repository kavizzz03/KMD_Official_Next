import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/data/products";
import { BRAND } from "@/data/brand";

export default function ProductCard({ product }: { product: Product }) {
  const waHref = `https://wa.me/94${BRAND.whatsapp.number.slice(
    1
  )}?text=${encodeURIComponent(
    `Hello KMD Sweet House, I'd like to order ${product.name}.`
  )}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full gold-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--maroon-deep)]">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--ink)]/70">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-base font-semibold text-[var(--gold-deep)]">
            {product.price}
          </span>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
