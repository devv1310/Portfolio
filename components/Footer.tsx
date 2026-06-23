"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-base px-6 py-20 sm:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Let&apos;s talk
          </span>
          <h2 className="max-w-lg text-3xl font-medium leading-tight text-white sm:text-5xl">
            Open to full-stack and data roles.
          </h2>
          <a
            href="mailto:hello@devanshu.dev"
            className="mt-6 inline-block text-base font-light text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            hello@devanshu.dev
          </a>
        </div>

        <div className="flex gap-6 text-sm font-light text-white/50">
          <a href="#" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Resume
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between gap-2 border-t border-white/5 pt-8 text-xs font-light text-white/30 sm:flex-row">
        <p>© {new Date().getFullYear()} Devanshu Vishwakarma. Bhopal, India.</p>
        <p>Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
