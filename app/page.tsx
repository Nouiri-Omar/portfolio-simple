"use client";

import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  { title: "RAG Insurance AI Assistant", company: "DXC Technology", period: "2024 - 2025", role: "AI/ML Engineer -> Senior AI/ML Consultant", category: "Generative AI", summary: "An end-to-end RAG system for enterprise insurance clients. It answers from proprietary documents with grounded retrieval, hybrid search, reranking, and serverless deployment on AWS.", tech: ["Python", "LangChain", "GPT-4", "AWS Lambda", "AWS S3", "RAG", "Hybrid Search"], palette: ["#0f172a", "#1d4ed8", "#7dd3fc"], link: "https://portfolio-simple-ebon.vercel.app/#" },
  { title: "IDP / PII Extraction Pipeline", company: "DXC Technology", period: "2025 - Present", role: "Senior AI/ML Consultant", category: "Document Intelligence", summary: "An intelligent document processing system that detects and extracts personally identifiable information from structured and unstructured documents at scale using OCR, routing, and NER.", tech: ["Python", "Amazon Textract", "AWS S3", "NER", "PII Detection", "Document Processing"], palette: ["#111827", "#374151", "#f59e0b"], link: "https://portfolio-simple-ebon.vercel.app/#" },
  { title: "Multi-modal RAG Enrichment", company: "DXC Technology", period: "2024 - 2025", role: "AI/ML Engineer", category: "Multi-modal AI", summary: "This project extended the RAG pipeline so it could reason over images, charts, and tables inside documents, not only raw text.", tech: ["Python", "Claude Haiku", "Vision LLM", "PyMuPDF", "Vector DB", "Embeddings"], palette: ["#172554", "#3b82f6", "#a78bfa"], link: "https://portfolio-simple-ebon.vercel.app/#" },
  { title: "Darija Voice Bot + CNN Audio Classifier", company: "Digital Place", period: "2021 - 2023", role: "Data Scientist / AI & NLP Engineer", category: "NLP", summary: "A voice-activated banking assistant for Moroccan Arabic, combining automatic speech recognition and a CNN model trained on MFCC audio features.", tech: ["Python", "PyTorch", "CNN", "MFCC", "librosa", "OpenCV", "Wav2Vec2"], palette: ["#1f2937", "#0ea5e9", "#22c55e"] },
  { title: "Darija Conversational Banking Assistant", company: "Digital Place", period: "2021 - 2023", role: "Data Scientist / AI & NLP Engineer", category: "Conversational AI", summary: "A full conversational banking assistant for Darija, built with RASA and custom NLU models to support multi-turn banking flows in Arabic and French.", tech: ["Python", "RASA", "NLU", "NER", "spaCy", "NLTK", "Darija"], palette: ["#1e293b", "#84cc16", "#facc15"] },
  { title: "Job Market Intelligence Platform", company: "Digital Place / ANAPEC", period: "2021 - 2023", role: "Data Scientist / ML Engineer", category: "Data Engineering", summary: "A large-scale labor market intelligence platform that scraped and analyzed hundreds of thousands of jobs to generate forecasts, classifications, and stakeholder dashboards.", tech: ["Python", "Scrapy", "Airflow", "MySQL", "Neo4j", "BERT", "PowerBI"], palette: ["#0f172a", "#f97316", "#facc15"] },
  { title: "Dataiku POC - PRODIGE ANAPEC", company: "Digital Place / ANAPEC", period: "2022, 2-month MVP", role: "ML Engineer / Data Scientist", category: "Data Science Platform", summary: "A rapid proof of concept on Dataiku DSS to validate multilingual skill extraction and labor-market matching on large job-offer data.", tech: ["Dataiku DSS", "Python", "PyTorch", "spaCy", "Transformers", "BERT", "RNN"], palette: ["#0f172a", "#7c3aed", "#a78bfa"], link: "https://portfolio-simple-ebon.vercel.app/#" },
  { title: "AI-Enhanced Startup Search Engine", company: "Digital Place / Mind the Bridge", period: "April 2021 - May 2021", role: "ML Engineer / Data Scientist", category: "Search & Recommendations", summary: "A semantic startup discovery system that generates better search keywords and recommendations using generative NLP and graph-based relationships.", tech: ["Python", "PyTorch", "RNN", "Seq2Seq", "Neo4j", "NLP", "Keyword Generation"], palette: ["#1f2937", "#ef4444", "#fca5a5"] }
];

const totalSpreads = projects.length + 3;

function SocialLinks({ includeEmail = false }: { includeEmail?: boolean }) {
  return <div className="social-links" aria-label="Professional links">
    {includeEmail && <a href="mailto:omar.nouiri98@gmail.com" aria-label="Email Omar Nouiri" title="Email"><FaEnvelope /></a>}
    <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><FaLinkedin /></a>
    <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><FaGithub /></a>
  </div>;
}

function Cover() {
  return <article className="cover-page">
    <div className="cover-seal">{profileImage ? <Image src={profileImage} alt="Omar Nouiri" width={96} height={96} priority /> : "ON"}</div>
    <p className="cover-imprint">Selected work / 2021-2025</p>
    <h1>Omar Nouiri</h1>
    <p className="cover-role">Senior AI/ML Consultant<br />Data Scientist · Full-stack builder<br />Casablanca, Morocco</p>
    <SocialLinks includeEmail />
    <div className="cover-rule" />
    <p className="cover-note">A portfolio in chapters</p>
    <p className="cover-open">Scroll to open the book ↓</p>
  </article>;
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

function BackCover() {
  return <article className="back-cover-page"><p className="cover-imprint">Colophon</p><h2>Let’s build<br />something useful.</h2><div className="back-contact"><a href="mailto:omar.nouiri98@gmail.com">omar.nouiri98@gmail.com</a><a href="tel:+212620217930">+212 6 20 21 79 30</a><span>Casablanca, Morocco</span></div><SocialLinks /><p className="cover-note">Available for AI, product, and data-driven work.</p></article>;
}

function Spread({ index }: { index: number }) {
  if (index === 0) return <Cover />;
  if (index === 1) return <div className="spread"><PrefaceLeft /><PrefaceRight /></div>;
  if (index === totalSpreads - 1) return <div className="spread final-spread"><BackCover /><div className="empty-page" /></div>;
  const project = projects[index - 2];
  return <div className="spread" aria-label={`Project ${index - 1}: ${project.title}`}><ProjectLeft project={project} index={index - 2} /><ProjectRight project={project} index={index - 2} /></div>;
}

function Side({ spreadIndex, side }: { spreadIndex: number; side: "left" | "right" }) {
  if (spreadIndex === 0) return <Cover />;
  if (spreadIndex === 1) return side === "left" ? <PrefaceLeft /> : <PrefaceRight />;
  if (spreadIndex === totalSpreads - 1) return side === "left" ? <BackCover /> : <div className="empty-page" />;
  const project = projects[spreadIndex - 2];
  return side === "left" ? <ProjectLeft project={project} index={spreadIndex - 2} /> : <ProjectRight project={project} index={spreadIndex - 2} />;
}

export default function Home() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [turn, setTurn] = useState<{ target: number; forward: boolean } | null>(null);
  const locked = useRef(false);
  const nextSpread = (step: number) => {
    if (locked.current) return;
    const target = Math.max(0, Math.min(totalSpreads - 1, spreadIndex + step));
    if (target === spreadIndex) return;
    locked.current = true;
    setTurn({ target, forward: step > 0 });
    window.setTimeout(() => { setSpreadIndex(target); setTurn(null); locked.current = false; }, 820);
  };

  useEffect(() => {
    const wheel = (event: WheelEvent) => { event.preventDefault(); if (Math.abs(event.deltaY) > 8) nextSpread(event.deltaY > 0 ? 1 : -1); };
    const key = (event: KeyboardEvent) => { if (["ArrowRight", "ArrowDown", " "].includes(event.key)) { event.preventDefault(); nextSpread(1); } if (["ArrowLeft", "ArrowUp"].includes(event.key)) { event.preventDefault(); nextSpread(-1); } };
    let touchY = 0;
    const touchStart = (event: TouchEvent) => { touchY = event.changedTouches[0].clientY; };
    const touchEnd = (event: TouchEvent) => { const delta = touchY - event.changedTouches[0].clientY; if (Math.abs(delta) > 42) nextSpread(delta > 0 ? 1 : -1); };
    window.addEventListener("wheel", wheel, { passive: false }); window.addEventListener("keydown", key); window.addEventListener("touchstart", touchStart, { passive: true }); window.addEventListener("touchend", touchEnd, { passive: true });
    return () => { window.removeEventListener("wheel", wheel); window.removeEventListener("keydown", key); window.removeEventListener("touchstart", touchStart); window.removeEventListener("touchend", touchEnd); };
  });

  const opening = spreadIndex === 0 && turn?.forward;
  const rightPage = spreadIndex === 0 ? <div className="empty-page" /> : <Side spreadIndex={spreadIndex} side="right" />;
  const underlay = turn ? <Spread index={turn.target} /> : <Spread index={spreadIndex} />;

  return <main className="portfolio-book book-reader"><div className="reader-chrome"><span className="brand-lockup"><span className="brand-mark">ON</span> Omar Nouiri</span><span className="reader-progress">{String(spreadIndex + 1).padStart(2, "0")} / {String(totalSpreads).padStart(2, "0")}</span></div><section className="book-stage" aria-label="Omar Nouiri portfolio book"><div className={`book-object ${spreadIndex === 0 ? "closed-book" : "open-book"}`}><div className="book-underlay">{underlay}</div>{spreadIndex > 0 && <div className="visible-spread"><div className="visible-left"><Side spreadIndex={spreadIndex} side="left" /></div><div className="visible-right">{rightPage}</div></div>}{turn && <AnimatePresence initial={false}><motion.div className={`turning-sheet ${turn.forward ? "turn-forward" : "turn-backward"} ${opening ? "opening-sheet" : ""}`} initial={{ rotateY: 0 }} animate={{ rotateY: turn.forward ? -180 : 180 }} transition={{ duration: 0.82, ease: [0.22, 0.61, 0.36, 1] }}><div className="sheet-face sheet-front">{opening ? <Cover /> : turn.forward ? <Side spreadIndex={spreadIndex} side="right" /> : <Side spreadIndex={spreadIndex} side="left" />}</div><div className="sheet-face sheet-back">{turn.forward ? <Side spreadIndex={turn.target} side="left" /> : <Side spreadIndex={turn.target} side="right" />}</div><div className="sheet-shadow" /></motion.div></AnimatePresence>}<div className="book-spine" /><button className="page-corner page-corner-left" onClick={() => nextSpread(-1)} aria-label="Previous spread">‹</button><button className="page-corner page-corner-right" onClick={() => nextSpread(1)} aria-label="Next spread">›</button></div></section><p className="reader-hint">Scroll or use ← → to turn the pages</p></main>;
}
