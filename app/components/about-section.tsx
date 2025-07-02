"use client"

import { useState } from "react"

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
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 z-0"></div>
      <div className="absolute w-72 h-72 -top-20 -right-20 rounded-xl bg-blue-100 rotate-12 opacity-30"></div>
      <div className="absolute w-80 h-80 -bottom-40 -left-40 rounded-full bg-teal-100 opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know my background, skills, and what drives me as a Computer Science Student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              I'm a passionate Computer Science Student that enjoys working on plenty of projects from technology in the
              tech space to the financial space. I specialize in JavaScript/TypeScript technologies across the full
              stack, with a particular focus on React and Node.js.
            </p>
            <p className="text-lg mb-6">
              My approach combines technical expertise with a deep understanding of user experience design. I believe
              that the best software is not just technically sound but also intuitive, enjoyable, and appealing to use.
            </p>
            <p className="text-lg mb-8">
              When I'm not coding, you can find me running, playing sports, or having a great time with friends.
            </p>

            <div className="mb-8">
              <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-medium">
                <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full blur opacity-70"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white bg-gray-200 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src="/Profile.jpg"
                    alt="Profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-6xl md:text-8xl font-bold text-gray-400">DB</div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
