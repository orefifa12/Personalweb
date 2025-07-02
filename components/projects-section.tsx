"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "OpenWeather API", "Styled Components"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application with workout plans and progress visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe discovery application with filtering by ingredients, dietary restrictions, and meal types.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Node.js", "Spoonacular API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 -top-48 right-0 rounded-full bg-primary/20 backdrop-blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work across various technologies and domains"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-muted group">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} className="bg-background/80 backdrop-blur-sm text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full bg-background text-foreground" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="rounded-full" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="rounded-full bg-background text-foreground"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
