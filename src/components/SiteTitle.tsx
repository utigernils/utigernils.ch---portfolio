import React from "react";
import Background from "./Background";
import { motion } from "framer-motion";
import { useRef } from "react";
interface SiteTitleProps {
  title: string;
  subTitle: string;
}

const SiteTitle: React.FC<SiteTitleProps & { children?: React.ReactNode }> = ({ title, subTitle, children }) => {

  const backgroundRef = useRef(null);

  return (
    <div>
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-[40vh] z-0"
      >
        <Background />
      </div>

      <div className="relative z-10">
        <div className="h-[40vh] pt-20 bg-transparent flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tighter uppercase">
                {title}
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto tracking-wide">
                {subTitle}
              </p>
            </motion.div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SiteTitle;
