import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";

import { callsomeapi } from "./reducer";
import styles from "./styles.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/index";
import AboutUs from "../About/about-Us";
export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };
  return (
    <div>
      <div className={styles.wrapper1}>
        <img
          className={styles.top_img}
          src="https://static.wixstatic.com/media/750f6a_584cd82676724807964a5335e9db8bf0~mv2.jpg/v1/fill/w_1899,h_631,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/750f6a_584cd82676724807964a5335e9db8bf0~mv2.jpg"
        />
        <div className={styles.txt1_wrapper}>
          <p className={styles.txt1}>
            Explore alluring AMORA scented candles from bewitching fruity, to
            piquant tobacco and sweet scents ✓The perfect gift for a modest
            amount ✓ Up to 100 hours of burning
          </p>
        </div>
      </div>
      <button className={styles.srtButn}>Lets start</button>
      <div className={styles.img2_wrapper}>
        <img src="https://img.freepik.com/premium-photo/burning-scented-candles-relaxation-white-wooden-table_185193-25837.jpg?w=996" />
      </div>
      <div className={styles.img3_wrapper}>
        <img src="https://static.wixstatic.com/media/750f6a_739d1d75e96f4b2faf03366d710a3a61~mv2.jpg/v1/fill/w_850,h_1163,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/750f6a_739d1d75e96f4b2faf03366d710a3a61~mv2.jpg" />
        <h3 className={styles.text3_h3}>
          "The Benefits of Soy Wax: Why It's the Best Choice for Your Scented
          Candles"
          <p className={styles.img3_p}>
            If you're looking for a high-quality, safe and eco-friendly
            option for your scented candles, natural soy wax should be your
            go-to choice. Soy wax is derived from soybean oil, making it a
            renewable and biodegradable resource. Unlike paraffin candles, soy
            wax candles do not emit harmful toxins or soot, making them a
            healthier option for your home. One of the key advantages of soy wax
            is its longevity. Soy candles burn approximately 50% longer than
            traditional paraffin candles, making them a great investment.
            Additionally, soy wax is versatile and easy to work with. It mixes
            well with oils, fragrances, dyes, and other waxes, and has a neutral
            scent that won't interfere with your chosen fragrance. Another
            advantage of soy wax is its ability to burn evenly, producing a
            large puddle of hot wax around the wick. This allows essential oils
            to evaporate more efficiently, providing a more effective scent
            throw. And if you accidentally spill some soy wax on your clothes or
            furniture, don't worry - it's easy to clean with just soap and warm
            water. At our online scented candle store, we offer a wide selection
            of natural soy wax candles in a variety of scents and styles.
            Whether you're looking for a calming lavender candle or a warm
            vanilla bean scent, we've got you covered. Our soy candles are
            handmade with care, ensuring that you get the highest quality
            product every time. So go ahead, light up a soy candle and enjoy the
            natural fragrance and benefits it provides.
          </p>
        </h3>
      </div>
      <AboutUs />
    </div>
  );
}
