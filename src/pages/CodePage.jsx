import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function CodePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 py-16 sm:py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center space-y-8"
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-violet-300">
          Research Code & Documentation
        </h1>

        {/* Introduction */}
        <motion.p
          className="text-base sm:text-lg text-gray-300 leading-relaxed"
          whileHover={{ scale: 1.02, textShadow: "0px 0px 10px #a78bfa" }}
          transition={{ duration: 0.3 }}
        >
          My research focuses on advanced image denoising techniques using a novel region edge
          detector function combined with median filtering. The model was designed within a
          variational framework and optimized using Euler-Lagrange methods.
        </motion.p>

        {/* Mathematical Model */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-left text-gray-100 text-sm sm:text-base">
          <p className="text-base sm:text-lg text-gray-300 mb-4 font-semibold">
            📐 My variational denoising model is formulated as:
          </p>
          <BlockMath math={String.raw`
            \min_{u} \mathcal{F}(u) = \int_\Omega g(GLCOV(u)) \|\nabla u\| \, dxdy \\
            + \lambda \int_\Omega \left(u - (1-\alpha)u_0 - \alpha M(u_0)\right)^2 dxdy
          `} />
          <div className="mt-4 space-y-2 text-sm sm:text-base">
            <p>▶️ <strong>First term:</strong> Applies a Novel Region Edge Detector (NRED) to preserve edges.</p>
            <p>▶️ <strong>Second term:</strong> Balances the noisy image and median-filtered version.</p>
            <p>▶️ <strong>Parameters:</strong> α ∈ (0,1) adjusts median weight; λ &gt; 0 controls regularization.</p>
          </div>
        </div>

        {/* Contributions, Results, Settings */}
        <div className="text-left space-y-6 px-2 sm:px-4 text-sm sm:text-base text-gray-200">
          <div>
            <p className="font-semibold text-violet-400 text-base sm:text-lg">📌 Key Contributions:</p>
            <ul className="pl-4 list-none space-y-2 mt-2">
              <li>▶️ Developed a variational model preserving edges via regional edge detection.</li>
              <li>▶️ Enhanced denoising using median filtering with detail retention.</li>
              <li>▶️ Used Euler-Lagrange optimization for efficient performance.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-violet-400 text-base sm:text-lg">📊 Evaluation & Results:</p>
            <ul className="pl-4 list-none space-y-2 mt-2">
              <li>▶️ Assessed using PSNR, SSIM, and FSIM metrics.</li>
              <li>▶️ Outperformed ROF and Matta models in quality and structure.</li>
              <li>▶️ Better edge/feature preservation demonstrated quantitatively.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-violet-400 text-base sm:text-lg">⚙️ Experimental Settings:</p>
            <ul className="pl-4 list-none space-y-2 mt-2">
              <li>▶️ Alpha (α): 0.7 for balanced denoising.</li>
              <li>▶️ Lambda (λ): 30 for regularization control.</li>
              <li>▶️ Step size: 0.001 | Iterations: 300</li>
            </ul>
          </div>
        </div>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/Asif-Ullah-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-violet-600 hover:to-pink-500 text-white rounded-full shadow-lg transition duration-300 animate-pulse"
        >
          Visit GitHub Repository (MATLAB Code)
        </motion.a>
      </motion.div>
    </section>
  );
}
