import React from "react";
import {logo} from '../../components/index.jsx';
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      <div className="container mx-auto py-8 px-4 flex flex-col  items-center justify-between">
        <div className="grid justify-items-center mb-4">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">react Routers</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta tenetur recusandae.
          </span>
        </div>
        <div className="flex space-x-4">
          <Link to="#" className="text-gray-300 hover:text-white">
            <FaFacebookF />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            <FaInstagram />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </Link>
          <Link to="#" className="text-gray-300 hover:text-white">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;