export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 pb-6 border-b-4 border-blue-600">
          <h1 className="text-5xl font-bold text-blue-900 mb-3">ISAAC GIKARU</h1>
          <p className="text-xl text-gray-600 mb-4">Full-Stack Developer | AI/ML Engineer | Cloud Architect</p>
          <div className="flex justify-center gap-8 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>aizohgikaru@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+254 743 335 552</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔗</span>
              <span>github.com/I-GIKARU</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-gray-200">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Innovative Software Developer and Moringa School graduate with expertise in full-stack development, 
            AI/ML engineering, native Android development, and cloud architecture. Proven track record of building scalable, production-ready 
            applications across multiple platforms including web, native Android with Kotlin & Jetpack Compose, Flutter mobile apps, and cloud infrastructure. Specialized in 
            creating AI-powered solutions, multi-platform applications, and comprehensive productivity tools that 
            solve real-world problems.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-gray-200">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Frontend & Web", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"] },
              { title: "Backend & APIs", skills: ["Python", "FastAPI", "Flask", "Go", "Gin", "Node.js"] },
              { title: "Mobile Development", skills: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Android SDK", "Native Android"] },
              { title: "AI & Machine Learning", skills: ["Google Gemini", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly"] },
              { title: "Cloud & DevOps", skills: ["AWS", "Google Cloud", "Docker", "Nginx", "Git"] },
              { title: "Databases", skills: ["PostgreSQL", "Firebase", "Room Database", "SQLite"] }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-blue-900 font-semibold mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-gray-200">Featured Projects</h2>
          <div className="space-y-6">
            {[
              {
                title: "Soko Kuu - E-Commerce Platform",
                tech: "Flutter • Firebase • Google Auth • Push Notifications",
                description: "Multi-category marketplace mobile application featuring products, services, houses, and rides. Implemented Google Sign-in authentication, shopping cart functionality, payment integration, and real-time push notifications using Firebase ecosystem."
              },
              {
                title: "AI-Powered Real-Time Chat Platform",
                tech: "Next.js • FastAPI • Kotlin • Google Gemini • WebSocket",
                description: "Multi-platform AI assistant with web interface and Android app featuring voice interactions. Built with WebSocket real-time messaging, speech recognition, text-to-speech capabilities, and Google Gemini AI integration for intelligent responses."
              },
              {
                title: "AI Task Management & Productivity Suite",
                tech: "FastAPI • Google Gemini • Multi-Agent AI • Microservices",
                description: "Multi-agent AI platform featuring specialized agents for code review, resume building, finance analysis, and email assistance. Implemented microservices architecture with FastAPI and Google Gemini AI for domain-specific productivity solutions."
              },
              {
                title: "Real Estate Rental Platform",
                tech: "Go • React • Flutter • PostgreSQL • M-Pesa API",
                description: "Full-stack property management system with Go backend, React frontend, and Flutter mobile app. Integrated M-Pesa payment system, JWT authentication, and comprehensive property management features specifically designed for the Kenyan market."
              },
              {
                title: "AI Data Analysis Platform",
                tech: "FastAPI • Next.js • Machine Learning • Data Visualization",
                description: "Full-stack data science platform with drag-and-drop CSV upload, automated data cleaning, machine learning analysis, advanced visualizations, and AI-powered insights generation using Google Gemini AI."
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.tech}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-gray-200">Education</h2>
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-900">Software Development</h3>
            <p className="text-gray-600 mb-2">Moringa School</p>
            <p className="text-gray-700">
              Comprehensive software development program covering full-stack web development, 
              mobile application development, database management, and modern software engineering practices.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-gray-200">Key Achievements</h2>
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
            <ul className="space-y-2 text-gray-700">
              <li>✓ Built 5+ production-ready applications across multiple platforms</li>
              <li>✓ Developed native Android applications using Kotlin and Jetpack Compose</li>
              <li>✓ Integrated advanced AI capabilities using Google Gemini in multiple projects</li>
              <li>✓ Developed multi-agent AI systems for productivity automation</li>
              <li>✓ Implemented payment systems including M-Pesa API integration</li>
              <li>✓ Created cross-platform applications (Web, Native Android, Flutter, Desktop)</li>
              <li>✓ Deployed applications on cloud platforms (AWS, Google Cloud)</li>
            </ul>
          </div>
        </div>

        {/* Back to Portfolio */}
        <div className="text-center mt-10">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
