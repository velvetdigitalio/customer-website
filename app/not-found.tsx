import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-md">
      <div className="text-center max-w-lg">
        <p className="font-sans text-[length:var(--step--1)] uppercase tracking-[0.18em] text-gold">
          404
        </p>
        <h1 className="mt-sm font-serif text-[length:var(--step-3)] leading-[1.1] tracking-[-0.02em] text-ink">
          Page not found
        </h1>
        <p className="mt-md text-ink-2 max-w-[48ch] mx-auto">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-lg px-md py-xs bg-ink text-cream text-[length:var(--step--1)] uppercase tracking-[0.08em] rounded-[var(--radius-sm)] hover:bg-umber transition-colors"
          style={{ transitionDuration: "var(--dur-fast)" }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
