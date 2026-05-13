import React from 'react'
import {Login, useFetch} from "../index.jsx"
import { FaGithub, FaLinkedinIn,FaGoogle,FaFacebookF   } from 'react-icons/fa';
function Home() {
   const { data, loading, error } = useFetch("https://api.github.com/users/SuhailKhadas");
    
      if (loading) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Loading...</h1>
      </div>
      if (error) return <h1>{error.message}</h1>
      if (!data) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Data Not Found</h1>
      </div>
      if(data) console.log(data)
  return (
   <div>
          <section className="bg-[#f5f5f5] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Hi all  I&apos;m {data.login}
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-8 max-w-xl">
            {data.bio}
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <div>
              {data.email}
            </div>
            <button className="bg-[#6C2BD9] text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-[#5b21b6] transition">
              Contact Me
            </button>
            <button className="bg-[#6C2BD9] text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-[#5b21b6] transition">
              See My Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/169379653?v=4"
            alt="Profile"

            className="w-full max-w-lg object-contain rounded-t-full shadow-xl shadow-black"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
