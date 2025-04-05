import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Accra, Ghana",
    period: "2022 - Present",
    description: "Working on various web development projects using modern technologies. Building responsive and user-friendly applications for clients.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "UI/UX Designer",
    company: "Prodigee Edtech",
    location: "Remote",
    period: "2021 - 2022",
    description: "Designed user interfaces and experiences for educational platforms. Created wireframes, prototypes, and implemented designs using Figma.",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research", "Design Systems"],
  },
  {
    title: "Web Developer",
    company: "ALX Africa",
    location: "Remote",
    period: "2020 - 2021",
    description: "Developed web applications as part of the ALX Africa program. Collaborated with team members on various projects.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ExperienceSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      <motion.h2 
        variants={itemVariants}
        className="section-title"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="experience-card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Building2 className="h-4 w-4" />
                  <span>{experience.company}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="skill-badge"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 