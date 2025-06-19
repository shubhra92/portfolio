import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Smartphone } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Next.js, and TypeScript",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications with Node.js and Express",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas with PostgreSQL and optimizing queries",
    },
    {
      icon: Smartphone,
      title: "DevOps & Deployment",
      description: "Containerizing applications with Docker and deploying to cloud platforms",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in modern web technologies. I love building scalable
            applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in web development, I've had the privilege of working on diverse
                projects ranging from e-commerce platforms to enterprise applications.
              </p>
              <p>
                My passion lies in creating clean, efficient code and delivering exceptional user experiences. I'm
                constantly learning new technologies and best practices to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or
                exploring the latest trends in technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
