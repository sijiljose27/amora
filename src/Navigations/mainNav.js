import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "../Screens/About/about-Us";
import ContactUs from "../Screens/Contact";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Gallery from "../Screens/Gallery";
function MainNav(params) {
  return (
    <NavigationProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </NavigationProvider>
  );
}
export default MainNav;
