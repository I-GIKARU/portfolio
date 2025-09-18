'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, MessageSquare, Smartphone, Zap } from 'lucide-react';

export default function AIChatProject() {
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
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xl font-bold">Back to Portfolio</span>
            </motion.a>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                🤖 AI-Powered Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              AI-Powered <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Real-Time Chat</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Multi-Platform AI Assistant with Voice & Web Interfaces
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full">Next.js</span>
              <span className="px-4 py-2 bg-gray-600/20 border border-gray-500/30 text-gray-300 rounded-full">FastAPI</span>
              <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 rounded-full">Kotlin</span>
              <span className="px-4 py-2 bg-slate-600/20 border border-slate-500/30 text-slate-300 rounded-full">Google Gemini</span>
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <motion.div variants={itemVariants} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A comprehensive AI chat platform featuring both web and mobile interfaces. The web application provides 
                real-time messaging with WebSocket connections, while the Android app offers voice-enabled interactions 
                with speech recognition and text-to-speech capabilities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built with modern technologies across multiple platforms, integrating Google Gemini AI for intelligent 
                responses, conversation memory for context awareness, and real-time communication for seamless user experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Real-time WebSocket messaging
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Voice recognition & text-to-speech
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Google Gemini AI integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                  Conversation memory & context
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Multi-platform (Web + Android)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Phone integration (Android)
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Screenshots Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Application Screenshots</h2>
              <p className="text-gray-400 text-lg">Web and mobile interfaces</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "/Real-Time Chat /Screenshot From 2025-09-18 11-59-51.png",
                "/Real-Time Chat /Screenshot From 2025-09-18 12-00-22.png",
                "/Real-Time Chat /Screenshot From 2025-09-18 12-00-33.png",
                "/Real-Time Chat /photo_2025-09-18_12-01-27.jpg"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-4 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <img 
                    src={image} 
                    alt="AI Chat Application Screenshot" 
                    className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Platform Components</h2>
              <p className="text-gray-400 text-lg">Multi-platform architecture</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Web Platform (React)",
                  technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Backend API (Python)",
                  technologies: ["FastAPI", "WebSocket", "Google Gemini", "Uvicorn"],
                  color: "from-gray-600 to-slate-600"
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Mobile App (Android)",
                  technologies: ["Kotlin", "Jetpack Compose", "TTS/STT", "Material Design"],
                  color: "from-cyan-600 to-blue-700"
                }
              ].map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stack.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {stack.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{stack.title}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-gray-700/30 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center flex-wrap gap-4">
              <a 
                href="https://github.com/I-GIKARU/AI-Chatbot-Assistant" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>Web App GitHub</span>
              </a>
              <a 
                href="https://github.com/I-GIKARU/AI-voice-assistant" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-6 py-3 rounded-full hover:from-gray-700 hover:to-slate-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>Mobile App GitHub</span>
              </a>
              <a 
                href="/" 
                className="border-2 border-gray-500/50 text-white px-8 py-3 rounded-full hover:bg-gray-800/30 transition-all duration-300 flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
