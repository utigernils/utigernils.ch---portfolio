import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
    tech: ['React', 'TypeScript', 'Tailwind'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Project Two',
    description: 'Full-stack application with real-time features',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'Project Three',
    description: 'Mobile-first e-commerce platform',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800',
    tech: ['React Native', 'Redux', 'Firebase'],
    links: {
      live: '#',
      github: '#'
    }
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphic rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;