import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { BRAND } from "@/data/brand";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border hairline bg-[var(--paper)] shadow-[0_30px_60px_-24px_rgba(28,20,14,0.25)]">
      <div className="relative h-[360px] w-full sm:h-[420px]">
        <iframe
          title="KMD Sweet House location"
          src={BRAND.address.mapsEmbedSrc}
          className="absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-[var(--espresso-deep)]">
            <FaMapMarkerAlt />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--ink)]">Visit Our Store</p>
            <p className="text-sm text-[var(--ink)]/60">{BRAND.address.line}</p>
          </div>
        </div>
        <a
          href={BRAND.address.mapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[var(--espresso-deep)] shadow-md"
        >
          <FaDirections /> Get Directions
        </a>
      </div>
    </div>
  );
}
