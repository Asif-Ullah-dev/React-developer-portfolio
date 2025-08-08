import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaFlask,
  FaProjectDiagram,
  FaTools,
  FaCertificate,
  FaVideo,
  FaEnvelope,
  //FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //const [showSearch, setShowSearch] = useState(false);

  const sections = [
    { name: "Home", icon: <FaHome /> },
    { name: "About Me", icon: <FaUser /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Research", icon: <FaFlask /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Skills", icon: <FaTools /> },
    { name: "Certifications", icon: <FaCertificate /> },
    { name: "Videos", icon: <FaVideo /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px #0ff" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Asif Ullah
        </motion.h1>

        {/* Search bar 
        <div className="flex items-center gap-4">
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-white/10 border border-cyan-400 placeholder-white text-sm text-white outline-none"
            />
          )}
          <motion.button
            whileHover={{ scale: 1.3, color: "#06b6d4" }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-cyan-400 transition"
          >
            <FaSearch />
          </motion.button>
        </div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 text-sm font-medium items-center">
          {sections.map((section) => (
            <li key={section.name} className="flex flex-col items-center group">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                href={`#${section.name.replace(/\s+/g, "")}`}
               className="group flex flex-col items-center gap-1 px-4 py-2 rounded-full border border-transparent bg-black/40 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-600 active:shadow-red-500 active:bg-cyan-500"
              //className="group flex flex-col items-center gap-1 text-white hover:text-cyan-400 hover:drop-shadow-md transition-all duration-300"

              >
                {section.icon}
                <span>{section.name}</span>
              </motion.a>
            </li>
          ))}
        </ul>

       {/* Mobile Menu Toggle */}
<button
  className="md:hidden text-white text-2xl"
  onClick={() => setIsOpen(!isOpen)}
>
  ☰
</button>
</div>

{/* 🔄 Mobile Sidebar Menu (No Icons + Right Aligned + Compact) */}
{isOpen && (
  <div className="fixed top-14 right-2 w-fit max-w-[180px] bg-black/90 p-2 rounded-lg z-50 shadow-lg md:hidden">
    <ul className="flex flex-col gap-2 items-end">
      {sections.map((section) => (
        <li key={section.name} className="w-full">
          <a
            href={`#${section.name.replace(/\s+/g, "")}`}
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-end px-4 py-2 text-sm rounded-full bg-white/10 border border-white/10 hover:bg-cyan-600 transition whitespace-nowrap"
          >
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </motion.nav>
  );
}
