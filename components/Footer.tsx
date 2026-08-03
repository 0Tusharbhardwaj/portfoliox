"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#111111] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-lg tracking-wider text-white font-mono">
          TUSHAR_BHARDWAJ
        </div>
        <p className="text-[#9ca3af] text-sm font-mono text-center md:text-left">
          © {new Date().getFullYear()} Engineering Professional. Built for precision.
        </p>
        <div className="flex items-center space-x-6 text-sm font-mono text-[#9ca3af]">
          <a
            href="https://github.com/0Tusharbhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tushar0bhrardwaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@tusharbhardwaj.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

