"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: "Cromafin",
    description:
      "A fintech loan-management platform handling applications, approvals, and repayment tracking with a secure, role-based dashboard.",
    tags: ["React.js", "Django", "PostgreSQL", "REST API"],
    year: "2024",
  },
  {
    title: "Ride It",
    description:
      "A bike-import marketplace built during a full-stack internship — connecting buyers with imported bikes through listings, search, and inquiry flows.",
    tags: ["React.js", "Python", "MySQL", "Tailwind CSS"],
    year: "2024",
  },
  {
    title: "Real-Time Manufacturing Dashboard",
    description:
      "A live operations dashboard visualizing production metrics and machine status in real time for manufacturing teams.",
    tags: ["Python", "FastAPI", "Streamlit", "Data Analytics"],
    year: "2024",
  },
  {
    title: "Farmer Help App",
    description:
      "A support platform for farmers offering crop guidance, market price tracking, and resource access in a simple, accessible interface.",
    tags: ["React.js", "Django", "MySQL"],
    year: "2023",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="work" className="relative bg-base px-6 py-28 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Selected Work
          </span>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight text-white sm:text-5xl">
            Projects that combine engineering depth with practical impact.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-glass p-8 backdrop-blur-xl transition-all duration-500 hover:border-accent/30"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                   style={{
                     background:
                       "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(217,255,107,0.08), transparent 60%)",
                   }}
              />

              <div className="relative flex items-start justify-between">
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-white/30">
                  {project.year}
                </span>
              </div>

              <p className="relative mt-4 text-sm font-light leading-relaxed text-white/55 sm:text-base">
                {project.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-light text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
