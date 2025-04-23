export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-main-50 border-y-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky rotate-1">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-main-300 mr-2 text-sm border border-black">
                Q
              </span>
              How often will I receive emails?
            </h3>
            <p className="text-gray-700 ml-10">
              Once a week, every Wednesday. Each email takes about 3 minutes to read and implement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky -rotate-1">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-main-300 mr-2 text-sm border border-black">
                Q
              </span>
              How much does it cost?
            </h3>
            <p className="text-gray-700 ml-10">
              The newsletter is completely free! You'll also get exclusive discounts (20% off) on
              any paid courses we release.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky -rotate-1">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-main-300 mr-2 text-sm border border-black">
                Q
              </span>
              What about my privacy?
            </h3>
            <p className="text-gray-700 ml-10">
              We will never sell your data or spam you. You can unsubscribe with one click at any
              time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-chunky rotate-1">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-main-300 mr-2 text-sm border border-black">
                Q
              </span>
              What level of CSS knowledge do I need?
            </h3>
            <p className="text-gray-700 ml-10">
              The tips range from beginner to advanced. Each snippet comes with clear explanations,
              so you can learn as you implement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
