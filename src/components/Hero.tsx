import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, FileText, ArrowDown } from 'lucide-react';
import Button from './ui/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const typedText = useTypewriter({
    words: ['Njenga W', 'a Fullstack Developer'],
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetween: 2000,
  });

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-blue-200 dark:bg-blue-900 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-1/4 h-1/4 bg-purple-200 dark:bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Fullstack Developer
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400 inline-block min-w-[8ch]">{typedText}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                I build exceptional, high-performance web applications that deliver outstanding user experiences. Specializing in React, Node.js, and modern full-stack development.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleScrollToProjects} primary>
                  View My Work
                </Button>
                <Button href="/resume.pdf" download>
                  <FileText className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex items-center mt-8 space-x-4">
                <a 
                  href="https://github.com/shelbyG2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub profile"
                >
                  <GitHub className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage}
                alt="Njenga W" 
                className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-500 dark:text-gray-400"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;