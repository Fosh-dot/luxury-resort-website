import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="experience">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
          alt=""
        />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="small-text">EXPERIENCE LUXURY</p>

        <h2>A sanctuary crafted for unforgettable moments.</h2>

        <p className="about-description">
          Discover breathtaking spaces where modern elegance meets tropical
          serenity. Designed for comfort, privacy, and unforgettable
          experiences.
        </p>

        <Link to="/discover" className="discover-btn">
          Discover More
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
