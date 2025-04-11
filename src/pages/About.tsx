import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Brain, Rocket } from "lucide-react";
import SiteTitle from "../components/SiteTitle";

const About = () => {
  return (
    <div className="relative">
      <SiteTitle title="About" subTitle="Learn more about me">
        <div className="min-h-screen bg-black">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="swiss-card"
              >
                <div className="flex items-start gap-4">
                  <Code className="text-white" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Development</h3>
                    <p className="text-neutral-400">
                      Specializing in modern web technologies and frameworks, with a focus on creating
                      scalable and maintainable solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="swiss-card"
              >
                <div className="flex items-start gap-4">
                  <Palette className="text-white" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Design</h3>
                    <p className="text-neutral-400">
                      Creating intuitive and visually appealing interfaces that enhance user experience
                      and engagement.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="swiss-card"
              >
                <div className="flex items-start gap-4">
                  <Brain className="text-white" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Problem Solving</h3>
                    <p className="text-neutral-400">
                      Approaching challenges with analytical thinking and creative solutions to deliver
                      optimal results.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="swiss-card"
              >
                <div className="flex items-start gap-4">
                  <Rocket className="text-white" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Innovation</h3>
                    <p className="text-neutral-400">
                      Staying at the forefront of technology trends and implementing cutting-edge
                      solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="swiss-card text-center"
            >
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Let's Work Together</h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto tracking-wide">
                I'm always open to discussing new projects and opportunities. Let's create something amazing together.
              </p>
              <a
                href="/contact"
                className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </SiteTitle>
    </div>
  );
};

export default About;
