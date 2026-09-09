"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageFlip from "react-pageflip";
import Link from "next/link";

const projects = [
  {
    title: "RAG Insurance AI Assistant",
    description: "End-to-end Retrieval-Augmented Generation (RAG) system built for enterprise insurance clients. Enables natural language querying over large proprietary document repositories. Reduced end-to-end response latency by 10 seconds and improved answer accuracy by 20% over baseline RAG.",
    tech: ["Python", "LangChain", "GPT-4", "AWS Lambda", "AWS S3", "Vector DB", "BM25", "Cross-Encoder Reranking", "Prompt Engineering", "RAG", "Hybrid Search"],
    category: "Generative AI",
    period: "2024 – 2025",
    company: "DXC Technology",
    role: "AI/ML Engineer → Senior AI/ML Consultant"
  },
  {
    title: "IDP / PII Extraction Pipeline",
    description: "Intelligent Document Processing (IDP) system that automatically detects and extracts Personally Identifiable Information (PII) from both structured (forms/tables) and unstructured (free-text) documents at scale. Built two production-grade IDP pipelines under one unified architecture.",
    tech: ["Python", "Amazon Textract", "AWS S3", "NER", "PII Detection", "Document Processing", "IDP", "JSON", "Pipeline Design"],
    category: "Generative AI",
    period: "2025 – Present",
    company: "DXC Technology",
    role: "Senior AI/ML Consultant"
  },
  {
    title: "Multi-modal RAG Enrichment",
    description: "Extension of the RAG system to handle non-text content inside documents. Graphs, tables, and images embedded in PDFs were described via Claude Haiku vision LLM and embedded alongside text chunks into the same vector database.",
    tech: ["Python", "Claude Haiku", "Vision LLM", "PyMuPDF", "Vector DB", "Embeddings", "Multi-modal RAG", "LangChain", "AWS"],
    category: "Generative AI",
    period: "2024 – 2025",
    company: "DXC Technology",
    role: "AI/ML Engineer"
  },
  {
    title: "Darija Voice Bot + CNN Audio Classifier",
    description: "Voice-activated banking assistant capable of understanding Moroccan Arabic (Darija). Combined a fine-tuned speech recognition model (Wav2Vec2) with a CNN-based intent classifier trained on MFCC audio features. OpenCV was used for spectrogram preprocessing.",
    tech: ["Python", "PyTorch", "CNN", "MFCC", "librosa", "OpenCV", "Meta Wav2Vec2", "Hugging Face Transformers", "Audio Classification", "Darija NLP", "Fine-tuning"],
    category: "NLP",
    period: "2021 – 2023",
    company: "Digital Place",
    role: "Data Scientist / AI & NLP Engineer"
  },
  {
    title: "Darija Conversational Banking Assistant",
    description: "Full conversational banking assistant for Moroccan Arabic (Darija), capable of multi-turn dialogue and executing structured banking actions. Built pre-LLM era using the RASA framework with custom NLU models. Achieved 95% accuracy on French and Arabic transcription.",
    tech: ["Python", "RASA", "NLU", "NER", "spaCy", "NLTK", "Custom NLP", "Darija", "Arabic NLP", "French NLP", "Mobile Integration", "Action Server"],
    category: "Conversational AI",
    period: "2021 – 2023",
    company: "Digital Place",
    role: "Data Scientist / AI & NLP Engineer"
  },
  {
    title: "Job Market Intelligence Platform (Prodige)",
    description: "End-to-end labor market intelligence platform built for a national employment agency. Scraped, processed, classified, and analyzed Moroccan job postings at scale. Processed 500,000+ Moroccan job postings through automated pipelines.",
    tech: ["Python", "Scrapy", "Apache Airflow", "MySQL", "Neo4j", "BERT", "LLaMA", "GPT", "PyTorch", "Hugging Face Transformers", "RNN", "Seq2Seq", "Bayesian Modeling", "PowerBI", "DAX", "Docker", "spaCy", "NLTK"],
    category: "Data Engineering",
    period: "2021 – 2023",
    company: "Digital Place (client: ANAPEC)",
    role: "Data Scientist / ML Engineer"
  },
  {
    title: "Dataiku POC - PRODIGE ANAPEC",
    description: "Proof of Concept built in 2 months on Dataiku DSS. Rapid prototyping platform to validate the core ML pipeline — BERT and RNN-seq2seq skill extraction on multilingual job offer data. Delivered full POC with 10,000+ multi-lingual records.",
    tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Hugging Face Transformers", "BERT", "RNN", "Seq2Seq", "Scrapy", "MySQL", "Kubernetes", "GPU", "Smart Sampling", "Visual Prepare Recipes", "Multi-lingual NLP"],
    category: "Data Science Platform",
    period: "2022 (2-month MVP)",
    company: "Digital Place (client: ANAPEC)",
    role: "ML Engineer / Data Scientist"
  },
  {
    title: "AI-Enhanced Startup Search Engine (Rialto)",
    description: "Improved the Rialto startup discovery platform's search relevance by automatically generating semantic keywords from startup descriptions. Built a generative keyword system using attention-based RNN seq2seq model that creates new relevant terms not present in the original text.",
    tech: ["Python", "PyTorch", "RNN", "Seq2Seq", "Attention Mechanisms", "BERT", "TextRank", "RAKE", "YAKE", "Neo4j", "Scrapy", "Ruby", "Graph Database", "NLP", "Keyword Generation"],
    category: "Generative AI",
    period: "April 2021 – May 2021",
    company: "Digital Place (client: Mind the Bridge)",
    role: "ML Engineer / Data Scientist"
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

                  {/* RAG Insurance AI Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">RAG Insurance AI</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>DXC Technology</strong> | 2024 – 2025<br/><br/>
                      End-to-end RAG system for enterprise insurance clients. Enables natural language querying over large document repositories with hybrid search (dense + sparse) and cross-encoder reranking. Reduced latency by 10 seconds and improved accuracy by 20%.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[0].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* IDP / PII Extraction Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">📄</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">IDP / PII Extraction</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>DXC Technology</strong> | 2025 – Present<br/><br/>
                      Intelligent Document Processing system detecting and extracting PII from structured and unstructured documents at scale. Built two production-grade IDP pipelines with Amazon Textract OCR and rule-based + ML NER layer.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[1].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Multi-modal RAG Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🖼️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Multi-modal RAG</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>DXC Technology</strong> | 2024 – 2025<br/><br/>
                      Extended RAG system to handle non-text content. Graphs, tables, and images described via Claude Haiku vision LLM and embedded alongside text chunks into the same vector database.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[2].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Darija Voice Bot Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🎙️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Darija Voice Bot</h3>
                        <span className="text-sm text-[#64ffda]">NLP</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>Digital Place</strong> | 2021 – 2023<br/><br/>
                      Voice-activated banking assistant for Moroccan Arabic (Darija). Combined fine-tuned Wav2Vec2 ASR with CNN-based intent classifier on MFCC features. OpenCV used for spectrogram preprocessing. Presented at GITEX.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[3].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Darija Conversational Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Darija Assistant</h3>
                        <span className="text-sm text-[#64ffda]">Conversational AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>Digital Place</strong> | 2021 – 2023<br/><br/>
                      Full conversational banking assistant for Moroccan Arabic (Darija). Built pre-LLM era using RASA with custom NLU models. Achieved 95% accuracy on French and Arabic transcription. 10,000+ active users.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[4].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Job Market Intelligence Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Job Market Intelligence</h3>
                        <span className="text-sm text-[#64ffda]">Data Engineering</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>Digital Place (ANAPEC)</strong> | 2021 – 2023<br/><br/>
                      End-to-end labor market platform. Scraped, processed, classified 500,000+ Moroccan job postings via Scrapy + Airflow pipelines. BERT + LLaMA for job classification and skill extraction. PowerBI dashboards for stakeholders.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[5].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
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
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>Digital Place (ANAPEC)</strong> | 2022 (2-month MVP)<br/><br/>
                      Proof of Concept built in 2 months on Dataiku DSS. Validated BERT + RNN-seq2seq pipeline on 10,000+ multi-lingual records. Containerized on Kubernetes with GPU allocation. Application Template for MEA regional rollout.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[6].tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f0f0f0] dark:bg-zinc-700 text-xs rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Rialto Search Engine Page */}
                  <div className="flex flex-col h-full bg-white dark:bg-zinc-800 p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0a192f] dark:text-white">Rialto Startup Search</h3>
                        <span className="text-sm text-[#64ffda]">Generative AI</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-1">
                      <strong>Digital Place (Mind the Bridge)</strong> | Apr – May 2021<br/><br/>
                      AI-enhanced startup discovery platform. Generated semantic keywords from startup descriptions using attention-based RNN seq2seq model. Combined TextRank/RAKE/YAKE baselines with generative approach for improved search relevance.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projects[7].tech.map((t, i) => (
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
                    <p className="text-xs text-[#8892b0] mt-2">{project.company}</p>
                    <p className="text-xs text-[#8892b0]">{project.period}</p>
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
            <Link href="#" className="hover:text-[#64ffda] transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-[#64ffda] transition-colors">LinkedIn</Link>
            <Link href="mailto:omar.nouiri98@gmail.com" className="hover:text-[#64ffda] transition-colors">Email</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
