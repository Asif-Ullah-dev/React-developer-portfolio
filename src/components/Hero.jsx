import { motion } from 'framer-motion';
import profile from '../assets/Images/imageGik.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Player } from '@lottiefiles/react-lottie-player';
import DocumentDropdown from './DocumentDropdown';

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-20 px-6 md:px-20 relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] bg-cyan-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Extended Lottie Background */}
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src={require('../assets/Animations/WaveLoop.json')}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
      </div>

      {/* Left: Text */}
      <div className="flex flex-col items-start text-left z-10 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-white animate-pulse drop-shadow-[0_0_15px_red] hover:drop-shadow-[0_0_20px_cyan]"
        >
          Asif Ullah
        </motion.h1>

        <div className="space-y-2 text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
          <div className="flex flex-col gap-2">
            <motion.span whileHover={{ scale: 1.05 }} className="text-white animate-pulse drop-shadow-[0_0_10px_yellow]">
              <TypeAnimation
                sequence={['Hello,', 1000]}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
                className="text-4xl sm:text-5xl font-bold"
              />
            </motion.span>

            <motion.span whileHover={{ scale: 1.05 }} className="text-white animate-pulse drop-shadow-[0_0_10px_red]">
              <TypeAnimation
                sequence={[2000, "I'm Asif,", 1000]}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
              />
            </motion.span>

            <motion.span whileHover={{ scale: 1.05 }} className="text-white animate-pulse drop-shadow-[0_0_10px_yellow]">
              <TypeAnimation
                sequence={[4000, 'a Full Stack Developer with', 1000]}
                speed={40}
                cursor={false}
                repeat={0}
                wrapper="span"
              />
            </motion.span>

            <motion.span whileHover={{ scale: 1.05 }} className="text-white animate-pulse drop-shadow-[0_0_10px_red]">
              <TypeAnimation
                sequence={[4000, 'expertise in ML and DL.', 1000]}
                speed={40}
                cursor={false}
                repeat={0}
                wrapper="span"
              />
            </motion.span>

            <motion.span whileHover={{ scale: 1.05 }} className="text-white animate-pulse drop-shadow-[0_0_10px_yellow]">
              <TypeAnimation
                sequence={[7500, 'I also work with AWS cloud technologies.', 1000]}
                speed={40}
                cursor={false}
                repeat={0}
                wrapper="span"
              />
            </motion.span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          {/* Add any subtitle or tagline if needed */}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #06b6d4" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#Projects"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition"
          >
            View Projects
          </motion.a>
          <DocumentDropdown />
        </motion.div>
      </div>

      {/* Right: Profile Image (unchanged layout) */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="z-10"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-500 shadow-[0_10px_30px_rgba(0,255,255,0.3)] hover:scale-105 transition duration-500"
        />
      </motion.div>
    </section>
  );
}
