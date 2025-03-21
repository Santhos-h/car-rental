import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          {/* Branding Section */}
          <div className="col-md-3">
            <h2 className="d-flex align-items-center">
              <span className="text-white">Car</span>
              <span className="text-danger">Spot</span>
            </h2>
            <p className="mt-3 text-secondary">
              It is a long established fact that the read will been the distracted there and readable an important content.
            </p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-white fs-5 cursor-pointer" />
              <FaInstagram className="text-white fs-5 cursor-pointer" />
              <FaLinkedinIn className="text-white fs-5 cursor-pointer" />
              <FaTwitter className="text-white fs-5 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mt-3 text-secondary">
              <li>» Home 2</li>
              <li>» Listing With Map</li>
              <li>» Listing Without Map</li>
              <li>» My Account</li>
              <li>» Pricing Table</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3">
            <h5>Information</h5>
            <ul className="list-unstyled mt-3 text-secondary">
              <li>» News Blog</li>
              <li>» E-Books</li>
              <li>» Reviews</li>
              <li>» Consultant</li>
              <li>» Reference</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p className="mt-3 text-secondary">
              Want to stay up to date with news? Please Subscribe.
            </p>
            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-danger">
                <FiSend />
              </button>
            </div>
            <p className="text-muted mt-2 small">
              By subscribing to our newsletter you agree to our privacy policy.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 pt-3 border-top border-secondary text-center text-muted">
          <p>CarSpot | Developed by: e-plugins</p>
          <p>© CarSpot 2024 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
