"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, FileText, Eye } from "lucide-react"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="resume" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Curriculum Vitae
          </span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Resume</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Download my complete resume to learn more about my experience,
            education, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="group relative p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
            {/* Decorative gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <FileText size={32} className="text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">
                  Chee_z - Resume 2026
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  PDF document • 2 pages • Last updated January 2026
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="relative mt-6 pt-6 border-t border-border flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Download size={18} />
                Download PDF
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all hover:bg-secondary hover:border-primary/50"
              >
                <Eye size={18} />
                Preview
              </motion.a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Years Experience", value: "8+" },
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "75+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-4 rounded-xl bg-card/50 border border-border/50 text-center"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
