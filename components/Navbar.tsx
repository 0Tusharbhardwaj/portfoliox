"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-wider text-white hover:text-[#FFD700] transition-colors font-mono"
        >
          TUSHAR_BHARDWAJ
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium font-mono text-[#9ca3af]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors pb-1 ${
                  active
                    ? "text-[#FFD700] border-b-2 border-[#FFD700]"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFD700] text-[#0a0a0a] hover:bg-yellow-400 px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all rounded-sm font-mono shadow-sm"
        >
          <Download size={16} />
          Resume
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#f3f4f6] p-2 rounded-sm bg-[#1a1a1a] border border-[#333333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#333333] px-6 py-4 space-y-3 font-mono text-sm">
          <Link
            href="/"
            className={`block py-1 ${pathname === "/" ? "text-[#FFD700]" : "text-[#9ca3af]"}`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-1 ${pathname === link.href ? "text-[#FFD700]" : "text-[#9ca3af]"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
