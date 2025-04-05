import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "ALX AI Career Essentials",
    school: "ALX Africa",
    location: "Remote",
    period: "2023",
    description: "Comprehensive program covering AI fundamentals, machine learning, and data science. Developed skills in Python, data analysis, and AI applications.",
    achievements: ["AI Fundamentals", "Machine Learning", "Data Science", "Python"],
  },
  {
    degree: "UI/UX Design Certification",
    school: "Prodigee Edtech",
    location: "Remote",
    period: "2022",
    description: "Specialized program in user interface and experience design. Learned design principles, prototyping, and user research methodologies.",
    achievements: ["UI Design", "UX Research", "Prototyping", "Figma"],
  },
  {
    degree: "Web Development Bootcamp",
    school: "ALX Africa",
    location: "Remote",
    period: "2020 - 2021",
    description: "Intensive full-stack web development program focusing on modern technologies and best practices.",
    achievements: ["Full Stack Development", "React", "Node.js", "Database Design"],
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

export function EducationSection() {
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
        Education
      </motion.h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="experience-card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>{edu.school}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{edu.description}</p>
            <div className="flex flex-wrap gap-2">
              {edu.achievements.map((achievement, achievementIndex) => (
                <Badge
                  key={achievementIndex}
                  variant="secondary"
                  className="skill-badge"
                >
                  {achievement}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 