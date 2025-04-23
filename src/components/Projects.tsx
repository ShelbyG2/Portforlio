import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';
import ProjectModal from './ui/ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const filteredProjects = filter
    ? projectsData.filter(project => project.categories.includes(filter))
    : projectsData;
    
  const categories = Array.from(
    new Set(projectsData.flatMap(project => project.categories))
  );
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Projects" 
          subtitle="Recent work and case studies"
        />
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard 
                project={project}
                onClick={() => setSelectedProject(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProject !== null && (
        <ProjectModal 
          project={projectsData[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;