"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { BookCallButton } from "@/components/ui/BookCallButton";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-vd-black/70 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-vd-gold/30 shadow-[0_0_24px_-6px_rgba(212,175,55,0.4)] transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Velvet Digital"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[15px] tracking-[0.18em] text-vd-bone">
              VELVET
            </span>
            <span className="font-display text-[11px] tracking-[0.3em] text-vd-gold/80 mt-1">
              DIGITAL
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-[13px] tracking-[0.05em] text-vd-bone/70 hover:text-vd-bone transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-vd-gold to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:inline-flex">
            <BookCallButton
              variant="nav"
              label="Book a Call"
              showArrow={false}
              utmSource="nav"
            />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10 text-vd-bone"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-vd-black/95 backdrop-blur-xl border-t border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-vd-bone/80 hover:text-vd-gold font-display text-2xl tracking-tight"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4" onClick={() => setOpen(false)}>
                <BookCallButton
                  variant="nav"
                  label="Book a Call"
                  showArrow={false}
                  utmSource="mobile_nav"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
