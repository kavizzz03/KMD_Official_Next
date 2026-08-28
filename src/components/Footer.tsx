import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BRAND } from "@/data/brand";

export default function Footer() {
  return (
    <footer className="scallop-top-cream relative bg-[var(--maroon-deep)] pt-14 text-[var(--cream)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient font-display text-lg font-bold text-[var(--maroon-deep)]">
              K
            </span>
            <span className="font-display text-xl font-semibold">{BRAND.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--cream)]/70">
            Homemade sweets crafted with love since {BRAND.since} — {BRAND.yearsOfTrust}+ years of
            tradition, trust, and flavour in every bite.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={BRAND.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold-light)] transition-colors hover:gold-gradient hover:text-[var(--maroon-deep)]"
            >
              <FaFacebookF />
            </a>
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold-light)] transition-colors hover:gold-gradient hover:text-[var(--maroon-deep)]"
            >
              <FaInstagram />
            </a>
            <a
              href={BRAND.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold-light)] transition-colors hover:gold-gradient hover:text-[var(--maroon-deep)]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="eyebrow mb-4 text-[var(--gold-light)]">Explore</h4>
          <ul className="space-y-2.5 text-sm text-[var(--cream)]/80">
            <li><Link className="hover:text-[var(--gold-light)]" href="/">Home</Link></li>
            <li><Link className="hover:text-[var(--gold-light)]" href="/about">About Us</Link></li>
            <li><Link className="hover:text-[var(--gold-light)]" href="/products">Our Products</Link></li>
            <li><Link className="hover:text-[var(--gold-light)]" href="/contact">Contact &amp; Location</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="eyebrow mb-4 text-[var(--gold-light)]">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-[var(--cream)]/80">
            <li className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--gold-light)]" />
              <a href={BRAND.address.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-light)]">
                {BRAND.address.line}
              </a>
            </li>
            {BRAND.phones.map((p) => (
              <li key={p.number} className="flex items-center gap-2.5">
                <FaPhoneAlt className="shrink-0 text-[var(--gold-light)]" />
                <a href={p.href} className="hover:text-[var(--gold-light)]">{p.number}</a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="shrink-0 text-[var(--gold-light)]" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-[var(--gold-light)] break-all">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div>
          <h4 className="eyebrow mb-4 text-[var(--gold-light)]">Order Directly</h4>
          <p className="mb-4 text-sm text-[var(--cream)]/70">
            Chat with us on WhatsApp for orders, custom gift boxes, and bulk enquiries.
          </p>
          <a
            href={BRAND.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            <FaWhatsapp className="text-lg" /> Message Us
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--gold)]/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-[var(--cream)]/60 sm:flex-row sm:text-left md:px-8">
          <p>{BRAND.footerCredit.rights} — {new Date().getFullYear()}</p>
          <p>{BRAND.footerCredit.developer}</p>
        </div>
      </div>
    </footer>
  );
}
