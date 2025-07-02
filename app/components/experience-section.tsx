const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Mall Mystery Heroes",
    period: "2024 - Present",
    description:
      "Built a real-time multiplayer game using React, focusing on responsive user interactions and seemless live data updates, ",
    skills: ["React", "TypeScript", "Next.js", "Vercel", "Firebase"],
  },
  {
    id: 2,
    role: "Software Intern",
    company: "SETDA",
    period: "2024",
    description:
      "Spearheaded the redesign of a decade-old website using Elementor in WordPress, Conducted user research using Figma prototypes, leading to significant improvementsin user experience, with 90% of users preferring the new design",
    skills: ["Wordpress", "Elementor", "Figma"],
  },
  {
    id: 3,
    role: "Software Developer",
    company: "MoneyTrap Stock Algorithm",
    period: "2021 - 2023",
    description:
      "Algorithm reacts to live stock market conditions and indicates whether to buy or sell based on recognized market patterns",
    skills: ["Pinescript", "Python"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute w-64 h-64 top-20 -left-20 rounded-full bg-teal-100 opacity-30"></div>
      <div className="absolute w-48 h-48 bottom-10 right-10 rounded-xl bg-blue-100 rotate-45 opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative inline-block">
            Work Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the companies/projects I've had the pleasure of working with
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 pl-10 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "md:right-0 md:-mr-3.5" : "md:left-0 md:-ml-3.5"
                } left-0 -ml-3.5 md:ml-0 w-7 h-7 rounded-full border-4 border-white bg-teal-600`}
              ></div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 md:justify-start">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 border border-teal-200 rounded-full text-sm">
                    <svg className="inline-block w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-gray-600 mb-3 flex items-center gap-1 md:justify-start">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {exp.company}
                </p>

                <p className="mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2 md:justify-start">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
