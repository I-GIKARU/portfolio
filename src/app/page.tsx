'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Code, Smartphone, Cloud, Brain, Database, Zap, Palette, Globe, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-gray-700/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Isaac Gikaru
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md border-b border-gray-700/30"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    About
                  </a>
                  <a 
                    href="#skills" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    Skills
                  </a>
                  <a 
                    href="#projects" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    Projects
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Side - Avatar and Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Avatar */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <img 
                    src="/IMG_20250915_162943.jpg" 
                    alt="Isaac Gikaru's Avatar" 
                    className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  />
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-3 sm:-left-4 lg:-left-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="absolute top-1/4 -right-3 sm:-right-4 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                    <Cloud className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-gray-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Isaac Gikaru
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-4 sm:mb-6"
                >
                  <div className="text-xl sm:text-2xl text-white/90 mb-2">
                    Full-Stack Developer
                  </div>
                  <div className="text-lg sm:text-xl text-blue-300">
                    AI/ML Engineer • Cloud Architect
                  </div>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed"
                >
                  I build scalable, production-ready applications across multiple platforms. 
                  From AI-powered systems to full-stack web applications, native Android apps with Kotlin & Jetpack Compose, 
                  Flutter mobile apps, and cloud infrastructure - I deliver comprehensive solutions that solve real-world problems.
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5+</div>
                    <div className="text-white/60 text-xs sm:text-sm">Major Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">8+</div>
                    <div className="text-white/60 text-xs sm:text-sm">Tech Stacks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-white/60 text-xs sm:text-sm">Platforms</div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                >
                  <a 
                    href="#projects" 
                    className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="border-2 border-gray-500/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800/30 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Get In Touch</span>
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="flex justify-center lg:justify-start space-x-6 sm:space-x-8 text-gray-300"
                >
                  {/* Contact info moved to footer - keeping this space for future social links if needed */}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-white/60 text-base sm:text-lg">Technologies I work with to build amazing products</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Frontend & Web",
                skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Backend & APIs",
                skills: ["Python", "FastAPI", "Flask", "Go", "Gin", "Node.js"],
                color: "from-slate-600 to-gray-600"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Development",
                skills: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Android SDK", "Native Android"],
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI & Machine Learning",
                skills: ["Google Gemini", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly"],
                color: "from-gray-700 to-slate-700"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Databases & Storage",
                skills: ["PostgreSQL", "Firebase", "Room Database", "SQLite"],
                color: "from-cyan-600 to-blue-700"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud & DevOps",
                skills: ["AWS", "Google Cloud", "Docker", "Nginx", "Git"],
                color: "from-blue-700 to-indigo-700"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Payment & Integration",
                skills: ["M-Pesa API", "Stripe", "REST APIs", "WebSocket", "JWT"],
                color: "from-slate-700 to-gray-800"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Architecture & Design",
                skills: ["Microservices", "Multi-Agent AI", "MVVM", "Clean Architecture", "Event-Driven"],
                color: "from-gray-600 to-slate-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:bg-gray-800/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-white/60 text-base sm:text-lg">A showcase of my recent work and achievements</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                title: "AI Data Analysis Platform",
                description: "Full-stack data analysis platform with FastAPI backend and Next.js frontend, featuring ML analysis, visualizations, and AI insights.",
                image: "/Data Analysis/Screenshot From 2025-09-18 13-10-16.png",
                tags: ["FastAPI", "Next.js", "ML Analysis"],
                link: "/projects/data-analysis"
              },
              {
                title: "Soko Kuu - E-Commerce Platform",
                description: "Multi-category marketplace with products, services, houses & rides. Features Google auth, payments, and Firebase integration.",
                image: "/e-commerce/photo_2025-09-18_11-00-28.jpg",
                tags: ["Flutter", "Firebase", "Google Auth"],
                link: "/projects/soko-kuu"
              },
              {
                title: "AI-Powered Real-Time Chat",
                description: "Multi-platform AI assistant with web interface (Next.js + FastAPI) and Android app (Kotlin + Compose) featuring voice interactions.",
                image: "/Real-Time Chat /photo_2025-09-18_12-01-27.jpg",
                tags: ["Next.js", "FastAPI", "Kotlin"],
                link: "/projects/ai-chat"
              },
              {
                title: "AI Task Management & Productivity Suite",
                description: "Multi-agent AI platform with code review, resume builder, finance analyzer, and email assistant capabilities.",
                image: "/Task management/Smart Code Review.png",
                tags: ["FastAPI", "Google Gemini", "AI Agents"],
                link: "/projects/task-management"
              },
              {
                title: "Real Estate Rental Platform",
                description: "Full-stack property management system with Go backend, React frontend, Flutter mobile app, and M-Pesa integration.",
                image: "/realEstate/photo_2025-09-18_12-40-39.jpg",
                tags: ["Go", "React", "Flutter"],
                link: "/projects/real-estate"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:border-blue-500/30"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">Featured</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium hover:bg-blue-600/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-white/60 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
            
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <div className="space-y-3 sm:space-y-4 text-white">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <span className="text-base sm:text-lg break-all">aizohgikaru@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">📱</span>
                  <span className="text-base sm:text-lg">+254 743 335 552</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <span className="text-base sm:text-lg break-all">github.com/I-GIKARU</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="/resume"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40">© 2025 Isaac Gikaru. Built with Next.js and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}
