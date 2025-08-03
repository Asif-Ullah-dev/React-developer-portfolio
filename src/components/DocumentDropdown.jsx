import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocumentDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  // close dropdown if clicked outside
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
      label: 'EuroPass',
      file: '/EuroPass CV-Lg.pdf',
    },
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setDropdownOpen((o) => !o)}
        className="px-3 py-2 bg-gradient-to-r from-red-500 to-yellow-400 
                   text-white font-bold rounded-full shadow-lg 
                   hover:from-yellow-400 hover:to-red-500 
                   hover:shadow-yellow-300 transition-all duration-300 
                   focus:outline-none focus:ring-4 focus:ring-yellow-200"
      >
        Documents
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="absolute mt-4 left-1/5 transform -translate-x-1/5 w-max" 
          >
            <div className="flex flex-row gap-2 flex-wrap justify-center">
              {Object.entries(docs).map(([key, { label, file }], idx) => (
                <a
                  key={key}
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3 rounded-full text-white font-semibold text-sm
                    bg-gradient-to-r ${idx === 0
                      ? 'from-red-600 to-yellow-400'
                      : 'from-yellow-400 to-red-600'
                    }
                    hover:shadow-lg hover:shadow-yellow-400 
                    transition duration-300 ease-in-out`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
