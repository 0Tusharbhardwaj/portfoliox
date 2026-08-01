"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full py-3 sm:py-4 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between px-5 sm:px-6 py-3 rounded-xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#0b0c0e]/90 backdrop-blur-xl border-[#22252a] shadow-xl shadow-black/50"
              : "bg-[#14161a]/85 backdrop-blur-lg border-[#22252a]"
          }`}
        >
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs group-hover:bg-white/20 transition-all">
              TB
            </div>
            <span className="text-white font-bold tracking-tight text-base sm:text-lg group-hover:text-slate-300 transition-colors">
              Tushar Bhardwaj
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#1a1d22] p-1.5 rounded-lg border border-[#2c3038]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                    active
                      ? "bg-white text-[#0b0c0e] font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-1.5 px-4 text-xs font-mono flex items-center gap-1.5"
            >
              <FileText size={13} className="text-slate-300" />
              <span>Resume</span>
              <ArrowUpRight size={12} className="text-slate-500" />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-slate-300 p-2 rounded-lg bg-[#1a1d22] border border-[#2c3038]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="p-4 rounded-xl bg-[#14161a] border border-[#22252a] space-y-1.5 shadow-2xl">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-xs font-mono font-medium ${
                    active
                      ? "bg-white text-[#0b0c0e] font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid w-full mt-3 py-2.5 text-xs font-mono justify-center"
            >
              <FileText size={14} /> Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
