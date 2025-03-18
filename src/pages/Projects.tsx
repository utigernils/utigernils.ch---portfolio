import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SiteTitle from '../components/SiteTitle';

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
    <div className="relative">
      <SiteTitle title="Projects" subTitle="My recent and upcoming projects">
    <div className="min-h-[60vh] bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            ProjectCard(project, index)
          ))}
        </div>
      </div>
    </div>
    </SiteTitle>
    </div>
  );
};

export default Projects;