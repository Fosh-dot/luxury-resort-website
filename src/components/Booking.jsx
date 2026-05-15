import { motion } from "framer-motion";
import "../styles/Booking.css";

function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-title">
        <p>RESERVATIONS</p>
        <h2>Plan Your Stay</h2>
      </div>

      <motion.div
        className="booking-box"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="form-row">
          <div className="field">
            <label>Check In</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Check Out</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Guests</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>

          <div className="field">
            <label>Villa Type</label>
            <select>
              <option>Ocean Villa</option>
              <option>Tropical Suite</option>
              <option>Luxury Escape</option>
            </select>
          </div>
        </div>

        <button className="book-btn">Check Availability</button>
      </motion.div>
    </section>
  );
}

export default Booking;
