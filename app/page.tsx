"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MoveRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  Languages,
  GraduationCap,
  Briefcase,
  Award,
  Car,
  Code,
  Sun,
  Moon,
} from "lucide-react"
import { translations } from "@/lib/translations"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" className="border-white bg-white text-primary hover:bg-transparent hover:text-white">
        <Moon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      className="border-white bg-white text-primary hover:bg-transparent hover:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const t = translations[language]
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Alejandro DM</h1>
              <p className="text-xl mt-2">{t.jobTitle}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button
                variant="outline"
                className="border-white bg-white text-primary hover:bg-transparent hover:text-white"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
              >
                <Languages className="mr-2 h-4 w-4" />
                {language === "es" ? "English" : "Español"}
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Contact Info */}
      <section className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(+34) 694 419 323</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>alejandro.delgado.morillo.01@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
            <TabsTrigger value="experience">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{t.tabs.experience}</span>
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{t.tabs.education}</span>
            </TabsTrigger>
            <TabsTrigger value="skills">
              <Code className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{t.tabs.skills}</span>
            </TabsTrigger>
            <TabsTrigger value="courses">
              <Award className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{t.tabs.courses}</span>
            </TabsTrigger>
            <TabsTrigger value="projects">
              <Github className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{t.tabs.projects}</span>
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="mr-2" />
                {t.experience.title}
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-xl font-semibold">{t.experience.job1.title}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded w-fit">
                      09/2021 – 12/2021
                    </span>
                  </div>
                  <p className="text-muted-foreground">{t.experience.job1.company} - Cádiz</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    {t.experience.job1.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2" />
                {t.education.title}
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-xl font-semibold">{t.education.edu1.degree}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded w-fit">
                      09/2018 – 12/2021
                    </span>
                  </div>
                  <p className="text-muted-foreground">{t.education.edu1.institution}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2" />
                {t.skills.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.skills.list.map((skill, index) => (
                  <div key={index} className="flex items-center p-2 border rounded">
                    <MoveRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center">
                <Languages className="mr-2" />
                {t.skills.languages.title}
              </h3>
              <div>
                <p>
                  <strong>{t.skills.languages.english.name}:</strong> {t.skills.languages.english.level}
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center">
                <Car className="mr-2" />
                {t.skills.driving.title}
              </h3>
              <p>{t.skills.driving.license}</p>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="mr-2" />
                {t.courses.title}
              </h2>
              <div className="space-y-6">
                {t.courses.list.map((course, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <h3 className="text-xl font-semibold">{course.name}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded w-fit">{course.date}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {course.institution} ({course.hours})
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Github className="mr-2" />
                {t.projects.title}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">CuerdOS GNU/Linux</h3>
                  <p className="mt-2">{t.projects.cuerdos}</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Alejandro Delgado Morillo</p>
          <div className="flex justify-center mt-4 space-x-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}

