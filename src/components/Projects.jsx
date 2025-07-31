import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
   {
    id: 1,
    title: "Attendence System",
    description: "Attendence system for user to easily login and mark attendence.",
    route: "/project/AttendenceMang"
  },
  {
    id: 2,
    title: "Solar production",
    description: "The project related to real life solar pannel consumption and generation.",
    route: "/project/SolarProduction"
  },
  {
    id: 3,
    title: "Contact Management System",
    description: "A web app that show contact management system. In which you easily add contact numbers of company also add , delete and update that contacts.",
    route: "/project/ContactManagement"
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 via-gray-800 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-300 hover:text-cyan-400 transition duration-300 cursor-pointer mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 shadow-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900 via-slate-800 to-gray-900 hover:shadow-cyan-400/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-cyan-200 mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-6">{project.description}</p>
            <Link
              to={project.route}
              className="inline-block px-4 py-2 border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white rounded-full transition"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
