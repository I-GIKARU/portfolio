'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, Smartphone, Bot, MessageCircle, X, Zap, Shield, Settings } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppAutoReplyProject() {
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

  const screenshots = [
    '/whatsreply/photo_2026-01-13_18-50-45.jpg',
    '/whatsreply/photo_2026-01-13_18-50-49.jpg',
    '/whatsreply/photo_2026-01-13_18-50-52.jpg',
    '/whatsreply/photo_2026-01-13_18-50-55.jpg',
    '/whatsreply/photo_2026-01-13_18-50-59.jpg'
  ];

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
              className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xl font-bold">Back to Portfolio</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-2xl h-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="WhatsApp Auto-Reply Screenshot"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              AI-Powered WhatsApp Auto-Reply System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Production-ready AI assistant that automatically responds to WhatsApp messages using true background processing. 
              Features RemoteInput integration for seamless replies without UI interaction.
            </p>
          </motion.div>

          {/* Project Description */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  This innovative Android application revolutionizes WhatsApp business communication by providing intelligent, 
                  automated responses without any user intervention. Built specifically for real estate businesses, it handles 
                  customer inquiries with context-aware AI responses while maintaining professional communication standards.
                </p>
                <p>
                  The system leverages advanced Android accessibility services and notification listeners to detect incoming 
                  WhatsApp messages, processes them through a sophisticated AI pipeline using LangGraph and Google Gemini, 
                  then automatically sends contextually appropriate replies using WhatsApp's native RemoteInput system.
                </p>
                <p>
                  What makes this system unique is its ability to operate completely in the background without opening 
                  WhatsApp's interface, providing true automation that doesn't interrupt the user's workflow while maintaining 
                  high-quality, business-appropriate responses with real estate pricing and availability information.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">True Background Replies</h3>
                </div>
                <p className="text-gray-300">RemoteInput integration enables replies without opening WhatsApp UI</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center mb-4">
                  <Bot className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">AI-Powered Responses</h3>
                </div>
                <p className="text-gray-300">3-second response time with intelligent context understanding</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Smart Filtering</h3>
                </div>
                <p className="text-gray-300">Confidence-based filtering (50-95%) with conversation queuing</p>
              </div>
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Android', 'Kotlin', 'LangGraph', 'FastAPI', 'Jetpack Compose', 'Google Gemini AI', 'RAG Systems'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Screenshots */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`WhatsApp Auto-Reply Screenshot ${index + 1}`}
                    className="w-full h-80 object-contain bg-gray-800 rounded-lg border border-gray-700/30 hover:border-green-500/50 transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">3s</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Background Processing</div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://github.com/I-GIKARU/whatsapp-ai-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
