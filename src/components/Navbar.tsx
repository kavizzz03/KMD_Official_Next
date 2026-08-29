"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Magnetic from "./Magnetic";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function Monogram({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 32% 28%, var(--gold-bright), var(--gold) 55%, var(--gold-dim) 100%)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.35)",
      }}
    >
      <span
        className="absolute inset-[3px] rounded-full"
        style={{ border: "1px solid rgba(21,13,9,0.35)" }}
      />
      <span className="font-display text-base font-semibold italic-accent text-[var(--espresso-deep)]">
        K
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || open
            ? "border-b hairline-dark bg-[var(--espresso)]/85 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/35 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <Monogram />
            <span className="font-display text-lg font-semibold tracking-tight text-[var(--cream)] sm:text-xl">
              KMD <span className="italic-accent text-[var(--gold-bright)]">Sweet House</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      active ? "text-[var(--gold-bright)]" : "text-[var(--cream)]/75 hover:text-[var(--gold-bright)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-[1.5px] w-full"
                      style={{ background: "var(--gold-bright)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
            <li>
              <Magnetic strength={0.25}>
                <Link
                  href="/contact"
                  className="btn-gold gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-md"
                >
                  <FaWhatsapp /> Order Now
                </Link>
              </Magnetic>
            </li>
          </ul>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-xl text-[var(--cream)] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="espresso-panel fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
              >
                <Link
                  href={l.href}
                  className="font-display text-4xl font-medium text-[var(--cream)] transition-colors hover:text-[var(--gold-bright)]"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + LINKS.length * 0.07 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="gold-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--espresso-deep)] shadow-lg"
              >
                <FaWhatsapp /> Order Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
