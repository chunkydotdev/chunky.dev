import TrackedLink from "@/components/TrackedLink";
import { IconArrowRight } from "@tabler/icons-react";

export default function ProofSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">Why Join Our Community?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Value Prop 1 */}
          <div className="p-8 bg-main-50 rounded-xl border-4 border-black shadow-chunky rotate-1">
            <div className="mb-6">
              <div className="bg-main-300 p-3 rounded-xl w-16 h-16 flex items-center justify-center border-2 border-black">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Time savings icon"
                  role="img"
                >
                  <title>Time savings icon</title>
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-black">
              <h3 className="font-bold text-lg mb-2">Save Valuable Dev Time</h3>
              <p className="text-gray-700">
                Stop wasting hours debugging CSS issues. Each tip takes just 3 minutes to implement
                but can save you hours of frustration and trial-and-error.
              </p>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="p-8 bg-main-50 rounded-xl border-4 border-black shadow-chunky -rotate-1">
            <div className="mb-6">
              <div className="bg-main-300 p-3 rounded-xl w-16 h-16 flex items-center justify-center border-2 border-black">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Code quality icon"
                  role="img"
                >
                  <title>Code quality icon</title>
                  <path
                    d="M16 18L22 12L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-black">
              <h3 className="font-bold text-lg mb-2">Level Up Your CSS Skills</h3>
              <p className="text-gray-700">
                Implement one practical tip per week and watch your CSS skills grow exponentially.
                Learn tricks most developers don't know about.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-main-100 py-10 px-6 rounded-xl border-4 border-black shadow-chunky">
          <p className="text-2xl font-bold mb-8">
            Be among the first to get weekly CSS tips and exclusive discounts
          </p>
          <TrackedLink
            href="#signup"
            eventName="Social Proof CTA Click"
            className="inline-flex items-center justify-center gap-2 bg-main-500 text-white px-8 py-4 rounded-lg border-2 border-black shadow-chunky-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-bold text-xl"
          >
            I WANT IN
            <IconArrowRight size={24} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
