import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact</a>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} Simon Eriksson</p>
    </footer>
  );
}

export default Footer;
