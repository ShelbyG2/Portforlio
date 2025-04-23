import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import SectionHeading from './ui/SectionHeading';
import SkillBar from './ui/SkillBar';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="My technical expertise and tools I work with"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frontend</h3>
            <div className="space-y-6">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Backend</h3>
            <div className="space-y-6">
              {skillsData.backend.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Other Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.other.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-full py-2 px-4 shadow-md"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;