import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../styles/Listing.css'


const Listing = () => {

    let [product, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/Cars", { method: "GET" })
            .then((response) => { return response.json() })
            .then((data) => { setProducts(data); })
    }, [])

    const handleNavigation = (id) => {
        const pageRoutes = {
            1: "/detail1",
            2: "/detail2",
            3: "/detail3",
            4: "/detail4",
            5: "/detail5",
            6: "/detail6",
            7: "/detail7",
            8: "/detail8",
            9: "/detail9",
        };
        
        const route = pageRoutes[id];
        if (route) {
            window.location.href = route;
        }
    }

        return (
            <div>
                <div className="products">
                    <button>Exclusive</button>
                    <h1>Our Products</h1>
                    <div className="grid-item" >
                        {
                            product.map((item) => (
                                <div key={item.id}>
                                    <div className="item-card" onClick={() => handleNavigation(item.id)}>
                                        <div className="top">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <div className="one">
                                                <button>{item.name}</button>
                                                <button><FaStar />{item.rate}</button>
                                            </div>
                                            <div className="two">
                                                <h3>{item.cname}</h3>
                                            </div>
                                            <div className="three">
                                                <span className='city'><FaLocationDot />{item.city}</span>
                                                <span>{item.date}</span>
                                            </div>
                                            <div className='price'>
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

export default Listing;