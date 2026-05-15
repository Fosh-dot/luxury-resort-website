import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-bg" />

      <div className="overlay">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Escape Into Paradise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Luxury resort experience inspired by nature.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore Rooms
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
