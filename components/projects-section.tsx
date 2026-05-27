"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Lumina Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity system for a luxury food delivery startup, including logo, packaging, and digital presence.",
    image: "/projects/myproject.jpg",
    link: "https://www.behance.net/gallery/243720665/FOOD-ORDERING-APP",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Crypto App Redesign",
    category: "UI/Product",
    description:
      "Comprehensive redesign of a crypto mobile application, improving user engagement by 45%.",
    image: "/projects/nexus.jpg",
    link: "https://www.behance.net/gallery/245065021/REDESIGN-OF-A-CRYPTO-WALLET",
    color: "from-cyan-400/20 to-emerald-500/20",
  },
  {
    title: "Midnight Network Motion Series",
    category: "Motion Design",
    description:
      "Award-winning motion graphics campaign for an international private blockchain.",
    image: "/projects/ethereal.jpg",
    link: "https://www.behance.net/gallery/243757641/AI-Video-Contents",
   
  },
  {
    title: "Brand visual marketing",
    category: "Social Media",
    description:
      "Viral social media visuals that reached 10M+ impressions promoting brand awareness.",
    image: "/projects/verde.jpg",
    link: "https://www.behance.net/gallery/243718609/GRAPHIC-DESIGNS",
    color: "from-sky-400/20 to-cyan-400/20",
  },
  {
    title: "Branded mugs and hoodie",
    category: "Packaging",
    description:
      "Premium packaging design for specialty design brand, featured in Design Week.",
    image: "/projects/artisan.jpg",
    link: "https://www.behance.net/gallery/243718609/GRAPHIC-DESIGNS",
    color: "from-amber-300/20 to-yellow-500/20",
  },
  {
    title: "Synergio Visual Identity",
    category: "Branding",
    description:
      "Modern visual identity for AI technology company, emphasizing innovation and trust.",
    image: "/projects/techsphere.jpg",
    link: "https://www.behance.net/gallery/243713397/SYNERGIO-APP",
    color: "from-sky-400/20 to-emerald-400/20",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`}
          />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg"
            >
              View on Behance
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A curated selection of work showcasing my approach to visual design,
            branding, and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
