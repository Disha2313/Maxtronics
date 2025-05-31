import React from 'react';
import { Carousel } from 'antd';
import imageone from '../images/imageone.png';
import imagetwo from '../images/imagetwo.png';
import imagethree from '../images/imagethree.png';
  import './Main.css';

const contentStyle = {
  height: '20%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width : '100%',
};

const paragraphStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#fff',
    fontSize: '18px',
    lineHeight: '1.6',
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

<div id="contact" style={{
      backgroundColor: '#1f2328',
      color: '#fff',
      textAlign: 'center',
      padding: '100px 20px'
    }}>
      <h2 style={{
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>Contact Us</h2>
      <p style={{
        fontSize: '18px',
        color: '#b3b3b3',
        marginBottom: '40px',
        lineHeight: '1.6'
      }}>
        Whether you are a customer or a vendor,<br />
        please do contact us by clicking on the button below.<br />
        We will be sure to get back to you as soon as possible.
      </p>
      <a
        href="mailto:sales@maxtronicsonline.com"
        style={{
          backgroundColor: 'white',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '18px',
          padding: '12px 30px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        Email Us
      </a>
    </div>
</>
);
export default Main;