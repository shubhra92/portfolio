import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Resume from "@/components/sections/Resume"
import Contact from "@/components/sections/Contact"
import Blog from "@/components/sections/Blog"

export const metadata: Metadata = {
  title: "Shubhra Ghosh - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and Docker. Building modern web applications with clean code and innovative solutions.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Web Development",
  ],
  authors: [{ name: "Shubhra Ghosh" }],
  openGraph: {
    title: "Shubhra Ghosh - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhra Ghosh - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {process.env.NODE_ENV !== "production" && <About />}
      {process.env.NODE_ENV !== "production" && <Skills />}
      {process.env.NODE_ENV !== "production" && <Projects />}
      {process.env.NODE_ENV !== "production" && <Resume />}
      {process.env.NODE_ENV !== "production" && <Contact />}
      {process.env.NODE_ENV !== "production" && <Blog />}
    </main>
  )
}
