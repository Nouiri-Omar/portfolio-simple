"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageFlip from "react-pageflip";
import Link from "next/link";

const projects = [
  {
    title: "Dataiku POC - PRODIGE ANAPEC",
    description: "2-Month MVP Build Proof of Concept using Dataiku DSS. Implemented Scrapy web-scraped job offers with MySQL structured tables. Created Python Code Environments with PyTorch/spaCy/transformers for BERT and RNN-seq2Seq skill extraction. Containerized execution on Kubernetes with GPU allocation. Used Smart Sampling for multi-lingual records (French, Arabic, English). Created Application Template for regional replication.",
    tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Transformers", "BERT", "RNN", "Seq2Seq", "Kubernetes", "Docker", "MySQL", "S3", "Scrapy"],
    category: "Data Science Platform",
    image: "/images/dataiku-poc.png"
  },
  {
    title: "PRODIGE ANAPEC Job Offers Pipeline",
    description: "Full Stack Developer / Data Miner implementation for national labor market observatory. Built end-to-end data pipeline for 100,000+ Moroccan job listings. Data scraping and analysis system using Scrapy, Ruby, Python with Machine Learning, Seq2Seq, and TextRank algorithms. API Backend for WhatsApp Business integration with CRM using Drupal, Spring Boot, React.js, WATI, and Ultramsg.",
    tech: ["Python", "Scrapy", "Ruby", "BERT", "GPT", "LLaMA", "Seq2Seq", "TextRank", "Drupal", "Spring Boot", "React.js", "MySQL", "WhatsApp API", "Data Warehouse"],
    category: "Data Engineering",
    image: "/images/job-pipeline.png"
  },
  {
    title: "WhatsApp Business API Integration",
    description: "Conception and development of API Backend integrating WhatsApp with CRM systems. Built API solutions for WhatsApp Business API using Drupal, Spring Boot, React.js, WATI, and Ultramsg for seamless customer communication.",
    tech: ["Python", "FastAPI", "React.js", "GraphQL", "Expo", "Strapi", "MySQL"],
    category: "API Development",
    image: "/images/whatsapp-api.png"
  },
  {
    title: "Insurance Document Intelligence & PII Redaction",
    description: "Production document Q&A system on AWS with hybrid retrieval and reranking. Automated PII redaction for insurance/financial documents using LLMs (Claude, LLaMA, Mistral) and AWS serverless architecture (Textract, Step Functions, Lambda). Extended into an agentic AI workflow.",
    tech: ["Python", "LangChain", "FastAPI", "AWS Lambda", "S3", "Claude", "LLaMA", "Mistral", "LLMs", "RAG"],
    category: "Generative AI",
    image: "/images/insurance-ai.png"
  },
  {
    title: "Production RAG System with Hybrid Search",
    description: "Architected and optimized a production Retrieval-Augmented Generation system featuring hybrid search capabilities combining dense and sparse retrieval methods with cross-encoder reranking. Achieved 10-second reduction in response latency and 20% improvement in output accuracy.",
    tech: ["Python", "LangChain", "FastAPI", "RAG", "Hybrid Search", "Cross-Encoder", "Vector Embeddings", "Prompt Engineering", "LLMs"],
    category: "Generative AI",
    image: "/images/rag-system.png"
  },
  {
    title: "Darija Conversational Banking Assistant",
    description: "Won the national Fintech Catalyst challenge by building a Darija-dialect conversational banking assistant for Moroccan clients. Implemented custom NLP models using RASA framework with specialized language processing for Moroccan Arabic dialect.",
    tech: ["RASA", "Python", "NLP", "Machine Learning", "French", "Arabic", "Darija", "Banking AI"],
    category: "Conversational AI",
    image: "/images/darija-assistant.png"
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Navbar */}
      <nav className="bg-[#0a192f] text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Omar Nouiri</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#book" className="hover:text-[#64ffda] transition-colors">Projects</Link>
            <Link href="#tech" className="hover:text-[#64ffda] transition-colors">Tech Stack</Link>
            <Link href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</Link>
            <Link href="https://github.com/Nouiri-Omar" target="_blank" className="hover:text-[#64ffda] transition-colors">GitHub</Link>
            <Link href="https://linkedin.com/in/omar-nouiri" target="_blank" className="hover:text-[#64ffda] transition-colors">LinkedIn</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-90"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Omar Nouiri
          </h1>
          <p className="text-2xl md:text-3xl text-[#8892b0] mb-10">
            Senior AI/ML Consultant & Full Stack Developer
          </p>
          <p className="text-xl max-w-2xl mx-auto text-[#8892b0] mb-8">
            5+ years of experience building production AI systems, data pipelines, and full-stack applications.
          </p>
          <Link
            href="#book"
            className="inline-block px-8 py-3 bg-[#64ffda] text-[#0a192f] rounded-full font-medium hover:bg-[#4cd6b8] transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Project Book Section */}
      <section id="book" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-zinc-900 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0a192f] dark:text-white">
            My Portfolio
          </h2>
          
          {/* Page Flip Container */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Page Flip */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-2xl p-8 min-h-[600px]">
                <PageFlip width={400} height={600} className="mx-auto" drawShadow={true} flippingTime={1000} usePortrait={true} startZIndex={0} style={{}} startPage={0} size="fixed" minWidth={300} maxWidth={500} minHeight={400} maxHeight={800} autoSize={false} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true} clickEventForward={false} useMouseEvents={true} swipeDistance={100} showPageCorners={true} disableFlipByClick={false}>
                  {/* Cover Page */}
                  <div className="flex flex-col items-center justify-center h-full bg-[#0a192f] text-white p-8 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4">Omar Nouiri</h1>
                    <p className="text-xl text-[#64ffda] mb-8">Senior AI/ML Consultant</p>
                    <p className="text-lg">Full Stack Developer</p>
                    <div className="mt-8 flex gap-4">
                      <div className="w-16 h-1 bg-[#64ffda] rounded"></div>
                      <div className="w-16 h-1 bg-[#64ffda] rounded"></div>
                      <div className="w-16 h-1 bg-[#64ffda] rounded"></div>
                    </div>
                  </div>

                  {/* Dataiku POC Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">💻</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Dataiku POC</h3>
                        <span className="text-sm text-[#64ffda]">Data Science Platform</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      2-Month MVP Build Proof of Concept using Dataiku DSS. Implemented Scrapy web-scraped job offers with MySQL structured tables. Created Python Code Environments with PyTorch/spaCy/transformers for BERT and RNN-seq2Seq skill extraction.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[0].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Job Pipeline Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Job Pipeline</h3>
                        <span className="text-sm text-[#64ffda]">Data Engineering</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      Full Stack Developer / Data Miner implementation for national labor market observatory. Built end-to-end data pipeline for 100,000+ Moroccan job listings with Scrapy, Ruby, Python and Machine Learning algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[1].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp API Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">WhatsApp API</h3>
                        <span className="text-sm text-[#64ffda]">API Development</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      Conception and development of API Backend integrating WhatsApp with CRM systems. Built API solutions using Drupal, Spring Boot, React.js, WATI, and Ultramsg for seamless customer communication.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[2].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Insurance AI Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Insurance AI</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      Production document Q&A system on AWS with hybrid retrieval and reranking. Automated PII redaction for insurance/financial documents using LLMs and AWS serverless architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[3].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* RAG System Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">RAG System</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      Production Retrieval-Augmented Generation system with hybrid search combining dense and sparse retrieval with cross-encoder reranking. Achieved 10-second latency reduction and 20% accuracy improvement.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[4].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Darija Assistant Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🎤</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Darija Assistant</h3>
                        <span className="text-sm text-[#64ffda]">Conversational AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      Darija-dialect conversational banking assistant using RASA framework with specialized language processing for Moroccan Arabic dialect. 95% accuracy achieved.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[5].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Back Cover */}
                  <div className="flex flex-col items-center justify-center h-full bg-[#0a192f] text-white p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                    <p className="text-lg mb-6">omar.nouiri98@gmail.com</p>
                    <p className="text-lg">+212 6 20 21 79 30</p>
                    <p className="text-sm mt-8 text-[#8892b0]">Tangier, Morocco</p>
                  </div>
                </PageFlip>
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Select a Project</h3>
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg border-2 border-[#0a192f] dark:border-white hover:bg-[#0a192f] hover:text-white dark:hover:bg-white dark:hover:text-[#0a192f] transition-colors cursor-pointer"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-sm text-[#64ffda] mt-1">{project.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-6 md:px-12 bg-[#0a192f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Next.js", "TypeScript", "React", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL", "Docker", "AWS", "LangChain", "Hugging Face", "LLMs", "RAG", "MLOps", "Machine Learning", "NLP"].map((tech, i) => (
              <div
                key={tech}
                className="px-5 py-3 bg-[#112240] rounded-lg font-medium text-[#64ffda]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#112240]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-10 text-[#8892b0]">
            Ready to build innovative AI and full-stack solutions?
          </p>
          <a
            href="mailto:omar.nouiri98@gmail.com"
            className="inline-block px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-full font-medium hover:bg-[#4cd6b8] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-[#0a192f] border-t border-[#112240]">
        <div className="max-w-4xl mx-auto text-center text-[#8892b0]">
          <p className="mb-4">© {new Date().getFullYear()} Omar Nouiri. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="https://github.com/Nouiri-Omar" target="_blank" className="hover:text-[#64ffda] transition-colors">GitHub</Link>
            <Link href="https://linkedin.com/in/omar-nouiri" target="_blank" className="hover:text-[#64ffda] transition-colors">LinkedIn</Link>
            <Link href="mailto:omar.nouiri98@gmail.com" className="hover:text-[#64ffda] transition-colors">Email</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
