import TrackedLink from "@/components/TrackedLink";
import { IconArrowRight } from "@tabler/icons-react";

export default function FinalCTASection() {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-main-400 to-main-500 p-10 rounded-xl border-4 border-black shadow-chunky">
          <h2 className="text-4xl font-black mb-6 text-white">Ready to Transform Your CSS?</h2>
          <p className="text-xl mb-10 text-white">
            Be one of the first to receive weekly CSS tips, exclusive discounts, and practical code
            snippets.
          </p>
          <TrackedLink
            href="#signup"
            eventName="Final CTA Click"
            className="inline-flex items-center justify-center gap-2 bg-white text-main-500 px-8 py-4 rounded-lg border-2 border-black shadow-chunky-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-bold text-xl"
          >
            I WANT IN
            <IconArrowRight size={24} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
