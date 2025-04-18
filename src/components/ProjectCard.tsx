import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectCardModal";

type Project = {
  title: string;
  description: string;
  long_description: string;
  features: string[];
  gallery: string[];
  tech: string[];
  links: {
    live: string;
    github: string;
  };
  state: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="swiss-card overflow-hidden p-0"
      onClick={() => setIsModalOpen(true)}
      >
      <img
        src={project.gallery[0]}
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
      {isModalOpen && (
      <ProjectModal
        project={project}
        onClose={() => {setIsModalOpen(false)}}
      />
      )}
    </div>
  );
};

export default ProjectCard;
