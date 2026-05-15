import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Villas from "../components/Villas";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <Hero />
      <Destination />
      <Villas />
      <About />
      <Experiences />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
