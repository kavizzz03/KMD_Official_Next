"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur shadow-[0_2px_18px_rgba(74,28,20,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient font-display text-lg font-bold text-[var(--maroon-deep)] shadow-sm transition-transform group-hover:rotate-6">
            K
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--maroon-deep)] sm:text-xl">
            KMD Sweet House
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm font-medium tracking-wide text-[var(--ink)]/80 transition-colors hover:text-[var(--gold-deep)] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-[var(--maroon-deep)] shadow-md transition-transform hover:scale-105"
            >
              Order Now
            </Link>
          </li>
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-2xl text-[var(--maroon-deep)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-[var(--cream)] px-5 pb-5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--cream-deep)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full gold-gradient px-4 py-3 text-center text-sm font-semibold text-[var(--maroon-deep)]"
            >
              Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
