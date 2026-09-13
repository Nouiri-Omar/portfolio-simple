"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  image?: string;
  video?: string;
};

const profileImage = "";
const linkedinUrl = "https://www.linkedin.com/in/omar-nouiri/";
const githubUrl = "https://github.com/Nouiri-Omar";

const projects: Project[] = [
  {
    title: "RAG Insurance AI Assistant",
    company: "DXC Technology",
    period: "2024 - 2025",
    role: "AI/ML Engineer -> Senior AI/ML Consultant",
    category: "Generative AI",
    summary: "An end-to-end RAG system for enterprise insurance clients. It answers from proprietary documents with grounded retrieval, hybrid search, reranking, and serverless deployment on AWS.",
    tech: ["Python", "LangChain", "GPT-4", "AWS Lambda", "AWS S3", "RAG", "Hybrid Search"],
    palette: ["#0f172a", "#1d4ed8", "#7dd3fc"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "IDP / PII Extraction Pipeline",
    company: "DXC Technology",
    period: "2025 - Present",
    role: "Senior AI/ML Consultant",
    category: "Document Intelligence",
    summary: "An intelligent document processing system that detects and extracts personally identifiable information from structured and unstructured documents at scale using OCR, routing, and NER.",
    tech: ["Python", "Amazon Textract", "AWS S3", "NER", "PII Detection", "Document Processing"],
    palette: ["#111827", "#374151", "#f59e0b"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "Multi-modal RAG Enrichment",
    company: "DXC Technology",
    period: "2024 - 2025",
    role: "AI/ML Engineer",
    category: "Multi-modal AI",
    summary: "This project extended the RAG pipeline so it could reason over images, charts, and tables inside documents, not only raw text.",
    tech: ["Python", "Claude Haiku", "Vision LLM", "PyMuPDF", "Vector DB", "Embeddings"],
    palette: ["#172554", "#3b82f6", "#a78bfa"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "Darija Voice Bot + CNN Audio Classifier",
    company: "Digital Place",
    period: "2021 - 2023",
    role: "Data Scientist / AI & NLP Engineer",
    category: "NLP",
    summary: "A voice-activated banking assistant for Moroccan Arabic, combining automatic speech recognition and a CNN model trained on MFCC audio features.",
    tech: ["Python", "PyTorch", "CNN", "MFCC", "librosa", "OpenCV", "Wav2Vec2"],
    palette: ["#1f2937", "#0ea5e9", "#22c55e"],
  },
  {
    title: "Darija Conversational Banking Assistant",
    company: "Digital Place",
    period: "2021 - 2023",
    role: "Data Scientist / AI & NLP Engineer",
    category: "Conversational AI",
    summary: "A full conversational banking assistant for Darija, built with RASA and custom NLU models to support multi-turn banking flows in Arabic and French.",
    tech: ["Python", "RASA", "NLU", "NER", "spaCy", "NLTK", "Darija"],
    palette: ["#1e293b", "#84cc16", "#facc15"],
  },
  {
    title: "Job Market Intelligence Platform",
    company: "Digital Place / ANAPEC",
    period: "2021 - 2023",
    role: "Data Scientist / ML Engineer",
    category: "Data Engineering",
    summary: "A large-scale labor market intelligence platform that scraped and analyzed hundreds of thousands of jobs to generate forecasts, classifications, and stakeholder dashboards.",
    tech: ["Python", "Scrapy", "Airflow", "MySQL", "Neo4j", "BERT", "PowerBI"],
    palette: ["#0f172a", "#f97316", "#facc15"],
  },
  {
    title: "Dataiku POC - PRODIGE ANAPEC",
    company: "Digital Place / ANAPEC",
    period: "2022, 2-month MVP",
    role: "ML Engineer / Data Scientist",
    category: "Data Science Platform",
    summary: "A rapid proof of concept on Dataiku DSS to validate multilingual skill extraction and labor-market matching on large job-offer data.",
    tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Transformers", "BERT", "RNN"],
    palette: ["#0f172a", "#7c3aed", "#a78bfa"],
    link: "https://portfolio-simple-ebon.vercel.app/#",
  },
  {
    title: "AI-Enhanced Startup Search Engine",
    company: "Digital Place / Mind the Bridge",
    period: "April 2021 - May 2021",
    role: "ML Engineer / Data Scientist",
    category: "Search & Recommendations",
    summary: "A semantic startup discovery system that generates better search keywords and recommendations using generative NLP and graph-based relationships.",
    tech: ["Python", "PyTorch", "RNN", "Seq2Seq", "Neo4j", "NLP", "Keyword Generation"],
    palette: ["#1f2937", "#ef4444", "#fca5a5"],
  },
];

function CoverPage() {
  return <article className="cover-page"><div className="cover-seal">{profileImage ? <Image src={profileImage} alt="Omar Nouiri" width={96} height={96} priority /> : "ON"}</div><p className="cover-imprint">Selected work / 2021-2025</p><h1>Omar Nouiri</h1><p className="cover-role">Senior AI/ML Consultant<br />Data Scientist · Full-stack builder<br />Casablanca, Morocco</p><SocialLinks includeEmail /><div className="cover-rule" /><p className="cover-note">A portfolio in chapters</p><p className="cover-open">Scroll to open the book ↓</p></article>;
}

function SocialLinks({ includeEmail = false }: { includeEmail?: boolean }) {
  return <div className="social-links" aria-label="Professional links">{includeEmail && <a href="mailto:omar.nouiri98@gmail.com" aria-label="Email Omar Nouiri" title="Email"><FaEnvelope /></a>}<a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><FaLinkedin /></a><a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><FaGithub /></a></div>;
}

function PrefaceLeft() {
  return <article className="spread-page spread-copy"><div className="page-number">01</div><p className="spread-kicker">Preface</p><h2>Building useful intelligence.</h2><p className="summary">This book gathers selected work across generative AI, document intelligence, NLP, data engineering, and product delivery. Each chapter follows a problem from its first question to a system people can use.</p><p className="preface-signoff">Omar Nouiri<br /><span>Casablanca, Morocco</span></p></article>;
}

function PrefaceRight() {
  return <article className="spread-page preface-note"><div className="page-number">02</div><span className="preface-mark">✦</span><p>AI / ML / PRODUCT / NLP</p><small>Turn the page to explore the work.</small></article>;
}

function ProjectLeft({ project, index }: { project: Project; index: number }) {
  return <article className="spread-page spread-copy"><div className="page-number">{String(index * 2 + 3).padStart(2, "0")}</div><div className="page-topline"><span className="role-pill">{project.role}</span></div><p className="spread-kicker">{project.category} / {project.period}</p><h2>{project.title}</h2><p className="summary">{project.summary}</p><div className="chip-row">{project.tech.map((item) => <span key={item} className="chip">{item}</span>)}</div><div className="spread-footer">{project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="footnote-link">View live project ↗</a> : <span className="footnote-link muted-text">Live link pending</span>}<span className="spread-company">{project.company}</span></div></article>;
}

function ProjectRight({ project, index }: { project: Project; index: number }) {
  return <article className="spread-page spread-media"><div className="page-number">{String(index * 2 + 4).padStart(2, "0")}</div>{project.image ? <Image className="media-image" src={project.image} alt={`${project.title} project preview`} width={800} height={600} /> : <div className="media-plate" style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]} 55%, ${project.palette[2]})` }}><div className="plate-frame"><span>{project.category}</span><strong>Project illustration</strong><small>Add an image path in the project data to show a screenshot here.</small></div></div>}{project.video ? <a className="video-banner" href={project.video} target="_blank" rel="noreferrer"><span className="video-play">▶</span><span>Open project walkthrough</span></a> : <div className="video-banner video-pending"><span>Video walkthrough pending</span></div>}<div className="media-caption"><span>Plate {String(index + 1).padStart(2, "0")}</span><span>Image / video insert</span></div></article>;
}

function ProjectSpread({ project, index }: { project: Project; index: number }) {
  return <div className="spread" aria-label={`Project ${index + 1}: ${project.title}`}><ProjectLeft project={project} index={index} /><ProjectRight project={project} index={index} /></div>;
}

function PageContent({ page }: { page: number }) {
  if (page === 0) return <CoverPage />;
  if (page === 1) return <div className="spread"><PrefaceLeft /><PrefaceRight /></div>;
  if (page === projects.length + 2) return <div className="single-page-layout"><BackCoverPage /><div className="empty-page" /></div>;
  const projectIndex = page - 2;
  return <ProjectSpread project={projects[projectIndex]} index={projectIndex} />;
}

function PageFace({ page, side }: { page: number; side: "left" | "right" }) {
  if (page === 0) return <PageContent page={page} />;
  if (page === projects.length + 2) return side === "left" ? <BackCoverPage /> : <div className="empty-page" />;
  if (page === 1) return side === "left" ? <PrefaceLeft /> : <PrefaceRight />;
  const projectIndex = page - 2;
  return side === "left" ? <ProjectLeft project={projects[projectIndex]} index={projectIndex} /> : <ProjectRight project={projects[projectIndex]} index={projectIndex} />;
}

function BackCoverPage() {
  return <article className="back-cover-page"><p className="cover-imprint">Colophon</p><h2>Let’s build<br />something useful.</h2><div className="back-contact"><a href="mailto:omar.nouiri98@gmail.com">omar.nouiri98@gmail.com</a><a href="tel:+212620217930">+212 6 20 21 79 30</a><span>Casablanca, Morocco</span></div><SocialLinks /><p className="cover-note">Available for AI, product, and data-driven work.</p></article>;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [turningPage, setTurningPage] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const totalPages = projects.length + 3;
  const turnPage = (step: number) => {
    if (turningPage !== null) return;
    const next = Math.max(0, Math.min(totalPages - 1, currentPage + step));
    if (next === currentPage) return;
    setDirection(step > 0 ? 1 : -1);
    setTurningPage(next);
    window.setTimeout(() => {
      setCurrentPage(next);
      setTurningPage(null);
    }, 920);
  };

  useEffect(() => {
    let locked = false;
    let touchStartY = 0;
    const onWheel = (event: WheelEvent) => { event.preventDefault(); if (locked || Math.abs(event.deltaY) < 8) return; locked = true; turnPage(event.deltaY > 0 ? 1 : -1); window.setTimeout(() => { locked = false; }, 960); };
    const onKeyDown = (event: KeyboardEvent) => { if (["ArrowRight", "ArrowDown", " "].includes(event.key)) { event.preventDefault(); turnPage(1); } if (["ArrowLeft", "ArrowUp"].includes(event.key)) { event.preventDefault(); turnPage(-1); } };
    const onTouchStart = (event: TouchEvent) => { touchStartY = event.changedTouches[0].clientY; };
    const onTouchEnd = (event: TouchEvent) => { const delta = touchStartY - event.changedTouches[0].clientY; if (Math.abs(delta) > 42) turnPage(delta > 0 ? 1 : -1); };
    window.addEventListener("wheel", onWheel, { passive: false }); window.addEventListener("keydown", onKeyDown); window.addEventListener("touchstart", onTouchStart, { passive: true }); window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => { window.removeEventListener("wheel", onWheel); window.removeEventListener("keydown", onKeyDown); window.removeEventListener("touchstart", onTouchStart); window.removeEventListener("touchend", onTouchEnd); };
  });

  const isOpening = currentPage === 0 && turningPage !== null;
  const visibleSpread = currentPage > 0 ? <div className="visible-spread"><div className="visible-page">{PageFace({ page: currentPage, side: "left" })}</div><div className="visible-page">{PageFace({ page: currentPage, side: "right" })}</div></div> : null;
  return <main className="portfolio-book book-reader"><div className="reader-chrome"><span className="brand-lockup"><span className="brand-mark">ON</span> Omar Nouiri</span><span className="reader-progress">{String(currentPage + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span></div><section className="book-stage" aria-label="Omar Nouiri portfolio book"><div className={`book-object ${currentPage === 0 ? "closed-book" : "open-book"} ${isOpening ? "opening-book" : ""}`}><div className="book-underlay"><PageContent page={turningPage ?? currentPage} /></div>{visibleSpread}{turningPage !== null && <AnimatePresence initial={false}>{isOpening ? <motion.div className="opening-sheet" initial={{ rotateY: 0 }} animate={{ rotateY: -180 }} transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}><div className="sheet-face sheet-front"><CoverPage /></div><div className="sheet-face sheet-back"><PrefaceLeft /></div><div className="sheet-shadow" /></motion.div> : <motion.div className={`turning-sheet ${direction > 0 ? "turn-forward" : "turn-backward"}`} initial={{ rotateY: 0 }} animate={{ rotateY: direction > 0 ? -180 : 180 }} transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}><div className="sheet-face sheet-front">{direction > 0 ? <PageFace page={currentPage} side="right" /> : <PageFace page={currentPage} side="left" />}</div><div className="sheet-face sheet-back">{direction > 0 ? <PageFace page={turningPage} side="left" /> : <PageFace page={turningPage} side="right" />}</div><div className="sheet-shadow" /></motion.div>}</AnimatePresence>}<div className="book-spine" /><button className="page-corner page-corner-left" onClick={() => turnPage(-1)} aria-label="Previous page">‹</button><button className="page-corner page-corner-right" onClick={() => turnPage(1)} aria-label="Next page">›</button></div></section><p className="reader-hint">Scroll or use ← → to turn the pages</p></main>;
}
