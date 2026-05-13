import React from 'react'
import useFetch from './Usefetch.jsx';
import { useState } from 'react'
const Products = () => {
     const [image_no, setimage_no] = useState(0);
      const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");
    
      if (loading) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Loading...</h1>
      </div>
      if (error) return <h1>{error.message}</h1>
      if (!data) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Data Not Found</h1>
      </div>
     
  return (

    <>
      <div className='bg-zinc-500 flex justify-center items-center text-white p-15'>
        <div>
         
        </div>
        <div  className="grid grid-cols-4 grid-rows-7 gap-4">

          {data.map((item) => (
            <div key={item.id} className='border-2 justify-items-center p-5 pb-0 border-white rounded-lg' >
              <div className='flex w-full mb-5 text-bold'>
                <span className='text-xs text-left'>Category: {item.category.name} </span>
              </div>
              <img src={item.images[image_no]} alt={item.title} width='200px' height='100px' />
              <h2>{item.title}</h2>
              <h2>RS. {item.price}</h2>
              <span className='justify-items-center flex flex-row pt-5'>
                <button onClick={() => setimage_no(0)} className='w-6  bg-white text-black  rounded-lg  '>0</button>
                <button onClick={() => setimage_no(1)} className='w-6 ml-3 bg-white text-black  rounded-lg'>1</button>
                <button onClick={() => setimage_no(2)} className='w-6 ml-3 bg-white text-black  rounded-lg'>2</button>
              </span>
            </div>
            
          ))}    
      

        </div>
           
      </div>
    </>
  )

}

export default Products
