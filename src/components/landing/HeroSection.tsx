import TrackedLink from "@/components/TrackedLink";
import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-16 h-16 bg-main-200 rounded-lg border-2 border-black rotate-12 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-12 h-12 bg-main-300 rounded-full border-2 border-black hidden md:block" />

      <div className="relative max-w-4xl mx-auto bg-white rounded-xl border-4 border-black p-8 shadow-chunky">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          Transform Your CSS in 5 Minutes a Week{" "}
          <span className="bg-gradient-to-r from-main-500 to-main-600 text-transparent bg-clip-text">
            (No More Hair‑Pulling Debugs)
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Get bite‑sized, battle‑tested CSS hacks + exclusive course discounts, straight to your
          inbox!
        </p>
        <TrackedLink
          href="#signup"
          eventName="Hero CTA Click"
          className="inline-flex items-center justify-center gap-2 bg-main-500 text-white px-8 py-4 rounded-lg border-2 border-black shadow-chunky-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-bold text-xl"
        >
          I WANT IN
          <IconArrowRight size={24} />
        </TrackedLink>
      </div>

      {/* Animated CSS Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full w-full">
          {/* Using fixed divs with main color variants instead of the previous colors */}
          <div
            className="rounded-md animate-pulse bg-main-100"
            style={{ animationDelay: "100ms", animationDuration: "2000ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-200"
            style={{ animationDelay: "300ms", animationDuration: "3000ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-300"
            style={{ animationDelay: "500ms", animationDuration: "2500ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-400"
            style={{ animationDelay: "200ms", animationDuration: "1800ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-500"
            style={{ animationDelay: "800ms", animationDuration: "2200ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-100"
            style={{ animationDelay: "600ms", animationDuration: "3200ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-200"
            style={{ animationDelay: "400ms", animationDuration: "2600ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-300"
            style={{ animationDelay: "700ms", animationDuration: "1900ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-400"
            style={{ animationDelay: "150ms", animationDuration: "2800ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-500"
            style={{ animationDelay: "350ms", animationDuration: "3100ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-100"
            style={{ animationDelay: "550ms", animationDuration: "2700ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-200"
            style={{ animationDelay: "250ms", animationDuration: "2300ms" }}
          />
          {/* Repeating for remaining grid cells */}
          <div
            className="rounded-md animate-pulse bg-main-300"
            style={{ animationDelay: "450ms", animationDuration: "2400ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-400"
            style={{ animationDelay: "650ms", animationDuration: "3300ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-500"
            style={{ animationDelay: "750ms", animationDuration: "2100ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-100"
            style={{ animationDelay: "850ms", animationDuration: "1700ms" }}
          />
          {/* Additional sample cells */}
          <div
            className="rounded-md animate-pulse bg-main-200"
            style={{ animationDelay: "950ms", animationDuration: "2900ms" }}
          />
          <div
            className="rounded-md animate-pulse bg-main-300"
            style={{
              animationDelay: "1050ms",
              animationDuration: "3400ms",
            }}
          />
          <div
            className="rounded-md animate-pulse bg-main-400"
            style={{
              animationDelay: "1150ms",
              animationDuration: "2000ms",
            }}
          />
          <div
            className="rounded-md animate-pulse bg-main-500"
            style={{
              animationDelay: "1250ms",
              animationDuration: "1600ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}
