import React from "react";
import {Link} from "react-router-dom";


function Nav() {
 

  return (
<div className="text-gray-900 py-6 ">
  <nav className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
    
    <div>
      <img src="" alt="Logo" className="w-24" />
    </div>

    <ul className="flex gap-6 text-sm">
      <li>
        <Link to="" className="hover:text-gray-500 transition">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Container" className="hover:text-gray-500 transition">
          Products
        </Link>
      </li>
      <li>
        <Link to="/Container" className="hover:text-gray-500 transition">
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
         className="hover:text-gray-500 transition">
          Dashboard
        </Link>

      </li>
    </ul>

    <div className="flex items-center gap-3">
      <button className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
        <Link to="/login" className="hover:text-gray-500 transition">
          Login
        </Link>
        
      </button>
      <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition">
       <Link to="/signup" className="hover:text-gray-500 transition">
        Signup
       </Link>
      </button>
    </div>

  </nav>
</div>
  )
}

export default Nav
