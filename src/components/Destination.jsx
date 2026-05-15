import { motion } from "framer-motion";
import "../styles/Destination.css";

function Destination() {
  return (
    <section className="destination" id="destination">
      <motion.div
        className="destination-image"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop"
          alt=""
        />
      </motion.div>

      <motion.div
        className="destination-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="small">THE DESTINATION</p>

        <h2>
          A private island escape where ocean, sky, and serenity become one.
        </h2>

        <p className="desc">
          Nestled in untouched waters, this sanctuary is designed for complete
          escape. Every moment is shaped by nature — from sunrise over calm seas
          to evenings under endless skies. This is not just a destination, it is
          a feeling of stillness, privacy, and timeless luxury.
        </p>

        <button>EXPLORE LOCATION</button>
      </motion.div>
    </section>
  );
}

export default Destination;
