import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileTextIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"

const skills = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "TypeScript",
  "PineScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Figma",
  "AWS",
  "Git",
  "Adobe Creative Suite",
  "Google Workspace",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30 z-0"></div>
      <div className="absolute w-72 h-72 -top-20 -right-20 rounded-xl bg-secondary/20 backdrop-blur-3xl rotate-12 opacity-30"></div>
      <div className="absolute w-80 h-80 -bottom-40 -left-40 rounded-full bg-primary/20 backdrop-blur-3xl opacity-20"></div>
      <div className="absolute top-20 right-10 opacity-70"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Get to know my background, skills, and what drives me as a developer"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-6">
                I'm a passionate Computer Science Student that enjoys to work on plenty of projects from technology in the tech space to the financial space. I specialize in JavaScript/TypeScript technologies across the full stack, with a particular focus on React and Node.js.
              </p>
              <p className="text-lg mb-6">
                My approach combines technical expertise with a deep understanding of user experience design. I believe
                that the best software is not just technically sound but also intuitive and enjoyable to use.
              </p>
              <p className="text-lg mb-8">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new cooking
                recipes.
              </p>

              <div id="resume" className="mb-8">
                <Button className="rounded-full" size="lg">
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-primary-gradient rounded-full blur opacity-70"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
