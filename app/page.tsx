"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Image from "next/image"
import { FiMoon, FiSun, FiChevronDown, FiAward, FiBriefcase, FiBook, FiSend, FiMenu, FiX } from "react-icons/fi"
import {
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiReact,
  SiMysql,
  SiGit,
  SiSass,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiNodedotjs,
} from "react-icons/si"
import { FaCube } from "react-icons/fa"

const projects = [
  {
    title: "Bone Fracture Detection",
    image: "/BoneFracture.png",
    description: "Medical diagnostic system with 98% accuracy using Deep Learning",
    link: "#",
    tech: ["Machine Learning", "Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Sci-kit Learn", "keras"],
    //achievement: "Best Project Award - DBIT",
  },
  {
    title: "Gaming Community Portal",
    image: "/gaming_community.png",
    description: "Responsive gaming portal with personalized recommendations",
    link: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Car Price Prediction",
    image: "/Carpriceprediction.png",
    description: "ML-powered valuation system with 95% accuracy",
    link: "#",
    tech: ["Python", "Scikit-learn", "Numpy", "Matplotlib", "Pandas", "Seaborn", "Machine Learning"],
  },
  {
    title: "Packers & Movers Management System",
    image: "/News_app.png",
    description: "End-to-end logistics management platform with real-time tracking",
    link: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "KiaanIOT SAAS Platform",
    image: "/KiaanIOT.png",
    description: "Full-stack SAAS platform for IoT device management",
    link: "kiaaniot.com",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Azure", "Microservices", "CI/CD pipelines", "Shadcn UI"],

  },
  {
    title: "Kiaan AcreTech-Farmland Investment Platform",
    image: "/Acretech.png",
    description: "Innovative platform for farmland investment with real-time analytics",
    link: "#",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Azure", "Microservices", "CI/CD pipelines", "Shadcn UI"],
  }
]

const skills = [
  { name: "Python", icon: <SiPython />, level: 95 },
  { name: "Java", icon: <FaCube />, level: 70 }, // Basics
  { name: "C", icon: <SiC />, level: 65 },
  { name: "HTML5", icon: <SiHtml5 />, level: 95 },
  { name: "CSS", icon: <SiCss3 />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript />, level: 85 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 80 },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 75 },
  { name: "jQuery", icon: <SiJquery />, level: 70 },
  { name: "React.js", icon: <SiReact />, level: 90 },
  { name: "React Native", icon: <SiReact />, level: 80 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
  { name: "MySQL", icon: <SiMysql />, level: 75 },
  { name: "Git", icon: <SiGit />, level: 80 },
  { name: "VS Code", icon: <FaCube />, level: 90 },
  { name: "SASS", icon: <SiSass />, level: 75 },
  { name: "NumPy", icon: <SiNumpy />, level: 85 },
  { name: "Pandas", icon: <SiPandas />, level: 85 },
  { name: "Matplotlib", icon: <FaCube />, level: 80 },
  { name: "Scikit-Learn", icon: <SiScikitlearn />, level: 80 },
  { name: "TensorFlow", icon: <SiTensorflow />, level: 85 },
  { name: "Keras", icon: <SiKeras />, level: 80 },
  { name: "Machine Learning", icon: "🤖", level: 85 },
  { name: "Deep Learning", icon: "🧠", level: 80 },
  { name: "Computer Vision", icon: "👁️", level: 88 },
  { name: "Web Development", icon: "💻", level: 90 },
  { name: "Microservices", icon: "🔗", level: 70 },
  { name: "Prompt Engineering", icon: "📝", level: 90 },
  { name: "Docker", icon: "🐳", level: 75 },
  { name: "Azure", icon: "☁️", level: 70 },
  { name: "Problem Solving", icon: "🧩", level: 90 },
  { name: "Team Collaboration", icon: "🤝", level: 95 },
]

const experiences = [
  {
    company: "Kiaan - Bangalore, India",
    position: "Software Developer",
    duration: "June 2024 - Present",
    details: [
      "Led Full-Stack development for KiaanAgrow's SAAS platform",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Optimized React components improving performance by 35%",
      "Contributed to backend development for the SAAS platform by integrating scalable APIs and robust server-side solutions",
      "Developed the KiaanTwin Mobile application using React Native, delivering a seamless cross-platform mobile experience",
      "Maintained and enhanced Kiaan's microservices architecture, ensuring reliable performance and scalability",
      "AI desease detection system for crops using Machine Learning and Computer Vision",
    ],
    tech: ["React", "Azure", "Microservices", "Docker", "React Native", "Node.js", "Express", "MongoDB", "CI/CD", "Shadcn UI", "Tailwind CSS", "TypeScript", "JavaScript", "Python", "Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    company: "CompSoft Technologies",
    position: "Full Stack Developer Intern",
    duration: "2 Months",
    details: [
      "Developed 3 full-stack applications using MERN stack",
      "Implemented JWT authentication system",
      "Created REST APIs with 95% test coverage",
    ],
    tech: ["MongoDB", "Express", "Node.js", "JWT"],
  },
]

const education = [
  {
    degree: "BE in Computer Science (AI & ML)",
    institution: "Don Bosco Institute of Technology",
    duration: "2020 - 2024",
    achievements: ["NSS Volunteer", "COMPUTER SOCIETY OF INDIA Member"],
    icon: <FiBook className="text-blue-400" />,
  },
  {
    degree: "Pre-University (PCMB)",
    institution: "Sri Chaitanya PU College",
    duration: "2019 - 2020",
    achievements: [],
    icon: <FiBook className="text-purple-400" />,
  },
  {
    degree: "SSLC (10th Standard)",
    institution: "Shri Ramakrishna Vidyalaya",
    duration: "2017 - 2018",
    achievements: [],
    icon: <FiBook className="text-green-400" />,
  },
]

const freelancingProjects = [
  {
    client: "Sattva",
    project: "Real Estate Website",
    description: "Responsive real estate portal with advanced search filters",
    link: "https://example.com/sattva-real-estate",
  },
  {
    client: "Godrej Apartments",
    project: "Real Estate Website",
    description: "Modern real estate platform with virtual tours",
    link: "https://example.com/godrej-apartments",
  },
  {
    client: "VasuGadgi Hotel",
    project: "Food Delivery App",
    description: "Food delivery app with real-time tracking",
    link: "https://vasugadagihotel.com",
  },
  {
    client: "ELECTECH UAE",
    project: "Electech Groups Website",
    description: "Interior fitout services and catalog with project gallery",
    link: "https://electechgroup.com/interior/",
  },
  {
    client: "NewConcepts Homes",
    project: "Interior Design Website",
    description: "Interior design services with portfolio showcase",
    link: "https://newconcepthomesblr.com",
  },
  {
    client: "AV Tech",
    project: "AV Tech Website",
    description: "AV Tech website with product catalog and contact form",
    link: "https://av-tech.in",
  },
  {
    client: "Luxecrate",
    project: "E-commerce Website",
    description: "E-commerce platform with product listings and shopping cart",
    link: "https://luxecrate.in",
  },
  {
    client: "Basaveshwara Public School",
    project: "School Website",
    description: "School website with admission information and event calendar",
    link: "https://basaveshwarapublicschool.com",
  }
]

const navItems = ["Projects", "Skills", "Experience", "Freelance", "Education", "Contact"]

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const words = [
    { text: "Building" },
    { text: "intelligent" },
    { text: "solutions", className: "text-blue-500 dark:text-blue-300" },
    { text: "with" },
    { text: "AI/ML", className: "text-purple-500 dark:text-purple-300" },
    { text: "&" },
    { text: "Modern", className: "text-pink-500 dark:text-pink-300" },
    { text: "Web" },
    { text: "Tech", className: "text-green-500 dark:text-green-300" },
  ]

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message);
  };


  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      <nav className="fixed w-full top-0 z-40 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FiSun className="w-6 h-6 text-yellow-400" /> : <FiMoon className="w-6 h-6 text-gray-600" />}
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-lg hover:underline underline-offset-8 decoration-blue-500"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors mr-5"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6 " />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 py-2"
          >
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-lg border-b border-gray-200 dark:border-gray-800 pb-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            speed={0.1}
            minSize={0.4}
            maxSize={1}
            particleColor={darkMode ? "#FFFFFF" : "#000000"}
          />
        </div>
        <div className="relative z-10 text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-40 sm:w-48 h-40 sm:h-48 mx-auto"
          >
            <Image
              src="/skanda_image.jpg"
              alt="Skanda I B"
              fill
              className="rounded-full border-4 border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-2xl hover:rotate-3 transition-transform duration-300"
            />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-gray-900 dark:text-white">SKANDA I B</h2>
          <TextGenerateEffect
            words="Transforming Ideas into Intelligent Solutions"
            className="text-4xl sm:text-5xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          />
          <TypewriterEffect words={words} className="text-xl sm:text-2xl md:text-4xl" />
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Let's Collaborate
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Skanda_CV.pdf" // Replace with actual path to your resume file
              download="SKANDA-RESUME.pdf" // This will be the filename when downloaded
              className="px-6 py-3 border-2 border-blue-500 rounded-full text-blue-500 font-bold hover:bg-blue-500/10 transition-colors"
            >
              CV
            </motion.a>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
        >
          <FiChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <TracingBeam>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Featured Innovations
              <span className="block mt-2 text-lg sm:text-xl text-blue-500 dark:text-blue-300 font-normal">
                Projects That Push Boundaries
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className="relative group bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-2 shadow-md sm:shadow-2xl"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-24 bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#9333EA_50%,#3B82F6_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-spin-slow" />
                  </div>
                  <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  {project.achievement && (
                    <div className="absolute top-4 right-4 flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow hover:shadow-emerald-500/20 transition-shadow">
                      <FiAward className="mr-1 animate-pulse" />
                      {project.achievement}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gray-200 dark:bg-gray-900/50 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all flex items-center text-gray-800 dark:text-gray-200"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.link}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group/link"
                  >
                    Discover Implementation
                    <svg
                      className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <div className="absolute inset-0 pointer-events-none border-2 border-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </TracingBeam>
      </section>

      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className="text-3xl sm:text-4xl mb-3 text-blue-600 dark:text-blue-400">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 dark:text-white">{skill.name}</h3>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                  {skill.level}% Proficiency
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-12 pl-4 sm:pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 sm:-left-3 top-2" />
                <div className="p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <FiBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                    {exp.company} • {exp.duration}
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700/50 rounded-full text-xs sm:text-sm text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="freelance" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <TracingBeam>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Freelance Excellence
              <span className="block mt-2 text-lg sm:text-xl text-orange-600 dark:text-orange-300 font-normal">
                Trusted by Industry Leaders
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {freelancingProjects.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative group bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.client}</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-300">
                      {project.project}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base mb-4">{project.description}</p>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </TracingBeam>
      </section>

      <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-6 sm:mb-8 pl-4 sm:pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 sm:-left-3 top-3" />
                <div className="p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    {edu.icon}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                    {edu.institution} • {edu.duration}
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FiSend className="text-2xl text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <a
                        href="mailto:skanda.ib123@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                      >
                        skanda.ib123@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiBook className="text-2xl text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/skanda-i-b-317a7a1a5/"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/skanda-ib
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Let's build something amazing..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Skanda I B. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

