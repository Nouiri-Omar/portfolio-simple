"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Project = {
  title: string;
  company: string;
  period: string;
  role: string;
  category: string;
  summary: string;
  tech: string[];
  palette: [string, string, string];
  link?: string;
}

const projects: Project[] = [
  {
    title: "RAG Insurance AI Assistant",
    company: "DXC Technology",
    period: "2024 – 2025",
    role: "AI/ML Engineer → Senior AI/ML Consultant",
    category: "Generative AI",
    summary:
      "An end-to-end RAG system for enterprise insurance clients. It answers from proprietary documents with grounded retrieval, hybrid search, reranking, and serverless deployment on AWS.",
    tech: ["Python", "LangChain", "GPT-4", "AWS Lambda", "AWS S3", "RAG", "Hybrid Search"],
    palette: ["#0f172a", "#1d4ed8", "#7dd3fc"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "IDP / PII Extraction Pipeline",
    company: "DXC Technology",
    period: "2025 – Present",
    role: "Senior AI/ML Consultant",
    category: "Document Intelligence",
    summary:
      "An intelligent document processing system that detects and extracts personally identifiable information from structured and unstructured documents at scale using OCR, routing, and NER.",
    tech: ["Python", "Amazon Textract", "AWS S3", "NER", "PII Detection", "Document Processing"],
    palette: ["#111827", "#374151", "#f59e0b"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "Multi-modal RAG Enrichment",
    company: "DXC Technology",
    period: "2024 – 2025",
    role: "AI/ML Engineer",
    category: "Multi-modal AI",
    summary:
      "This project extended the RAG pipeline so it could reason over images, charts, and tables inside documents, not only raw text.",
    tech: ["Python", "Claude Haiku", "Vision LLM", "PyMuPDF", "Vector DB", "Embeddings"],
    palette: ["#172554", "#3b82f6", "#a78bfa"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "Darija Voice Bot + CNN Audio Classifier",
    company: "Digital Place",
    period: "2021 – 2023",
    role: "Data Scientist / AI & NLP Engineer",
    category: "NLP",
    summary:
      "A voice-activated banking assistant for Moroccan Arabic, combining automatic speech recognition and a CNN model trained on MFCC audio features.",
    tech: ["Python", "PyTorch", "CNN", "MFCC", "librosa", "OpenCV", "Wav2Vec2"],
    palette: ["#1f2937", "#0ea5e9", "#22c55e"],
    link: "",
  },
  {
    title: "Darija Conversational Banking Assistant",
    company: "Digital Place",
    period: "2021 – 2023",
    role: "Data Scientist / AI & NLP Engineer",
    category: "Conversational AI",
    summary:
      "A full conversational banking assistant for Darija, built with RASA and custom NLU models to support multi-turn banking flows in Arabic and French.",
    tech: ["Python", "RASA", "NLU", "NER", "spaCy", "NLTK", "Darija"],
    palette: ["#1e293b", "#84cc16", "#facc15"],
    link: "",
  },
  {
    title: "Job Market Intelligence Platform",
    company: "Digital Place / ANAPEC",
    period: "2021 – 2023",
    role: "Data Scientist / ML Engineer",
    category: "Data Engineering",
    summary:
      "A large-scale labor market intelligence platform that scraped and analyzed hundreds of thousands of jobs to generate forecasts, classifications, and stakeholder dashboards.",
    tech: ["Python", "Scrapy", "Airflow", "MySQL", "Neo4j", "BERT", "PowerBI"],
    palette: ["#0f172a", "#f97316", "#facc15"],
    link: "",
  },
  {
    title: "Dataiku POC — PRODIGE ANAPEC",
    company: "Digital Place / ANAPEC",
    period: "2022 (2-month MVP)",
    role: "ML Engineer / Data Scientist",
    category: "Data Science Platform",
    summary:
      "A rapid proof of concept on Dataiku DSS to validate multilingual skill extraction and labor-market matching on large job-offer data.",
    tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Transformers", "BERT", "RNN"],
    palette: ["#0f172a", "#7c3aed", "#a78bfa"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "AI-Enhanced Startup Search Engine",
    company: "Digital Place / Mind the Bridge",
    period: "April 2021 – May 2021",
    role: "ML Engineer / Data Scientist",
    category: "Search & Recommendations",
    summary:
      "A semantic startup discovery system that generates better search keywords and recommendations using generative NLP and graph-based relationships.",
    tech: ["Python", "PyTorch", "RNN", "Seq2Seq", "Neo4j", "NLP", "Keyword Generation"],
    palette: ["#1f2937", "#ef4444", "#fca5a5"],
    link: "",
  },
];

function ProjectPage({ project, index }: { project: Project; index: number }) {
  const pageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start 90%", "end 10%"],
  });
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    [index % 2 ? 3 : -3, 0, index % 2 ? -3 : 3],
  );
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -12]);

  return (
    <motion.article
      ref={pageRef}
      className="book-page"
      style={{ rotateY, y: translateY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <div className="page-number">{String(index + 1).padStart(2, "0")}</div>
      <div
        className="page-visual"
        style={{
          background: `linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[1]} 52%, ${project.palette[2]} 100%)`,
        }}
      >
        <div className="visual-glow" />
        <div className="visual-content">
          <span className="visual-tag">{project.category}</span>
          <h3>{project.title}</h3>
          <div className="visual-meta">
            <span>{project.company}</span>
            <span>{project.period}</span>
          </div>
        </div>
      </div>

      <div className="page-copy">
        <div className="page-topline">
          <span className="role-pill">{project.role}</span>
        </div>
        <p className="summary">{project.summary}</p>
        <div className="chip-row">
          {project.tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="action primary">
              Open project
            </a>
          ) : (
            <span className="action muted">Project link pending</span>
          )}
          <span className="action muted">Media preview pending</span>
        </div>
        <div className="video-placeholder">
          <span>Project media placeholder</span>
          <small>Image or walkthrough video can live here</small>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const coverStats = ["5+ years", "AI/ML", "MLOps", "NLP"];

  return (
    <main className="portfolio-book">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">ON</span>
          <span>Omar Nouiri</span>
        </div>
        <nav className="topbar-links">
          <a href="#book">Book</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="cover-section" id="about">
        <div className="book-closed">
          <div className="book-spine" />
          <div className="book-cover">
            <div className="cover-left">
              <div className="profile-badge">
                <span>ON</span>
              </div>

              <p className="eyebrow">AI / ML / PRODUCT / NLP</p>
              <h1>Omar Nouiri</h1>
              <p className="subtitle">
                Senior AI/ML Consultant • Data Scientist • Full-stack builder
              </p>

              <div className="stats-row">
                {coverStats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
            </div>

            <div className="cover-right">
              <div className="cover-card">
                <span className="mini-label">Experience</span>
                <strong>5+ Years</strong>
                <p>
                  Building production AI systems, intelligent document workflows,
                  GenAI products, and NLP applications for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-section" id="book">
        <div className="section-heading">
          <p>Portfolio Chapters</p>
          <h2>Selected Work</h2>
        </div>

        <div className="book-stack">
          {projects.map((project, index) => (
            <ProjectPage key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <p className="eyebrow">Let’s build something meaningful</p>
          <h2>Available for AI, product, and data-driven work.</h2>
          <div className="contact-links">
            <a href="mailto:omar.nouiri98@gmail.com">omar.nouiri98@gmail.com</a>
            <a href="tel:+212620217930">+212 6 20 21 79 30</a>
          </div>
        </div>
      </section>
    </main>
  );
}
