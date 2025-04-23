import { motion } from "framer-motion";
import { Code, Server, Globe, BookOpen, Briefcase } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="My background and experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate fullstack developer with over 6 years of
              experience building modern web applications. My journey in web
              development started when I built my first website at 15, and I've
              been hooked ever since.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              After graduating with a degree in Computer Science, I've worked
              with startups and established companies, helping them create
              exceptional digital experiences that users love. I specialize in
              React, Node.js, and TypeScript, and I'm always eager to learn new
              technologies.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me contributing to open-source
              projects, writing technical articles, or exploring the outdoors. I
              believe in continuous learning and sharing knowledge with the
              community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Frontend
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Crafting beautiful, responsive user interfaces with React,
                  TypeScript, and modern CSS.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Server className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Backend
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building scalable APIs and services with Node.js, Express, and
                  PostgreSQL.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Globe className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  DevOps
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Setting up CI/CD pipelines and deploying applications to the
                  cloud.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <BookOpen className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Mentor
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sharing knowledge through mentoring, teaching, and technical
                  writing.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                Work Experience
              </h3>

              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Senior Frontend Developer
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      TechCorp Inc. • 2020 - Present
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Fullstack Developer
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Startup Studio • 2018 - 2020
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Junior Developer
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Web Solutions LLC • 2017 - 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
