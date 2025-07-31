import { motion } from "framer-motion";

export default function AttendenceMang() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-6"
      >
        Attendance System 🎓
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8"
      >
        A full-featured Flask-based attendance system with both admin and user panels, built using Python, Flask, SQLite, and Bootstrap.
      </motion.p>

      <div className="space-y-6 text-base sm:text-lg max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h2 className="text-xl text-yellow-300 font-bold">🚀 Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-yellow-400">▶️ User Panel</li>
            <ul className="pl-5 space-y-1 text-gray-300">
              <li>🔹 Secure login/register</li>
              <li>🔹 Mark attendance with time</li>
              <li>🔹 Submit leave requests</li>
              <li>🔹 View/edit profile with photo</li>
              <li>🔹 View attendance report</li>
            </ul>

            <li className="text-yellow-400 mt-4">▶️ Admin Panel</li>
            <ul className="pl-5 space-y-1 text-gray-300">
              <li>🔹 Manage users & attendance</li>
              <li>🔹 Approve/reject leave requests</li>
              <li>🔹 Assign grades</li>
              <li>🔹 Filter by date and export</li>
            </ul>

            <li className="text-yellow-400 mt-4">▶️ Grading System</li>
            <p className="text-gray-300 pl-5">
              Grades are calculated based on attendance frequency:
            </p>
            <ul className="pl-5 text-gray-300">
              <li>🔹 26+ days – A</li>
              <li>🔹 20–25 days – B</li>
              <li>🔹 15–19 days – C</li>
              <li>🔹 10–14 days – D</li>
              <li>🔹 &lt;10 days – F</li>
            </ul>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-6"
        >
          <h2 className="text-xl text-yellow-300 font-bold mb-2">🧰 Tech Stack</h2>
          <ul className="pl-5 text-gray-300 space-y-1">
            <li>🔹 Python 3.13.5</li>
            <li>🔹 Flask (Backend)</li>
            <li>🔹 SQLite (Database)</li>
            <li>🔹 Bootstrap 4 + HTML5</li>
            <li>🔹 Jinja2 Templating</li>
          </ul>
        </motion.div>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/Asif-Ullah-dev/Attendance-System.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black font-semibold rounded-full shadow-md transition duration-300 animate-pulse"
        >
          🔗 Visit GitHub Repository
        </motion.a>
      </div>
    </div>
  );
}
