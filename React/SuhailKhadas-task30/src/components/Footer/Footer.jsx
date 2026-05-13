import React from "react";
import {logo} from '../../components/index.jsx';
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          
          <div>
            <img src={logo} alt="Company logo" className="w-28 mb-4" />
            <p className="text-sm leading-6 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste laboriosam velit soluta vel praesentium quod est ea eius delectus molestiae.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/" className="hover:text-white transition">About</Link></li>
              <li><Link to="/" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-white transition">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected with us on social media.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;