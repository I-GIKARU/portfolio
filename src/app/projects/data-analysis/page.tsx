'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, BarChart3, Brain, Database } from 'lucide-react';

export default function DataAnalysisProject() {
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
                📊 Data Science Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              AI Data Analysis <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Data Science Platform with AI-Powered Insights
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full">FastAPI</span>
              <span className="px-4 py-2 bg-gray-600/20 border border-gray-500/30 text-gray-300 rounded-full">Next.js</span>
              <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 rounded-full">Google Gemini</span>
              <span className="px-4 py-2 bg-slate-600/20 border border-slate-500/30 text-slate-300 rounded-full">Machine Learning</span>
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
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A comprehensive data analysis platform that combines advanced machine learning capabilities with 
                AI-powered insights. The platform enables users to upload datasets, perform statistical analysis, 
                create visualizations, and generate intelligent insights using Google Gemini AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built with FastAPI backend and Next.js frontend, the platform provides a complete workflow 
                from data upload to advanced analytics, featuring drag-and-drop interfaces, real-time processing, 
                and exportable results in multiple formats.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Core Features</h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Drag & drop CSV data upload
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Automated data cleaning & preprocessing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Machine learning analysis & modeling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                  Advanced data visualizations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  AI-powered insights generation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Export results (PDF, CSV, PNG)
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
              <h2 className="text-4xl font-bold text-white mb-4">Platform Screenshots</h2>
              <p className="text-gray-400 text-lg">Data analysis workflow and visualizations</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "/Data Analysis/Screenshot From 2025-09-18 13-10-16.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-10-37.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-10-49.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-11-05.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-11-16.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-12-28.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-12-59.png",
                "/Data Analysis/Screenshot From 2025-09-18 13-13-08.png"
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
                    alt="Data Analysis Platform Screenshot" 
                    className="w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Analysis Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Analysis Capabilities</h2>
              <p className="text-gray-400 text-lg">Comprehensive data science toolkit</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Data Processing",
                  capabilities: ["Automated data cleaning", "Missing value handling", "Outlier detection & removal", "Data type optimization", "Feature engineering", "Data validation & quality checks"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Machine Learning",
                  capabilities: ["Regression analysis", "Classification models", "Clustering algorithms", "Feature importance analysis", "Model performance metrics", "Cross-validation"],
                  color: "from-gray-600 to-slate-600"
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Visualizations",
                  capabilities: ["Interactive charts & graphs", "Statistical distributions", "Correlation matrices", "Time series plots", "3D visualizations", "Export-ready formats"],
                  color: "from-cyan-600 to-blue-700"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Insights",
                  capabilities: ["Automated pattern detection", "Natural language insights", "Trend analysis", "Anomaly identification", "Predictive recommendations", "Statistical significance testing"],
                  color: "from-slate-600 to-gray-700"
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {capability.capabilities.map((cap, capIndex) => (
                      <li key={capIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {cap}
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
                <span>View on GitHub</span>
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
