import { IconBrandBluesky, IconBrandGithub, IconHammer, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="py-10 px-4 text-center bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="https://bsky.app/profile/junghard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <IconBrandBluesky size={16} />
            Bluesky
          </Link>
          <Link
            href="https://github.com/chunkydotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <IconBrandGithub size={16} />
            GitHub
          </Link>
          <Link
            href="https://junghard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <IconUser size={16} />
            About Me
          </Link>
          <Link
            href="https://dank.tools"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <IconHammer size={16} />
            My Free tools
          </Link>
          <Link
            href="https://bldbl.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <Image src="/bldbl.svg" alt="bldbl" width={16} height={16} />
            Structure your vibe code projects
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-8 w-8 bg-main-500 rounded-md rotate-45 border border-white" />
          <p className="font-bold text-lg">chunky.dev</p>
          <div className="h-8 w-8 bg-main-500 rounded-md -rotate-45 border border-white" />
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} chunky.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
