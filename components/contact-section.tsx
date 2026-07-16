"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, ExternalLink, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formElement = e.currentTarget
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(formElement),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const contactLinks = [
    {
      name: "Email",
      value: "okaforc110@gmail.com",
      href: "mailto:okaforc110@gmail.com",
      icon: Mail,
    },
    {
      name: "Behance",
      value: "behance.net/Chee_z",
      href: "https://www.behance.net/Chee_z",
      icon: ExternalLink,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/chizoba-okafor-a08b53274",
      href: "https://www.linkedin.com/in/chizoba-okafor-a08b53274",
      icon: Linkedin,
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            {"Have a project in mind? Let's create something extraordinary together."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Connect with me
            </h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 transition-all hover:bg-card hover:border-primary/30"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {link.name}
                      </div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-8">
              <div className="text-muted-foreground">
                <div className="relative"></div>
                Based in San Francisco, CA
                <br />
                Available for remote collaborations worldwide
              </div>
              <div className="absolute left-0 top-full mt-8 -z-10"></div>
                <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    Message Sent!
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {"Thanks for reaching out. I'll get back to you soon."}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms hidden field */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="76e303f8-d60c-4a27-be5e-a44192926830"
                  />
                  <input type="hidden" name="subject" value="New Portfolio Contact Message" />
                  <input type="hidden" name="redirect" value="" />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
