"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Palette,
  Sparkles,
  Layout,
  Smartphone,
  Play,
  Wand2,
  PenTool,
  Layers,
  Figma,
  Film,
} from "lucide-react"

const skills = [
  { name: "Visual Design", icon: Palette, category: "core" },
  { name: "Branding", icon: Sparkles, category: "core" },
  { name: "Motion Design", icon: Play, category: "core" },
  { name: "Social Media Design", icon: Smartphone, category: "core" },
  { name: "UI/Product", icon: Layout, category: "core" },
  { name: "Animations", icon: Film, category: "core" },
  { name: "Prompt Engineering", icon: Wand2, category: "emerging" },
  { name: "Adobe Photoshop", icon: PenTool, category: "tools" },
  { name: "Adobe Illustrator", icon: Layers, category: "tools" },
  { name: "Figma", icon: Figma, category: "tools" },
  { name: "After Effects", icon: Film, category: "tools" },
  { name: "Canva", icon: Palette, category: "tools" },
  { name: "CapCut", icon: Film, category: "tools" },
  { name: "ChatGPT", icon: Sparkles, category: "tools" },
  { name: "Gemini", icon: Wand2, category: "tools" },
]

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`group relative flex items-center gap-3 px-5 py-4 rounded-xl border backdrop-blur-sm transition-all cursor-default ${
        skill.category === "core"
          ? "bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
          : skill.category === "emerging"
          ? "bg-accent/5 border-accent/20 hover:bg-accent/10 hover:border-accent/40"
          : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
      }`}
    >
      <div
        className={`p-2 rounded-lg ${
          skill.category === "core"
            ? "bg-primary/10 text-primary"
            : skill.category === "emerging"
            ? "bg-accent/10 text-accent"
            : "bg-secondary text-muted-foreground group-hover:text-foreground"
        }`}
      >
        <Icon size={20} />
      </div>
      <span className="font-medium text-foreground">{skill.name}</span>
    </motion.div>
  )
}

export function SkillsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const coreSkills = skills.filter((s) => s.category === "core")
  const emergingSkills = skills.filter((s) => s.category === "emerging")
  const toolSkills = skills.filter((s) => s.category === "tools")

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">
            Skills & Tools
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A comprehensive toolkit refined through years of creative
            problem-solving and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Emerging Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Emerging Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergingSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + coreSkills.length}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Design Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + coreSkills.length + emergingSkills.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
