import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate developer focused on creating innovative and user-centric digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="glassmorphic p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <Code className="text-blue-400" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">Development</h3>
                <p className="text-gray-300">
                  Specializing in modern web technologies and frameworks, with a focus on creating
                  scalable and maintainable solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="glassmorphic p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <Palette className="text-purple-400" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">Design</h3>
                <p className="text-gray-300">
                  Creating intuitive and visually appealing interfaces that enhance user experience
                  and engagement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="glassmorphic p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <Brain className="text-green-400" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">Problem Solving</h3>
                <p className="text-gray-300">
                  Approaching challenges with analytical thinking and creative solutions to deliver
                  optimal results.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="glassmorphic p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <Rocket className="text-red-400" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">
                  Staying at the forefront of technology trends and implementing cutting-edge
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="glassmorphic p-8 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;