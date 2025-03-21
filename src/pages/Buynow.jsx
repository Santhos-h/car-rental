import React from 'react'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";

const Buynow = () => {
  return (
    <div>
      <div className="feedback">
        <h1>Buy Now!!!</h1>
        <div className="pricing">
          <div class="box">
            <div class="top">
              <h1>Free</h1>
              <h5>SILVER</h5>
            </div>
            <div class="bottom">
              <span>Free For All User</span>
              <p><FaRegCalendarCheck />ONE MONTH</p>
              <p><FaApple />10 LISTINGS</p>
              <p><RxCross2 />NO FEATURE LISTING</p>
              <p><RxCross2 />NO QUICK SUPPORT</p>
              <button>BUY NOW</button>
            </div>
          </div>
          <div class="box">
            <div class="top">
              <h1>$100</h1>
              <h5>GOLD</h5>
            </div>
            <div class="bottom">
              <span>Popular</span>
              <p><FaRegCalendarCheck />ONE YEAR</p>
              <p><FaApple />10 LISTINGS</p>
              <p><RxCross2 />NO FEATURE LISTING</p>
              <p><IoMdDoneAll />QUICK SUPPORT</p>
              <button>BUY NOW</button>
            </div>
          </div>
          <div class="box">
            <div class="top">
              <h1>$200</h1>
              <h5>DIAMOND</h5>
            </div>
            <div class="bottom">
              <span>Corporate</span>
              <p><FaRegCalendarCheck />ONE YEAR</p>
              <p><FaApple />10 LISTINGS</p>
              <p><IoMdDoneAll />FEATURE LISTING</p>
              <p><IoMdDoneAll />QUICK SUPPORT</p>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buynow
