"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, BuildingIcon } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description:
      "Led the development of the company's flagship SaaS product, improving performance by 40% and implementing a new design system.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client projects, from e-commerce platforms to custom CMS solutions.",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description:
      "Collaborated with designers to implement responsive websites and interactive features for various clients.",
    skills: ["JavaScript", "HTML/CSS", "PHP", "WordPress"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute w-64 h-64 top-20 -left-20 rounded-full bg-primary/30 backdrop-blur-3xl opacity-30"></div>
      <div className="absolute w-48 h-48 bottom-10 right-10 rounded-xl bg-secondary/20 backdrop-blur-3xl rotate-45 opacity-20"></div>

      <div className="container relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the companies I've had the pleasure to work with"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 pl-10 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "md:right-0 md:-mr-3.5" : "md:left-0 md:-ml-3.5"
                } left-0 -ml-3.5 md:ml-0 w-7 h-7 rounded-full border-4 border-background bg-primary`}
              ></div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 md:justify-start">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-3 flex items-center gap-1 md:justify-start">
                  <BuildingIcon className="h-4 w-4" />
                  {exp.company}
                </p>

                <p className="mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2 md:justify-start">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
