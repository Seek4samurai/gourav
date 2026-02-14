import {
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Minus,
  Power,
  ScrollText,
  X,
} from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import cat from "./md/cat.md?raw";

const Portfolio = () => {
  const [view, setView] = useState("home");
  const [activeDoc, setActiveDoc] = useState(null);

  const projects = [
    {
      id: "01",
      title: "WebGL 1 million point renderer",
      desc: "🛠️Rendering 1M+ points with GPU acceleration (WebGL) and more of a high-performance visualization engine than a web app.",
      status: "Active",
      link: "https://github.com/Seek4samurai/project-giga-cat",
    },
    {
      id: "02",
      title: "project-giga-cat",
      desc: "🚀Cat game with MetaMask authentication for web3. Made out of Next.js & Moralis. (Redis Hackathon - Runner Up Winner)",
      status: "Active",
      link: "https://github.com/Seek4samurai/render-1-million-pts",
    },
    {
      id: "03",
      title: "Medusa-NextJs-StoreFront",
      desc: "💻Freelance work, also a hackathon submission within Medusa.js. (Medusa.js Hackathon Winner)",
      status: "Active",
      link: "https://github.com/Seek4samurai/Medusa-NextJs-StoreFront",
    },
  ];

  const documents = [
    {
      id: "doc_01",
      name: "How I rendered 1 million points on browser using GPU",
      category: "Technical",
      date: "Feb 14, 2026",
      content:
        "## Deployment Protocol\n\nStandard operating procedures for rolling updates and rollback strategies.",
    },
    {
      id: "doc_02",
      name: "Running Nyan cat game using Moralis & MetaMask",
      category: "Technical",
      date: "Jan 10, 2026",
      content: cat,
    },
  ];

  const openDocument = async (doc) => {
    try {
      // If doc.content looks like a URL (starts with /static or http), fetch it
      if (
        doc.content.includes("/static/media/") ||
        doc.content.endsWith(".md")
      ) {
        const response = await fetch(doc.content);
        const text = await response.text();

        // Create a copy of the doc with the actual text content
        setActiveDoc({ ...doc, content: text });
      } else {
        setActiveDoc(doc);
      }

      setView("blog");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error loading markdown:", error);
      setActiveDoc({ ...doc, content: "Error: Could not load file content." });
      setView("blog");
    }
  };

  // Apple System Font Stack
  const appleFont = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  if (view === "home") {
    return (
      <div
        style={appleFont}
        className="min-h-screen bg-[#2e2e2b] text-[#bdbe00] flex flex-col items-center pt-4 selection:bg-[#bdbe00] selection:text-black"
      >
        {/* Main Terminal Window */}
        <div className="w-full max-w-5xl border-2 border-[#5a5a54] bg-[#3a3a36] flex flex-col shadow-[12px_12px_0px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Top Bar */}
          <div className="bg-[#4d4d48] border-b-2 border-[#5a5a54] p-2 flex justify-between items-center px-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Console
            </span>
            <div className="flex items-center gap-3 text-white/50">
              <Minus size={16} className="cursor-pointer hover:text-white" />
              <X size={16} className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            {/* 1. Identity Section */}
            <header className="border-l-4 border-[#bdbe00] pl-5 py-1">
              <h1 className="text-3xl text-white">Gourav Singh Rawat</h1>
              <p className="text-sm font-semibold text-white mt-1 tracking-wide">
                AI Engineer | Software Engineer
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#bdbe00] max-w-4xl font-medium">
                AI engineer living at the intersection of code and compute. I
                build with Python and turn research-grade models into production
                systems. I deploy workflows on GPUs, optimize inference
                pipelines, and make machine learning models behave outside the
                notebook.
              </p>
            </header>

            {/* 2. Projects Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2 bg-[#4d4d48] px-3 py-1 border border-[#5a5a54] w-fit">
                <Cpu size={14} className="text-white" />
                <span className="text-[12px] font-semibold tracking-wide text-white">
                  Projects I've worked on
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 border border-[#5a5a54] bg-[#2e2e2b] flex flex-col sm:flex-row justify-between sm:items-center group hover:border-[#bdbe00] transition-colors"
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[16px] font-bold text-white">
                          {p.title}
                        </span>
                        <span className="text-[10px] px-1.5 border border-[#5a5a54] text-[#8a8a81] uppercase">
                          {p.status}
                        </span>
                      </div>
                      <p className="text-[14px] text-[#8a8a81] mt-1 leading-snug">
                        {p.desc}
                      </p>
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 sm:mt-0 text-[12px] font-bold bg-[#3a3a36] px-3 py-1.5 border border-[#5a5a54] group-hover:bg-[#bdbe00] group-hover:text-black transition-all inline-flex items-center gap-2 w-fit"
                    >
                      SOURCE <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Blogs/Documents Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2 bg-[#4d4d48] px-3 py-1 border border-[#5a5a54] w-fit">
                <ScrollText size={14} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Documents
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {documents.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => openDocument(doc)}
                    className="w-full text-left p-4 border border-[#5a5a54] bg-[#3a3a36] hover:bg-[#bdbe00] hover:text-black transition-all group flex justify-between items-center"
                  >
                    <div>
                      <p className="text-[16px] font-bold group-hover:text-black">
                        {doc.name}
                      </p>
                      <div className="flex gap-3 text-[11px] font-semibold opacity-60 uppercase mt-0.5">
                        <span>{doc.date}</span>
                        <span>::</span>
                        <span>{doc.category}</span>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold group-hover:translate-x-1 transition-transform">
                      &gt; OPEN
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* 4. Footer & Socials */}
            <footer className="pt-8 border-t border-[#5a5a54] flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-2">
                {[
                  {
                    icon: <Github size={18} />,
                    label: "GitHub",
                    link: "https://github.com/seek4samurai/",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/seek4samurai/",
                  },
                  {
                    icon: <Mail size={18} />,
                    label: "Email",
                    link: "mailto:grvrawat999@gmail.com",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border border-[#5a5a54] bg-[#3a3a36] hover:bg-[#bdbe00] hover:text-black font-bold text-[12px] transition-all"
                  >
                    {social.icon} {social.label}
                  </a>
                ))}
              </div>
              <button className="flex items-center gap-2 text-[11px] font-bold bg-red-900/20 text-red-200 px-4 py-2 border border-red-900/40 hover:bg-red-700 hover:text-white transition-all">
                <Power size={16} /> SHUTDOWN
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }

  // --- BLOG VIEW ---
  return (
    <div
      style={appleFont}
      className="min-h-screen bg-[#1a1a18] text-[#bdbe00] p-6 md:p-12 overflow-y-auto selection:bg-[#bdbe00] selection:text-black"
    >
      <div className="max-w-5xl mx-auto space-y-4">
        <button
          onClick={() => setView("home")}
          className="text-[12px] font-bold uppercase bg-[#3a3a36] px-4 py-2 border border-[#5a5a54] hover:bg-[#bdbe00] hover:text-black transition-all"
        >
          &lt; MENU
        </button>

        <article className="border-2 border-[#bdbe00] bg-[#2e2e2b] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="bg-[#bdbe00] text-black px-4 py-1.5 text-[11px] font-bold uppercase flex justify-between">
            <span>Viewing_Document: {activeDoc.name}</span>
            <X
              size={18}
              className="cursor-pointer"
              onClick={() => setView("home")}
            />
          </div>
          <div className="p-8 md:p-12">
            <header className="border-b border-[#5a5a54] pb-6 mb-8">
              <h1 className="text-4xl font-bold text-white tracking-tight leading-none">
                {activeDoc.name}
              </h1>
              <p className="text-[12px] text-[#8a8a81] mt-3 font-semibold uppercase tracking-widest">
                {activeDoc.date}
              </p>
            </header>
            <div className="text-[16px] leading-relaxed text-white whitespace-pre-wrap">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  // This ensures your headers and lists match the CS 1.6 theme
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-2xl font-bold text-white mt-4 mb-2"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-xl font-bold text-white mt-4 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc ml-6 mb-4" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="bg-black/30 px-1 rounded text-white"
                      {...props}
                    />
                  ),
                }}
              >
                {activeDoc.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
