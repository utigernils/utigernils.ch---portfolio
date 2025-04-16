import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SiteTitle from "../components/SiteTitle";
import Intelipro from "../components/Intelipro";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://backend.utigernils.ch/api/projects"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();

        const transformedProjects = data.map((project) => ({
          title: project.title,
          description: project.short_description,
          long_description: project.long_description,
          features: project.features ? JSON.parse(project.features) : [],
          gallery: project.image_urls ? JSON.parse(project.image_urls) : [],
          tech: project.tags ? JSON.parse(project.tags) : [],
          links: {
            live: project.live_demo_url || "#",
            github: project.github_url || "https://github.com/utigernils",
          },
          state: project.state,
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
            <h2 className="text-4xl font-bold mb-12 tracking-tighter uppercase">
              Recent projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter((project) => project.state === "Done").length >
              0 ? (
                projects
                  .filter((project) => project.state === "Done")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-12 md:col-span-6 swiss-card text-neutral-400"
                >
                  <h2 className="text-lg font-bold uppercase">
                  No completed projects to display yet.
                  </h2>
                </motion.div>
              )}
            </div>
            <h2 className="text-4xl font-bold mb-12 mt-12 tracking-tighter uppercase">
              Projects I'm working on
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter((project) => project.state === "In Progress")
                .length > 0 ? (
                projects
                  .filter((project) => project.state === "In Progress")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-12 md:col-span-6 swiss-card text-neutral-400"
                >
                  <h2 className="text-lg font-bold uppercase">
                  Currently not working on any projects.
                  </h2>
                </motion.div>
              )}
            </div>
            <h2 className="text-4xl font-bold mb-12 mt-12 tracking-tighter uppercase">
              Planned projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter((project) => project.state === "Planned")
                .length > 0 ? (
                projects
                  .filter((project) => project.state === "Planned")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-12 md:col-span-6 swiss-card text-neutral-400"
                >
                  <h2 className="text-lg font-bold uppercase">
                  No projects planned at the moment.
                  </h2>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </SiteTitle>
      <Intelipro />
    </div>
  );
};

export default Projects;
