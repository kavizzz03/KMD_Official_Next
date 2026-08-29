import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaLeaf, FaUsers, FaAward, FaArrowRight } from "react-icons/fa";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import MapEmbed from "@/components/MapEmbed";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/data/brand";

const VALUES = [
  { icon: FaHeart, title: "Made with Love", text: "Every sweet is crafted with passion and care, just like homemade treats." },
  { icon: FaLeaf, title: "Quality Ingredients", text: "We use only the finest natural ingredients for authentic flavours." },
  { icon: FaUsers, title: "Community First", text: "Building relationships and sweetening lives in our community." },
  { icon: FaAward, title: "Excellence", text: "Committed to the highest standards in taste and service." },
];

const TICKER = ["Coconut", "Jaggery", "Cashew", "Cardamom", "Treacle", "Rice Flour", "Nutmeg"];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <div className="border-y hairline bg-[var(--cream-deep)]/50 py-5">
        <Marquee items={TICKER} className="text-[var(--gold-dim)]" />
      </div>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[var(--gold)]/35 sm:-left-6 sm:-top-6" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200"
                  alt="Traditional sweets being prepared at KMD Sweet House"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-7 -right-4 rounded-2xl gold-gradient px-6 py-4 shadow-xl sm:-right-7">
                <p className="font-display text-2xl font-bold text-[var(--espresso-deep)]">
                  Since {BRAND.since}
                </p>
                <p className="text-xs font-medium text-[var(--espresso-deep)]/75">
                  {BRAND.yearsOfTrust}+ Years of Trust
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-[var(--gold-dim)]">Our Sweet Journey</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-4xl">
              A small family dream, <span className="italic-accent text-[var(--gold-dim)]">grown with love</span>
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--ink)]/65">
              Our journey began in <strong className="text-[var(--ink)]">January 2014</strong> with
              a simple dream - to share homemade sweets made with love, care, and real flavour.
              What started as a small family business quickly grew through the support of our
              loyal customers who believed in our taste and quality.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink)]/65">
              Today, with our <strong className="text-[var(--ink)]">first official branch opened
              in 2021</strong>, we continue to serve the community with the same passion —
              offering delightful treats that bring people together.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-[var(--gold)] pb-1 font-semibold text-[var(--gold-dim)] transition-all hover:gap-3 hover:text-[var(--gold)]"
            >
              Read Our Full Story <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.1} className="mt-24 grid grid-cols-2 gap-6 rounded-[2rem] border hairline bg-[var(--paper)] p-8 sm:grid-cols-4 sm:p-10">
          {[
            { n: BRAND.yearsOfTrust, suffix: "+", l: "Years of Trust" },
            { n: 10, suffix: "+", l: "Signature Sweets" },
            { n: 2021, suffix: "", l: "First Branch" },
            { n: 1000, suffix: "+", l: "Happy Families" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <AnimatedCounter
                value={s.n}
                suffix={s.suffix}
                className="font-display text-3xl font-semibold text-[var(--gold-dim)] sm:text-4xl"
              />
              <p className="mt-1.5 text-xs uppercase tracking-wider text-[var(--ink)]/50 sm:text-sm">{s.l}</p>
            </div>
          ))}
        </Reveal>

        {/* Values */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Featured products */}
      <section className="espresso-panel relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow text-[var(--gold-bright)]/80">Taste the Tradition</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-[var(--cream)] sm:text-4xl">
              Our best loved <span className="italic-accent text-[var(--gold-bright)]">sweets</span>
            </h2>
            <p className="mt-4 text-[var(--cream)]/60">
              A glimpse of what&rsquo;s waiting for you at KMD Sweet House.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center" delay={0.2}>
            <Link
              href="/products"
              className="btn-gold gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-lg"
            >
              View All 10 Products <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="eyebrow text-[var(--gold-dim)]">Find Us</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-[var(--ink)] sm:text-4xl">
            Visit our store in <span className="italic-accent text-[var(--gold-dim)]">Hanwella</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <MapEmbed />
        </Reveal>
      </section>
    </>
  );
}
