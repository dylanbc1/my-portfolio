import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import me from "../public/me.jpg"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="z-10 text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Dylan Bermudez Cardona</h1>
          <p className="text-xl md:text-2xl text-gray-400">Software Engineer | Web Developer | Data Scientist</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="https://github.com/dylanbc1" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="https://www.linkedin.com/in/dylan-bermudez-cardona/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="mailto:dyez1110@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-20 bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-white">
              <Image
                src={me}
                alt="Dylan Bermudez Cardona"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg text-gray-300 flex-1">
              I'm a passionate Software Engineering student at ICESI University with a perfect GPA of 4.0. Recognized as
              the best Engineering and Software Engineering student, I've consistently made the honor list. My expertise
              spans software development, data science, and AI, with a track record of enhancing application performance
              and user satisfaction in professional settings.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "JavaScript",
              "Python",
              "R",
              "Scala",
              "C++",
              "React",
              "Next.js",
              "NestJS",
              "Node.js",
              "Spring Boot",
              "Django",
              "FastAPI",
              "WordPress",
              "TensorFlow",
              "Scikit-Learn",
              "PostgreSQL",
              "MySQL",
              "AWS",
              "GCP",
              "Docker",
              "Kubernetes",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 justify-center bg-[#1e293b] hover:bg-[#2d3748] transition-colors duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-12">
            <Card className="bg-[#1e293b] border-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">Software Developer - ICESI University</h3>
                <p className="text-gray-400 mb-4">January 2024 - Present</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    Implemented and developed user feedback solutions, increasing usability scores by 30% and user retention by 20%.
                  </li>
                  <li>Enhanced CERTYCO project performance by 40%, reducing load times for 5,000+ active users.</li>
                  <li>Developed high-availability web systems for 10,000+ daily users, achieving 99.9% uptime.</li>
                  <li>Engineered intuitive UIs, increasing user engagement by 50% for 1,500 concurrent users.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#1e293b] border-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">Data Scientist - Banco W</h3>
                <p className="text-gray-400 mb-4">December 2024 - January 2025</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    Developed AI model for transaction classification with 90% accuracy in identifying potential
                    financial crimes.
                  </li>
                  <li>
                    Conducted EDA on financial datasets, increasing detection rates of suspicious activities by 35%.
                  </li>
                  <li>Refined ML algorithms, reducing false positives by 40% and enhancing operational efficiency.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1e293b] border-none overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbcdnlxle/image/upload/v1739923995/DMAJOR_LOGO_hhyphx.png"
                alt="DMaJor Store E-commerce Platform"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">DMaJor Stroe - E-commerce Platform</h3>
                <p className="text-gray-400 mb-4">A full-stack online store, robust and scalable that redefines the standards of modern e-commerce, offering inventory, purchasing, sales, users and chatbots with AI. This system offers exceptional performance and high availability.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    NextJS
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    NestJS
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    PostgreSQL
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="https://dmjs-front-production.up.railway.app/" className="flex items-center justify-center gap-2">
                    View Project <ExternalLink size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#1e293b] border-none overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbcdnlxle/image/upload/v1739923995/SARLAFT_ddoeoz.png"
                alt="AI SARLAFT"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">Machine Learning Model for Banking Transactions</h3>
                <p className="text-gray-400 mb-4">Sophisticated Machine Learning model designed, using advanced techniques and state-of-the-art classification algorithms, is capable of analyzing complex patterns in banking transactions to identify possible terrorist financing or money laundering.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    ScikitLearn
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    TensorFlow
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="https://github.com/dylanbc1/SARLAFT-IA" className="flex items-center justify-center gap-2">
                    View Project <ExternalLink size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#1e293b] border-none overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbcdnlxle/image/upload/v1739923995/cajas_ygqjd7.png"
                alt="Data Visualization Dashboard"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">Inventory Management Web System</h3>
                <p className="text-gray-400 mb-4">Complete and powerful web system for inventory management, designed to optimize the operations of businesses of all sizes. Real-time inventory tracking, purchasing and sales management with intuitive.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    NextJS
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    FastAPI
                  </Badge>
                  <Badge variant="secondary" className="bg-[#2d3748]">
                    PostgreSQL
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="https://boxes-management-frontend-production-a1e4.up.railway.app/" className="flex items-center justify-center gap-2">
                    View Project <ExternalLink size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-20 bg-[#111827]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          <Card className="bg-[#1e293b] border-none overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">ICESI University, Cali, Colombia</h3>
              <p className="text-gray-400 mb-2">Software Engineering</p>
              <p className="text-gray-300">GPA: 4.0/4.0 | Expected Graduation: June 2026</p>
              <p className="text-gray-300 mt-4">
                Awards: Best Engineering student, Best Software Engineering student, Honor list in all semesters
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-8">
            I'm open to full-time or part-time roles in Software and Web Development, WordPress development, AI & Machine Learning, Data Analysis,
            Cybersecurity, and DevOps.
          </p>
          <Button
            asChild
            className="text-lg px-8 py-6 bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors duration-300"
          >
            <Link href="mailto:dyez1110@gmail.com">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

