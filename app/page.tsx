import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedButton } from "@/components/animated-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Atiti<span className="text-primary">Singh</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AnimatedButton asChild className="hidden md:flex">
              <Link href="#contact">Get in Touch</Link>
            </AnimatedButton>
          </div>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <AnimatedSection id="home" className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:w-2/3">
              <AnimatedText text="Hi, I'm Atiti Singh" className="text-4xl md:text-6xl font-bold tracking-tight" />
              <AnimatedText
                text="Software Developer Engineer"
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              />
              <AnimatedText
                text="Full-stack developer with 3 years of experience in designing and building scalable web and mobile
                applications."
                className="text-muted-foreground max-w-[600px]"
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <AnimatedButton asChild>
                  <Link href="/resume.pdf" download>
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant="outline" asChild>
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:atitisingh40@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Atiti Singh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="bg-muted/30 py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <AnimatedText text="About Me" className="text-3xl font-bold tracking-tight" />
              <AnimatedText
                text="I'm a full-stack developer with expertise in building scalable web and mobile applications. I'm
                passionate about problem-solving, debugging, and optimizing performance to enhance user experiences."
                className="text-muted-foreground"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <Card className="border-border/50 backdrop-blur-sm bg-card/80">
                  <CardHeader>
                    <CardTitle>Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Software Developer Engineer</h3>
                          <p className="text-sm text-muted-foreground">Tranzita Systems, Lucknow</p>
                        </div>
                        <Badge>July 2022 - Present</Badge>
                      </div>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>Led backend development for ONDC digital commerce platform</li>
                        <li>Developed mobile app frontend using Flutter</li>
                        <li>Improved and optimized SAGE mobile application</li>
                        <li>Created OCR Data Input Tool with Google ML Kit</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Intern Engineer</h3>
                          <p className="text-sm text-muted-foreground">Cargoflash Pvt Ltd, Gurugram</p>
                        </div>
                        <Badge>May 2022 - July 2022</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Web Developer Intern</h3>
                          <p className="text-sm text-muted-foreground">Spark Foundation, Singapore</p>
                        </div>
                        <Badge>Aug 2021 - Sep 2021</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="border-border/50 backdrop-blur-sm bg-card/80">
                  <CardHeader>
                    <CardTitle>Education & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">MCA</h3>
                          <p className="text-sm text-muted-foreground">Madan Mohan Malviya University of Technology</p>
                        </div>
                        <Badge>2020 - 2022</Badge>
                      </div>
                      <p className="text-sm">CGPA: 8.4</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">BSc</h3>
                          <p className="text-sm text-muted-foreground">Deen Dayal Upadhyay Gorakhpur University</p>
                        </div>
                        <Badge>2016 - 2019</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Flutter" />
                        <SkillBadge name="Node.js" />
                        <SkillBadge name="TypeScript" />
                        <SkillBadge name="JavaScript" />
                        <SkillBadge name="Dart" />
                        <SkillBadge name="React Native" />
                        <SkillBadge name="Firebase" />
                        <SkillBadge name="MongoDB" />
                        <SkillBadge name="SQL" />
                        <SkillBadge name="Docker" />
                        <SkillBadge name="Google Cloud" />
                        <SkillBadge name="Git" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <AnimatedText text="Featured Projects" className="text-3xl font-bold tracking-tight" />
              <AnimatedText
                text="Here are some of the projects I've worked on throughout my career."
                className="text-muted-foreground"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection delay={0.1}>
                <ProjectCard
                  title="ONDC Platform"
                  description="Led the development of backend infrastructure for ONDC digital commerce platform with RESTful APIs and Flutter mobile app."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["Flutter", "Node.js", "TypeScript", "Firebase"]}
                />
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <ProjectCard
                  title="SAGE Mobile Application"
                  description="Improved, optimized and added new functionality to the SAGE mobile application to meet evolving business requirements."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["Kotlin", "Node.js", "JavaScript", "Azure SQL"]}
                />
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <ProjectCard
                  title="OCR Data Input Tool"
                  description="Developed a mobile application using Google ML Kit for text recognition to parse and extract specific labels from captured images."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["Flutter", "MS Graph API", "SharePoint"]}
                />
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <ProjectCard
                  title="Payment Gateway Interface"
                  description="Developed an online payment system supporting seamless transactions for small businesses."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["HTML", "CSS", "JavaScript", "Razor Pages"]}
                  link="https://example.com/payment-gateway"
                />
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <ProjectCard
                  title="QR Code Generator"
                  description="Created a tool to generate QR codes for use in product labeling and inventory management."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["HTML", "CSS", "JavaScript"]}
                  link="https://example.com/qr-generator"
                />
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <ProjectCard
                  title="Tour and Travel Website"
                  description="Built a dynamic travel booking website with secure user authentication."
                  image="/placeholder.svg?height=200&width=400"
                  tags={["HTML", "CSS", "JavaScript", "PHP", "Google OAuth"]}
                />
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="bg-muted/30 py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <AnimatedText text="Get In Touch" className="text-3xl font-bold tracking-tight" />
                <AnimatedText
                  text="Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
                  className="text-muted-foreground max-w-md"
                />

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 9129785903</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>atitisingh40@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>

              <AnimatedSection delay={0.2}>
                <Card className="border-border/50 backdrop-blur-sm bg-card/80">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Atiti Singh. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
