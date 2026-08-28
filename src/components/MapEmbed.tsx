import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { BRAND } from "@/data/brand";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--gold)]/25 bg-[var(--card)] shadow-xl">
      <div className="relative h-[360px] w-full sm:h-[420px]">
        <iframe
          title="KMD Sweet House location"
          src={BRAND.address.mapsEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full gold-gradient text-[var(--maroon-deep)]">
            <FaMapMarkerAlt />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--maroon-deep)]">
              Visit Our Store
            </p>
            <p className="text-sm text-[var(--ink)]/70">{BRAND.address.line}</p>
          </div>
        </div>
        <a
          href={BRAND.address.mapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-5 py-3 text-sm font-semibold text-[var(--maroon-deep)] shadow-md transition-transform hover:scale-105"
        >
          <FaDirections /> Get Directions
        </a>
      </div>
    </div>
  );
}
