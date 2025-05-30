import React from 'react';
import { Carousel } from 'antd';
import imageone from '../images/imageone.png';
import imagetwo from '../images/imagetwo.png';
import imagethree from '../images/imagethree.png';
import {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
  } from '@ant-design/icons';
  import './Main.css';

const contentStyle = {
  height: '20%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width : '100%',
};
const contactSection = {
    backgroundColor: 'grey',
    color: '#000',
    textAlign: 'center',
    padding: '60px 20px',
  };

const paragraphStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#fff',
    fontSize: '18px',
    lineHeight: '1.6',
  };

  const contactCard = {
    background: '#fff',
    padding: '30px',
    margin: '15px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',

  };
  
  const iconStyle = {
    fontSize: '36px',
    color: '#00b7e1',
    marginBottom: '10px',
    transform: 'scaleX(-1)',
  };
  
  const contactFlex = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  
const Main = () => (
<>    
    <Carousel autoplay>
    <div>
      <img src={imageone} alt="Slide 1" style={contentStyle} />
    </div>
    <div>
      <img src={imagetwo} alt="Slide 2" style={contentStyle} />
    </div>
    <div>
      <img src={imagethree} alt="Slide 3" style={contentStyle} />
    </div>
  </Carousel>

<div id="about" style={paragraphStyle}>
<strong>Maxtronics is a dealer of:</strong><br />
* Video Game Consoles, Software and Accessories<br />
* Digital Games and Gift Cards (iTunes, Xbox, Live, PSN, Steam, etc.)<br />
* Electronic Gadgets (AirPods, Chromecast, Drones, Digital Cameras, etc.)<br /><br />
Whether you are a supplier or customer, we would love to talk to you and make some deals.
</div>

<div id="contact" style={contactSection}>
      <h2 style={{ color: '#fff', marginBottom: '40px' }}>CONTACT US</h2>
      <div style={contactFlex}>
        <div style={contactCard}>
          <PhoneOutlined style={iconStyle} />
          <p><strong>TEL:</strong> +1 (646) 830 9000</p>
        </div>
        <div style={contactCard}>
          <MailOutlined style={iconStyle} />
          <p><strong>EMAIL:</strong><br />
            <a href="mailto:sales@maxtronicsonline.com" className="email-link">sales@maxtronicsonline.com</a>
          </p>
        </div>
        <div style={contactCard}>
          <EnvironmentOutlined style={iconStyle} />
          <p><strong>303 Fifth Avenue, Suite 211<br />New York, NY 10016</strong></p>
        </div>
      </div>
    </div>
</>
);
export default Main;