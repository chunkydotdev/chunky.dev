import TrackedLink from "@/components/TrackedLink";
import { IconArrowRight } from "@tabler/icons-react";
import { Badge } from "../ui/badge";
export default function OfferSection() {
  return (
    <section className="py-20 px-4 bg-main-50 border-b-4 border-black">
      <div className="max-w-6xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-4 w-16 h-16 bg-main-200 rounded-xl border-2 border-black -rotate-6 hidden lg:block" />
        <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-main-300 rounded-xl border-2 border-black rotate-12 hidden lg:block" />

        <div className="relative">
          <h2 className="text-4xl font-black mb-16 text-center inline-block bg-main-400 text-white px-8 py-4 rounded-lg border-2 border-black shadow-chunky-sm rotate-1 mx-auto">
            The Irresistible Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-chunky hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-chunky-sm transition-all">
              <div className="bg-main-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 border-2 border-black">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Weekly 3‑Minute CSS Wins</h3>
              <p className="text-gray-700">
                Real, drop‑in code you can use <span className="font-bold">today</span>. No fluff,
                just practical solutions to common CSS challenges.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-chunky hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-chunky-sm transition-all -rotate-1">
              <div className="bg-main-300 rounded-full w-16 h-16 flex items-center justify-center mb-6 border-2 border-black">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Exclusive 20% Course Discounts</h3>
              <p className="text-gray-700">
                Early‑bird pricing on upcoming courses. Be the first to access new learning
                materials at subscriber-only rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-xl border-4 border-black shadow-chunky hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-chunky-sm transition-all rotate-1">
              <div className="bg-main-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 border-2 border-black">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Free CSS Snippet Pack
                <Badge>COMING SOON</Badge>
              </h3>
              <p className="text-gray-700">
                10 zero‑bullshit snippets (grids, dark‑mode toggle, hover magic) ready to copy and
                paste into your projects.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <TrackedLink
              href="#signup"
              eventName="Offer CTA Click"
              className="inline-flex items-center justify-center gap-2 bg-main-500 text-white px-8 py-4 rounded-lg border-2 border-black shadow-chunky-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-bold text-xl"
            >
              I WANT IN
              <IconArrowRight size={24} />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
