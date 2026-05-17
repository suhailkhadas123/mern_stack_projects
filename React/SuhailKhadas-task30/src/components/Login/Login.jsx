import React from "react";

const Login = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center p-2">
       <div className="bg-gray-900 w-100 h-120 -rotate-6 rounded-2xl  ">
      <div className="bg-gray-100 h-120 rotate-6 rounded-2xl ">
      <div className="w-80 h-100 flex flex-col justify-center items-center gap-6">
           <div>
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>
        <form>
                   <div className="relative">
                    <label  className=" text-gray-600 text-sm ">Email Address</label>
              <input   type="text" className=" placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 outline-none " placeholder="Email address" />
              
            </div>
            <div className="relative">
              <label  className=" text-gray-600 text-sm ">Password</label>
              <input type="password" className=" placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 outline-none "placeholder="Password" />
              
            </div>
            <div className="relative">
              <br />
              <button type="submit" className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
            </div>
        </form>

      </div>
      </div>
    </div>
    </div>
   
    </>
  );
};

export default Login;