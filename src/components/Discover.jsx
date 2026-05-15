import { motion } from "framer-motion";

import "../styles/Discover.css";

function Discover() {
  const discoverItems = [
    {
      title: "Island Adventures",
      text: "Sail across crystal waters and uncover hidden tropical escapes.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Private Dining",
      text: "Curated culinary experiences beneath the stars and beside the sea.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Wellness Retreat",
      text: "Reconnect with serenity through restorative spa and wellness rituals.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="discover">
      <div className="discover-title">
        <p>DISCOVER MORE</p>

        <h2>Curated Journeys Beyond The Stay</h2>
      </div>

      <div className="discover-grid">
        {discoverItems.map((item, index) => (
          <motion.div
            className="discover-card luxury-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="discover-image">
              <img src={item.image} alt="" />
            </div>

            <div className="discover-content">
              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <button>Explore</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Discover;
