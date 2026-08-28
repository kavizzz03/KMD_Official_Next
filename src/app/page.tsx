import Link from "next/link";
import { FaHeart, FaLeaf, FaUsers, FaAward, FaArrowRight } from "react-icons/fa";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import MapEmbed from "@/components/MapEmbed";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/data/brand";

const VALUES = [
  { icon: FaHeart, title: "Made with Love", text: "Every sweet is crafted with passion and care, just like homemade treats." },
  { icon: FaLeaf, title: "Quality Ingredients", text: "We use only the finest natural ingredients for authentic flavours." },
  { icon: FaUsers, title: "Community First", text: "Building relationships and sweetening lives in our community." },
  { icon: FaAward, title: "Excellence", text: "Committed to the highest standards in taste and service." },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Trust strip */}
      <section className="scallop-bottom border-b border-[var(--gold)]/15 bg-[var(--maroon-deep)] py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center text-[var(--cream)] sm:grid-cols-4 md:px-8">
          {[
            { n: `${BRAND.yearsOfTrust}+`, l: "Years of Trust" },
            { n: "10+", l: "Signature Sweets" },
            { n: "2021", l: "First Branch" },
            { n: "1000+", l: "Happy Families" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-2xl font-bold text-[var(--gold-light)] sm:text-3xl">{s.n}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--cream)]/60 sm:text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-[var(--gold)]/40 sm:-left-6 sm:-top-6" />
              <img
                src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200"
                alt="Traditional sweets being prepared at KMD Sweet House"
                className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl gold-gradient px-6 py-4 shadow-xl sm:-right-6">
                <p className="font-display text-2xl font-bold text-[var(--maroon-deep)]">
                  Since {BRAND.since}
                </p>
                <p className="text-xs font-medium text-[var(--maroon-deep)]/80">
                  {BRAND.yearsOfTrust}+ Years of Trust
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-[var(--gold-deep)]">Our Sweet Journey</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--maroon-deep)] sm:text-4xl">
              A Small Family Dream, Grown with Love
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--ink)]/75">
              Our journey began in <strong>January 2014</strong> with a simple dream — to share
              homemade sweets made with love, care, and real flavour. What started as a small
              family business quickly grew through the support of our loyal customers who
              believed in our taste and quality.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/75">
              Today, with our <strong>first official branch opened in 2021</strong>, we continue
              to serve the community with the same passion — offering delightful treats that
              bring people together.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--gold-deep)] hover:gap-3 transition-all"
            >
              Read Our Full Story <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-[var(--gold)]/20 bg-[var(--card)] p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-xl text-[var(--maroon-deep)]">
                  <v.icon />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--maroon-deep)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="scallop-top-cream relative bg-[var(--maroon-deep)] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-[var(--gold-light)]">Taste the Tradition</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--cream)] sm:text-4xl">
              Our Best-Loved Sweets
            </h2>
            <p className="mt-4 text-[var(--cream)]/70">
              A glimpse of what's waiting for you at KMD Sweet House.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center" delay={0.2}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-3.5 text-sm font-semibold text-[var(--maroon-deep)] shadow-lg transition-transform hover:scale-105"
            >
              View All 10 Products <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="eyebrow text-[var(--gold-deep)]">Find Us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--maroon-deep)] sm:text-4xl">
            Visit Our Store in Hanwella
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <MapEmbed />
        </Reveal>
      </section>
    </>
  );
}
