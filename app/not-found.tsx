import { GoldButton } from "@/components/ui/GoldButton";
import { GradientOrb } from "@/components/ui/GradientOrb";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-velvet-radial" />
      <GradientOrb
        color="purple"
        size={600}
        className="-top-32 -left-32 opacity-70"
      />
      <GradientOrb
        color="gold"
        size={480}
        className="-bottom-24 -right-24 opacity-50"
      />

      <div className="relative text-center px-6 max-w-2xl">
        <p className="font-display text-[11px] tracking-[0.3em] uppercase text-vd-gold">
          404 · page not found
        </p>
        <h1 className="mt-6 font-display text-6xl md:text-8xl tracking-[-0.03em] text-vd-bone leading-none">
          Lost in <span className="text-gold-gradient italic">velvet</span>.
        </h1>
        <p className="mt-6 text-vd-mute text-[17px] leading-[1.7]">
          The page you&apos;re looking for doesn&apos;t exist — or moved
          somewhere quieter.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <GoldButton href="/">Back to home</GoldButton>
          <GoldButton href="/contact" variant="ghost">
            Get in touch
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
