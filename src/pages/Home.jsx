import React, { useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'
import '../styles/Home.css'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";

const Home = () => {

    const card = [
        {
            "id": 1,
            "img": "https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/bus.png",
            "name": "Bus"
        },
        {
            "id": 2,
            "img": "https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/sedan-3-1.png",
            "name": "Car"
        },
        {
            "id": 3,
            "img": "https://mllafnlfvfl1.i.optimole.com/w:120/h:120/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/hatchback-1.png",
            "name": "Hatchback"
        },
        {
            "id": 4,
            "img": "https://mllafnlfvfl1.i.optimole.com/w:120/h:120/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/sport-car.png",
            "name": "Sports Car"
        }
    ]

    let [product, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/Home", {methods: "GET"})
            .then((response) => { return response.json() })
            .then((data) => { setProducts(data); })
    }, [])

    return (
        <div>
            <Carousel />
            <div className="cart">
                <h1>Browse Our Featured Car Categories</h1>
                <div className="cart-item">
                    {card.map((item) => (
                        <div key={item.id} className="cart-items">
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <button>Browse All</button>
            </div>
            <div className="products">
                <button>Exclusive</button>
                <h1>Let’s Discover Exclusive!</h1>
                <div className="grid-item">
                    {
                        product.map((items) => (
                            <div key={items.id} >
                                <div className="item-card">
                                    <div className="top">
                                        <img src={items.img} alt="" />
                                    </div>
                                    <div className="bottom">
                                        <div className="one">
                                            <button>{items.name}</button>
                                            <button><FaStar />{items.rate}</button>
                                        </div>
                                        <div className="two">
                                            <h3>{items.cname}</h3>
                                        </div>
                                        <div className="three">
                                            <span className='city'><FaLocationDot />{items.city}</span>
                                            <span>{items.date}</span>
                                        </div>
                                        <div className='price'>
                                            <span>{items.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="feedback">
                <h1>Our Pricing!</h1>
                <div className="pricing">
                    <div className="box">
                        <div className="top">
                            <h1>Free</h1>
                            <h5>SILVER</h5>
                        </div>
                        <div className="bottom">
                            <span>Free For All User</span>
                            <p><FaRegCalendarCheck />ONE MONTH</p>
                            <p><FaApple />10 LISTINGS</p>
                            <p><RxCross2 />NO FEATURE LISTING</p>
                            <p><RxCross2 />NO QUICK SUPPORT</p>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="top">
                            <h1>$100</h1>
                            <h5>GOLD</h5>
                        </div>
                        <div className="bottom">
                            <span>Popular</span>
                            <p><FaRegCalendarCheck />ONE YEAR</p>
                            <p><FaApple />10 LISTINGS</p>
                            <p><RxCross2 />NO FEATURE LISTING</p>
                            <p><IoMdDoneAll />QUICK SUPPORT</p>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="top">
                            <h1>$200</h1>
                            <h5>DIAMOND</h5>
                        </div>
                        <div className="bottom">
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

export default Home
