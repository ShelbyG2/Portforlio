import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded"></div>
      </div>
    </motion.div>
  );
};

export default SectionHeading;