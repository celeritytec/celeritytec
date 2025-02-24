import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/style.css";

const SocialMedia = () => {
  return (
    <section className="social_media_section">
      <div className="container">
        <div className="heading_container heading_center">
          <h4>Stay Connected</h4>
          <p>Follow us on our social media channels to stay updated with the latest news and trends.</p>
        </div>
        <div className="social_links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;