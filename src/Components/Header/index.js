import React from "react";
import About from "../../Screens/About/about-Us";
import styles from "./styles.module.css";
import Logo from "../Assets/Images/logo1.png";
import cart from "../Assets/Images/cart.png"
import { useNavigate } from "react-router-dom";
import {HiSearch} from 'react-icons/hi'

export default function Header() {
  const navigate=useNavigate()
  return (
    <div className={styles.header_main}>
      <img src={Logo} alt="" className={styles.header_logo}></img>
        <ul className={styles.nav_main}>
          <li className={styles.nav_list} onClick={()=>navigate('/')}>Home</li>
          <li className={styles.nav_list} onClick={()=>navigate('gallery')}>Gallery</li>
          <li className={styles.nav_list} onClick={()=>navigate('about')}>About</li>
          <li className={styles.nav_list} onClick={()=>navigate('contact')}>Contact Us</li>
          <li className={styles.nav_list} onClick={()=>navigate('contact')}>Login</li>
          
        </ul>
    </div>
  );
}
