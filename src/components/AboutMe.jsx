import { motion } from 'framer-motion';
import { Player } from "@lottiefiles/react-lottie-player";
import animation from '../assets/Animations/AI Tools.json';

export default function AboutMe() {
  
  return (
    <section
      id="AboutMe"
      className="relative py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white overflow-hidden"
    >
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
  <Player
    autoplay
    loop
    src={animation}
    className="w-[150%] h-[150%] md:w-[100%] md:h-[100%]"
  />
</div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* 3D Scroll & Entry Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 60 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left: Text & Cards */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            whileHover={{ scale: 1.07, textShadow: "0px 0px 15px #ff66ff" }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold mb-6 cursor-pointer transition-colors duration-300 bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.03, textShadow: "0px 0px 12px #00ffff" }}
  className="text-xl sm:text-2xl font-extrabold mb-6 cursor-pointer transition-colors duration-300 bg-gradient-to-r from-green-300 to-pink-400 text-transparent bg-clip-text"
>
  I’m passionate about leveraging my expertise in <span className="text-white font-semibold">mathematics</span>, <span className="text-white font-semibold">deep neural networks</span>, <span className="text-white font-semibold">machine learning</span>, and <span className="text-white font-semibold">full-stack web development</span> to build intelligent systems that solve complex, real-world challenges. <br />
  My goal is to contribute to a fast-moving tech industry by driving innovation, enhancing user experiences, and creating scalable solutions that advance the future of AI and software engineering.
</motion.p>




          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:bg-indigo-800/30 backdrop-blur"
            >
              <h4 className="text-xl font-bold text-indigo-200 mb-2 glow-pink hover:text-pink-300 transition-colors">
                🔢 Mathematical Foundation
              </h4>
              <p className="text-gray-300 text-sm">
                Strong problem-solving skills from years of mathematical study and teaching.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:bg-indigo-800/30 backdrop-blur"
            >
              <h4 className="text-xl font-bold text-indigo-200 mb-2 hover:text-yellow-300 transition-colors">
                🧠 Deep Learning Enthusiast
              </h4>
              <p className="text-gray-300 text-sm">
                Building smart systems using neural networks, transformers, and cutting-edge AI.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
