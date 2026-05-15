import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <p>GET IN TOUCH</p>
        <h2>Plan Your Escape</h2>
      </div>

      <div className="contact-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>

        <button>Send Message</button>
      </div>
    </section>
  );
}

export default Contact;
