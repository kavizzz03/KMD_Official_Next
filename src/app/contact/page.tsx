import type { Metadata } from "next";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
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
      <section className="espresso-panel relative overflow-hidden py-32 text-center sm:py-40">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slower" />
        <p className="eyebrow text-[var(--gold-bright)]/80">We&rsquo;d Love to Hear from You</p>
        <RevealText
          as="h1"
          text="Contact & Location"
          className="mx-auto mt-5 max-w-2xl px-6 font-display text-4xl font-medium text-[var(--cream)] sm:text-5xl"
        />
        <Reveal delay={0.4}>
          <p className="mx-auto mt-6 max-w-xl px-6 text-[var(--cream)]/60">
            Orders, gift boxes, or a quick question reach us however suits you best.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={BRAND.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-start gap-3 rounded-[1.4rem] border hairline bg-[var(--paper)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1fb855] text-xl text-white">
                <FaWhatsapp />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">WhatsApp</h3>
              <p className="text-sm text-[var(--ink)]/55">
                The fastest way to order - message us anytime.
              </p>
              <span className="mt-auto font-semibold text-[var(--gold-dim)]">{BRAND.whatsapp.number}</span>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col items-start gap-3 rounded-[1.4rem] border hairline bg-[var(--paper)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl text-[var(--espresso-deep)]">
                <FaPhoneAlt />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">Call Us</h3>
              <p className="text-sm text-[var(--ink)]/55">Speak with our team directly.</p>
              <div className="mt-auto flex flex-col gap-1">
                {BRAND.phones.map((p) => (
                  <a key={p.number} href={p.href} className="font-semibold text-[var(--gold-dim)] hover:underline">
                    {p.number}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex h-full flex-col items-start gap-3 rounded-[1.4rem] border hairline bg-[var(--paper)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl text-[var(--espresso-deep)]">
                <FaEnvelope />
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">Email</h3>
              <p className="text-sm text-[var(--ink)]/55">For enquiries, orders, and feedback.</p>
              <span className="mt-auto break-all font-semibold text-[var(--gold-dim)]">{BRAND.email}</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <MapEmbed />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="espresso-panel h-full rounded-[1.75rem] p-8 text-[var(--cream)] shadow-xl sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient text-[var(--espresso-deep)]">
                <FaMapMarkerAlt />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">Our Address</h3>
              <p className="mt-2 text-[var(--cream)]/70">{BRAND.address.line}</p>

              <div className="mt-7 flex items-start gap-3 border-t hairline-dark pt-7">
                <FaClock className="mt-1 shrink-0 text-[var(--gold-bright)]" />
                <div>
                  <p className="font-medium text-[var(--cream)]">Store Hours</p>
                  <p className="mt-1 text-sm text-[var(--cream)]/55">
                    Open daily - please call ahead for festive season orders and gift boxes.
                  </p>
                </div>
              </div>

              <a
                href={BRAND.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold gold-gradient mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-md"
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
