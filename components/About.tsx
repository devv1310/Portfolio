"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "GitHub",
];

export default function About() {
  return (
    <section id="about" className="relative bg-base px-6 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-accent">
            About
          </span>
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
            Full Stack Python Developer Intern at Cybrom Technology Pvt Ltd,
            based in Bhopal, India.
          </h2>
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/55 sm:text-base">
            I work across the stack — building React front ends, Django and
            FastAPI back ends, and the data pipelines that connect them.
            I&apos;m equally comfortable shipping a polished UI and digging
            into a SQL query or a dashboard that needs to surface the right
            insight at the right time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Stack
          </span>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-glass px-4 py-2 text-sm font-light text-white/70 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
