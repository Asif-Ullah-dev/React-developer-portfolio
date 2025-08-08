import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; //  for internal routing

export default function Research() {
  return (
    <section
      id="Research"
      className="relative py-20 px-6 bg-gradient-to-bl from-zinc-900 via-slate-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background glow 
      <div className="absolute top-0 left-0 w-full h-full bg-violet-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" /> */}
       {/* Full-screen animated background glow */}
  <div className="absolute top-0 left-0 w-full h-full bg-violet-500 opacity-10 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: '#c084fc' }} // violet-400
          transition={{ duration: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 cursor-pointer transition-colors duration-300 hover:text-violet-400"
        >
          Research Work
        </motion.h2>

        <p className="text-gray-300 text-lg sm:text-xl mb-12">
          Highlights of my academic research work in Compter Vision.
        </p>

        {/* Research Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left shadow-xl transition duration-300 mx-auto max-w-3xl"
        >
          <motion.h3
          whileHover={{ scale: 1.05, textShadow: "0px 0px 20px #38bdf8" }} 
          className="text-3xl sm:text-2xl font-extrabold text-yellow-400 mb-4 animate-pulse"
          >
            🖼️ Mathematical Modeling for Image Denoising in Computer Vision.
          </motion.h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Developed a mathematical model to effectively remove noise from images while preserving critical edge details. 
            This approach enhances visual clarity and strengthens feature extraction, enabling more accurate and efficient 
            performance in computer vision tasks such as recognition and analysis.
          </p>

          {/* Code Button */}
          <div className="mt-4">
            <Link
              to="/code" // Change to  route path
              className="inline-block px-5 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full transition"
            >
              View Code
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
