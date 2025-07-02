"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Mall Mystery Heroes",
    description:
      "A real-time multiplayer game using React, focusing on responsive user interactions and seamless live data updates.",
    tags: ["React", "TypeScript", "Next.js", "Vercel", "Firebase"],
    image: "/mall-mystery-heroes.ico",
    github: "https://github.com/orefifa12/mall-mystery-heroes",
    demo: "https://mall-mystery-heroes.vercel.app",
  },
  {
    id: 2,
    title: "SETDA Website Redesign",
    description:
      "Spearheaded the redesign of a decade-old website using Elementor in WordPress with user research using Figma prototypes.",
    tags: ["WordPress", "Elementor", "Figma", "UX Design"],
    image: "/mall-mystery-heroes.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "MoneyTrap Stock Algorithm",
    description:
      "Algorithm that reacts to live stock market conditions and indicates whether to buy or sell based on recognized market patterns.",
    tags: ["PineScript", "Python", "Trading", "Algorithms"],
    image: "/mall-mystery-heroes.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    tags: ["React", "D3.js", "OpenWeather API", "Charts"],
    image: "/mall-mystery-heroes.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/mall-mystery-heroes.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/mall-mystery-heroes.png",
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 -top-48 right-0 rounded-full bg-teal-100 opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-teal-50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work across various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                <div className="text-4xl font-bold text-teal-600 opacity-80">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                ) : (
                  <div className="text-4xl font-bold text-teal-600 opacity-20">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-gray-200 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-200 text-gray-900 rounded-full hover:border-gray-300 transition-colors text-sm font-medium"
                  >
                    <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-sm font-medium"
                  >
                    <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-3 border border-gray-200 text-gray-900 rounded-full hover:border-gray-300 transition-colors font-medium"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
