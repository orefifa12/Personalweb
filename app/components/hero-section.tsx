"use client"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Simple decorative elements using divs */}
      <div className="absolute w-64 h-64 -top-20 -left-20 rounded-full bg-teal-100 opacity-70"></div>
      <div className="absolute w-40 h-40 bottom-20 -right-10 rounded-xl bg-blue-100 rotate-12 opacity-60"></div>
      <div className="absolute w-96 h-96 -bottom-40 right-1/4 rounded-full bg-teal-50 opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1 bg-teal-100 rounded-full border border-teal-200">
            <span className="text-teal-700 font-medium">Computer Science Student</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm David Boham.
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Bringing technical visions to life.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Computer Science Student specializing in creating elegant, user-focused applications that solve real-world
            problems along with learning more about the ever-increasing computer space.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-teal-200 text-gray-900 rounded-full hover:border-teal-300 transition-colors font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection("about")} aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
