"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PopupModal } from "react-calendly";
import { cn } from "@/lib/cn";
import { CALENDLY_URL } from "@/lib/calendly";
import { Wordmark } from "@/components/ui/Wordmark";

const NAV_LINKS = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Studio", href: "/studio/" },
  { label: "Journal", href: "/journal/" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setRootEl(document.body);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [],
  );

  return (
    <>
      <header
        data-header=""
        {...(scrolled ? { "data-scrolled": "" } : {})}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color]",
          scrolled
            ? "bg-paper border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        )}
        style={{
          transitionDuration: "var(--dur-base)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-md lg:px-lg flex items-center justify-between h-12 lg:h-14">
          {/* [CLIENT-TODO: replace text lockup with real vector mark] */}
          <Link
            href="/"
            className="header-wordmark inline-flex flex-col leading-none text-[length:var(--step--1)] lg:text-[length:var(--step-0)]"
            aria-label="Velvet Digital — home"
          >
            <span className="font-serif font-medium tracking-[0.18em] text-[length:inherit]">
              VELVET
            </span>
            <span
              className="header-wordmark-sub font-sans font-normal tracking-[0.28em] uppercase"
              style={{ fontSize: "0.55em", marginTop: "0.2em" }}
            >
              Digital
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-lg"
            aria-label="Main"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="header-nav-link link font-sans text-[length:var(--step--1)] uppercase tracking-[0.12em]"
              >
                <span className="relative">{link.label}</span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setCalendlyOpen(true)}
              className="header-cta font-sans text-[length:var(--step--1)] uppercase tracking-[0.08em] rounded-[var(--radius-sm)] px-sm py-2xs cursor-pointer"
            >
              Request an audit
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            className="header-hamburger md:hidden p-xs -mr-xs cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 z-[60] bg-paper flex flex-col transition-opacity md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        style={{
          transitionDuration: "var(--dur-base)",
          transitionTimingFunction: "var(--ease-out)",
        }}
        onKeyDown={handleMenuKeyDown}
      >
        {/* Mobile header row */}
        <div className="flex items-center justify-between px-md h-12">
          <Wordmark
            className="text-[length:var(--step--1)]"
            onClick={() => setMenuOpen(false)}
          />
          <button
            ref={closeRef}
            type="button"
            className="p-xs -mr-xs text-ink cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav
          className="flex-1 flex flex-col justify-center px-lg gap-xl"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink hover:text-gold"
              style={{
                transition:
                  "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setCalendlyOpen(true);
            }}
            className="self-start font-sans text-[length:var(--step--1)] uppercase tracking-[0.08em] text-ink border border-hairline rounded-[var(--radius-sm)] px-md py-xs hover:border-gold hover:text-gold cursor-pointer mt-sm"
            style={{
              transition:
                "color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1), border-color var(--dur-fast) cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            Request an audit
          </button>
        </nav>
      </div>

      {/* Calendly popup */}
      {rootEl && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={() => setCalendlyOpen(false)}
          open={calendlyOpen}
          rootElement={rootEl}
        />
      )}
    </>
  );
}
