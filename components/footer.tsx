"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:okaforc110@gmail.com",
      icon: Mail,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/Chee_z",
      icon: ExternalLink,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chizoba-okafor-a08b53274",
      icon: Linkedin,
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-emerald-950/40 backdrop-blur-xl">
      {/* Emerald green and silver gradient background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(135deg, rgb(49, 130, 101) 0%, rgb(30, 58, 80) 50%, rgb(200, 204, 210) 100%)`,
          opacity: 0.15,
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-semibold tracking-tight text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CZ<span className="text-emerald-300">.</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300">
            © {currentYear} Chee_z. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
