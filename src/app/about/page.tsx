import type { Metadata } from "next";
import Image from "next/image";
import { FaHeart, FaLeaf, FaUsers, FaAward } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import { BRAND } from "@/data/brand";

export const metadata: Metadata = {
  title: "About Us | KMD Sweet House",
  description:
    "Since 2014, KMD Sweet House has crafted homemade Sri Lankan sweets with love. 12 years of trust, tradition, and flavour.",
};

const TIMELINE = [
  { year: "2014", title: "The Beginning", text: "Started as a small home-based sweet business with traditional family recipes." },
  { year: "2018", title: "Growing Popularity", text: "Expanded our customer base and introduced modern sweet variations." },
  { year: "2021", title: "First Branch", text: "Opened our first official store, marking a major milestone in our journey." },
  { year: "2025", title: "12 Years of Trust", text: "Continuing to serve happiness with innovation and traditional values." },
];

const VALUES = [
  { icon: FaHeart, title: "Made with Love", text: "Every sweet is crafted with passion and care, just like homemade treats." },
  { icon: FaLeaf, title: "Quality Ingredients", text: "We use only the finest natural ingredients for authentic flavours." },
  { icon: FaUsers, title: "Community First", text: "Building relationships and sweetening lives in our community." },
  { icon: FaAward, title: "Excellence", text: "Committed to maintaining the highest standards in taste and service." },
];

export default function AboutPage() {
  return (
    <>
      <section className="espresso-panel relative overflow-hidden py-32 text-center sm:py-40">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-15 blur-2xl animate-float-slower" />
        <p className="eyebrow text-[var(--gold-bright)]/80">Our Story</p>
        <RevealText
          as="h1"
          text={`${BRAND.yearsOfTrust}+ Years of Sweetening Lives`}
          className="mx-auto mt-5 max-w-2xl px-6 font-display text-4xl font-medium text-[var(--cream)] sm:text-5xl"
        />
        <Reveal delay={0.5}>
          <p className="mx-auto mt-6 max-w-xl px-6 text-[var(--cream)]/60">
            Since {BRAND.since}, one family recipe has grown into a name Hanwella trusts.
          </p>
        </Reveal>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1668437381039-21807fe4d2b9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
                alt="Our sweet shop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-[var(--gold-dim)]">Our Sweet Journey</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] text-[var(--ink)]">
              From a family kitchen to a{" "}
              <span className="italic-accent text-[var(--gold-dim)]">name you trust</span>
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--ink)]/65">
              Our journey began in <strong className="text-[var(--ink)]">January 2014</strong>{" "}
              with a simple dream to share homemade sweets made with love, care, and real
              flavour. What started as a small family business quickly grew through the support
              of our loyal customers who believed in our taste and quality.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/65">
              After years of hard work and dedication, we proudly opened our{" "}
              <strong className="text-[var(--ink)]">first official branch in 2021</strong>. It
              marked a special milestone that turned our dream into a brand known for freshness,
              creativity, and happiness in every bite.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/65">
              Today, we continue to serve the community with the same passion, offering
              delightful treats that bring people together. Our goal is simple to make every
              day a little sweeter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="espresso-panel relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow text-[var(--gold-bright)]/80">Milestones</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-[var(--cream)] sm:text-4xl">
              Our journey <span className="italic-accent text-[var(--gold-bright)]">timeline</span>
            </h2>
          </Reveal>

          <div className="relative border-l hairline-dark pl-8 sm:pl-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1} className="relative mb-14 last:mb-0">
                <span className="absolute -left-[37px] top-1 flex h-5 w-5 items-center justify-center rounded-full gold-gradient shadow-[0_0_0_5px_var(--espresso)] sm:-left-[45px]" />
                <p className="font-display text-2xl font-bold text-[var(--gold-bright)]">{t.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-[var(--cream)]">{t.title}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[var(--cream)]/55">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="eyebrow text-[var(--gold-dim)]">What Guides Us</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl">
            Our core <span className="italic-accent text-[var(--gold-dim)]">values</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border hairline bg-[var(--paper)] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-xl text-[var(--espresso-deep)]">
                  <v.icon />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--ink)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/55">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-6 pb-28 text-center md:px-8">
        <Reveal>
          <div className="rounded-[2rem] gold-gradient p-10 shadow-2xl sm:p-14">
            <p className="eyebrow text-[var(--espresso-deep)]/65">Our Sweet Mission</p>
            <p className="mx-auto mt-5 max-w-2xl font-display text-xl font-medium italic-accent leading-relaxed text-[var(--espresso-deep)] sm:text-2xl">
              &ldquo;To craft high quality sweets that spread joy and flavour, while keeping our
              traditional recipes alive with a modern touch.&rdquo;
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
