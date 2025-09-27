import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import AnimatedGradient from "../components/AnimatedGradient";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Ishimwe — Portfolio",
  description: "Futuristic portfolio of Christian Ishimwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <AnimatedGradient />
        <ParticleBackground />
        <Navbar />
        <PageTransition>
          <main className="relative z-10">
            {children}
          </main>
        </PageTransition>
        <CustomCursor />
      </body>
    </html>
  );
}
