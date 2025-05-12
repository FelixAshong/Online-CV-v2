import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, Linkedin, Mail, MapPin, MessageSquare, Twitter } from "lucide-react"
import SkillBar from "@/components/skill-bar"
import AnimatedSection from "@/components/animated-section"
import { FloatingContactButton } from "@/components/floating-contact-button"
import { CertificateCard } from "@/components/certificate-card"
import type { ReactNode } from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Online CV</h1>
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
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">Front-End Developer | Full Stack Web Developer</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-1 text-muted-foreground hover-scale">
                  <MapPin size={16} />
                  <span>Accra, Ghana</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground hover-scale">
                  <Mail size={16} />
                  <a href="mailto:phleodelly@gmail.com" className="hover:underline">
                    felixashong4@gmail.com
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
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
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
                  <h3 className="text-xl font-semibold">Networking Intern</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://ugcs.ug.edu.gh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      University Of Ghana Computing Systems 
                    </a>{" "}
                    | Jan 2024 – Mar 2024
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Collaborated with IT professionals to identify system needs and implement solutions </li>
                    <li>Configured and installed network hardware including routers, switches, and firewalls</li>
                    <li>Replaced faulty network hardware components to improve performance</li>
                    <li>Completed day-to-day duties accurately and efficiently</li>
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
              <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
                  <div className="space-y-6">
                    <SkillBar name="HTML5 & CSS3" percentage={98} />
                    <SkillBar name="JavaScript (ES6+)" percentage={90} />
                    <SkillBar name="React.js" percentage={92} />
                    <SkillBar name="Tailwind CSS" percentage={88} />
                    <SkillBar name="Next.js" percentage={85} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
                  <div className="space-y-6">
                    <SkillBar name="Node.js" percentage={90} />
                    <SkillBar name="Express.js" percentage={85} />
                    <SkillBar name="MongoDB" percentage={80} />
                    <SkillBar name="RESTful APIs" percentage={85} />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-center">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Card className="p-4">
                  <h4 className="font-medium">Git & GitHub</h4>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium">React</h4>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium">Node.js</h4>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium">VS Code</h4>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium">Figma</h4>
                </Card>
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

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Professional Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CertificateCard
                  imageSrc="/alx-certificate.jpeg"
                  title="ALX AI Career Essentials"
                  description="Comprehensive program covering AI fundamentals, machine learning, and data science."
                  skills={["AI Fundamentals", "Machine Learning", "Data Science"]}
                />
                 <CertificateCard
                  imageSrc="/LinkedIn-marketing.jpg"
                  title="LinkedIn Marketing Solutions Fundamentals Certification"
                  description="Comprehensive certification focused on LinkedIn Ads, campaign setup and optimization, audience targeting, and performance analytics."
                  skills={["LinkedIn Advertising", "Campaign Management", "Audience Targeting", "Performance Measurement"]}
                />
                <CertificateCard
                  imageSrc="/Linkedin- design.jpg"
                  title="LinkedIn Content and Creative Design Certification"
                  description="Comprehensive certification focused on content strategy, creative design, audience targeting, and performance measurement on LinkedIn."
                  skills={["LinkedIn Content Strategy", "Creative Design", "Campaign Optimization", "Audience Targeting", "Performance Analytics"]}
                />
                <CertificateCard
                  imageSrc="/linkedin-market.jpg"
                  title="LinkedIn Marketing Strategy Certification"
                  description="A professional certification covering LinkedIn content strategy, creative design, audience targeting, campaign optimization, and performance analytics."
                  skills={["Content Strategy","Creative Design","Campaign Optimization","Audience Targeting","Performance Analytics"]}
                />
                <CertificateCard
                  imageSrc="/uiux-certificate.jpg"
                  title="UI/UX Design Certification"
                  description="Specialized program in user interface and experience design."
                  skills={["UI Design", "UX Research", "Figma"]}
                />
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

