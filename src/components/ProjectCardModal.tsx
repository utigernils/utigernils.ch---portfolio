import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

type ProjectModalProps = {
  project: {
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
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl mx-auto bg-neutral-900 border border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[60vh] bg-black">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={project.gallery[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
            {project.gallery.length > 1 && (
            <>
              <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full transition-colors"
              >
              <ChevronLeft size={24} />
              </button>
              <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full transition-colors"
              >
              <ChevronRight size={24} />
              </button>
            </>
            )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/75 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6 flex-wrap">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">
              {project.title}
            </h2>
            <div className="flex gap-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neutral-400 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neutral-400 transition-colors"
              >
                <Github size={20} />
                Code
              </a>
            </div>
          </div>
            <div className="flex flex-wrap gap-4 mb-6 w-100">
            {project.tech.map((tech, i) => (
              <span
              key={i}
              className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
              {tech}
              </span>
            ))}
            <span
              className={`px-4 py-2 text-sm uppercase ${
              project.state === "Done"
                ? "bg-green-900 text-green-200"
                : project.state === "In Progress"
                ? "bg-yellow-900 text-yellow-200"
                : "bg-blue-900 text-blue-200"
              }`}
            >
              {project.state}
            </span>
            </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Features
              </h3>
              <ul className="space-y-2 text-neutral-400">
                {project.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Description
              </h3>
              <p className="text-neutral-400">{project.long_description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
