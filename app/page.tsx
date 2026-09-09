import Link from "next/link";

const projects = [
  {
    title: "Value Lab MVP",
    description: "Advanced data analytics and visualization platform for portfolio management",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Care Intent MVP",
    description: "Healthcare communication platform for patient engagement",
    tech: ["React", "Node.js", "API Integration"],
    link: "#"
  },
  {
    title: "Ops Copilot MVP",
    description: "Operational assistant with AI-powered insights and automation",
    tech: ["AI/ML", "Python", "Docker", "Kubernetes"],
    link: "#"
  },
  {
    title: "Doc Factory MVP",
    description: "Document generation and processing pipeline",
    tech: ["Node.js", "PDF Generation", "Cloud Services"],
    link: "#"
  },
  {
    title: "Portfolio System",
    description: "Comprehensive portfolio management system with multiple MVPs",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://portfolio-system.vercel.app"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Omar Nouiri
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Developer & Creator of Portfolio System
          </p>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Building innovative solutions across multiple domains including data analytics, healthcare, operations, and document processing.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    View Project →
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">Next.js</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">TypeScript</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">React</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">Python</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">FastAPI</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">PostgreSQL</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">Docker</span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">Vercel</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Omar Nouiri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
