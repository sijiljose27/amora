import React from "react";
import styles from "./styles.module.css";
import {AiFillInstagram} from "react-icons/ai"; 
import {BsFacebook} from "react-icons/bs";
import {IoLogoTwitter} from "react-icons/io";
import {SiTiktok} from "react-icons/si";
import {IoLogoWhatsapp} from "react-icons/io";

function Footer() {
  return (
    <footer>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          <h3 className={styles.logo_text}>Amora Scented Candles</h3>
          <p className={styles.txt1}>
            Amora Scented Candles is a leading candle manufacturer and supplier based in the India. We specialize in creating high-quality, hand-poured candles using all-natural ingredients.
          </p>
        </div>
        <div className={styles.footer_section_links}>
          <h3>Quick Links</h3>
          <ul>
            <li className={styles.list_txt}><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footersection_socialmedia}>
          <h3>Follow Us</h3>
          <div className={styles.social_icons}>
            <a href="https://www.instagram.com/amorascentedcandles/" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
            <a href="https://www.tiktok.com/@amorascentedcandles" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
            <a href="https://www.tiktok.com/@amorascentedcandles" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
            <a href="https://www.tiktok.com/@amorascentedcandles" target="_blank" rel="noopener noreferrer"><SiTiktok/></a>
            <a href="https://www.tiktok.com/@amorascentedcandles" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        &copy; Amora Scented Candles | Designed by Oshua pvt ltd
      </div>
    </footer>
  );
}
export default Footer;
