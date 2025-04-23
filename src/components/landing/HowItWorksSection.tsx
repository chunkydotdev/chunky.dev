import { Badge } from "../ui/badge";

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-main-50 border-y-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center">
          <span className="inline-block bg-white px-8 py-4 rounded-xl border-4 border-black shadow-chunky-sm -rotate-1">
            How It Works
          </span>
        </h2>

        <div className="space-y-12 relative">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-start gap-6 relative">
            <div className="bg-main-200 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 border-2 border-black z-10">
              <span className="font-bold text-xl">1</span>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky w-full">
              <h3 className="text-xl font-bold mb-2">Hit "I WANT IN"</h3>
              <p className="text-gray-700">
                Sign up with your email in seconds. No credit card, no commitment.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-start gap-6 relative">
            <div className="bg-main-300 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 border-2 border-black z-10">
              <span className="font-bold text-xl">2</span>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky w-full">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                Get ready for the CSS Snippet Pack
                <Badge className="ml-2">COMING SOON</Badge>
              </h3>
              <p className="text-gray-700">
                Soon you'll have access to 10 ready-to-use CSS snippets that solve real problems.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-start gap-6 relative">
            <div className="bg-main-400 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 border-2 border-black z-10">
              <span className="font-bold text-xl">3</span>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky w-full">
              <h3 className="text-xl font-bold mb-2">Implement 1 hack/week</h3>
              <p className="text-gray-700">
                Receive a weekly 3-minute email with a practical CSS solution you can implement
                immediately.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-start gap-6 relative">
            <div className="bg-main-500 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 border-2 border-black z-10 text-white">
              <span className="font-bold text-xl">4</span>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky w-full">
              <h3 className="text-xl font-bold mb-2">Get course discounts & pro tips</h3>
              <p className="text-gray-700">
                Subscribers get exclusive 20% discounts on all upcoming CSS courses and advanced
                tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
