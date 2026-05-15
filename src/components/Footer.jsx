import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>LUXURY</h2>

          <p>
            Escape into refined tranquility where timeless elegance meets
            unforgettable experiences.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>

          <a href="/">Home</a>

          <a href="#experience">Experiences</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>Phurtune7@gmail.com</p>

          <p>+234 810 314 0195</p>

          <p>Lagos, Nigeria</p>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>

          <p>Receive curated stories, offers, and experiences.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Your email" />

            <button>Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Luxury Resort. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
