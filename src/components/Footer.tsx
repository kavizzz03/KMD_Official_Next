import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { BRAND } from "@/data/brand";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const TICKER = ["Since 2014", "Handmade Daily", "Thunnana · Hanwella", `${BRAND.yearsOfTrust}+ Years of Trust`, "Order on WhatsApp"];

export default function Footer() {
  return (
    <footer className="espresso-panel relative overflow-hidden text-[var(--cream)]">
      <div className="border-y hairline-dark py-4">
        <Marquee items={TICKER} className="text-[var(--gold-bright)]/80" />
      </div>

      {/* Big CTA */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[var(--gold-bright)]">Let&rsquo;s Talk Sweets</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
            Craving something <span className="italic-accent text-[var(--gold-bright)]">handmade</span>{" "}
            &amp; fresh?
          </h2>
          <a
            href={BRAND.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold gold-gradient mt-8 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-xl"
          >
            <FaWhatsapp className="text-base" /> Message Us on WhatsApp <FaArrowRight className="text-xs" />
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t hairline-dark pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-semibold">
              KMD <span className="italic-accent text-[var(--gold-bright)]">Sweet House</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-[var(--cream)]/60">
              Homemade sweets crafted with love since {BRAND.since} - {BRAND.yearsOfTrust}+ years
              of tradition, trust, and flavour in every bite.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: BRAND.social.facebook, icon: FaFacebookF, label: "Facebook" },
                { href: BRAND.social.instagram, icon: FaInstagram, label: "Instagram" },
                { href: BRAND.whatsapp.href, icon: FaWhatsapp, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border hairline-dark text-[var(--gold-bright)] transition-all duration-300 hover:gold-gradient hover:text-[var(--espresso-deep)] hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow mb-5 text-[var(--gold-bright)]/70">Explore</h4>
            <ul className="space-y-3 text-sm text-[var(--cream)]/70">
              <li><Link className="transition-colors hover:text-[var(--gold-bright)]" href="/">Home</Link></li>
              <li><Link className="transition-colors hover:text-[var(--gold-bright)]" href="/about">About Us</Link></li>
              <li><Link className="transition-colors hover:text-[var(--gold-bright)]" href="/products">Our Products</Link></li>
              <li><Link className="transition-colors hover:text-[var(--gold-bright)]" href="/contact">Contact &amp; Location</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-5 text-[var(--gold-bright)]/70">Get in Touch</h4>
            <ul className="space-y-3.5 text-sm text-[var(--cream)]/70">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--gold-bright)]" />
                <a href={BRAND.address.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--gold-bright)]">
                  {BRAND.address.line}
                </a>
              </li>
              {BRAND.phones.map((p) => (
                <li key={p.number} className="flex items-center gap-2.5">
                  <FaPhoneAlt className="shrink-0 text-[var(--gold-bright)]" />
                  <a href={p.href} className="transition-colors hover:text-[var(--gold-bright)]">{p.number}</a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="shrink-0 text-[var(--gold-bright)]" />
                <a href={`mailto:${BRAND.email}`} className="break-all transition-colors hover:text-[var(--gold-bright)]">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours / note */}
          <div>
            <h4 className="eyebrow mb-5 text-[var(--gold-bright)]/70">Visit Us</h4>
            <p className="text-sm leading-relaxed text-[var(--cream)]/60">
              Open daily in Thunnana, Hanwella. Call ahead for festive season orders and custom
              gift boxes.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t hairline-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-[var(--cream)]/45 sm:flex-row sm:text-left md:px-8">
          <p>{BRAND.footerCredit.rights} - {new Date().getFullYear()}</p>
          <p>{BRAND.footerCredit.developer}</p>
        </div>
      </div>
    </footer>
  );
}
