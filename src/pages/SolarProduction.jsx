import { motion } from "framer-motion";

export default function SolarProduction() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-yellow-400 mb-6 text-center"
      >
        ☀️ Solar Production & Load Prediction
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200"
      >
        <p className="text-yellow-300 font-semibold text-xl">🚩 Project Overview</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 Predicts PV generation and load using real data from SkyElectric and SkyLabs.</li>
          <li>🔹 Forecasts for 10-minute intervals across a 1–4 hour window.</li>
          <li>🔹 Submitted to Kaggle competition, evaluated using MAE.</li>
        </ul>

        <p className="text-yellow-300 font-semibold text-xl">📂 Dataset Information</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 Metadata: system info, capacities, location.</li>
          <li>🔹 Training data for PV generation and load.</li>
          <li>🔹 Test data and sample submission templates provided.</li>
          <li>🔹 Note: Large files available upon request or via Kaggle.</li>
        </ul>

        <p className="text-yellow-300 font-semibold text-xl">💻 Tools & Libraries</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 Python: NumPy, Pandas, Scikit-learn, XGBoost</li>
          <li>🔹 Visualization: Seaborn, Plotly, Folium</li>
          <li>🔹 Preprocessing: One-Hot, Label Encoding, Min-Max Scaling</li>
        </ul>

        <p className="text-yellow-300 font-semibold text-xl">🔍 Methodology</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 EDA: Outliers, correlations, time-series analysis</li>
          <li>🔹 Feature Engineering: Time features, sinusoidal transforms</li>
          <li>🔹 Final model: XGBoost selected after comparison</li>
        </ul>

        <p className="text-yellow-300 font-semibold text-xl">📊 Evaluation Metrics</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 MAE, MSE, R² Score, Relative MAE</li>
          <li>🔹 Cross-validation for robust evaluation</li>
        </ul>

        <p className="text-yellow-300 font-semibold text-xl">🚀 Results</p>
        <ul className="space-y-2 pl-4">
          <li>🔹 High accuracy achieved with XGBoost</li>
          <li>🔹 Final output formatted as Prediction_Result.csv</li>
        </ul>

        <motion.a
          href="https://github.com/Asif-Ullah-dev/Solar-Production-load-Prediction-ML.git"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="block mt-10 w-max mx-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full shadow-lg transition-all duration-300 animate-pulse"
        >
          🔗 View GitHub Repository
        </motion.a>
      </motion.div>
    </div>
  );
}
