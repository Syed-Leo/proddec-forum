import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>PRODDEC</h3>
          <p>
            A collaborative innovation platform for developers, AI enthusiasts,
            and tech visionaries to learn, build, and grow together.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: proddec@community.com</p>
          <p>Phone: +91 98765 *****</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PRODDEC Forum. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;