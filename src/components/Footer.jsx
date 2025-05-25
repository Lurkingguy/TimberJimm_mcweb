import React from 'react';
import './Footer.css';
import { FaYoutube, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">TIMBER_JIMM</div>
    <p className="quote">"Your inspirational."</p>
    <div className="social-icons">
      <a href="https://www.youtube.com/@timberblack8"><FaYoutube /></a>
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTiktok /></a>
      <a href="mailto:timberjim0307@gmail.com"><FaEnvelope /></a>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Timberblack. Designed by Timebrblack</p>
      <p>All rights reversed</p>
      <br/>
      <a href="#">Terms of Use</a>
      <a> | </a>
      <a href="#">Privacy Policy</a>
    </div>
  </footer>
);

export default Footer;
