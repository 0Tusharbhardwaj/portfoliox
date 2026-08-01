import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Bhardwaj — Software Engineer & AI Systems",
  description:
    "Computer Science (AI) student at KIET Group of Institutions. Founder of Noteboat serving 30,000+ students. Former intern at Nxtra by Airtel building enterprise network intelligence platforms. Full-stack engineer focused on AI, infrastructure, and large-scale systems.",
  keywords: [
    "Tushar Bhardwaj",
    "Software Engineer",
    "AI Systems",
    "Full Stack Developer",
    "Noteboat",
    "KIET",
    "Network Automation",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Tushar Bhardwaj" }],
  openGraph: {
    title: "Tushar Bhardwaj — Software Engineer & AI Systems",
    description:
      "Founder of Noteboat (30,000+ students). Building AI-powered infrastructure, full-stack products, and enterprise software.",
    url: "https://tushar.noteboat.store",
    siteName: "Tushar Bhardwaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Bhardwaj — Software Engineer",
    description: "Founder of Noteboat. CS (AI) student. Building at the intersection of AI and infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
