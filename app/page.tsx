"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "WhatsApp Business API Integration",
    description: "Conception and development of API Backend integrating WhatsApp with CRM systems for enterprise clients. Built robust API solutions enabling seamless customer communication channels using modern tech stack including Drupal, Spring Boot, React.js, WATI, and Ultramsg. Developed GraphQL interfaces for efficient data fetching and implemented server-side alerting systems for real-time notifications.",
    tech: ["Python", "FastAPI", "React.js", "GraphQL", "Expo", "Strapi", "MySQL", "Drupal", "Spring Boot"],
    link: "#",
    category: "API Development",
    period: "April 2022 - Present"
  },
  {
    title: "ANAPEC Job Market Analytics Platform",
    description: "Built comprehensive data scraping and analysis pipelines covering 100,000+ Moroccan job listings for the National Agency for Promoted Employment (ANAPEC). Implemented machine learning models for skill extraction and job classification using BERT, GPT, and LLaMA architectures. Designed ETL pipelines with Apache Airflow, KNIME, Pentaho, and Talend for scalable data processing and transformation.",
    tech: ["Python", "Scrapy", "BERT", "GPT", "LLaMA", "Natural Language Processing", "AWS", "Apache Airflow", "KNIME", "Pentaho", "Talend"],
    link: "#",
    category: "Data Engineering",
    period: "April 2022 - Present"
  },
  {
    title: "Insurance Document Intelligence & PII Redaction",
    description: "Designed and deployed production-grade document intelligence system for insurance and financial documents. Implemented automated PII (Personally Identifiable Information) redaction pipeline combining LLMs, rule-based extraction, and AWS serverless architecture (Textract, Step Functions, Lambda). Enabled secure document sharing at scale while maintaining regulatory compliance for sensitive data protection.",
    tech: ["Python", "LangChain", "FastAPI", "AWS Lambda", "S3", "Textract", "Step Functions", "LLMs", "RAG", "Rule-based Extraction"],
    link: "#",
    category: "Generative AI",
    period: "January 2024 - Present"
  },
  {
    title: "Production RAG System with Hybrid Search",
    description: "Architected and optimized a production Retrieval-Augmented Generation system featuring hybrid search capabilities combining dense and sparse retrieval methods with cross-encoder reranking. Achieved 10-second reduction in response latency and 20% improvement in output accuracy through sophisticated prompt engineering and retrieval optimization. Built the first agentic flow POC enabling dynamic LLM tool invocation.",
    tech: ["Python", "LangChain", "FastAPI", "RAG", "Hybrid Search", "Cross-Encoder", "Vector Embeddings", "Prompt Engineering", "LLMs"],
    link: "#",
    category: "Generative AI",
    period: "January 2024 - Present"
  },
  {
    title: "Darija Conversational Banking Assistant",
    description: "Won the national Fintech Catalyst challenge by building a Darija-dialect conversational banking assistant for Moroccan clients. Implemented custom NLP models using RASA framework with specialized language processing for Moroccan Arabic dialect. Deployed French and Arabic transcription models achieving 95% accuracy, integrated into a banking app serving thousands of users.",
    tech: ["RASA", "Python", "NLP", "Machine Learning", "French", "Arabic", "Darija", "Banking AI"],
    link: "#",
    category: "Conversational AI",
    period: "October 2021 - December 2023"
  },
  {
    title: "Portfolio System",
    description: "Comprehensive portfolio management system with multiple MVPs demonstrating Data & AI value creation. Monorepo architecture showcasing scalable cloud-native applications across multiple business domains including Value Lab (churn prediction), Care Intent (multilingual assistants), Ops Copilot (knowledge management), and Doc Factory (document intelligence).",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "FastAPI", "Docker", "Microservices"],
    link: "https://portfolio-system.vercel.app",
    category: "Full Stack",
    period: "2024 - Present"
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
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8">
              5+ years of experience building production AI systems, data pipelines, and full-stack applications.
              Specializing in Generative AI, LLMs, agentic workflows, RAG systems, and MLOps for enterprise clients in banking, insurance, and fintech.
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
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      {project.period}
                    </p>
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
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
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
            {["Next.js", "TypeScript", "React", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL", "Docker", "Vercel", "AWS", "LangChain", "Hugging Face", "LLMs", "RAG", "Generative AI", "MLOps", "Machine Learning", "NLP", "RASA", "Scikit-learn", "PyTorch", "TensorFlow", "Apache Airflow", "GraphQL", "Redis", "MongoDB", "Neo4j"].map((tech, i) => (
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
            <Link href="mailto:omar.nouiri98@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">Email</Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
