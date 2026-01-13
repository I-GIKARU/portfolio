'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, Shield, Zap, Brain, AlertTriangle, Database, Monitor, Lock, Activity, X } from 'lucide-react';
import { useState } from 'react';

export default function CybersecurityProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              <span className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full text-red-300 text-sm">
                🛡️ Enterprise Security Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              AI-Powered <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Cybersecurity Agent</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-Grade AI-Driven Cybersecurity Platform with Autonomous Operation
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-red-600/20 border border-red-500/30 text-red-300 rounded-full">Python</span>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full">FastAPI</span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full">LangGraph</span>
              <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 text-green-300 rounded-full">Streamlit</span>
              <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 rounded-full">Google Gemini AI</span>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
              <motion.a
                href="https://github.com/I-GIKARU/ai-cybersecurity-agent"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>View Code</span>
              </motion.a>
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A production-ready AI-powered cybersecurity platform featuring real-time threat detection, 
                automated incident response, and comprehensive security monitoring. Built with FastAPI, LangGraph, 
                and Streamlit for enterprise-scale security operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The system operates autonomously with 95% threat detection accuracy, 2.5-second response times, 
                and daily AI-generated security reports. Features include behavioral anomaly detection, 
                zero-day exploit identification, and automated containment actions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Core Features</h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  AI-Powered Threat Detection (95% accuracy)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Automated Incident Response (2.5s)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Real-time Security Monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Autonomous Daily Reporting (6 AM EAT)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Advanced Threat Hunting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Professional SOC Dashboard
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Performance Metrics</h2>
              <p className="text-gray-400 text-lg">Enterprise-grade security performance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "95%+", label: "Threat Detection Accuracy", color: "from-red-600 to-orange-600" },
                { metric: "2.5s", label: "Average Response Time", color: "from-blue-600 to-cyan-600" },
                { metric: "24/7", label: "Autonomous Monitoring", color: "from-green-600 to-emerald-600" },
                { metric: "40-60%", label: "Cost Reduction", color: "from-purple-600 to-pink-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 text-center"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.metric}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Platform Screenshots</h2>
              <p className="text-gray-400 text-lg">Security dashboard, monitoring interface, and AI analysis</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/AI-Cybersecurity/Screenshot From 2026-01-03 18-49-51.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 18-11-55.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-53-40.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-49-43.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-48-45.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-37-58.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-37-42.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-35-31.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-34-53.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-34-48.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-34-40.png",
                "/AI-Cybersecurity/Screenshot From 2026-01-03 16-34-32.png"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-4 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt="Cybersecurity Platform Screenshot" 
                    className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Security Capabilities</h2>
              <p className="text-gray-400 text-lg">Comprehensive cybersecurity toolkit</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Threat Detection",
                  capabilities: ["Malware Analysis & Behavioral Detection", "Network Intrusion & Traffic Monitoring", "Privilege Escalation Detection", "Data Exfiltration Monitoring", "Cryptocurrency Mining Detection", "Zero-Day Exploit Identification"],
                  color: "from-red-600 to-orange-600"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Incident Response",
                  capabilities: ["File Quarantine with Permission Removal", "Real-time Network Threat Containment", "Malicious Process Termination", "Forensic Evidence Collection", "Multi-channel Security Notifications", "Automated Containment Actions"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Monitoring & Analytics",
                  capabilities: ["Real-time Security Metrics Dashboard", "Executive Security Reporting", "Interactive Charts & Trend Analysis", "System Health Monitoring", "Compliance Audit Logging", "Performance Analytics"],
                  color: "from-green-600 to-emerald-600"
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Autonomous Operation",
                  capabilities: ["Daily AI-Generated Reports (6 AM EAT)", "Continuous 24/7 Security Monitoring", "Automated Email Notifications", "Self-Learning Threat Patterns", "Autonomous Incident Classification", "Scheduled Security Assessments"],
                  color: "from-purple-600 to-pink-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Technical Architecture</h2>
              <p className="text-gray-400 text-lg">Built with modern technologies for enterprise-scale security</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Backend & AI",
                  technologies: ["Python", "FastAPI", "LangGraph", "Google Gemini AI", "PostgreSQL", "Async Processing"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Frontend & Dashboard",
                  technologies: ["Streamlit", "Real-time Updates", "Interactive Charts", "Professional UI", "Responsive Design", "SOC Interface"],
                  color: "from-green-600 to-emerald-600"
                },
                {
                  title: "Security & Operations",
                  technologies: ["SMTP Integration", "Email Automation", "Audit Logging", "Docker Support", "Cloud Deployment", "24/7 Monitoring"],
                  color: "from-purple-600 to-pink-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6"
                >
                  <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-gray-800/50 border border-gray-700/40 rounded-lg px-3 py-2 text-center">
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Value */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Business Value</h2>
              <p className="text-gray-400 text-lg">Enterprise ROI and operational benefits</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Cost Savings (Annual)</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Analyst Time Reduction</span>
                    <span className="text-green-400 font-bold">$200K-400K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Faster Incident Response</span>
                    <span className="text-green-400 font-bold">$100K-200K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance Automation</span>
                    <span className="text-green-400 font-bold">$50K-150K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Downtime Prevention</span>
                    <span className="text-green-400 font-bold">$500K-2M</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Revenue Opportunities</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Enterprise Licenses</span>
                    <span className="text-blue-400 font-bold">$500K-2M</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Managed Services</span>
                    <span className="text-blue-400 font-bold">$100K-500K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Security Consulting</span>
                    <span className="text-blue-400 font-bold">$50K-300K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Training Programs</span>
                    <span className="text-blue-400 font-bold">$25K-100K</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Cybersecurity Platform Screenshot - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
