import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Built responsive web applications using React and TypeScript. Optimized application performance and implemented accessibility standards.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Specialized in Software Engineering and Web Development",
    },
  ]

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification",
  ]

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey and qualifications
          </p>
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{job.company}</span>
                      <span>{job.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{edu.institution}</span>
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <Card className="animate-slide-up">
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
