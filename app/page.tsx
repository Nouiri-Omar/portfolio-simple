"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Value Lab MVP",
    description: "Advanced churn prediction and campaign value simulation platform. Multi-country telco customer analytics with FastAPI backend and Next.js frontend. Features EDA, model training, customer scoring, and value simulation.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "scikit-learn", "Pandas"],
    link: "https://portfolio-system.vercel.app/apps/mvp-01-value-lab",
    image: "/mvp1.png"
  },
  {
    title: "Care Intent MVP",
    description: "Healthcare communication platform for patient engagement. Multilingual intent classification system with RAG-based knowledge retrieval.",
    tech: ["React", "Node.js", "Python", "RAG", "Transformers"],
    link: "https://portfolio-system.vercel.app/apps/mvp-02-care-intent",
    image: "/mvp2.png"
  },
  {
    title: "Ops Copilot MVP",
    description: "Operational assistant with AI-powered insights and automation. Knowledge copilot for operations teams with document intelligence capabilities.",
    tech: ["AI/ML", "Python", "Docker", "Kubernetes", "FastAPI"],
    link: "https://portfolio-system.vercel.app/apps/mvp-03-ops-copilot",
    image: "/mvp3.png"
  },
  {
    title: "Doc Factory MVP",
    description: "Document generation and processing pipeline. Automated document compliance and intelligence system for enterprise workflows.",
    tech: ["Node.js", "PDF Generation", "Cloud Services", "OCR"],
    link: "https://portfolio-system.vercel.app/apps/mvp-04-doc-factory",
    image: "/mvp4.png"
  },
  {
    title: "Portfolio System",
    description: "Comprehensive portfolio management system with multiple MVPs. Monorepo architecture demonstrating Data & AI value creation across multiple domains.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Docker"],
    link: "https://portfolio-system.vercel.app",
    image: "/portfolio.png"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Omar Nouiri
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Developer & Creator of Portfolio System
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8">
              Building innovative solutions across multiple domains including data analytics, healthcare, operations, and document processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group p-6 md:p-10 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "white" }}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["Next.js", "TypeScript", "React", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL", "Docker", "Vercel", "scikit-learn", "Pandas", "RAG", "AI/ML"].map((tech, i) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                className="px-5 py-3 bg-gray-100 dark:bg-zinc-800 rounded-lg font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-200 dark:border-zinc-800">
        <motion.div
          className="max-w-4xl mx-auto text-center text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">© {new Date().getFullYear()} Omar Nouiri. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Email</Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
