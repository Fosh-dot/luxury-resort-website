import { motion } from "framer-motion";
import "../styles/Experiences.css";

function Experiences() {
  const experiences = [
    {
      title: "Wellness & Spa",
      text: "Rejuvenate your body and mind with world-class spa therapies inspired by nature.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Fine Dining",
      text: "Experience curated dining with fresh ingredients and ocean-inspired flavors.",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Ocean Adventures",
      text: "Explore crystal waters through diving, sailing, and private island tours.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Private Escapes",
      text: "Secluded spaces designed for privacy, romance, and unforgettable moments.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252551341.jpg?k=f4271bb26e2b1535e980d2d779dc0c97eb3f1e2238f860d42661d9bb644bade9&o=",
    },
  ];

  return (
    <section className="experiences" id="experience">
      <div className="exp-title">
        <p>EXPERIENCES</p>
        <h2>Curated Moments of Luxury</h2>
      </div>

      <div className="exp-grid">
        {experiences.map((item, index) => (
          <motion.div
            className="exp-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="exp-image">
              <img src={item.image} alt="" />
            </div>

            <div className="exp-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
