"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function SignedUp() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const signedUp = searchParams.get("signedup");
    if (signedUp === "true") {
      setOpen(true);
      // Fire confetti when the dialog opens
      const duration = 300;
      const end = Date.now() + duration;

      const fireConfetti = () => {
        confetti({
          particleCount: 10,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF5555", "#7B61FF", "#FFD53D", "#70DDCB"],
          disableForReducedMotion: true,
        });

        if (Date.now() < end) {
          requestAnimationFrame(fireConfetti);
        }
      };

      fireConfetti();
    }
  }, [searchParams]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-4 border-black shadow-chunky bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Awesome! You're in! 🎉</DialogTitle>
          <DialogDescription className="text-xl mt-4">
            Thank you for joining our community! Check your inbox for a confirmation email.
          </DialogDescription>
        </DialogHeader>
        <div className="my-6 p-6 bg-main-50 border-2 border-black rounded-lg">
          <h3 className="font-bold text-lg mb-2">What's Next:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>We'll send you weekly CSS tips every Monday</li>
            <li>You'll get exclusive discounts on upcoming courses</li>
            <li>
              <span className="font-bold">Coming Soon:</span> A pack of 10 ready-to-use CSS snippets
            </li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <Button>Let's Go!</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
