import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="simple-footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="footer-left">
          © 2025 Maxtronics, Inc
        </div>
        <div className="footer-right">
          118-21 Queens Boulevard, Suite 413, Forest Hills, NY 11375
        </div>
      </div>
    </footer>
  );
};

export default Footer;
