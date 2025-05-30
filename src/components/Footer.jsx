import React from 'react';
import './Footer.css';
import logo from '../images/maxtronics logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Maxtronics Logo" className="logo" />
      </div>
      <div className="footer-text">
        <p><strong>Copyright © 2017 MAXTRONICS</strong><br />ALL RIGHTS RESERVED</p>
      </div>
      <div className="footer-disclaimer">
        <p>
          LOGOS, REGISTERED TRADEMARKS AND PRODUCTS USED ON THIS WEBSITE ARE PROPERTIES OF THEIR RESPECTIVE OWNERS;
          THEY ARE USED HERE FOR REFERENCE ONLY AND DO NOT IMPLY ANY CONNECTION OR RELATIONSHIP BETWEEN MAXTRONICS AND THESE COMPANIES.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
