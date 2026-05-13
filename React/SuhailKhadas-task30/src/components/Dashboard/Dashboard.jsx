import React from 'react'
import {useFetch} from '../index'


const Dashboard = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/users");
    // 
      if (loading) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Loading...</h1>
      </div>
      if (error) return <h1>{error.message}</h1>
      if (!data) return <div className='h-screen text-center align-center d-flex justify-content-center bg-black'>
        <h1 className='h-100 text-center text-white '>Data Not Found</h1>
      </div>
      if(data) console.log(data)
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {data.map((item) => (
    <div
      key={item.id}
      className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {item.name}
      </h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium text-gray-800">Email:</span> {item.email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium text-gray-800">Role:</span> {item.role}
      </p>
    </div>
  ))}
</div>
    </>
  )
}

export default Dashboard
