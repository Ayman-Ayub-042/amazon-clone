import React from 'react'
import "./Home.css";
import img from '../img/cover2.jpg'
import Product from "./Product"
function Home() {
  return (
    <div className="home">
      <div className="home_container">
    <img className="home_image" src={img} alt="" />
      <div className="home_row">
       <Product  image="https://m.media-amazon.com/images/I/71Llge105IL._AC_UL320_.jpg"
       title="Original HP 67 Black/Tri-color Ink Cartridges (2-pack) | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series"
       price={29.99}
       id="111"
       rating={5}/>
       <Product id="2" image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
       title="Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
       price={104.00}
       rating={4}/>
      </div>
      <div className="home_row">
      <Product id="3" image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
       title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling"
       price={67.98}
       rating={5} />
       <Product id="4"  image="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_UL320_.jpg"
       title="
       AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
       price={260.00}
       rating={5}/>
       <Product id="5" image="https://m.media-amazon.com/images/I/71WaO-YlzoL._AC_UL320_.jpg"
       title="Brother MFC-J1010DW Wireless Color Inkjet All-in-One Printer with Mobile Device and Duplex Printing"
       price={99.00}
       rating={5}/>
      </div>
      <div className="home_row">
      <Product id="6" image="https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_UL320_.jpg"
       title="SAMSUNG Galaxy Tab S7 FE 12.4” 64GB WiFi Android Tablet w/ S Pen Included, Large Screen, Multi Device Connectivity, Long Lasting Battery, 2021, ‎SM-T733NZKAXAR, Mystic Black
       Roll over image to zoom in
       SAMSUNG Galaxy Tab S7 FE 12.4” 64GB WiFi Android Tablet w/ S Pen Included, Large Screen,"
       price={408.85}
       rating={5}/>
      </div>

      </div>
    </div>
  )
}

export default Home
