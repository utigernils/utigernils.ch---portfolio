import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Intelipro = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    if (response && displayedResponse.length < response.length) {
      const timer = setTimeout(() => {
        setDisplayedResponse(response.slice(0, displayedResponse.length + 1));
      }, 20);
      return () => clearTimeout(timer);
    } else if (response && displayedResponse.length === response.length) {
      setTimeout(() => setShowRecommendation(true), 500);
    }
  }, [response, displayedResponse]);


  // simulated api !
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsThinking(true);
    setResponse('');
    setDisplayedResponse('');
    setShowRecommendation(false);
    

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsThinking(false);
    const newResponse = "I analyzed your project and here's what I found: This appears to be a well-structured React application using modern practices. The code organization is clean, and you're effectively using components. You might be interested in Project One, which demonstrates similar architectural patterns and optimization techniques.";
    setResponse(newResponse);
    setDisplayedResponse('');
    setMessage('');
  };

  const handleProjectClick = () => {
    setIsOpen(false);
    navigate('/projects');

    setTimeout(() => {
      const projectElement = document.getElementById('project-one');
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const ThinkingAnimation = () => (
    <div className="swiss-card mb-4 flex items-center gap-2">
      <span className="text-neutral-400">Thinking</span>
      <div className="flex gap-1">
        <span className="thinking-dot w-2 h-2 bg-neutral-400 rounded-full">.</span>
        <span className="thinking-dot w-2 h-2 bg-neutral-400 rounded-full">.</span>
        <span className="thinking-dot w-2 h-2 bg-neutral-400 rounded-full">.</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="ai-button-border rounded-full"
        >
          <div className="bg-black p-4 rounded-full hover:bg-neutral-900 transition-colors">
            <Bot size={24} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="absolute right-0 top-0 h-full w-full max-w-lg bg-neutral-900 ai-modal-slide p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Ask AI about my Projects</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-[calc(100vh-200px)] flex flex-col">
                <div className="flex-1 overflow-y-auto mb-6">
                  {isThinking && <ThinkingAnimation />}
                  {displayedResponse && (
                    <div className="swiss-card mb-4">
                      <p className="text-neutral-200 text-reveal">{displayedResponse}</p>
                    </div>
                  )}
                  {showRecommendation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="swiss-card border-t border-white/10"
                    >
                      <h3 className="text-lg font-bold mb-2">Detected Project:</h3>
                      <button
                        onClick={handleProjectClick}
                        className="w-full group bg-white/5 p-4 hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span>View Project One</span>
                        <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                      </button>
                    </motion.div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-4">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about my projects..."
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/30"
                  />
                  <button
                    type="submit"
                    disabled={isThinking}
                    className={`px-6 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 ${
                      isThinking ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send size={16} />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Intelipro;