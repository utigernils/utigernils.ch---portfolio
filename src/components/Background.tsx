import React, { useEffect, useRef } from "react";
import "./Background.css";
import { useMouseStore } from "../stores/mouseStore";

const Background: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  const { curX, curY, setTarget, updateCurrent } = useMouseStore();

  useEffect(() => {
    let animationFrameId: number;

    const move = () => {
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      animationFrameId = requestAnimationFrame(() => {
        updateCurrent();
        move();
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      setTarget(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [curX, curY, setTarget, updateCurrent]);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interBubbleRef}></div>
      </div>
    </div>
  );
};

export default Background;