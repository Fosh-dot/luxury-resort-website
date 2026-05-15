import { motion } from "framer-motion";
import "../styles/Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-title">
        <p>VISUAL EXPERIENCE</p>
        <h2>Moments of Paradise</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={image} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
