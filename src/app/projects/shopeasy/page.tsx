'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Smartphone, Database, Zap , X } from 'lucide-react';
import { useState } from 'react';
export default function ShopEasyProject() {
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
              alt="Project Screenshot - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      )}
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
                🏢 B2B Marketplace Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              ShopEasy - <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">B2B Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connecting Retailers and Suppliers Across Kenya's Supply Chain
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full">React.js</span>
              <span className="px-4 py-2 bg-gray-600/20 border border-gray-500/30 text-gray-300 rounded-full">Kotlin</span>
              <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 rounded-full">Jetpack Compose</span>
              <span className="px-4 py-2 bg-slate-600/20 border border-slate-500/30 text-slate-300 rounded-full">Next.js</span>
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
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                ShopEasy is a comprehensive B2B marketplace platform that connects retailers and suppliers across Kenya's supply chain ecosystem. 
                The platform bridges the gap from factory floor to corner shop through an intelligent, unified system.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built with React.js web portal, Android mobile application, and Next.js company website, ShopEasy provides 
                multi-role dashboards, secure authentication, and complete order management for modern businesses.
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
                  Web portal connecting retailers and suppliers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Android mobile app for B2B marketplace
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Multi-role dashboards (suppliers, retailers, admins)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                  Secure authentication and payment systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Real-time analytics and order management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Company portfolio website
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
              <p className="text-gray-400 text-lg">Explore the user interface and features</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "/shopeasy/photo_2026-01-17_10-56-31.jpg",
                "/shopeasy/photo_2026-01-17_10-56-42.jpg",
                "/shopeasy/photo_2026-01-17_10-56-46.jpg",
                "/shopeasy/photo_2026-01-17_10-56-49.jpg",
                "/shopeasy/photo_2026-01-17_10-56-52.jpg",
                "/shopeasy/photo_2026-01-17_10-56-55.jpg",
                "/shopeasy/photo_2026-01-17_10-56-57.jpg"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-4 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer relative"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt="ShopEasy App Screenshot" 
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

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Technical Stack</h2>
              <p className="text-gray-400 text-lg">Technologies powering the application</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Mobile Framework",
                  technologies: ["Flutter", "Dart", "Material Design"],
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Backend & Storage",
                  technologies: ["Firebase", "Cloud Firestore", "Firebase Storage"],
                  color: "from-gray-600 to-slate-600"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Features & Integration",
                  technologies: ["Google Auth", "Push Notifications", "Deep Linking"],
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
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/I-GIKARU/sokokuu" 
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
              alt="Project Screenshot - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      )}
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
              alt="Soko Kuu E-Commerce Application Screenshot - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
