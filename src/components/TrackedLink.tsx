"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "./ui/button";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  children: ReactNode;
  className?: string;
  props?: Record<string, string | number | boolean>;
}

/**
 * A component that tracks clicks with Plausible analytics
 */
export default function TrackedLink({
  href,
  eventName,
  children,
  className,
  props = {},
}: TrackedLinkProps) {
  const handleClick = () => {
    // Track the click event if Plausible is available
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(eventName, { props });
    }
  };

  return (
    <Button asChild className={className} size="lg">
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  );
}
