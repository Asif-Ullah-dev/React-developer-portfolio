import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, FaSass, FaBootstrap,
  FaNodeJs, FaPython, FaPhp, FaGitAlt, FaDocker, FaAws,
} from 'react-icons/fa';
import { SiExpress, SiDjango, SiFlask, SiRubyonrails, SiMysql, SiMongodb, SiPostgresql, SiSqlite,
    SiFlutter, SiKubernetes, SiNginx, SiTensorflow, SiRedux, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skillsData = {
  'Frontend': [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400', link: 'https://react.dev' },
    { name: 'Vue.js', icon: <FaVuejs />, color: 'text-green-400', link: 'https://vuejs.org' },
    { name: 'Angular', icon: <FaAngular />, color: 'text-red-600', link: 'https://angular.io' },
    { name: 'SASS', icon: <FaSass />, color: 'text-pink-400', link: 'https://sass-lang.com/' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-600', link: 'https://getbootstrap.com/' },
   
  ],
  'Backend': [
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600', link: 'https://nodejs.org' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-300', link: 'https://expressjs.com' },
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-300', link: 'https://www.python.org' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-900', link: 'https://www.djangoproject.com/' },
    { name: 'Flask', icon: <SiFlask />, color: 'text-white', link: 'https://flask.palletsprojects.com/' },
    { name: 'Ruby on Rails', icon: <SiRubyonrails />, color: 'text-red-500', link: 'https://rubyonrails.org/' },
    { name: 'PHP', icon: <FaPhp />, color: 'text-indigo-500', link: 'https://www.php.net/' },
  ],
  'Database': [
    { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600', link: 'https://www.mysql.com/' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', link: 'https://www.mongodb.com/' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-500', link: 'https://www.postgresql.org/' },
    { name: 'SQLite', icon: <SiSqlite />, color: 'text-indigo-400', link: 'https://www.sqlite.org/' },
  ],
  'Mobile': [
    { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400', link: 'https://flutter.dev/' },
    { name: 'Swift', icon: <i className="devicon-swift-plain text-orange-500"></i>, color: 'text-orange-500', link: 'https://developer.apple.com/swift/' },
    { name: 'Kotlin', icon: <i className="devicon-kotlin-plain colored text-purple-400"></i>, color: 'text-purple-400', link: 'https://kotlinlang.org/' },
  ],
  'Tools & Frameworks': [
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400', link: 'https://git-scm.com/' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500', link: 'https://www.docker.com/' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-400', link: 'https://kubernetes.io/' },
    { name: 'Nginx', icon: <SiNginx />, color: 'text-green-500', link: 'https://www.nginx.com/' },
    { name: 'AWS', icon: <FaAws />, color: 'text-yellow-500', link: 'https://aws.amazon.com/' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-600', link: 'https://www.tensorflow.org/' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500', link: 'https://redux.js.org/' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400', link: 'https://tailwindcss.com/' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white', link: 'https://nextjs.org/' },
  ]
};

export default function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section id="Skills" className="relative py-20 px-6 
             bg-white text-black 
             dark:bg-zinc-900 dark:text-white 
             midnight:bg-[#0f172a] midnight:text-slate-200 
             neon:bg-black neon:text-neon 
             glass:bg-white/10 glass:text-white backdrop-blur-lg">
      <motion.h2
        onClick={() => setShowSkills(!showSkills)}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-8 cursor-pointer hover:text-cyan-400 transition"
      >
        Skills
      </motion.h2>

      {showSkills && (
        <div className="max-w-6xl mx-auto space-y-10">
          {Object.entries(skillsData).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 via-slate-800 to-black p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((skill, idx) => (
                  <a
                    key={idx}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 ${skill.color} hover:bg-white/20 transition transform hover:scale-105 shadow-md`}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
