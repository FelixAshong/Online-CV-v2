import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, Linkedin, Mail, MapPin, MessageSquare, Twitter } from "lucide-react"
import ContactForm from "@/components/contact-form"
import SkillBar from "@/components/skill-bar"
import AnimatedSection from "@/components/animated-section"
import FloatingContactButton from "@/components/floating-contact-button"
import type { ReactNode } from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="container mx-auto py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-primary/5 flex items-center justify-center hover-scale animate-scale shadow-lg border-4 border-white dark:border-gray-800">
              <Image 
                src="/profile.jpg" 
                alt="Felix N.O Ashong" 
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">Felix N.O Ashong 🇬🇭</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">Full-Stack Web Developer</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-1 text-muted-foreground hover-scale">
                  <MapPin size={16} />
                  <span>Accra, Ghana</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground hover-scale">
                  <Mail size={16} />
                  <a href="mailto:phleodelly@gmail.com" className="hover:underline">
                    phleodelly@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild variant="outline" className="hover-scale">
                  <a href="https://delly-portfolio-v3.onrender.com/" target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </Button>
                <Button asChild variant="outline" className="hover-scale">
                  <a href="https://github.com/FelixAshong" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="hover-scale">
                  <a href="https://linkedin.com/in/felix-ashong" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="hover-scale">
                  <a href="https://twitter.com/phleodelly" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 md:px-6">
        <Tabs defaultValue="experience" className="mb-12 animate-fade-in">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold">Intern Front-End Developer</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://navantrics.com/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Navantrics
                    </a>{" "}
                    | Aug 2023 – Oct 2023
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Worked on food ordering app UI using HTML, CSS, JS, Bootstrap, and React</li>
                    <li>Collaborated with the design team to implement responsive layouts</li>
                    <li>Participated in code reviews and improved application performance</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold">Personal Projects</h3>
                  <p className="text-muted-foreground">Dec 2022 – Present</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Developed several websites and landing pages for clients</li>
                    <li>Working on an iOS mobile app called "Okada Ride" (pending)</li>
                    <li>Created personal portfolio showcasing web development skills</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold">Team Projects</h3>
                  <p className="text-muted-foreground">Nov 2023 – Present</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Contributed to an inventory management system</li>
                    <li>Helped develop a movie booking platform</li>
                    <li>Collaborated on various web applications with fellow developers</li>
                  </ul>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar name="HTML & CSS" percentage={95} />
                  <SkillBar name="JavaScript" percentage={70} />
                  <SkillBar name="React" percentage={60} />
                  <SkillBar name="Bootstrap" percentage={75} />
                </div>
                <div className="space-y-6">
                  <SkillBar name="UI/UX" percentage={50} />
                  <SkillBar name="SQL" percentage={20} />
                  <SkillBar name="Flutter" percentage={10} />
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Languages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillBar name="English" percentage={80} />
                <SkillBar name="Twi" percentage={95} />
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold">B.Sc. Information Technology</h3>
                  <p className="text-muted-foreground">University of Ghana | 2022 – Present</p>
                  <p className="mt-2">Focusing on web development, software engineering, and database management.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold">High School Education</h3>
                  <p className="text-muted-foreground">Forces SHTS | 2018 – 2021</p>
                  <p className="mt-2">Completed secondary education with focus on science and mathematics.</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold">Primary & Junior High School</h3>
                  <p className="text-muted-foreground">Mary Star of the Sea Int. School | 2003 – 2018</p>
                  <p className="mt-2">Received foundational education and developed interest in technology.</p>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:phleodelly@gmail.com" className="hover:underline">
                        phleodelly@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Accra, Ghana</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Connect on Social Media</h3>
                  <div className="flex gap-4">
                    <Button asChild size="icon" variant="outline">
                      <a
                        href="https://github.com/FelixAshong"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline">
                      <a href="https://twitter.com/phleodelly" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline">
                      <a
                        href="https://linkedin.com/in/felix-ashong"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline">
                      <a href="https://wa.me/+233545551579" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <MessageSquare className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <ContactForm />
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Felix N.O Ashong. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/phleodelly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/felix-ashong"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:phleodelly@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  )
}

