import type { Metadata } from "next";
import { FaHeart, FaLeaf, FaUsers, FaAward } from "react-icons/fa";
import Reveal from "@/components/Reveal";
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
      {/* Page header */}
      <section className="relative overflow-hidden bg-[var(--maroon-deep)] py-28 text-center">
        <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full gold-gradient opacity-20 blur-2xl animate-float-slower" />
        <Reveal>
          <p className="eyebrow text-[var(--gold-light)]">Our Story</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold text-[var(--cream)] sm:text-5xl">
            {BRAND.yearsOfTrust}+ Years of Sweetening Lives
          </h1>
          <p className="mx-auto mt-5 max-w-xl px-6 text-[var(--cream)]/70">
            Since {BRAND.since}, one family recipe has grown into a name Hanwella trusts.
          </p>
        </Reveal>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src="https://plus.unsplash.com/premium_photo-1668437381039-21807fe4d2b9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
              alt="Our sweet shop"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-[var(--gold-deep)]">Our Sweet Journey</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--maroon-deep)]">
              From a Family Kitchen to a Name You Trust
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--ink)]/75">
              Our journey began in <strong>January 2014</strong> with a simple dream — to share
              homemade sweets made with love, care, and real flavour. What started as a small
              family business quickly grew through the support of our loyal customers who
              believed in our taste and quality.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/75">
              After years of hard work and dedication, we proudly opened our{" "}
              <strong>first official branch in 2021</strong>. It marked a special milestone that
              turned our dream into a brand known for freshness, creativity, and happiness in
              every bite.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/75">
              Today, we continue to serve the community with the same passion, offering
              delightful treats that bring people together. Our goal is simple — to make every
              day a little sweeter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="scallop-top-cream relative bg-[var(--maroon-deep)] py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Reveal className="mb-16 text-center">
            <p className="eyebrow text-[var(--gold-light)]">Milestones</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--cream)] sm:text-4xl">
              Our Journey Timeline
            </h2>
          </Reveal>

          <div className="relative border-l-2 border-[var(--gold)]/30 pl-8 sm:pl-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full gold-gradient shadow-[0_0_0_4px_var(--maroon-deep)] sm:-left-[49px]" />
                <p className="font-display text-2xl font-bold text-[var(--gold-light)]">{t.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-[var(--cream)]">{t.title}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[var(--cream)]/65">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="eyebrow text-[var(--gold-deep)]">What Guides Us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--maroon-deep)] sm:text-4xl">
            Our Core Values
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-xl text-[var(--maroon-deep)]">
                  <v.icon />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-6 pb-28 text-center md:px-8">
        <Reveal>
          <div className="rounded-3xl gold-gradient p-10 shadow-xl sm:p-14">
            <p className="eyebrow text-[var(--maroon-deep)]/70">Our Sweet Mission</p>
            <p className="mx-auto mt-4 max-w-2xl font-display text-xl font-medium leading-relaxed text-[var(--maroon-deep)] sm:text-2xl">
              To craft high-quality sweets that spread joy and flavour, while keeping our
              traditional recipes alive with a modern touch. We believe in creating moments of
              happiness, one sweet treat at a time.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
