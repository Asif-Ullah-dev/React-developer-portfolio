import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocumentDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const docs = {
    resume: {
      label: 'Resume',
      file: '/resume.pdf',
    },
    europass: {
      label: 'EurPass CV',
      file: '/EuroPass CV-Lg.pdf',
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block text-left animate-pulse"
    >
      {/* Documents Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 
                   hover:from-purple-600 hover:to-cyan-500
                   text-white font-bold rounded-full shadow-lg
                   drop-shadow-md hover:drop-shadow-xl
                   transition-all duration-300 ease-in-out"
      >
        Documents
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute right-0 mt-3 w-56 z-50 flex flex-col gap-2"
          >
            {Object.entries(docs).map(([key, { label, file }]) => (
              <a
                key={key}
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-white/10 backdrop-blur border border-cyan-400 
                           text-cyan-200 rounded-md font-medium 
                           hover:bg-cyan-600 hover:text-white hover:shadow-xl 
                           transition duration-200 ease-in-out"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
