"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";
import { cn } from "@/lib/cn";
import { CALENDLY_URL } from "@/lib/calendly";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
  calendly?: never;
  onClick?: never;
};

type CalendlyButtonProps = ButtonBaseProps & {
  href?: never;
  calendly: true;
  onClick?: never;
};

type NativeButtonProps = ButtonBaseProps & {
  href?: never;
  calendly?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = LinkButtonProps | CalendlyButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, className, onDark = false } = props;
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setRootEl(document.body);
    return () => {
      mounted.current = false;
    };
  }, []);

  const base = cn(
    "inline-block px-md py-xs font-sans text-[length:var(--step--1)] uppercase tracking-[0.08em] rounded-[var(--radius-sm)] transition-colors cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
    onDark
      ? "bg-cream text-ink hover:bg-gold-soft"
      : "bg-ink text-cream hover:bg-umber",
    className,
  );

  if (props.calendly) {
    return (
      <>
        <button
          type="button"
          className={base}
          onClick={() => setCalendlyOpen(true)}
          style={{ transitionDuration: "var(--dur-fast)" }}
        >
          {children}
        </button>
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

  if (props.href) {
    return (
      <Link
        href={props.href}
        className={base}
        style={{ transitionDuration: "var(--dur-fast)" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as NativeButtonProps).type ?? "button"}
      className={base}
      onClick={(props as NativeButtonProps).onClick}
      style={{ transitionDuration: "var(--dur-fast)" }}
    >
      {children}
    </button>
  );
}
