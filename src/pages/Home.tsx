import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code, Rocket, Palette } from 'lucide-react';

const Home = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        const opacity = Math.max(0, 1 - scrolled / 500);
        backgroundRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div ref={backgroundRef} className="fixed top-0 left-0 w-full h-screen z-0">
        <iframe
          src="https://backend.utigernils.ch/media/background"
          className="w-full h-full border-0"
          title="Interactive Background"
        />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-center uppercase"
          >
            Utigernils
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center mb-8 tracking-wide"
          >
            Full Stack Developer & Designer
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="animate-bounce"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>

        <div className="relative min-h-screen bg-black">
          <div className="max-w-[1400px] mx-auto px-4 py-32">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid-container mb-32"
            >
              <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
                  Digital Craft
                </h2>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto tracking-wide">
                  Creating precise, functional, and innovative digital solutions with Swiss design principles.
                </p>
              </div>
            </motion.div>

            <div className="grid-container">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-4 swiss-card"
              >
                <Code className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Development</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Clean, efficient, and maintainable code that powers scalable solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-4 swiss-card"
              >
                <Palette className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Design</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Functional aesthetics that enhance user experience and engagement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-12 md:col-span-4 swiss-card"
              >
                <Rocket className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Innovation</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Forward-thinking solutions that push technological boundaries.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-32 grid-container"
            >
              <div className="col-span-12 md:col-span-8 md:col-start-3 swiss-card text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Start a Project</h2>
                <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto tracking-wide">
                  Transform your vision into reality with precision and purpose.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;