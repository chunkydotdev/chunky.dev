import { IconArrowRight, IconCheck } from "@tabler/icons-react";

export default function SignupFormSection() {
  return (
    <section id="signup" className="py-20 px-4 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-main-100 rounded-full border-2 border-black hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 bg-main-200 rounded-full border-2 border-black hidden md:block" />

      <div className="max-w-3xl mx-auto relative">
        <div className="bg-main-500 text-white p-10 rounded-xl border-4 border-black shadow-chunky transform rotate-1">
          <h2 className="text-4xl font-black mb-6 text-center">Join the CSS Transformation</h2>
          <p className="text-xl mb-10 text-center">
            Get weekly CSS tips, exclusive discounts, and the free CSS Snippet Pack today!
          </p>

          {/* Buttondown Signup Form */}
          <div className="bg-white p-8 rounded-xl border-4 border-black shadow-chunky-sm -rotate-1 text-black">
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/chunkydotdev"
              method="post"
              target="popupwindow"
              className="space-y-4"
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your best email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-main-500"
                  required
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-main-500 text-white px-4 py-3 rounded-lg border-2 border-black shadow-chunky-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all font-bold"
              >
                I WANT IN
                <IconArrowRight size={20} />
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-gray-600 text-sm">
              <IconCheck size={16} className="text-main-500" />
              <p>No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
