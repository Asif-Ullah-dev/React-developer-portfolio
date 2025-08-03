import { motion } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animations/LoopCircularDots.json';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => alert('Form submission error:', error));
  };

  return (
    <section
      id="Contact"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* 🔵 Lottie Background Animation */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie animationData={animationData} loop={true} className="w-full h-full object-cover" />
      </div>

      {/* 🔵 Foreground Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-10 text-purple-400 hover:text-purple-300 transition"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:uasif8900@gmail.com"
            className="text-red-400 bg-red-900/30 hover:bg-red-500 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+923149980234"
            className="text-green-400 bg-green-900/30 hover:bg-green-500 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaPhone size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/asif-ullah-0b2b2a281"        
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 bg-blue-900/30 hover:bg-blue-500 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-blue-800/30 hover:bg-blue-600 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 bg-red-800/30 hover:bg-red-600 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 bg-pink-800/30 hover:bg-pink-500 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-700/30 hover:bg-gray-800 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://wa.me/923149980234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 bg-green-800/30 hover:bg-green-600 hover:text-white p-4 rounded-full transition duration-300 shadow-md"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* 🔵 Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          //onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <input
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white"
            required
          />
          <input
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            autocomplete="tel"
            placeholder="Your Phone"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            autocomplete="off"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 animate-[glowPulse_2s_infinite]"
          >
            REACH OUT
          </button>

          {submitted && (
            <p className="text-center text-green-400 font-semibold animate-pulse">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 16px rgba(139, 92, 246, 1);
          }
        }
      `}</style>
    </section>
  );
}
