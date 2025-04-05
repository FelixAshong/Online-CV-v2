import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface CertificateCardProps {
  imageSrc: string
  title: string
  description: string
  skills: string[]
}

export function CertificateCard({ imageSrc, title, description, skills }: CertificateCardProps) {
  return (
    <Card className="certificate-card group">
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Image
          src={imageSrc}
          alt={`${title} Certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 