import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";
import { useState } from "react";
import styles from "./styles.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/index";
import AboutUs from "../About/about-Us";
import { HiSearch } from "react-icons/hi";
const data = [
  {
    name: "oshua world",
    imgUrl:
      "https://img.freepik.com/free-photo/closeup-shot-lit-red-christmas-candles-wooden-surface_181624-25175.jpg?w=996&t=st=1683255871~exp=1683256471~hmac=15a55200646866bbb6afafea71500273b48cbc369dc9f5cb04cedf9b9297bd24",
    price: "$22",
  },
  {
    name: "scenemanam",
    imgUrl:
      "https://img.freepik.com/premium-photo/aromatic-premium-soy-candles-gray-concrete-jar-orange-background-with-orange-fruits-shadow_658748-561.jpg?w=996",
    price: "$20",
  },
  {
    name: "lavender gree",
    imgUrl:
      "https://img.freepik.com/free-photo/valentine39s-day-background-with-candle-rose-closeup_169016-27021.jpg?w=996&t=st=1683253689~exp=1683254289~hmac=0a94af9eb3c43194578f2dec74a8fda39aa3102a79d50d91695e7def661e9b05",
    price: "$18",
  },
  {
    name: "bishops prin",
    imgUrl:
      "https://img.freepik.com/free-photo/front-view-cup-hot-cocoa-with-marshmallows-candle_23-2148720089.jpg?size=626&ext=jpg&ga=GA1.1.918511489.1683213471&semt=robertav1_2_sidr",
    price: "$16",
  },
  {
    name: "fretttyer",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$14",
  },
  {
    name: "chismarose",
    imgUrl:
      "https://media.istockphoto.com/id/1406149882/photo/aroma-candle-in-brown-glass-jar-scented-handmade-candle-soy-candles-are-burning-in-a-jar.jpg?s=612x612&w=0&k=20&c=vfyEplrBF6VHCNQaANjRrBB6SVvPTzxLg114F-pFq0E=",
    price: "$12",
  },
  {
    name: "pertycomb",
    imgUrl:
      "https://img.freepik.com/free-photo/decorative-candle-dried-orange-slices-pine-cones_181624-23960.jpg?w=996&t=st=1683256449~exp=1683257049~hmac=b68e0fa4d179d017551fe7664c2f203d25d621b5f325048538d4ef51866a6a9c",
    price: "$8",
  },
  {
    name: "mehdihisspace",
    imgUrl:
      "https://media.istockphoto.com/id/1477515717/photo/modern-still-life-of-candle-and-potted-plant-on-table.jpg?s=612x612&w=0&k=20&c=Mwlg43UO9UqrkQnTd2acXIOnZUF7MHE9Zbdk0wmmMDY=",
    price: "$34",
  },
  {
    name: "theekathum",
    imgUrl:
      "https://img.freepik.com/free-photo/home-still-life-with-burning-candles-as-home-decor-details_169016-11266.jpg?w=360&t=st=1683256519~exp=1683257119~hmac=0faa216ff55d9a34e1059f660061a87ee10187bfe5089daa98fa27c3b56588b8",
    price: "$8",
  },
  {
    name: "Idiyappam",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$4",
  },
  {
    name: "puttumkozhi ",
    imgUrl:
      "https://media.istockphoto.com/id/1433615171/photo/a-set-of-different-aroma-candles-in-brown-glass-jars-scented-handmade-candle-soy-candles-are.jpg?s=612x612&w=0&k=20&c=Em4jq4WAAP4n7CvLI5VV3q9DdBSKNZDi6GcD58xnYWY=",
    price: "$6",
  },
  {
    name: "Anjam pathira",
    imgUrl:
      "https://media.istockphoto.com/id/157510375/photo/aromatherapy-candle-and-flowers.jpg?s=612x612&w=0&k=20&c=WpRi80KVkcgvmMuMp4Vc5kWnOvlMJoFfRuwm2yqffwo=",
    price: "$8",
  },
  {
    name: "Kinnam Katta Kallan",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$5",
  },
  {
    name: "alvayum mathicurryum",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$23",
  }, {
    name: "enavarum ni",
    imgUrl:
      "https://media.istockphoto.com/id/1369129110/photo/beautiful-table-setting-with-candles.jpg?s=612x612&w=0&k=20&c=BKqmxzlvwx7VkXaAawG39aZRtIZgF_BxT3EuY1ght7k=",
    price: "$32",
  },
  {
    name: "enthanentahn",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$65",
  },
  {
    name: "kinugachemba",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$19",
  },
  {
    name: "enniakale",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$12",
  },
  {
    name: "chandanapott",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$13",
  },
  {
    name: "marilamaya",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$15",
  },
  {
    name: "chelotha chembaram",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$18",
  },
  {
    name: "enteeellam",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$4",
  },
  {
    name: "kunjaslove",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$3",
  },
  {
    name: "moovandan",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$11",
  },
  {
    name: "bedsfree",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$19",
  },
  {
    name: "febinshelp",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$11",
  },
  {
    name: "Konjama",
    imgUrl:
      "https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "$14",
  },
  {
    name: "bedsfree",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$9",
  },
  {
    name: "nivinsfav",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$13",
  },
  {
    name: "chennaiskings",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$8",
  },
  {
    name: "dhonislove",
    imgUrl:
      "https://images.pexels.com/photos/5782653/pexels-photo-5782653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$5",
  },
  {
    name: "undatassafe",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$6",
  },
  {
    name: "timsspace",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1669824023993-273720598b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "$7",
  },
  {
    name: "ayshaaeeeede",
    imgUrl:
      "https://img.freepik.com/free-photo/closeup-shot-lit-red-christmas-candles-wooden-surface_181624-25175.jpg?w=996&t=st=1683255871~exp=1683256471~hmac=15a55200646866bbb6afafea71500273b48cbc369dc9f5cb04cedf9b9297bd24",
    price: "$22",
  },
  {
    name: "newrose",
    imgUrl:
      "https://img.freepik.com/premium-photo/aromatic-premium-soy-candles-gray-concrete-jar-orange-background-with-orange-fruits-shadow_658748-561.jpg?w=996",
    price: "$20",
  },
  {
    name: "jasminegrew",
    imgUrl:
      "https://img.freepik.com/free-photo/valentine39s-day-background-with-candle-rose-closeup_169016-27021.jpg?w=996&t=st=1683253689~exp=1683254289~hmac=0a94af9eb3c43194578f2dec74a8fda39aa3102a79d50d91695e7def661e9b05",
    price: "$18",
  },
  {
    name: "guavasree",
    imgUrl:
      "https://img.freepik.com/free-photo/front-view-cup-hot-cocoa-with-marshmallows-candle_23-2148720089.jpg?size=626&ext=jpg&ga=GA1.1.918511489.1683213471&semt=robertav1_2_sidr",
    price: "$16",
  },
  {
    name: "cottoncandy",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$14",
  },
  {
    name: "roseyrose",
    imgUrl:
      "https://media.istockphoto.com/id/1406149882/photo/aroma-candle-in-brown-glass-jar-scented-handmade-candle-soy-candles-are-burning-in-a-jar.jpg?s=612x612&w=0&k=20&c=vfyEplrBF6VHCNQaANjRrBB6SVvPTzxLg114F-pFq0E=",
    price: "$12",
  },
  {
    name: "Honeycomb",
    imgUrl:
      "https://img.freepik.com/free-photo/decorative-candle-dried-orange-slices-pine-cones_181624-23960.jpg?w=996&t=st=1683256449~exp=1683257049~hmac=b68e0fa4d179d017551fe7664c2f203d25d621b5f325048538d4ef51866a6a9c",
    price: "$8",
  },
  {
    name: "parvathisspace",
    imgUrl:
      "https://media.istockphoto.com/id/1477515717/photo/modern-still-life-of-candle-and-potted-plant-on-table.jpg?s=612x612&w=0&k=20&c=Mwlg43UO9UqrkQnTd2acXIOnZUF7MHE9Zbdk0wmmMDY=",
    price: "$34",
  },
  {
    name: "theekathum",
    imgUrl:
      "https://img.freepik.com/free-photo/home-still-life-with-burning-candles-as-home-decor-details_169016-11266.jpg?w=360&t=st=1683256519~exp=1683257119~hmac=0faa216ff55d9a34e1059f660061a87ee10187bfe5089daa98fa27c3b56588b8",
    price: "$8",
  },
  {
    name: "Idiyappam",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$4",
  },
  {
    name: "puttumkozhi ",
    imgUrl:
      "https://media.istockphoto.com/id/1433615171/photo/a-set-of-different-aroma-candles-in-brown-glass-jars-scented-handmade-candle-soy-candles-are.jpg?s=612x612&w=0&k=20&c=Em4jq4WAAP4n7CvLI5VV3q9DdBSKNZDi6GcD58xnYWY=",
    price: "$6",
  },
  {
    name: "Anjam pathira",
    imgUrl:
      "https://media.istockphoto.com/id/157510375/photo/aromatherapy-candle-and-flowers.jpg?s=612x612&w=0&k=20&c=WpRi80KVkcgvmMuMp4Vc5kWnOvlMJoFfRuwm2yqffwo=",
    price: "$8",
  },
  {
    name: "oraluminder",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$5",
  },
  {
    name: "alvayum mathicurryum",
    imgUrl:
      "https://media.istockphoto.com/id/1444142989/photo/many-burning-lighting-scented-candles-and-aromatic-incense-sticks-on-table-meditation-place.jpg?s=612x612&w=0&k=20&c=7sDEOXr9v4wNuNxEBxuiYEfeXOhRznmFtPOa41A4GKk=",
    price: "$23",
  }, {
    name: "enavarum ni",
    imgUrl:
      "https://media.istockphoto.com/id/1369129110/photo/beautiful-table-setting-with-candles.jpg?s=612x612&w=0&k=20&c=BKqmxzlvwx7VkXaAawG39aZRtIZgF_BxT3EuY1ght7k=",
    price: "$32",
  },
  {
    name: "enthanentahn",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$65",
  },
  {
    name: "kinugachemba",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$19",
  },
  {
    name: "enniakale",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$12",
  },
  {
    name: "chandanapott",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$13",
  },
  {
    name: "marilamaya",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$15",
  },
  {
    name: "chelotha chembaram",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$18",
  },
  {
    name: "enteeellam",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$4",
  },
  {
    name: "kunjaslove",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$3",
  },
  {
    name: "moovandan",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$11",
  },
  {
    name: "bedsfree",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$19",
  },
  {
    name: "febinshelp",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$11",
  },
  {
    name: "fragrantsppek",
    imgUrl:
      "https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "$14",
  },
  {
    name: "bedsfree",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$9",
  },
  {
    name: "nivinsfav",
    imgUrl:
      "https://img.freepik.com/free-photo/burning-orange-candle_23-2147947788.jpg?w=996&t=st=1683254424~exp=1683255024~hmac=3c6ff85c0cf3f4e0731ff8e443cde8a4ca3d23234c379b76ddaf2fb06dde2e5c",
    price: "$13",
  },
  {
    name: "chennaiskings",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$8",
  },
  {
    name: "dhonislove",
    imgUrl:
      "https://images.pexels.com/photos/5782653/pexels-photo-5782653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$5",
  },
  {
    name: "undatassafe",
    imgUrl:
      "https://img.freepik.com/premium-photo/arrangement-white-flowers-gift-boxes_105565-2943.jpg?w=360",
    price: "$6",
  },
  {
    name: "timsspace",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1669824023993-273720598b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "$7",

  },
  {
    name: "grrenspice",
    imgUrl:
      "https://img.freepik.com/free-photo/closeup-shot-lit-red-christmas-candles-wooden-surface_181624-25175.jpg?w=996&t=st=1683255871~exp=1683256471~hmac=15a55200646866bbb6afafea71500273b48cbc369dc9f5cb04cedf9b9297bd24",
    price: "$22",
  },
  {
    name: "aromal scent",
    imgUrl:
      "https://img.freepik.com/premium-photo/aromatic-premium-soy-candles-gray-concrete-jar-orange-background-with-orange-fruits-shadow_658748-561.jpg?w=996",
    price: "$20",
  },
];
export default function Gallery(props) {
  const [data1, setData] = useState(data);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <div>
        <div className="navbar-search" style={{ marginLeft: "45%", marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Search here"
            style={{ backgroundColor: "rgb(236, 234, 224)", width: "400px", height: "30px" }}
            onChange={handleChange}
          />
          <button>
            <HiSearch style={{ height: "30px" }} />
          </button>
        </div>
        <ul className={styles.listwrapper}>
          {data1.map((item, i) => (
            <li className={styles.listwrapper1}>
              <img src={item.imgUrl} className={styles.list_img} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <AboutUs /> */} 
    </div>
  );
}
