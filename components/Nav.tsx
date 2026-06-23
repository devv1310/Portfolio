"use client";

import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 z-40 flex w-full items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <span className="font-mono text-sm tracking-wide text-white/80">
        DV<span className="text-accent">.</span>
      </span>
      <div className="hidden gap-8 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-light text-white/60 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-light text-white/80 backdrop-blur-sm transition-all hover:border-accent/40 hover:text-accent"
      >
        Get in touch
      </a>
    </motion.nav>
  );
}
