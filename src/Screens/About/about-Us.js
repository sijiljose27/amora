import React from 'react';
import './AboutUs.css';
import { Container,Row,Col } from 'reactstrap';
import aboutImg from "../../Components/Assets/Images/aboutus.png"
const AboutUs = () => {
  return (
    <Container>
    <div className='about_section'>
    <img src={aboutImg} alt='' className='image_1'/>
    <div className="txt1">
      <h1>About us</h1>
      <p>At Amora, we are passionate about creating unique and high-quality scented candles that transform any space into a sanctuary. We believe that the right scent can help you relax, unwind, and create a mood that reflects your style and personality.</p>
      <p>Our candles are carefully handcrafted using only the best natural ingredients, including soy wax, essential oils, and fragrance oils. Each candle is designed to provide a long-lasting and consistent burn, ensuring that you can enjoy its scent for hours on end.</p>
      <p>Our candles are more than just a product; they are a way to connect with yourself, your loved ones, and the world around you. Whether you're looking to unwind after a long day, set the mood for a special occasion, or simply enjoy the pleasure of a beautiful scent, we invite you to discover the Amora experience.</p>
      <p>Thank you for choosing Amora.</p>
    </div>
    </div>
    </Container>
    
  );
}

export default AboutUs;
