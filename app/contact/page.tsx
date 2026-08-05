"use client";
import { Send, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#f3f4f6]">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <section className="border-t border-[#333333] bg-[#0a0a0a] py-16" id="contact">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[#111111] border border-[#333333] rounded-md overflow-hidden shadow-2xl">
              {/* Terminal Header Bar */}
              <div className="bg-[#1a1a1a] border-b border-[#333333] px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-[#9ca3af]">terminal - bash</div>
              </div>

              {/* Terminal Content */}
              <div className="p-10 text-center flex flex-col items-center">
                <Lock className="text-[#FFD700] mb-6 w-12 h-12" />

                <h1 className="text-3xl font-bold text-white mb-4 tracking-wide">ESTABLISH CONNECTION</h1>
                <p className="text-[#9ca3af] mb-8 max-w-md mx-auto">
                  Currently open for new engineering challenges. Whether you have a question or just want to say hi, my inbox is open.
                </p>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText("tbhardwaj.dev@gmail.com");
                    window.location.href = "mailto:tbhardwaj.dev@gmail.com";
                  }}
                  type="button"
                  className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-8 py-3 font-semibold flex items-center justify-center gap-2 transition-all rounded-sm font-mono inline-flex shadow-sm cursor-pointer active:scale-95"
                >
                  Transmit Message
                  <Send size={18} />
                </button>

                <div className="mt-12 flex items-center justify-center gap-6 text-[#9ca3af] font-mono text-sm w-full">
                  <div className="flex items-center gap-4 w-full max-w-xs">
                    <div className="h-px bg-[#333333] flex-1"></div>
                    <span className="text-xs">OR PING ME VIA</span>
                    <div className="h-px bg-[#333333] flex-1"></div>
                  </div>
                </div>

                <div className="mt-6 flex gap-6">
                  <a
                    href="https://github.com/0Tusharbhardwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
                  >
                    <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tushar0bhrardwaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
                  >
                    <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
