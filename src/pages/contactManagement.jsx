import { motion } from "framer-motion";

export default function ContactManagement() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center space-y-6"
      >
        <motion.h1
          whileHover={{ scale: 1.05, textShadow: "0px 0px 20px #38bdf8" }}
          className="text-3xl sm:text-4xl font-extrabold text-cyan-300 mb-4 animate-pulse"
        >
          📇 Contact Management System
        </motion.h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          A professional Flask-based web application to manage personal or business contacts with a beautiful UI, animations, sidebar navigation, and powerful features like CSV import/export, dark mode, and priority-based filtering.
        </p>

        {/* Features */}
        <div className="text-left text-base sm:text-lg text-gray-200 space-y-4 px-4 sm:px-10">
          <p className="text-yellow-400 text-xl font-semibold">🚀 Features</p>
          <ul className="space-y-2 pl-4">
            <li>🔹 Add, view, edit, and delete contacts</li>
            <li>🔹 Animated, responsive UI with glowing headers & styled sidebar</li>
            <li>🔹 Dark mode toggle with persistent theme</li>
            <li>🔹 CSV Export for one-click backup of your data</li>
            <li>🔹 CSV Import for bulk uploading contacts</li>
            <li>🔹 Sidebar navigation: Dashboard, Leads, Deals, and Accounts</li>
            <li>🔹 Styled table with priority badges and hover effects</li>
            <li>🔹 Flash messages for real-time feedback</li>
            <li>🔹 Mobile responsive layout</li>
          </ul>

          {/* Tech Stack */}
          <p className="text-yellow-400 text-xl font-semibold pt-6">🛠️ Built With</p>
          <ul className="space-y-2 pl-4">
            <li>🔹 Python (Flask)</li>
            <li>🔹 HTML5 + CSS3</li>
            <li>🔹 Jinja2 Templating</li>
            <li>🔹 SQLite3 + SQLAlchemy ORM</li>
            <li>🔹 Chart.js (for future dashboards)</li>
            <li>🔹 JavaScript (for filtering, dark mode, charts)</li>
          </ul>
        </div>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/Asif-Ullah-dev/Contact-Management-System.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white rounded-full shadow-lg transition-all duration-300 animate-pulse"
        >
          Visit GitHub Repository
        </motion.a>
      </motion.div>
    </div>
  );
}
