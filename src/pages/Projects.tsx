import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SiteTitle from '../components/SiteTitle';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://backend.utigernils.ch/api/projects'); 
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        
        const transformedProjects = data.map(project => ({
          title: project.title,
          description: project.short_description,
          image: project.image_urls ? JSON.parse(project.image_urls)[0] : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
          tech: project.tags ? JSON.parse(project.tags) : [],
          links: {
            live: project.live_demo_url || '#',
            github: project.github_url || 'https://github.com/utigernils'
          }
        }));
        
        setProjects(transformedProjects);
        console.log(transformedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="relative">
        <SiteTitle title="Projects" subTitle="Loading projects...">
          <div className="min-h-[60vh] bg-black flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        </SiteTitle>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative">
        <SiteTitle title="Projects" subTitle="Error loading projects">
          <div className="min-h-[60vh] bg-black flex items-center justify-center">
            <div className="text-red-500">Error: {error}</div>
          </div>
        </SiteTitle>
      </div>
    );
  }

  return (
    <div className="relative">
      <SiteTitle title="Projects" subTitle="My recent and upcoming projects">
        <div className="min-h-[60vh] bg-black">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </SiteTitle>
    </div>
  );
};

export default Projects;