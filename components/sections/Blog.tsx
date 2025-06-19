import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      description:
        "Learn best practices for structuring large React applications with TypeScript for better maintainability and developer experience.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      slug: "building-scalable-react-applications",
    },
    {
      title: "Optimizing Next.js Performance: A Complete Guide",
      description:
        "Discover advanced techniques to optimize your Next.js applications for better performance and user experience.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Next.js", "Performance", "Web Development"],
      slug: "optimizing-nextjs-performance",
    },
    {
      title: "Docker for Full Stack Developers",
      description:
        "A comprehensive guide to containerizing your full stack applications with Docker for consistent development and deployment.",
      date: "2024-01-01",
      readTime: "15 min read",
      tags: ["Docker", "DevOps", "Full Stack"],
      slug: "docker-for-full-stack-developers",
    },
  ]

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I write about web development, best practices, and the latest technologies. Here are some of my recent
            articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="animate-slide-up hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {post.readTime}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
