import { motion } from "framer-motion";
import "../styles/Villas.css";

function Villas() {
  const villas = [
    {
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      title: "Ocean Villa",
      text: "Private paradise with breathtaking sea views.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      title: "Tropical Suite",
      text: "Elegant luxury surrounded by nature.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury Escape",
      text: "Experience comfort in a peaceful environment.",
    },
  ];

  return (
    <section className="villas" id="villas">
      <div className="section-title">
        <h2>Luxury Villas</h2>
        <p>Discover handcrafted spaces designed for serenity.</p>
      </div>

      <div className="villa-container">
        {villas.map((villa, index) => (
          <motion.div
            className="villa-card luxury-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <img src={villa.image} alt="" />

            <div className="villa-content">
              <h3>{villa.title}</h3>

              <p>{villa.text}</p>

              <button>Explore</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Villas;
