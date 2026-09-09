"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "PRODIGE ANAPEC Labor Market Observatory",
    description: "Implementation of Dataiku DSS-based MVP for national labor market analysis. Built end-to-end pipeline ingesting 500,000+ job offers from Scrapy web scraping with MySQL structured data. Used Dataiku Flow with Visual Prepare Recipes, Python Code Environments with PyTorch/spaCy/transformers for BERT and RNN-seq2Seq skill extraction, and containerized execution on Kubernetes with GPU allocation. Implemented Metrics & Checks for data quality, automated Scenario triggering, and created Application Template for regional replication across MEA countries.",
    tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Transformers", "BERT", "RNN", "Seq2Seq", "Kubernetes", "Docker", "MySQL", "S3"],
    link: "#",
    category: "Data Science Platform"
  },
  {
    title: "WhatsApp Business API Integration",
    description: "Conception and development of API Backend integrating WhatsApp with CRM systems. Built API solutions for WhatsApp Business API using Drupal, Spring Boot, React.js, WATI, and Ultramsg for seamless customer communication.",
    tech: ["Python", "FastAPI", "React.js", "GraphQL", "Expo", "Strapi", "MySQL"],
    link: "#",
    category: "API Development"
  },
  {
    title: "Data Scraping & Job Analysis Pipeline",
    description: "Built the first data scraping and analysis pipelines covering 100,000+ Moroccan job listings. Applied BERT, GPT, and LLaMA models for skill extraction and job classification. Used Scrapy, Ruby, Python with Machine Learning, Seq2Seq, and TextRank algorithms for data processing.",
    tech: ["Python", "Scrapy", "Ruby", "BERT", "GPT", "LLaMA", "Seq2Seq", "TextRank", "Natural Language Processing"],
    link: "#",
    category: "Data Engineering"
  },
  {
    title: "Insurance AI Assistant - DXC Technology",
    description: "Production document Q&A system on AWS with hybrid retrieval and reranking. Automated PII redaction for insurance/financial documents using LLMs (Claude, LLaMA, Mistral) and AWS serverless architecture. Extended into an agentic AI workflow on AWS Lambda and S3.",
    tech: ["Python", "LangChain", "FastAPI", "AWS Lambda", "S3", "Claude", "LLaMA", "Mistral", "LLMs", "RAG"],
    link: "#",
    category: "Generative AI"
  },
  {
    title: "Excel Parsing & Semantic Embedding - DXC Technology",
    description: "Designed and implemented an Excel parsing and semantic embedding pipeline to feed structured data into LLM applications. Built automated Power BI dashboards for executive reporting and created embeddings for structured data ingestion.",
    tech: ["Python", "LangChain", "Semantic Search", "Vector Embeddings", "Power BI", "Excel Processing"],
    link: "#",
    category: "Generative AI"
  },
  {
    title: "AI & NLP Projects - Digital Place",
    description: "End-to-end AI use cases in insurance: prediction, scoring, and document intelligence. Active R&D on frontier LLM techniques and agentic architectures, presenting new AI use cases to clients. Built Airflow ETL pipelines processing 500,000+ job postings with BERT, GPT, LLaMA models.",
    tech: ["Python", "Machine Learning", "NLP", "Generative AI", "Hugging Face", "MLflow", "Airflow", "BERT", "GPT", "LLaMA"],
    link: "#",
    category: "AI/ML"
  },
  {
    title: "Portfolio System",
    description: "Comprehensive portfolio management system with multiple MVPs. Monorepo architecture demonstrating Data & AI value creation across multiple domains including Value Lab, Care Intent, Ops Copilot, and Doc Factory.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "FastAPI", "Docker"],
    link: "https://portfolio-system.vercel.app",
    category: "Full Stack"
  }
];

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
            Senior AI/ML Consultant & Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8">
              5+ years of experience building production AI systems, data pipelines, and full-stack applications.
              Specializing in Generative AI, LLMs, agentic workflows, and MLOps.
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
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
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
            {["Next.js", "TypeScript", "React", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL", "Docker", "Vercel", "AWS", "LangChain", "Hugging Face", "LLMs", "RAG", "Generative AI", "MLOps", "Machine Learning", "NLP"].map((tech, i) => (
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

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to build innovative AI and full-stack solutions?
          </motion.p>
          <motion.a
            href="mailto:omar.nouiri98@gmail.com"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contact Me
          </motion.a>
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
