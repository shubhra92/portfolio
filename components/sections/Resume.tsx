import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const experience = [
    {
      title: "Full stack developer",
      company: "Cashflowy inc",
      period: "JUNE 2023 - JAN 2025",
      description: [
        "Developed scalable systems",
        "Integrated secure authentication using next-auth",
        "Built dynamic UIs with Next.js, EJS, jQuery, TypeScript.",
        "Optimized database interactions using Postgres, Sequelize, sailsjs ORM.",
        "Automated deployments with GitHub CI/CD.",
        "Worked with Docker, Redis, NGINX, AWS EC2, Hetzner cloud, and PM2 for app deployment and monitoring.",
      ],
    },
  ]

  const education:any[] = [
    // {
    //   degree: "B.Sc. (Honors) Physics",
    //   institution: "Calcutta University",
    //   period: "June 2018 - May 2021",
    //   description: "Focus on core principles of physics and mathematics.",
    // },
    // {
    //   degree: "H.S.",
    //   institution: "Bhangar High School",
    //   period: "July 2016 - July 2018",
    //   description:
    //     "Completed higher secondary education with a focus on science stream.",
    // },
    // {
    //   degree: "10th",
    //   institution: "Bhangar High School",
    //   period: "July 2015 - July 2016",
    //   description: "Completed secondary education.",
    // },
  ]

  const certifications:any[] = [
    // "AWS Certified Developer Associate",
    // "Google Cloud Professional Developer",
    // "MongoDB Certified Developer",
    // "React Developer Certification",
  ]

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey and qualifications
          </p>
          <Button size="lg" asChild>
            <Link href="/resume.pdf" download target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Link>
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
                    <ul className="space-y-2 text-muted-foreground">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            {!!education.length &&
              <>
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
              </>
            }

            {!!certifications.length &&
              <>
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
              </>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
