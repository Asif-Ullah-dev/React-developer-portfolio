import { motion } from 'framer-motion';

const videos = [
  {
    title: "Python Tutorial",
    tags: ["Python", "Installation", "Method"],
    src: require('../assets/Videos/Pythoninst.mp4'),
    thumbnail: require('../assets/Thumbnails/pythoninst.png'),
  },
  {
    title: "Node.js Tutorial",
    tags: ["Node.js", "Installation", "Method"],
    src: require('../assets/Videos/Nodejsinst.mp4'),
    thumbnail: require('../assets/Thumbnails/nodejs.png'),
  },
  {
    title: "FBR Registration and Online Pyement",
    tags: ["FBR", "Registration", "Method"],
    src: require('../assets/Videos/Fbrinst.mp4'),
    thumbnail: require('../assets/Thumbnails/fbr.png'),
  },
];

export default function Video() {
  return (
    <section
      id="Videos"
      className="py-20 px-6 bg-gradient-to-br from-purple-950 via-rose-900 to-fuchsia-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-pink-300 mb-12 hover:text-pink-400 transition cursor-pointer"
      >
        My Video Tutorials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl shadow-2xl bg-gradient-to-br from-rose-800 via-fuchsia-800 to-purple-900 p-4 hover:shadow-pink-500/40 transition duration-300"
          >
            {/* Uncomment when video or image is added */}
            { <video
              src={video.src}
              poster={video.thumbnail}
              controls
              className="w-full rounded-lg mb-4"
            /> }

            { /*<img
              src={video.thumbnail}
              alt="Video thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-4"
            /> */}

            <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>

            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/10 text-pink-200 px-3 py-1 rounded-full hover:bg-white/20 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
