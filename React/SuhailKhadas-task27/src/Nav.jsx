function Nav() {
 

  return (
    <>
    <div className=" flex justify-between px-30 py-5 bg-zinc-200 sticky top-0">
    <div >
        <img src="./src/assets/react.svg" alt="" />    </div>
    <ul className="flex">
        <li className="links px-3 text-zinc-600 ">Home</li>
        <li className="links px-3 text-zinc-600 ">Categories</li>
        <li className="links px-3 text-zinc-600 ">About US</li>
        <li className="links px-3 text-zinc-600 ">Services</li>
        
    </ul>

    </div>


    </>
  )
}

export default Nav
