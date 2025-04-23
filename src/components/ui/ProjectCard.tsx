import { ExternalLink, Github as GitHub } from 'lucide-react';
import { ProjectType } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category, index) => (
            <span 
              key={index}
              className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub repository"
              >
                <GitHub className="h-5 w-5" />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <button
          onClick={onClick}
          className="mt-6 w-full py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;