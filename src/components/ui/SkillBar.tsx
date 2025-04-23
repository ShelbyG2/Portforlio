import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
}

const SkillBar = ({ name, percentage, color, delay = 0 }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1,
            delay: delay,
            ease: [0.4, 0, 0.2, 1]
          }}
          viewport={{ once: true }}
          className={`h-full rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;