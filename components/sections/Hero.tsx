import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Shubhra Ghosh</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
           a Full Stack Developer 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/resume.pdf" download target="_self">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/shubhra92" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/shubhra-ghosh" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
