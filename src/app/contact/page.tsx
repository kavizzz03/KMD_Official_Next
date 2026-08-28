import type { Metadata } from "next";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import { BRAND } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact & Location | KMD Sweet House",
  description:
    "Reach KMD Sweet House in Thunnana, Hanwella — call, email, or message us directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--maroon-deep)] py-28 text-center">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slower" />
        <Reveal>
          <p className="eyebrow text-[var(--gold-light)]">We'd Love to Hear from You</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold text-[var(--cream)] sm:text-5xl">
            Contact &amp; Location
          </h1>
          <p className="mx-auto mt-5 max-w-xl px-6 text-[var(--cream)]/70">
            Orders, gift boxes, or a quick question — reach us however suits you best.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={BRAND.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-start gap-3 rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white">
                <FaWhatsapp />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">WhatsApp</h3>
              <p className="text-sm text-[var(--ink)]/65">
                The fastest way to order — message us anytime.
              </p>
              <span className="mt-auto font-semibold text-[var(--gold-deep)]">{BRAND.whatsapp.number}</span>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl text-[var(--maroon-deep)]">
                <FaPhoneAlt />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">Call Us</h3>
              <p className="text-sm text-[var(--ink)]/65">Speak with our team directly.</p>
              <div className="mt-auto flex flex-col gap-1">
                {BRAND.phones.map((p) => (
                  <a key={p.number} href={p.href} className="font-semibold text-[var(--gold-deep)] hover:underline">
                    {p.number}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex h-full flex-col items-start gap-3 rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl text-[var(--maroon-deep)]">
                <FaEnvelope />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">Email</h3>
              <p className="text-sm text-[var(--ink)]/65">For enquiries, orders, and feedback.</p>
              <span className="mt-auto break-all font-semibold text-[var(--gold-deep)]">{BRAND.email}</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <MapEmbed />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-[var(--maroon-deep)] p-8 text-[var(--cream)] shadow-xl sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient text-[var(--maroon-deep)]">
                <FaMapMarkerAlt />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">Our Address</h3>
              <p className="mt-2 text-[var(--cream)]/75">{BRAND.address.line}</p>

              <div className="mt-7 flex items-start gap-3 border-t border-[var(--gold)]/15 pt-7">
                <FaClock className="mt-1 shrink-0 text-[var(--gold-light)]" />
                <div>
                  <p className="font-medium text-[var(--cream)]">Store Hours</p>
                  <p className="mt-1 text-sm text-[var(--cream)]/65">
                    Open daily — please call ahead for festive-season orders and gift boxes.
                  </p>
                </div>
              </div>

              <a
                href={BRAND.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-semibold text-[var(--maroon-deep)] shadow-md transition-transform hover:scale-105"
              >
                <FaWhatsapp /> Chat with Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
