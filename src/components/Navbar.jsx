
// import React from 'react';

// import logo from '../images/maxtronics logo.png'; 
// import './Navbar.css'; 

// function Navbar() {
//   return (
//     <>
//     <nav className="navbar">
//       <img src={logo} alt="Maxtronics Logo" className="logo" />
//       <div className="nav-links">
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </nav>
//     <hr />
//     </>
//   ) ;
// }

// export default Navbar;


import React from 'react';
import { Row, Col, Space } from 'antd';
import logo from '../images/maxtronics logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <Row
        align="middle"
        justify="space-between"
        gutter={[16, 16]}
        className="navbar-row"
      >
        <Col xs={24} sm={24} md={6}>
          <img src={logo} alt="Maxtronics Logo" className="navbar-logo" />
        </Col>

        <Col xs={24} sm={24} md={18} className="navbar-links">
          <Space
            size="large"
            direction="horizontal"
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <a href="#about" className="navbar-link">
              About
            </a>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;


    