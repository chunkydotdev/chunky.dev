import Background from "@/components/background";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Transform Your CSS in 5 Minutes a Week",
    template: "%s | CSS Newsletter",
  },
  description:
    "Get bite‑sized, battle‑tested CSS hacks + exclusive course discounts—straight to your inbox. No more hair-pulling debugs!",
  keywords: [
    "css newsletter",
    "css tips",
    "css tricks",
    "css hacks",
    "web development",
    "frontend development",
    "css grid",
    "css flexbox",
    "css animations",
  ],
  authors: [
    {
      name: "chunky.dev",
      url: "https://github.com/chunkydotdev",
    },
  ],
  creator: "chunky.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chunky.dev",
    siteName: "CSS Hacks Weekly",
    title: "Transform Your CSS in 5 Minutes a Week",
    description:
      "Get bite‑sized, battle‑tested CSS hacks + exclusive course discounts—straight to your inbox.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CSS Hacks Weekly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transform Your CSS in 5 Minutes a Week",
    description:
      "Get bite‑sized, battle‑tested CSS hacks + exclusive course discounts—straight to your inbox.",
    images: ["/og-image.png"],
    creator: "@chunkydotdev",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: {
      url: "/chunky.png",
      type: "image/png",
    },
    apple: {
      url: "/chunky.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${poppins.variable} font-sans`}>
        <Background />
        {children}
        <Script
          defer
          data-domain={process.env.PLAUSIBLE_DOMAIN || "chunky.dev"}
          src="https://plausible.chunky.dev/js/script.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://feedback.happypanda.ai/happypanda.js"
          data-project-id="679297d57be9d598b88e537d"
          data-token="1b5ecdc077c3eeb2284476a58a6c1b24da4eb19b8efb914c7ba31d29216fc90d"
          strategy="afterInteractive"
        />
        <Toaster />
      </body>
    </html>
  );
}
