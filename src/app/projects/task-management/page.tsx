'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, Brain, Code, Mail, DollarSign } from 'lucide-react';

export default function TaskManagementProject() {
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
                🤖 Multi-Agent AI Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              AI Task Management & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Productivity Suite</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Multi-Agent AI Platform for Professional Productivity
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full">FastAPI</span>
              <span className="px-4 py-2 bg-gray-600/20 border border-gray-500/30 text-gray-300 rounded-full">Google Gemini</span>
              <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 rounded-full">AI Agents</span>
              <span className="px-4 py-2 bg-slate-600/20 border border-slate-500/30 text-slate-300 rounded-full">Microservices</span>
            </div>
          </motion.div>

          {/* AI Agent Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Agent Screenshots</h2>
              <p className="text-gray-400 text-lg">Specialized AI agents for different productivity tasks</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  image: "/Task management/Smart Code Review.png",
                  title: "Smart Code Review",
                  link: "https://github.com/I-GIKARU/Smart-Code-Review",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  image: "/Task management/Smart Resume Builder.png",
                  title: "Smart Resume Builder",
                  link: "https://github.com/I-GIKARU/Smart-Resume-Builder",
                  color: "from-gray-600 to-slate-600"
                },
                {
                  image: "/Task management/Personal Finance Analyzer.png",
                  title: "Personal Finance Analyzer",
                  link: "https://github.com/I-GIKARU/Personal-Finance-Analyzer",
                  color: "from-cyan-600 to-blue-700"
                },
                {
                  image: "/Task management/Email Response Assistant.png",
                  title: "Email Response Assistant",
                  link: "https://github.com/I-GIKARU/Email-Response-Assistant",
                  color: "from-slate-600 to-gray-700"
                }
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-4 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <img 
                    src={agent.image} 
                    alt={`${agent.title} Agent`} 
                    className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 mb-4" 
                  />
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{agent.title}</h3>
                    <a 
                      href={agent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 bg-gradient-to-r ${agent.color} text-white rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2 text-sm`}
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Agent Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Agent Capabilities</h2>
              <p className="text-gray-400 text-lg">Specialized functionality for each productivity domain</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Smart Code Review",
                  capabilities: ["AI-powered bug detection", "Security vulnerability scanning", "Automated documentation generation", "Unit test creation", "Performance optimization suggestions", "Multi-language code analysis"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Smart Resume Builder",
                  capabilities: ["Job description analysis", "ATS keyword optimization", "Tailored resume generation", "Cover letter creation", "Resume improvement suggestions", "Multi-format support (PDF/text)"],
                  color: "from-gray-600 to-slate-600"
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Personal Finance Analyzer",
                  capabilities: ["Transaction data analysis", "AI-powered budget generation", "Expense prediction modeling", "Investment recommendations", "Spending categorization", "Financial insights & advice"],
                  color: "from-cyan-600 to-blue-700"
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Email Response Assistant",
                  capabilities: ["Email sentiment analysis", "Professional response generation", "Multi-language translation", "Priority-based email sorting", "Tone & style customization", "Context-aware replies"],
                  color: "from-slate-600 to-gray-700"
                }
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {agent.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{agent.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {agent.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
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
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/I-GIKARU" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>View All Repositories</span>
              </a>
              <a 
                href="/" 
                className="border-2 border-gray-500/50 text-white px-8 py-4 rounded-full hover:bg-gray-800/30 transition-all duration-300 flex items-center space-x-2"
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
