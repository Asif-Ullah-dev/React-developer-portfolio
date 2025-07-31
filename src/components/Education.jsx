import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';



const cardVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.05 },
  tap: { scale: 1.1, rotate: 1 },
};

export default function Education() {
  return (
    <section
      id="Education"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-900 via-cyan-800 to-blue-700 text-white overflow-hidden"
    >
       {/* Moving Light Pass Layer also i mention below make above class relative  */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  <div className="glow-layer w-full h-full absolute top-0 left-0"></div>
</div>
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-sky-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          whileHover={{ scale: 1.05, color: '#38bdf8' }}
          transition={{ duration: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold mb-8 cursor-pointer transition-colors duration-300 hover:text-cyan-300"
        >
          Education
        </motion.h2>

        <p className="text-lg sm:text-xl text-cyan-100 leading-relaxed mb-12 px-4 sm:px-10">
          A strong academic background blending mathematics, programming, and technology.
        </p>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  {
    title: '🧪 MPhil in Mathematics',
    hoverColor: 'hover:text-teal-300',
    gradient: 'from-purple-500 via-blue-500 to-cyan-500',
    bullets: [
      { label: 'Session', value: '2022 – 2024' },
      { label: 'Institute', value: 'University of Peshawar' },
      { label: 'Focus', value: 'Advance Courses and Research' },
    ],
  },
  {
    title: '🎓 BS in Mathematics',
    hoverColor: 'hover:text-purple-300',
    gradient: 'from-indigo-500 via-fuchsia-500 to-purple-500',
    bullets: [
      { label: 'Session', value: '2018 – 2022' },
      { label: 'Institute', value: 'University of Peshawar' },
      { label: 'Focus', value: 'Linear Algebra, Calculus, Numerical,Probability and statistics' },
    ],
  },
  {
    title: '💻 Full Stack Developer',
    hoverColor: 'hover:text-pink-400',
    gradient: 'from-green-400 via-teal-500 to-blue-500',
    bullets: [
      { label: 'Tools', value: 'HTML, CSS, JS, React, Node.js' },
      { label: 'Projects', value: 'Dynamic web apps & APIs' },
      { label: 'Stack', value: 'MERN' },
    ],
  },
  {
    title: '💾 Diploma in Information Technology (DIT)',
    hoverColor: 'hover:text-yellow-300',
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
    bullets: [
      { label: 'Year', value: '2024 – 2025' },
      { label: 'Institute', value: 'Technical Board' },
      { label: 'Skills', value: 'Networking, Database(SQL), Programing(Python)' },
      
    ],
  },
  {
    title: '🤖 AI & ML Specialization',
    hoverColor: 'hover:text-lime-300',
    gradient: 'from-purple-400 via-indigo-500 to-blue-400',
    bullets: [
        { label: 'Year', value: '2024' },
      { label: 'Institute', value: 'GIK' },
      { label: 'Skills', value: 'Deep Learning, Machine Learning, Python(Tensorflow/Pytorch)' },
    ],
  },
]
.map(({ title, bullets, hoverColor, gradient }, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
              className={`relative p-6 rounded-2xl overflow-hidden cursor-pointer group ${hoverColor} shadow-xl`}
            >
              {/* Gradient BG Layer */}
              <div
                className={`absolute inset-0 z-0 animate-gradient-slide bg-gradient-to-r ${gradient} opacity-30 group-hover:opacity-50 rounded-2xl blur-sm transition-all duration-700`}
              />
             <div className="relative z-10">
  <h4 className="text-xl font-bold mb-3">{title}</h4>
  <ul className="text-cyan-100 text-sm leading-relaxed space-y-2">
    {bullets.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="text-yellow-400 mt-1"
        >
          <FaAngleRight />
        </motion.div>
        <span>
          <span className="font-semibold">{item.label}:</span> {item.value}
        </span>
      </li>
    ))}
  </ul>
</div>


            </motion.div>
          ))}
        </div>
      </motion.div>
        {/* Moving Light Pass Layer — Red + Yellow gradient sweeping across the section */}
<style jsx>{`
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
