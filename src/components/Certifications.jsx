import { motion } from 'framer-motion';
//import { FaCertificate } from 'react-icons/fa';
import { useState, useRef } from 'react';


import gikiLogo from '../assets/Images/Giki.png';
import nvidiaLogo from '../assets/Images/nvidia.png';
import navttcLogo from '../assets/Images/navvtac.jpeg';
import certiportLogo from '../assets/Images/certiport.png';
import courseraLogo from '../assets/Images/coursera.jpeg';


const certs = [
  {
    name: 'Deep Neural Networks (GIKI)',
    org: 'GIKI',
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-pink-500/40',
    button: 'bg-pink-500 hover:bg-pink-600',
    logo: gikiLogo,
    link: '#',
  },
  {
    name: 'Deep Learning (NVIDIA)',
    org: 'NVIDIA',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-cyan-500/40',
    button: 'bg-cyan-500 hover:bg-cyan-600',
    logo: nvidiaLogo,
    link: '#',
  },
  {
    name: 'Generative AI (NVIDIA)',
    org: 'NVIDIA',
    color: 'from-green-500 to-emerald-500',
    glow: 'shadow-emerald-500/40',
    button: 'bg-emerald-500 hover:bg-emerald-600',
    logo: nvidiaLogo,
    link: '#',
  },
  {
    name: 'Full Stack Development (NAVTTC)',
    org: 'NAVTTC',
    color: 'from-indigo-500 to-blue-600',
    glow: 'shadow-indigo-500/40',
    button: 'bg-indigo-500 hover:bg-indigo-600',
    logo: navttcLogo,
    link: '#',
  },
  {
    name: 'JavaScript Specialist (Certiport)',
    org: 'Certiport',
    color: 'from-yellow-400 to-orange-500',
    glow: 'shadow-orange-400/40',
    button: 'bg-yellow-400 hover:bg-orange-500 text-black',
    logo: certiportLogo,
    link: '#',
  },
  {
    name: 'AWS Networking (Coursera)',
    org: 'Coursera',
    color: 'from-red-500 to-green-500',
    glow: 'shadow-green-500/40',
    button: 'bg-red-500 hover:bg-green-600',
    logo: courseraLogo,
    link: '#',
  },
];

export default function Certifications() {
  const [showFor, setShowFor] = useState(null);
  const msgTimer = useRef();

  return (
    <section
      id="Certifications"
       className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white overflow-hidden"
    >

      {/* Moving Light Pass Layer also i mention below make above class relative  */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  <div className="glow-layer w-full h-full absolute top-0 left-0"></div>
</div>



      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-violet-300 mb-12 cursor-pointer hover:text-violet-400 transition duration-300"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.06 }}
            className={`rounded-xl border border-white/10 bg-gradient-to-br ${cert.color} text-white p-6 backdrop-blur-md transition duration-300 shadow-lg hover:shadow-2xl ${cert.glow}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={cert.logo} alt={cert.org} className="w-8 h-8 rounded-full" />
              <h3 className="text-lg font-bold">{cert.name}</h3>
            </div>

            <p className="text-sm text-white/80 mb-4">Issued by: {cert.org}</p>
            {showFor === index && (
  <p className="mb-2 text-amber-300 text-sm">
    Access restricted. please contact the author to request permission.
  </p>
)}


<a
  href={cert.link}
  onClick={(e) => {
    e.preventDefault();
    setShowFor(index);               // show message for this card
    clearTimeout(msgTimer.current);  // reset auto-hide timer
    msgTimer.current = setTimeout(() => setShowFor(null), 2500);
  }}
  className={`inline-block mt-2 px-4 py-2 text-sm rounded-full transition duration-300 animate-[glowPulse_2s_infinite] ${cert.button}`}
>
  View Certificate
</a>



          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 16px rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>
      {/* Moving Light Pass Layer — Red + Yellow gradient sweeping across the section */}
<style>{`
  @keyframes glow-slide {
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    10% {
      opacity: 0.7;
    }
    50% {
      transform: translateX(0%);
      opacity: 1;
    }
    90% {
      opacity: 0.6;
    }
    100% {
      transform: translateX(150%);
      opacity: 0;
    }
  }

  .glow-layer {
    background: linear-gradient(
      115deg,
      rgba(255, 255, 0, 0.15),
      rgba(255, 0, 0, 0.4),
      rgba(255, 255, 0, 0.15)
    );
    filter: blur(80px);
    mix-blend-mode: screen;
    animation: glow-slide 6s ease-in-out infinite alternate;
  }
`}</style>


    </section>
  );
}
