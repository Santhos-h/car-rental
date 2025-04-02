import React from 'react';
import '../styles/Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="logo">
                <img src="https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/03/Frame-143-1.png" alt="" />
            </div>
            <ul>
                <li><Link className='nl' to={'/car-rental'}>Home</Link></li>
                <li><Link className='nl' to={'/listing'}>Listing</Link></li>
                <li><Link className='nl' to={'/account'}>My Account</Link></li>
                <li><Link className='nl' to={'/register'}>Registration</Link></li>
                <li><Link className='nl' to={'/buynow'}>Buy Now</Link></li>
            </ul>
        </nav >
    );
};

export default Nav;
