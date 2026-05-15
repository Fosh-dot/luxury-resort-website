import { useState } from "react";
import { motion } from "framer-motion";

import "../styles/Testimonials.css";

function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  const reviews = [
    {
      name: "Sophia Williams",
      text: "Every detail felt intentional. The atmosphere, service, and privacy created one of the most unforgettable experiences we have ever had.",
    },

    {
      name: "Daniel Carter",
      text: "The ocean views were breathtaking. It truly felt like stepping into another world away from noise and stress.",
    },

    {
      name: "Emily Johnson",
      text: "Luxury in its purest form. Peaceful mornings, stunning villas, and exceptional hospitality throughout our stay.",
    },

    {
      name: "Michael Brown",
      text: "From arrival to departure, everything felt seamless and elegant. We cannot wait to return again.",
    },

    {
      name: "Olivia Taylor",
      text: "The resort blended nature and luxury perfectly. Every sunset felt magical and deeply calming.",
    },

    {
      name: "James Anderson",
      text: "An extraordinary escape that felt private, intimate, and beautifully designed in every way.",
    },
  ];

  const visibleReviews = showMore ? reviews : reviews.slice(0, 3);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-title">
        <p>TESTIMONIALS</p>
        <h2>What Our Guests Say</h2>
      </div>

      <div className="testimonial-grid">
        {visibleReviews.map((review, index) => (
          <motion.div
            className="testimonial-card luxury-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <p className="review-text">"{review.text}"</p>

            <h4>{review.name}</h4>
          </motion.div>
        ))}
      </div>

      <div className="testimonial-btn-wrap">
        <button
          className="testimonial-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "View More Reviews"}
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
