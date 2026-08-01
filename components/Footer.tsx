"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#22252a] py-8 mt-12 bg-[#0b0c0e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">
            © {new Date().getFullYear()} Tushar Bhardwaj. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://noteboat.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            noteboat.store ↗
          </a>
          <span className="text-xs font-mono text-slate-500">
            Built with Next.js & TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
