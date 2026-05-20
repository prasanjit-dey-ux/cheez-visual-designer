"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Senior Visual Designer",
    company: "Stell Creative Agency",
    duration: "2022 — Present",
    description:
      "Leading brand identity projects for Fortune 500 clients. Increased client retention by 40% through innovative design solutions and strategic brand positioning.",
  },
  {
    role: "Brand Designer & Ambassador",
    company: "Nex Design Studio & Velvet Capital",
    duration: "2019 — 2022",
    description:
      "Developed comprehensive brand systems for 50+ startups. Collaborated with cross-functional teams to deliver cohesive visual identities across digital and print.",
  },
  {
    role: "UI/UX Designer",
    company: "TechFlow Inc.",
    duration: "2017 — 2019",
    description:
      "Designed user interfaces for mobile and web applications serving 2M+ users. Improved user engagement by 35% through data-driven design iterations.",
  },
  {
    role: "Junior Designer",
    company: "Creative Labs",
    duration: "2015 — 2017",
    description:
      "Started career creating social media content and marketing materials. Built foundation in visual design principles and modern design tools.",
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

      <div className="group relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {experience.role}
          </h3>
          <span className="text-sm text-muted-foreground font-mono">
            {experience.duration}
          </span>
        </div>
        <p className="text-primary font-medium mb-3">{experience.company}</p>
        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Experience</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A timeline of my professional growth, showcasing key roles and
            achievements that have shaped my design expertise.
          </p>
        </motion.div>

        <div className="max-w-3xl ml-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
