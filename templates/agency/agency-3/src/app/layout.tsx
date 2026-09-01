import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AXIOM — Creative Agency",
  description:
    "Axiom is an independent creative agency building brands, digital experiences, and ideas people remember. Strategy, design, technology.",
  keywords: [
    "creative agency",
    "branding",
    "web design",
    "digital experience",
    "creative direction",
  ],
  openGraph: {
    title: "AXIOM — Creative Agency",
    description:
      "Building brands, digital experiences, and ideas people remember.",
    type: "website",
    locale: "en_US",
    siteName: "AXIOM",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOM — Creative Agency",
    description:
      "Building brands, digital experiences, and ideas people remember.",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
