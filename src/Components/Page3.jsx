import React from 'react'
import { FaStar, FaCar, FaCalendar, FaGasPump, FaCaravan, FaRegMoneyBillAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { FaDharmachakra } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import '../styles/Page.css'

const Page3 = () => {
  return (
    <div>
      <section>
        <div class="left">
          <img src="https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/joey-banks-YApiWyp0lqo-unsplash.jpg" alt="" />
          <div class="line"></div>
          <div class="box">
            <div class="top">
              <div class="top-left">
                <img src="https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/rafael-k-streit-fOv3InYoH54-unsplash.jpg" alt="" />
              </div>
              <div class="top-right">
                <h2>Contact Info</h2>
                <div class="btn">
                  <button>Booking</button>
                  <button>Report</button>
                </div>
              </div>
            </div>
            <div class="bottom">
              <span>San Francisco</span>
              <p><span>Address: </span>30, San Francisco, Claypole, Partido de Almirante Brown, Buenos Aires, B1849, Argentina</p>
              <p><span>Phone:</span>+14234234</p>
              <p><span>Email:</span>test@test.com</p>
              <p><span>Website:</span>www.google.com</p>
              <div class="bottom-icon">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h1>BMW X8 2020</h1>
          <span>SUV | <FaStar /> 1 Review</span>
          <div class="btn-p">
            <p>$15,000</p>
            <button>Save 25.00%</button>
          </div>
          <div class="city">
            <span>San Francisco</span>
            <span>23 March - 2024 5:21 am</span>
          </div>
          <button>Details</button>
          <p>The Range Rover 2022 stands as a beacon of luxury and performance in the SUV market, showcasing Land Rover’s commitment to excellence. This model year introduces a refined exterior design that stays true to Range Rover’s iconic silhouette, featuring smoother lines and modern detailing. The interior is a sanctuary of comfort and sophistication, with high-quality materials, state-of-the-art technology, and thoughtful amenities designed to cater to every passenger’s needs.</p>
          <p>Under the hood, the Range Rover 2022 doesn’t disappoint, offering a range of powertrains that blend efficiency with potent performance. Options include advanced petrol and diesel engines, along with a plug-in hybrid variant that emphasizes Range Rover’s shift towards sustainable luxury without compromising on power or capability. The vehicle’s terrain response system ensures unrivaled performance across various landscapes, embodying the brand’s legendary off-road prowess.</p>
          <ul>
            <li><FaCar className="con" />Body : Sedan</li>
            <li><FaCalendar className="con" />Made In : 2015</li>
            <li><FaGasPump className="con" />Fuel Type : Hybrid</li>
            <li><FaDharmachakra className="con" />Drive Type : Front-Wheel Drive</li>
            <li><FaFireFlameCurved className="con" />Transmission : Automatic</li>
            <li><FaCaravan className="con" />Door : 4</li>
            <li><IoMdColorPalette className="con" />Color : Blue</li>
            <li><FaRegMoneyBillAlt className="con" />Price Range : $15,000</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Page3
