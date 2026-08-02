import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tushar.noteboat.store"),
  title: {
    default: "Tushar Bhardwaj — Software & Systems Engineer",
    template: "%s | Tushar Bhardwaj",
  },
  description:
    "Software & Systems Engineer. Building scalable platforms, network intelligence, and full-stack applications. Founder of Noteboat.",
  keywords: [
    "Tushar Bhardwaj",
    "Software Engineer",
    "Systems Engineer",
    "Next.js Developer",
    "TypeScript",
    "FastAPI",
    "Network Automation",
    "Noteboat",
    "KIET Group of Institutions",
  ],
  authors: [{ name: "Tushar Bhardwaj", url: "https://tushar.noteboat.store" }],
  creator: "Tushar Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tushar.noteboat.store",
    title: "Tushar Bhardwaj — Software & Systems Engineer",
    description:
      "Software & Systems Engineer building scalable platforms and network intelligence. Founder of Noteboat.",
    siteName: "Tushar Bhardwaj Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Tushar Bhardwaj — Project Intern @ Airtel Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Bhardwaj — Software & Systems Engineer",
    description:
      "Software & Systems Engineer building scalable platforms and network intelligence. Founder of Noteboat.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#0b0c0e] text-[#f8fafc] min-h-screen flex flex-col font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
