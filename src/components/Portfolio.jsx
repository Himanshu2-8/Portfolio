import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Settings, Award, BookOpen, Calendar, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const skills = {
    "Programming Languages": ["TypeScript", "JavaScript", "Java", "Python", "C++"],
    "Libraries/Frameworks": ["Next.js", "Node.js", "Express.js", "React"],
    "Tools/Platforms": ["Git", "Postman", "Docker"],
    "Databases": ["PostgreSQL", "MongoDB"]
  };

  const projects = [
    {
      title: "Journeys",
      date: "July 2025",
      description: "A full-stack travel planning application with interactive maps and seamless trip management.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
      highlights: [
        "Integrated Clerk for secure authentication",
        "Google Maps API for dynamic location mapping",
        "UploadThing for image uploads",
        "Responsive UI with custom React components"
      ]
    },
    {
      title: "OncoScan",
      date: "May 2025",
      description: "Machine learning web app for breast cancer malignancy prediction with 96.5% accuracy.",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      highlights: [
        "Support Vector Classifier with 96.5% accuracy",
        "Interactive real-time prediction interface",
        "Comprehensive EDA and feature scaling",
        "Model serialization for deployment"
      ]
    }
  ];

  const achievements = [
    "Solved 150+ problems on LeetCode, CodeChef, and GeeksforGeeks",
    "5-star rating in C++ on HackerRank",
    "CGPA: 8.8/10 in Computer Science with AIML specialization",
    "95.4% in CBSE XII examinations"
  ];

  // Section refs
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);

  // Smooth scroll to section by name
  const scrollToSection = (sectionName) => {
    const refs = {
      hero: heroRef,
      education: educationRef,
      skills: skillsRef,
      projects: projectsRef,
      achievements: achievementsRef
    };
    const sectionRef = refs[sectionName.toLowerCase()];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionName.toLowerCase());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Himanshu Pragyan
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['Education', 'Skills', 'Projects', 'Achievements'].map((item) => (
                <motion.button
                  key={item}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto px-4"
          variants={staggerChildren}
          initial="initial"
          animate={isLoaded ? "animate" : "initial"}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Himanshu Pragyan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Full-Stack Developer & AI/ML Enthusiast
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>New Delhi, India</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              href="mailto:pragyan.himanshu2004@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.a>
            <motion.a
              href="tel:+918700739916"
              className="flex items-center gap-2 bg-blue-600/30 hover:bg-blue-600/50 px-6 py-3 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 8700739916</span>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Code, href: "#", label: "LeetCode" },
              { icon: Award, href: "#", label: "HackerRank" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Education & About Section */}
      <section ref={educationRef} className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education & Background
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Bachelor of Technology</h3>
              </div>
              <p className="text-gray-300 mb-2">Computer Science with AIML specialization</p>
              <p className="text-gray-400 mb-2">Maharaja Agrasen Institute of Technology</p>
              <p className="text-gray-400 mb-4">2023-2027</p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-lg font-semibold">CGPA: 8.8/10</span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {["OOPS", "Algorithms", "Artificial Intelligence", "Machine Learning"].map((course) => (
                    <span key={course} className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">CBSE XII</h3>
              </div>
              <p className="text-gray-300 mb-2">Indraprastha International School</p>
              <p className="text-gray-400 mb-4">2021-2022</p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-lg font-semibold">Percentage: 95.4%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.includes('Programming') && <Code className="w-6 h-6 text-blue-400" />}
                  {category.includes('Libraries') && <Settings className="w-6 h-6 text-cyan-400" />}
                  {category.includes('Tools') && <Settings className="w-6 h-6 text-sky-400" />}
                  {category.includes('Databases') && <Database className="w-6 h-6 text-indigo-400" />}
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <motion.div
                      key={skill}
                      className="bg-white/10 px-3 py-2 rounded-lg text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-blue-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-cyan-400">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Recognition
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 mb-4">
              © 2025 Himanshu Pragyan. Crafted with passion and precision.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="mailto:pragyan.himanshu2004@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;