"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"
// import { CircleShape, SquareShape, TriangleShape } from "@/components/ui/shapes"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-64 h-64 -top-20 -left-20 rounded-full bg-primary/20 backdrop-blur-3xl opacity-70"></div>
      <div className="absolute w-40 h-40 bottom-20 -right-10 rounded-xl bg-secondary/20 backdrop-blur-3xl rotate-12 opacity-60"></div>
      <div className="absolute w-96 h-96 -bottom-40 right-1/4 rounded-full bg-primary/30 opacity-30"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-background to-primary/5 z-0"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-medium">Computer Science Student</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm John Doe.
            <br />
            <span className="bg-clip-text text-transparent bg-primary-gradient">
              I build thoughtful software experiences.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Computer Science Student at Duke University specializing in creating elegant, user-focused applications that solve real-world
            problems and learning more about the computer-facing world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="rounded-full bg-primary-gradient hover:opacity-90 transition-opacity"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-background text-foreground border-primary/20 hover:border-primary/50"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} aria-label="Scroll down">
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
